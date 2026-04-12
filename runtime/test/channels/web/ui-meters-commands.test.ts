import { describe, expect, test } from "bun:test";
import { handleUiMetersCommand } from "../../../src/channels/web/ui-meters-commands.js";

describe("/meters command formatting", () => {
  test("without arguments, returns usage guidance", () => {
    const result = handleUiMetersCommand("/meters");
    expect(result?.status).toBe("success");
    expect(result?.message).toContain("/meters on");
  });

  test("supports on/off/toggle payloads", () => {
    expect(handleUiMetersCommand("/meters on")).toEqual({
      status: "success",
      message: "CPU/RAM meters enabled.",
      payload: { mode: "set", enabled: true },
    });
    expect(handleUiMetersCommand("/meters off")).toEqual({
      status: "success",
      message: "CPU/RAM meters hidden.",
      payload: { mode: "set", enabled: false },
    });
    expect(handleUiMetersCommand("/meters toggle")).toEqual({
      status: "success",
      message: "CPU/RAM meters toggled.",
      payload: { mode: "toggle" },
    });
  });

  test("unknown options return a guidance error", () => {
    const result = handleUiMetersCommand("/meters bananas");
    expect(result?.status).toBe("error");
    expect(result?.message).toContain("Use /meters on");
  });
});
