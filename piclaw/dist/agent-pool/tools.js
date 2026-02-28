import { createBashTool, createEditTool, createReadTool, createWriteTool, } from "@mariozechner/pi-coding-agent";
import { createAttachmentTool } from "./attachments.js";
export function createSessionTools(workspaceDir, bashOperations, chatJid, attachments) {
    const tools = [
        createReadTool(workspaceDir),
        createBashTool(workspaceDir, { operations: bashOperations }),
        createEditTool(workspaceDir),
        createWriteTool(workspaceDir),
    ];
    const customTools = [
        createAttachmentTool(chatJid, attachments),
    ];
    return { tools, customTools };
}
