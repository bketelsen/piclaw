import { clampInt, jsonResponse, parseOptionalInt } from "./http-utils.js";
import { serveDocsStatic, serveStatic } from "./static.js";

export class ResponseService {
  json(data: unknown, status = 200): Response {
    return jsonResponse(data, status);
  }

  async serveStatic(relPath: string): Promise<Response> {
    return serveStatic(relPath, () => this.json({ error: "Not found" }, 404));
  }

  async serveDocsStatic(relPath: string): Promise<Response> {
    return serveDocsStatic(relPath, () => this.json({ error: "Not found" }, 404));
  }

  clampInt(value: string | null, fallback: number, min: number, max: number): number {
    return clampInt(value, fallback, min, max);
  }

  parseOptionalInt(value: string | null): number | null {
    return parseOptionalInt(value);
  }
}
