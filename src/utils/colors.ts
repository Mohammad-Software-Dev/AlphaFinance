// src/utils/colors.ts

export const COLOR_MAP: Record<string, string> = {
  brand: "--color-brand",
  "dark-orange": "--color-dark-orange",
  "light-orange": "--color-light-orange",
  teal: "--color-teal",
  "light-silver": "--color-light-silver",
  sand: "--color-sand",
  "brand-light":"--color-brand-light",
  'dark-silver':"--color-dark-silver",
};

export const getCssVar = (name: string): string => {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  return value || name;
};

export function resolveColor(colorKey: string): string {
  return COLOR_MAP[colorKey] ? getCssVar(COLOR_MAP[colorKey]) : colorKey;
}
