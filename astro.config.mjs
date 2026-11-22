import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Production origin. The site is served from the domain root (no base path),
// so article URLs stay identical to the current site: /blog/<slug>/.
export default defineConfig({
  site: 'https://ranilmukesh.com',
  output: 'static',
  compressHTML: true,
  markdown: {
    // Articles use LaTeX math ($...$ / $$...$$) rendered at build time with KaTeX,
    // the same pipeline the current site uses.
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    syntaxHighlight: {
      type: 'shiki',
      // Mermaid diagrams are rendered in the browser, so leave those blocks as plain code.
      excludeLangs: ['mermaid', 'math'],
    },
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
      wrap: false,
    },
  },
  integrations: [sitemap({
    namespaces: {
      news: false,
      video: false,
      xhtml: false,
    },
  })],
  build: {
    format: 'directory',
  },
  vite: {
    build: {
      // Mermaid's core chunk is ~650 kB; it is only loaded on articles that contain a diagram.
      chunkSizeWarningLimit: 800,
    },
  },
});
