export function dispatchHealth(req: Request): Response | null {
  const url = new URL(req.url);
  if (req.method !== "GET" || url.pathname !== "/health") return null;
  return Response.json({ status: "ok", version: process.env.npm_package_version ?? "unknown" });
}
