import type { TerminalSocketData } from "./terminal/terminal-session-service.js";
import { checkCsrfOrigin as defaultCheckCsrfOrigin } from "./http/security.js";

type JsonObject = Record<string, unknown>;

interface JsonResponder {
  json(payload: unknown, status?: number): Response;
}

interface AuthGatewayLike {
  isAuthEnabled(): boolean;
  isAuthenticated(req: Request): boolean;
}

interface TerminalOwnerLike {
  token: string;
  userId: string;
}

interface TerminalHandoffLike {
  token: string;
  expires_at: string;
}

interface TerminalServiceLike {
  resolveOwnerFromRequest(req: Request, allowUnauthenticated?: boolean): TerminalSocketData | null;
  getSessionInfo(owner: TerminalOwnerLike): JsonObject;
  createHandoffFromRequest(req: Request, allowUnauthenticated?: boolean): TerminalHandoffLike | null;
}

export interface WebTerminalVncHttpServiceDeps extends JsonResponder {
  webRuntimeConfig: {
    terminalEnabled: boolean;
  };
  authGateway: AuthGatewayLike;
  terminalService: TerminalServiceLike;
  checkCsrfOrigin?: (req: Request) => boolean;
}

export interface WebTerminalVncHttpChannel extends JsonResponder {
  authGateway: AuthGatewayLike;
  terminalService: TerminalServiceLike;
}

export type WebTerminalVncHttpServiceSurface = Pick<
  WebTerminalVncHttpService,
  "handleTerminalSession" | "handleTerminalHandoff"
>;

export function createWebTerminalVncHttpService(
  channel: WebTerminalVncHttpChannel,
  configs: Pick<WebTerminalVncHttpServiceDeps, "webRuntimeConfig">
): WebTerminalVncHttpService {
  return new WebTerminalVncHttpService({
    ...configs,
    json: (payload, status = 200) => channel.json(payload, status),
    authGateway: channel.authGateway,
    terminalService: channel.terminalService,
  });
}

export class WebTerminalVncHttpService {
  constructor(private readonly deps: WebTerminalVncHttpServiceDeps) {}

  handleTerminalSession(req: Request): Response {
    if (!this.deps.webRuntimeConfig.terminalEnabled) {
      return this.deps.json({ enabled: false, error: "Web terminal is disabled." }, 200);
    }
    const authEnabled = this.deps.authGateway.isAuthEnabled();
    if (authEnabled && !this.deps.authGateway.isAuthenticated(req)) {
      return this.deps.json({ error: "Unauthorized" }, 401);
    }
    const owner = this.deps.terminalService.resolveOwnerFromRequest(req, !authEnabled);
    if (!owner) {
      return this.deps.json({ error: "Unauthorized" }, 401);
    }
    return this.deps.json(this.deps.terminalService.getSessionInfo(owner));
  }

  async handleTerminalHandoff(req: Request): Promise<Response> {
    if (!this.deps.webRuntimeConfig.terminalEnabled) {
      return this.deps.json({ error: "Web terminal is disabled." }, 404);
    }
    const authEnabled = this.deps.authGateway.isAuthEnabled();
    if (authEnabled && !this.deps.authGateway.isAuthenticated(req)) {
      return this.deps.json({ error: "Unauthorized" }, 401);
    }
    if (!this.checkCsrfOrigin(req)) {
      return this.deps.json({ error: "Origin not allowed" }, 403);
    }
    const handoff = this.deps.terminalService.createHandoffFromRequest(req, !authEnabled);
    if (!handoff) {
      return this.deps.json({ error: "No live terminal session is available to transfer." }, 409);
    }
    return this.deps.json({ ok: true, handoff }, 200);
  }

  private checkCsrfOrigin(req: Request): boolean {
    return (this.deps.checkCsrfOrigin ?? defaultCheckCsrfOrigin)(req);
  }
}
