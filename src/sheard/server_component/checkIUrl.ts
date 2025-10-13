// utils/getValidIconUrl.ts
const makeUrl = (type: string, size: number, iconName: string) =>
  `https://img.icons8.com/${type}/${size}/${iconName}.png`;
 
export async function getValidIconUrl(
  iconName?: string,
  fallbackIcon: "link" | "globe" = "link",
  options?: { size?: number; theme?: "stroke" | "color"; iconStr?: string }
): Promise<string> {
  const { size = 60, theme = "stroke", iconStr } = options || {};

  const sources: Record<string, string[]> = {
    stroke: ["fluency-systems-regular", "ios-glyphs"],
    color: ["fluency", "color", "ios", "offices"],
  };
  const themeList = sources[theme] || sources.stroke;
 

  // Try fetching a single URL
  const tryFetch = async (type: string, name: string) => {
    const url = makeUrl(type, size, name);
    try {
      const res = await fetch(url, { cache: "no-store" }).catch(() => null);
      if (res?.ok) return url;
    } catch (e){ 
    }
    return null;
  };

  // 1️⃣ If iconStr exists, try it first
  if (iconStr?.trim()) {
    const iconStrUrl = await tryFetch(iconStr, iconName || fallbackIcon);
    if (iconStrUrl) return iconStrUrl;
  }

  // 2️⃣ Try theme sources
  for (const type of themeList) {
    const url = await tryFetch(type, iconName || fallbackIcon);
    if (url) return url;
  }

  // 3️⃣ fallback
  return makeUrl("ios-glyphs", size, fallbackIcon);
}
