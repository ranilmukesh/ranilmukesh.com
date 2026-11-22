import { themeConfig, palettes, type Mode, type PaletteId } from '../data/themes';

const root = document.documentElement;

const isPalette = (value: unknown): value is PaletteId => themeConfig.palettes.includes(value as PaletteId);
const isMode = (value: unknown): value is Mode => themeConfig.modes.includes(value as Mode);

export const currentPalette = (): PaletteId => (isPalette(root.dataset.palette) ? root.dataset.palette : themeConfig.defaults.palette);
export const currentMode = (): Mode => (isMode(root.dataset.theme) ? root.dataset.theme : themeConfig.defaults.mode);

const paletteLabel = (id: PaletteId) => palettes.find((p) => p.id === id)?.label ?? id;

function syncControls() {
  const palette = currentPalette();
  const mode = currentMode();
  const nextPalette = themeConfig.palettes[(themeConfig.palettes.indexOf(palette) + 1) % themeConfig.palettes.length];

  document.querySelectorAll<HTMLButtonElement>('[data-mode-toggle]').forEach((button) => {
    const label = mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
    button.setAttribute('aria-pressed', String(mode === 'dark'));
  });

  document.querySelectorAll<HTMLButtonElement>('[data-palette-cycle]').forEach((button) => {
    const label = `Colour theme: ${paletteLabel(palette)}. Switch to ${paletteLabel(nextPalette)}`;
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
  });

  document.querySelectorAll<HTMLButtonElement>('[data-set-palette]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.setPalette === palette));
  });
  document.querySelectorAll<HTMLButtonElement>('[data-set-mode]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.setMode === mode));
  });

  const meta = document.querySelector('meta[name="theme-color"]');
  const color = themeConfig.themeColors[palette]?.[mode];
  if (meta && color) meta.setAttribute('content', color);
}

export function applyTheme(palette: PaletteId, mode: Mode) {
  root.dataset.palette = palette;
  root.dataset.theme = mode;
  try {
    localStorage.setItem(themeConfig.keys.palette, palette);
    localStorage.setItem(themeConfig.keys.mode, mode);
  } catch {
    // Storage can be unavailable (private mode, blocked site data); the choice still applies to this page.
  }
  syncControls();
  window.dispatchEvent(new CustomEvent('themechange', { detail: { palette, mode } }));
}

export function setupThemeControls() {
  document.querySelectorAll<HTMLButtonElement>('[data-mode-toggle]:not([data-theme-ready])').forEach((button) => {
    button.dataset.themeReady = 'true';
    button.addEventListener('click', () => applyTheme(currentPalette(), currentMode() === 'dark' ? 'light' : 'dark'));
  });

  document.querySelectorAll<HTMLButtonElement>('[data-palette-cycle]:not([data-theme-ready])').forEach((button) => {
    button.dataset.themeReady = 'true';
    button.addEventListener('click', () => {
      const list = themeConfig.palettes;
      applyTheme(list[(list.indexOf(currentPalette()) + 1) % list.length], currentMode());
    });
  });

  document.querySelectorAll<HTMLButtonElement>('[data-set-palette]:not([data-theme-ready])').forEach((button) => {
    button.dataset.themeReady = 'true';
    button.addEventListener('click', () => {
      const palette = button.dataset.setPalette;
      if (isPalette(palette)) applyTheme(palette, currentMode());
    });
  });

  document.querySelectorAll<HTMLButtonElement>('[data-set-mode]:not([data-theme-ready])').forEach((button) => {
    button.dataset.themeReady = 'true';
    button.addEventListener('click', () => {
      const mode = button.dataset.setMode;
      if (isMode(mode)) applyTheme(currentPalette(), mode);
    });
  });

  syncControls();
}

// Keep tabs in sync when the theme is changed in another window.
window.addEventListener('storage', (event) => {
  if (event.key !== themeConfig.keys.palette && event.key !== themeConfig.keys.mode) return;
  let palette = currentPalette();
  let mode = currentMode();
  try {
    const storedPalette = localStorage.getItem(themeConfig.keys.palette);
    const storedMode = localStorage.getItem(themeConfig.keys.mode);
    if (isPalette(storedPalette)) palette = storedPalette;
    if (isMode(storedMode)) mode = storedMode;
  } catch {
    return;
  }
  root.dataset.palette = palette;
  root.dataset.theme = mode;
  syncControls();
  window.dispatchEvent(new CustomEvent('themechange', { detail: { palette, mode } }));
});
