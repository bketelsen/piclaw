import type { Theme } from "@mariozechner/pi-coding-agent";

export function createFallbackTheme(): Theme {
  const passthrough = (text: string) => text;
  const identity = () => passthrough;
  return {
    name: "web",
    sourcePath: undefined,
    fg: (_color: string, text: string) => text,
    bg: (_color: string, text: string) => text,
    bold: passthrough,
    italic: passthrough,
    underline: passthrough,
    inverse: passthrough,
    strikethrough: passthrough,
    getFgAnsi: (_color: string) => "",
    getBgAnsi: (_color: string) => "",
    getColorMode: () => "truecolor",
    getThinkingBorderColor: () => identity(),
    getBashModeBorderColor: () => identity(),
  } as unknown as Theme;
}
