/**
 * test/extensions/image-processing.test.ts – Tests for the image_process tool.
 */

import { afterEach, describe, expect, test } from "bun:test";
import { mkdirSync, writeFileSync, existsSync, statSync } from "fs";
import { join } from "path";
import sharp from "sharp";
import "../helpers.js";
import { createTempWorkspace, setEnv } from "../helpers.js";

describe("image_process tool", () => {
  let ws: ReturnType<typeof createTempWorkspace>;
  let restoreEnv: (() => void) | null = null;

  function makeFakeApi() {
    const tools = new Map<string, any>();
    return {
      api: {
        on() {},
        registerTool(tool: any) { tools.set(tool.name, tool); },
        registerCommand() {},
        registerShortcut() {},
        registerFlag() {},
        getFlag() { return undefined; },
        registerMessageRenderer() {},
        sendMessage() {},
        sendUserMessage() {},
        appendEntry() {},
        setSessionName() {},
        getSessionName() { return undefined; },
        setLabel() {},
        exec: async () => ({ exitCode: 0, stdout: "", stderr: "" }),
        getActiveTools: () => [],
        getAllTools: () => [],
        setActiveTools() {},
        getCommands: () => [],
        setModel: async () => true,
        getThinkingLevel: () => "off" as any,
        setThinkingLevel() {},
        registerProvider() {},
        unregisterProvider() {},
      },
      tools,
    };
  }

  async function createTestImage(dir: string, name: string, options: { width: number; height: number; channels?: 3 | 4; alpha?: boolean } = { width: 100, height: 100 }) {
    const { width, height, channels = 4 } = options;
    const filePath = join(dir, name);
    const img = await sharp({
      create: { width, height, channels, background: { r: 255, g: 0, b: 0, alpha: channels === 4 ? 0.5 : 1 } },
    }).png().toBuffer();
    writeFileSync(filePath, img);
    return filePath;
  }

  afterEach(() => {
    restoreEnv?.();
    restoreEnv = null;
  });

  test("registers the image_process tool", async () => {
    const { imageProcessing } = await import("../../src/extensions/image-processing.js");
    const fake = makeFakeApi();
    imageProcessing(fake.api as any);
    expect(fake.tools.has("image_process")).toBe(true);
  });

  test("info action returns image metadata", async () => {
    ws = createTempWorkspace("piclaw-imgproc-");
    restoreEnv = setEnv({ PICLAW_WORKSPACE: ws.workspace });

    await createTestImage(ws.workspace, "test.png", { width: 200, height: 150 });

    const { imageProcessing } = await import("../../src/extensions/image-processing.js");
    const fake = makeFakeApi();
    imageProcessing(fake.api as any);

    const tool = fake.tools.get("image_process");
    const result = await tool.execute("t1", { action: "info", input: join(ws.workspace, "test.png") });

    expect(result.details.width).toBe(200);
    expect(result.details.height).toBe(150);
    expect(result.details.format).toBe("png");
    expect(result.details.hasAlpha).toBe(true);
  });

  test("resize action creates a resized image", async () => {
    ws = createTempWorkspace("piclaw-imgproc-");
    restoreEnv = setEnv({ PICLAW_WORKSPACE: ws.workspace });

    await createTestImage(ws.workspace, "big.png", { width: 800, height: 600 });

    const { imageProcessing } = await import("../../src/extensions/image-processing.js");
    const fake = makeFakeApi();
    imageProcessing(fake.api as any);

    const tool = fake.tools.get("image_process");
    const result = await tool.execute("t2", { action: "resize", input: join(ws.workspace, "big.png"), width: 200 });

    expect(result.details.width).toBe(200);
    expect(result.details.height).toBe(150);
    expect(result.details.action).toBe("resize");
    expect(existsSync(result.details.output) || existsSync(join(ws.workspace, result.details.output))).toBe(true);
  });

  test("convert action changes format and preserves transparency", async () => {
    ws = createTempWorkspace("piclaw-imgproc-");
    restoreEnv = setEnv({ PICLAW_WORKSPACE: ws.workspace });

    await createTestImage(ws.workspace, "input.png", { width: 50, height: 50 });

    const { imageProcessing } = await import("../../src/extensions/image-processing.js");
    const fake = makeFakeApi();
    imageProcessing(fake.api as any);

    const tool = fake.tools.get("image_process");
    const result = await tool.execute("t3", { action: "convert", input: join(ws.workspace, "input.png"), format: "webp", output: join(ws.workspace, "output.webp") });

    expect(result.details.format).toBe("webp");
    expect(result.details.mimeType).toBe("image/webp");

    // Verify transparency preserved
    const meta = await sharp(join(ws.workspace, "output.webp")).metadata();
    expect(meta.hasAlpha).toBe(true);
  });

  test("optimize action reduces file size", async () => {
    ws = createTempWorkspace("piclaw-imgproc-");
    restoreEnv = setEnv({ PICLAW_WORKSPACE: ws.workspace });

    // Create a larger image that benefits from optimization
    const largePng = await sharp({
      create: { width: 500, height: 500, channels: 3, background: { r: 128, g: 64, b: 200 } },
    }).png({ compressionLevel: 0 }).toBuffer();
    writeFileSync(join(ws.workspace, "unoptimized.png"), largePng);

    const { imageProcessing } = await import("../../src/extensions/image-processing.js");
    const fake = makeFakeApi();
    imageProcessing(fake.api as any);

    const tool = fake.tools.get("image_process");
    const result = await tool.execute("t4", { action: "optimize", input: join(ws.workspace, "unoptimized.png"), format: "webp", quality: 60 });

    expect(result.details.savings).toBeGreaterThan(0);
    expect(result.details.format).toBe("webp");
  });

  test("trim action removes transparent pixels", async () => {
    ws = createTempWorkspace("piclaw-imgproc-");
    restoreEnv = setEnv({ PICLAW_WORKSPACE: ws.workspace });

    // Create image with transparent padding
    const img = await sharp({
      create: { width: 200, height: 200, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
    }).composite([{
      input: await sharp({
        create: { width: 50, height: 50, channels: 4, background: { r: 255, g: 0, b: 0, alpha: 1 } },
      }).png().toBuffer(),
      left: 75,
      top: 75,
    }]).png().toBuffer();
    writeFileSync(join(ws.workspace, "padded.png"), img);

    const { imageProcessing } = await import("../../src/extensions/image-processing.js");
    const fake = makeFakeApi();
    imageProcessing(fake.api as any);

    const tool = fake.tools.get("image_process");
    const result = await tool.execute("t5", { action: "trim", input: join(ws.workspace, "padded.png") });

    // Trimmed image should be smaller than 200x200
    expect(result.details.width).toBeLessThan(200);
    expect(result.details.height).toBeLessThan(200);
  });

  test("returns error for missing files", async () => {
    ws = createTempWorkspace("piclaw-imgproc-");
    restoreEnv = setEnv({ PICLAW_WORKSPACE: ws.workspace });

    const { imageProcessing } = await import("../../src/extensions/image-processing.js");
    const fake = makeFakeApi();
    imageProcessing(fake.api as any);

    const tool = fake.tools.get("image_process");
    const result = await tool.execute("t6", { action: "info", input: join(ws.workspace, "nonexistent.png") });
    expect(result.details.error).toBe("not_found");
  });
});
