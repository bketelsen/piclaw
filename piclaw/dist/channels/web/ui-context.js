export async function bindSessionUiContext(channel, session, chatJid) {
    if (!chatJid.startsWith("web:"))
        return;
    const waitForIdle = async () => {
        if (!session.isStreaming)
            return;
        await new Promise((resolve) => {
            const unsub = session.subscribe((event) => {
                if (event.type === "agent_end") {
                    unsub();
                    resolve();
                }
            });
        });
    };
    const uiContext = createUiContext(channel, chatJid);
    await session.bindExtensions({
        uiContext,
        commandContextActions: {
            waitForIdle,
            newSession: async (options) => {
                const ok = await session.newSession(options);
                return { cancelled: !ok };
            },
            fork: async (entryId) => {
                const result = await session.fork(entryId);
                return { cancelled: result.cancelled };
            },
            navigateTree: async (targetId, options) => {
                const result = await session.navigateTree(targetId, options);
                return { cancelled: result.cancelled };
            },
            switchSession: async (sessionPath) => {
                const ok = await session.switchSession(sessionPath);
                return { cancelled: !ok };
            },
            reload: () => session.reload(),
        },
        onError: (error) => {
            console.error("[web] Extension error:", error);
            channel.broadcastEvent("extension_ui_error", error);
        },
    });
}
export function createUiContext(channel, chatJid) {
    const fallbackTheme = channel.fallbackTheme;
    const requestUiResponse = async (kind, payload, timeoutMs = 120000) => {
        const requestId = `ui-${Date.now()}-${++channel.uiRequestCounter}`;
        return new Promise((resolve, reject) => {
            const timeoutId = setTimeout(() => {
                channel.pendingUiRequests.delete(requestId);
                channel.broadcastEvent("extension_ui_timeout", { request_id: requestId, kind, chat_jid: chatJid });
                resolve(undefined);
            }, timeoutMs);
            channel.pendingUiRequests.set(requestId, { resolve, reject, timeoutId, kind });
            channel.broadcastEvent("extension_ui_request", {
                request_id: requestId,
                kind,
                chat_jid: chatJid,
                ...payload,
            });
        });
    };
    return {
        select: async (title, options, opts) => {
            const timeoutMs = typeof opts?.timeout === "number" ? opts.timeout : 120000;
            const result = await requestUiResponse("select", { title, options, opts }, timeoutMs);
            return typeof result === "string" ? result : undefined;
        },
        confirm: async (title, message, opts) => {
            const timeoutMs = typeof opts?.timeout === "number" ? opts.timeout : 120000;
            const result = await requestUiResponse("confirm", { title, message, opts }, timeoutMs);
            return Boolean(result);
        },
        input: async (title, placeholder, opts) => {
            const timeoutMs = typeof opts?.timeout === "number" ? opts.timeout : 120000;
            const result = await requestUiResponse("input", { title, placeholder, opts }, timeoutMs);
            return typeof result === "string" ? result : undefined;
        },
        notify: (message, type) => {
            channel.broadcastEvent("extension_ui_notify", { chat_jid: chatJid, message, type });
        },
        onTerminalInput: () => () => { },
        setStatus: (key, text) => {
            channel.broadcastEvent("extension_ui_status", { chat_jid: chatJid, key, text });
        },
        setWorkingMessage: (message) => {
            channel.broadcastEvent("extension_ui_working", { chat_jid: chatJid, message });
        },
        setWidget: (key, content, options) => {
            if (Array.isArray(content)) {
                channel.broadcastEvent("extension_ui_widget", { chat_jid: chatJid, key, content, options });
            }
        },
        setFooter: () => { },
        setHeader: () => { },
        setTitle: (title) => {
            channel.broadcastEvent("extension_ui_title", { chat_jid: chatJid, title });
        },
        custom: async (_factory, _options) => {
            const result = await requestUiResponse("custom", { title: "Custom UI" });
            return result;
        },
        pasteToEditor: (text) => {
            const current = channel.editorTextByChat.get(chatJid) || "";
            const updated = current + text;
            channel.editorTextByChat.set(chatJid, updated);
            channel.broadcastEvent("extension_ui_editor_text", { chat_jid: chatJid, text: updated });
        },
        setEditorText: (text) => {
            channel.editorTextByChat.set(chatJid, text);
            channel.broadcastEvent("extension_ui_editor_text", { chat_jid: chatJid, text });
        },
        getEditorText: () => channel.editorTextByChat.get(chatJid) || "",
        editor: async (title, prefill) => {
            const result = await requestUiResponse("editor", { title, prefill });
            return typeof result === "string" ? result : undefined;
        },
        setEditorComponent: () => { },
        get theme() {
            return fallbackTheme;
        },
        getAllThemes: () => [],
        getTheme: (_name) => undefined,
        setTheme: (_nextTheme) => ({ success: false, error: "UI theme switching not available" }),
        getToolsExpanded: () => false,
        setToolsExpanded: () => { },
    };
}
