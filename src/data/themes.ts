/**
 * Colour themes.
 *
 * Two independent axes, both stored in localStorage and applied to <html> before first paint:
 *   - palette  -> data-palette  ('ranil' | 'latent')
 *   - mode     -> data-theme    ('light' | 'dark')
 *
 * The CSS tokens for each palette x mode live in src/styles/global.css (@layer base).
 * 'ranil' + 'light' is the default for a first visit.
 */

export const palettes = [
  {
    id: 'ranil',
    label: 'Ranil',
    description: 'Paper, ink and plum',
    themeColor: { light: '#f3eee4', dark: '#1d1a18' },
  },
  {
    id: 'latent',
    label: 'LatentFolio',
    description: 'The original template colours',
    themeColor: { light: '#f5f0e8', dark: '#111016' },
  },
] as const;

export const modes = ['light', 'dark'] as const;

export type PaletteId = (typeof palettes)[number]['id'];
export type Mode = (typeof modes)[number];

export const DEFAULT_PALETTE: PaletteId = 'ranil';
export const DEFAULT_MODE: Mode = 'light';

export const STORAGE_KEYS = {
  palette: 'rm-palette',
  mode: 'rm-mode',
  /** Key used by the previous ranilmukesh.com ('light' | 'dark' | 'system'). Read once as a fallback. */
  legacyMode: 'theme',
} as const;

/** Serializable config passed to the inline pre-paint script and the client switcher. */
export const themeConfig = {
  palettes: palettes.map((p) => p.id),
  modes: [...modes],
  defaults: { palette: DEFAULT_PALETTE, mode: DEFAULT_MODE },
  keys: STORAGE_KEYS,
  themeColors: Object.fromEntries(palettes.map((p) => [p.id, p.themeColor])),
};
