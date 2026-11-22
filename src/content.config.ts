import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Articles. The file name (without .md) is the URL slug: /blog/<slug>/
const blog = defineCollection({
  loader: glob({
    pattern: '*.md',
    base: './src/content/blog',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

// Research papers and pre-prints. `pdfUrl` is a site-root path such as /papers/<file>.pdf.
const research = defineCollection({
  loader: glob({
    pattern: '*.md',
    base: './src/content/research',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    venue: z.string().optional(),
    date: z.coerce.date().optional(),
    pdfUrl: z.string(),
    githubUrl: z.string().optional(),
    abstract: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog, research };
