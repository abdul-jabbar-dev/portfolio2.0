// utils/getValidIconUrl.ts
const makeUrl = (type: string, size: number, iconName: string) =>
  `https://img.icons8.com/${type}/${size}/${iconName}.png`;

/**
 * Get first valid icon URL from multiple sources
 * Fallback is dynamic and SSR safe
 */
export async function getValidIconUrl(
  iconName?: string,
  fallbackIcon: "link" | "globe" = "link",
  options?: { size?: number; theme?: "stroke" | "color" }
): Promise<string> {
  const { size = 60, theme = "stroke" } = options || {};

  const sources: Record<string, string[]> = {
    stroke: ["fluency-systems-regular", "ios-glyphs"],
    color: [ "fluency","color", "ios",'offices'],
  };
  const themeList = sources[theme] || sources.stroke;

  async function check(name: string) {
    for (const type of themeList) {
      const url = makeUrl(type, size, name);
      try {
        const res = await fetch(url, { cache: "no-store" });
        if (res.ok) return url;
      } catch {}
    }
    return null;
  }

  if (iconName?.trim()) {
    const validMain = await check(iconName);
    if (validMain) return validMain;
  }

  const validFallback = await check(fallbackIcon);
  return validFallback || makeUrl("ios-glyphs", size, "link");
}
