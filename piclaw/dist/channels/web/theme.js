export function createFallbackTheme() {
    const passthrough = (text) => text;
    const identity = () => passthrough;
    return {
        name: "web",
        sourcePath: undefined,
        fg: (_color, text) => text,
        bg: (_color, text) => text,
        bold: passthrough,
        italic: passthrough,
        underline: passthrough,
        inverse: passthrough,
        strikethrough: passthrough,
        getFgAnsi: (_color) => "",
        getBgAnsi: (_color) => "",
        getColorMode: () => "truecolor",
        getThinkingBorderColor: () => identity(),
        getBashModeBorderColor: () => identity(),
    };
}
