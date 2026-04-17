/**
 * runtime/provider-bootstrap.ts – Optional model provider registration at startup.
 */
import { createLogger } from "../utils/logger.js";
const log = createLogger("runtime.provider-bootstrap");
const AZURE_OPENAI_PROVIDER = "azure-openai";
const AZURE_FOUNDRY_PROVIDER = "azure-foundry";
const AZURE_BOOTSTRAP_MODULE_URL = new URL("../../extensions/integrations/azure-openai.ts", import.meta.url).href;
let activeAzureBootstrap = null;
let loadAzureBootstrapModuleImpl = async () => await import(AZURE_BOOTSTRAP_MODULE_URL);
function hasAzureBootstrapEnv() {
    return Boolean(process.env.AOAI_BASE_URL || process.env.FOUNDRY_BASE_URL || process.env.AOAI2_BASE_URL);
}
/** Ensure optional Azure providers are discoverable in /model at startup. */
export async function registerOptionalProviders(agentPool) {
    if (!hasAzureBootstrapEnv())
        return;
    if (activeAzureBootstrap)
        return;
    const mod = await loadAzureBootstrapModuleImpl();
    activeAzureBootstrap = mod.startAzureProviderBootstrap((name, config) => {
        agentPool.registerModelProvider(name, config);
    });
    await activeAzureBootstrap.refresh();
    log.info("Registered Azure optional providers via process bootstrap", {
        operation: "register_optional_providers.azure",
        hasAzureOpenAiModels: agentPool.hasProviderModels(AZURE_OPENAI_PROVIDER),
        hasAzureFoundryModels: agentPool.hasProviderModels(AZURE_FOUNDRY_PROVIDER),
    });
}
export function setProviderBootstrapLoaderForTests(loader) {
    loadAzureBootstrapModuleImpl = loader ?? (async () => await import(AZURE_BOOTSTRAP_MODULE_URL));
}
export function resetProviderBootstrapForTests() {
    activeAzureBootstrap?.stop();
    activeAzureBootstrap = null;
    loadAzureBootstrapModuleImpl = async () => await import(AZURE_BOOTSTRAP_MODULE_URL);
}
