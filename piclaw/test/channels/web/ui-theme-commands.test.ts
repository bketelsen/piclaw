import { describe, expect, test } from "bun:test";
import { handleUiThemeCommand } from "../../../src/channels/web/ui-theme-commands.js";

describe("/theme command formatting", () => {
    test("without arguments, returns a themed preview table with swatches", () => {
        const result = handleUiThemeCommand("/theme");
        expect(result?.status).toBe("success");
        expect(result?.message).toContain("Available themes:");
        expect(result?.message).toContain("| Theme | Mode | bgPrimary | bgSecondary");
        expect(result?.message).toContain("data:image/svg+xml;base64,");
        expect(result?.message).toContain("/theme <name>");
    });

    test("with list alias, returns the same themed preview table", () => {
        const result = handleUiThemeCommand("/theme list");
        expect(result?.status).toBe("success");
        expect(result?.message).toContain("Available themes:");
        expect(result?.message).toContain("Usage: /theme <name>");
    });

    test("unknown themes still return guidance message", () => {
        const result = handleUiThemeCommand("/theme nosuch");
        expect(result?.status).toBe("error");
        expect(result?.message).toContain("Unknown theme");
    });
});
