import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { flagshipSystems, profile, socialLinks, companyLinks, paperHref } from '../data/site';

export const GET: APIRoute = async ({ site }) => {
  const origin = new URL('/', site).toString().replace(/\/$/, '');
  const posts = (await getCollection('blog')).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const papers = await getCollection('research');

  const systems = flagshipSystems.map((system) => `- ${system.name}: ${system.summary}`).join('\n');
  const articles = posts.map((post) => `- [${post.data.title}](${origin}/blog/${post.id}/): ${post.data.description}`).join('\n');
  const research = papers.map((paper) => `- [${paper.data.title}](${paperHref(paper.data.pdfUrl)})`).join('\n');
  const profiles = [
    ...socialLinks.map((link) => `- [${link.label}](${link.href})`),
    `- [PhobosQ](${companyLinks.phobosq})`,
    `- [k22.ai](${companyLinks.k22})`,
  ].join('\n');

  const body = `# ${profile.name}\n\n> ${profile.bio}\n\n## Selected systems\n\n${systems}\n\n## Articles\n\n${articles}\n\n## Research\n\n${research}\n\n## Profiles\n\n${profiles}\n`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
