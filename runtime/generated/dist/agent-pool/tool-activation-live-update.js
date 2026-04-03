const liveToolSnapshotAgents = new WeakSet();
const boundImmediateToolActivationSessions = new WeakSet();
function replaceArrayContents(target, next) {
    target.splice(0, target.length, ...next);
}
function ensureLiveToolSnapshot(agent) {
    if (!agent || typeof agent !== "object")
        return;
    if (liveToolSnapshotAgents.has(agent))
        return;
    if (typeof agent.createContextSnapshot !== "function")
        return;
    const original = agent.createContextSnapshot.bind(agent);
    agent.createContextSnapshot = () => {
        const snapshot = original();
        const liveTools = Array.isArray(agent.state?.tools) ? agent.state.tools : snapshot.tools;
        return {
            ...snapshot,
            tools: liveTools,
        };
    };
    liveToolSnapshotAgents.add(agent);
}
export function applyActiveToolsImmediately(session, toolNames) {
    const tools = [];
    const validToolNames = [];
    for (const name of toolNames) {
        const tool = session._toolRegistry.get(name);
        if (tool) {
            tools.push(tool);
            validToolNames.push(name);
        }
    }
    ensureLiveToolSnapshot(session.agent);
    const currentTools = Array.isArray(session.agent?.state?.tools)
        ? session.agent.state.tools
        : undefined;
    if (currentTools) {
        replaceArrayContents(currentTools, tools);
    }
    else if (typeof session.agent?.setTools === "function") {
        session.agent.setTools(tools);
    }
    session._baseSystemPrompt = session._rebuildSystemPrompt(validToolNames);
    if (session.agent?.state) {
        session.agent.state.systemPrompt = session._baseSystemPrompt;
    }
    if (typeof session.agent?.setSystemPrompt === "function") {
        session.agent.setSystemPrompt(session._baseSystemPrompt);
    }
}
export function bindImmediateToolActivation(session) {
    if (!session || typeof session !== "object")
        return;
    if (boundImmediateToolActivationSessions.has(session))
        return;
    ensureLiveToolSnapshot(session.agent);
    const original = typeof session.setActiveToolsByName === "function"
        ? session.setActiveToolsByName.bind(session)
        : null;
    session.setActiveToolsByName = (toolNames) => {
        if (original) {
            original(toolNames);
            ensureLiveToolSnapshot(session.agent);
            return;
        }
        applyActiveToolsImmediately(session, toolNames);
    };
    boundImmediateToolActivationSessions.add(session);
}
