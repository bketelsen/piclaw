import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { registerExtensionRoute } from "./extension-routes.js";
const OFFICE_VIEWER_EXTENSION_PATH = resolve(import.meta.dir, "../../../../extensions/viewers/office-viewer/index.ts");
const DRAWIO_EDITOR_EXTENSION_PATH = resolve(import.meta.dir, "../../../../extensions/viewers/drawio-editor/index.ts");
const OFFICE_VIEWER_EXTENSION_URL = pathToFileURL(OFFICE_VIEWER_EXTENSION_PATH).href;
const DRAWIO_EDITOR_EXTENSION_URL = pathToFileURL(DRAWIO_EDITOR_EXTENSION_PATH).href;
async function loadViewerRoute(moduleUrl, req, pathname) {
    const mod = await import(moduleUrl);
    return (await mod.handleRoute(req, pathname)) ?? new Response("Not Found", { status: 404 });
}
export function registerLazyViewerRoutes() {
    registerExtensionRoute("/office-viewer", async (req, pathname) => await loadViewerRoute(OFFICE_VIEWER_EXTENSION_URL, req, pathname), OFFICE_VIEWER_EXTENSION_PATH);
    registerExtensionRoute("/drawio", async (req, pathname) => await loadViewerRoute(DRAWIO_EDITOR_EXTENSION_URL, req, pathname), DRAWIO_EDITOR_EXTENSION_PATH);
}
