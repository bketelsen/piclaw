import { getRouterState, setRouterState } from "../../db.js";
const OOBE_PROVIDER_READY_COMPLETED_INSTANCE_KEY = "web:oobe:provider-ready:completed";
export function isProviderReadyOobeCompletedForInstance() {
    return getRouterState(OOBE_PROVIDER_READY_COMPLETED_INSTANCE_KEY) === "true";
}
export function markProviderReadyOobeCompletedForInstance() {
    setRouterState(OOBE_PROVIDER_READY_COMPLETED_INSTANCE_KEY, "true");
}
export function completeOobeForInstance(kind) {
    if (kind === "provider-ready") {
        markProviderReadyOobeCompletedForInstance();
    }
}
export { OOBE_PROVIDER_READY_COMPLETED_INSTANCE_KEY };
