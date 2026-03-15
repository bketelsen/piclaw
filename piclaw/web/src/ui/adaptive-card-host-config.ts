/**
 * ui/adaptive-card-host-config.ts – HostConfig for Adaptive Cards mapped from PiClaw CSS vars.
 *
 * Maps PiClaw theme tokens into the Microsoft Adaptive Cards HostConfig format
 * so cards render consistently in both light and dark themes.
 */

/** Build an Adaptive Cards HostConfig from computed CSS variables. */
export function buildHostConfig(): Record<string, unknown> {
  const style = getComputedStyle(document.documentElement);
  const get = (name: string, fallback: string) =>
    style.getPropertyValue(name).trim() || fallback;

  const fg = get("--color-text", "#e0e0e0");
  const fgMuted = get("--color-text-muted", "#999");
  const bg = get("--color-bg-secondary", "#1e1e2e");
  const accent = get("--color-accent", "#89b4fa");
  const good = get("--color-success", "#a6e3a1");
  const warning = get("--color-warning", "#f9e2af");
  const attention = get("--color-error", "#f38ba8");
  const fontFamily = get("--font-family", "system-ui, sans-serif");

  return {
    fontFamily,
    containerStyles: {
      default: {
        backgroundColor: bg,
        foregroundColors: {
          default: { default: fg, subtle: fgMuted },
          accent: { default: accent, subtle: accent },
          good: { default: good, subtle: good },
          warning: { default: warning, subtle: warning },
          attention: { default: attention, subtle: attention },
        },
      },
      emphasis: {
        backgroundColor: get("--color-bg-tertiary", "#2a2a3e"),
        foregroundColors: {
          default: { default: fg, subtle: fgMuted },
          accent: { default: accent, subtle: accent },
          good: { default: good, subtle: good },
          warning: { default: warning, subtle: warning },
          attention: { default: attention, subtle: attention },
        },
      },
    },
    actions: {
      actionsOrientation: "horizontal",
      actionAlignment: "left",
      buttonSpacing: 8,
      maxActions: 5,
      showCard: { actionMode: "inline" },
      spacing: "default",
    },
    adaptiveCard: {
      allowCustomStyle: false,
    },
    spacing: {
      small: 4,
      default: 8,
      medium: 12,
      large: 16,
      extraLarge: 24,
      padding: 12,
    },
    separator: {
      lineThickness: 1,
      lineColor: fgMuted,
    },
    fontSizes: {
      small: 12,
      default: 14,
      medium: 16,
      large: 18,
      extraLarge: 22,
    },
    fontWeights: {
      lighter: 300,
      default: 400,
      bolder: 600,
    },
    imageSizes: {
      small: 40,
      medium: 80,
      large: 120,
    },
    textBlock: {
      headingLevel: 2,
    },
  };
}
