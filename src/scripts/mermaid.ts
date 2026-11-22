/**
 * Renders Mermaid diagrams in articles. Mermaid is loaded only on pages that contain a diagram,
 * and diagrams are re-rendered with the active palette when the theme changes.
 *
 * Supported sources:
 *   - ```mermaid fenced code blocks (left unhighlighted via markdown.syntaxHighlight.excludeLangs)
 *   - raw <div class="mermaid"> blocks
 */

const SELECTOR = 'pre[data-language="mermaid"], pre > code.language-mermaid, div.mermaid:not([data-mermaid-ready])';

type Diagram = { container: HTMLElement; source: string };

const diagrams: Diagram[] = [];
let counter = 0;

function collect() {
  document.querySelectorAll<HTMLElement>(SELECTOR).forEach((node) => {
    const target = node.tagName === 'CODE' && node.parentElement?.tagName === 'PRE' ? node.parentElement : node;
    if (target.dataset.mermaidReady) return;
    const source = (node.textContent ?? '').trim();
    if (!source) return;

    const container = document.createElement('div');
    container.className = 'mermaid-diagram';
    container.dataset.mermaidReady = 'true';
    container.setAttribute('role', 'img');
    container.setAttribute('aria-label', 'Diagram');
    target.replaceWith(container);
    diagrams.push({ container, source });
  });
}

function token(name: string, fallback: string) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return value || fallback;
}

async function draw() {
  if (diagrams.length === 0) return;
  const { default: mermaid } = await import('mermaid');
  const dark = document.documentElement.dataset.theme === 'dark';

  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'strict',
    theme: 'base',
    darkMode: dark,
    fontFamily: '"Instrument Sans Variable", "Segoe UI", sans-serif',
    themeVariables: {
      background: token('--paper-light', dark ? '#2d2825' : '#fbf8f1'),
      primaryColor: token('--tint-1', dark ? '#33252f' : '#ece1e6'),
      primaryTextColor: token('--ink', dark ? '#efe7da' : '#1b1719'),
      primaryBorderColor: token('--accent', dark ? '#cf9fc0' : '#6b3a5f'),
      secondaryColor: token('--tint-2', dark ? '#2d2c21' : '#e6e4d2'),
      tertiaryColor: token('--tint-3', dark ? '#382821' : '#f0dfd4'),
      lineColor: token('--muted', dark ? '#b1a79c' : '#6a625d'),
      textColor: token('--ink', dark ? '#efe7da' : '#1b1719'),
      edgeLabelBackground: token('--paper-light', dark ? '#2d2825' : '#fbf8f1'),
    },
  });

  for (const diagram of diagrams) {
    try {
      counter += 1;
      const { svg } = await mermaid.render(`mermaid-${counter}`, diagram.source);
      diagram.container.innerHTML = svg;
    } catch {
      // Fall back to showing the diagram source if Mermaid cannot parse it.
      const pre = document.createElement('pre');
      pre.textContent = diagram.source;
      diagram.container.replaceChildren(pre);
    }
  }
}

export function renderMermaid() {
  collect();
  if (diagrams.length === 0) return;
  void draw();
  window.addEventListener('themechange', () => void draw());
}
