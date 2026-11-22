# ranilmukesh.com (next version)

Personal site of **Ranil Mukesh MJ**, Co-Founder & CTO of [PhobosQ](https://phobosq.com) and [k22.ai](https://k22.ai).
It is a static [Astro](https://astro.build) site that will replace the current ranilmukesh.com, and it hosts the articles
and research papers at the same URLs they have today (`/blog/<slug>/`, `/papers/<file>.pdf`, `/research/`).

## What is in here

| Path | What it is |
|---|---|
| `src/data/site.ts` | All homepage content: profile, flagship systems ("Systems with receipts"), more builds, expertise domains, journey (PhobosQ, k22.ai), links |
| `src/data/themes.ts` | Colour theme registry (palettes, modes, defaults, storage keys) |
| `src/styles/global.css` | All styles; theme tokens for every palette x mode are at the top |
| `src/content/blog/*.md` | Articles. The file name is the slug: `smelt.md` -> `/blog/smelt/` |
| `src/content/research/*.md` | Papers and pre-prints listed on `/research/` |
| `public/papers/` | Paper PDFs (same file names as the current site) |
| `public/assets/smelt/` | Figures used by the SMELT article |

Pages: `/` (hero, systems, expertise, journey, writing and research, contact), `/blog/`, `/blog/<slug>/`,
`/research/`, `/expertise/`, `/contact/`, `404`, plus `sitemap-index.xml`, `robots.txt` and `llms.txt`.

Articles support LaTeX math (`remark-math` + `rehype-katex`, rendered at build time) and Mermaid diagrams
(fenced ```` ```mermaid ```` blocks or `<div class="mermaid">`, rendered in the browser and only loaded on pages that use them).

## Themes

Two independent axes, applied to `<html>` before first paint by an inline script in `src/layouts/BaseLayout.astro`,
so there is no flash of the wrong theme:

- **Palette** (`data-palette`): `ranil` (paper, ink and plum; the default) or `latent` (the template's original colours).
- **Mode** (`data-theme`): `light` (default) or `dark`.

The header has a palette button and a light/dark button; the footer has explicit pickers for both. Choices are saved in
`localStorage` (`rm-palette`, `rm-mode`). On a first visit the site uses Ranil + light; if a visitor previously chose
light or dark on the old site (`theme` key), that mode is respected.

To add a palette: add it to `palettes` in `src/data/themes.ts`, add `:root[data-palette='<id>']` and
`:root[data-palette='<id>'][data-theme='dark']` token blocks in `src/styles/global.css`, and a `.swatch-<id>` style.

## Run it

Requires Node.js 22.23.4 or later (Netlify builds with Node 26).

```bash
npm ci
npm run dev       # local dev server
npm test          # unit tests
npm run build     # astro check + static build into dist/
npm run preview   # serve dist/ locally
```

## Deploy

`netlify.toml` builds with `npm run build` and publishes `dist/`. The canonical origin is set in `astro.config.mjs`
(`site: 'https://ranilmukesh.com'`, no base path).

## Content rules

- Only claims and links that appear on the current public site belong here. No invented metrics or placeholder links.
- Paper links point to `https://ranilmukesh.com/papers/<file>` (URL-encoded).

## Credits

Built on [LatentFolio](https://github.com/Dharani-Eswaramurthi/latentfolio) by Dharani Eswaramurthi, an MIT-licensed
Astro portfolio template. The original copyright and license are kept in [LICENSE](LICENSE); third-party notices are in
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
