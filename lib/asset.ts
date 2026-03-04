// Prepend the GitHub Pages base path to asset URLs for production
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function imgSrc(path: string): string {
  return `${BASE}${path}`;
}
