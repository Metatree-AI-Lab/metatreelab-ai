import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Services and projects live in `src/data/` as TypeScript with typed
 * bilingual fields — cleaner than bilingual markdown for structured data.
 *
 * Only long-form content (testimonials, future blog posts) uses collections.
 */

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/testimonials' }),
  schema: z.object({
    id: z.string(),
    quote: z.object({
      en: z.string(),
      zh: z.string(),
    }),
    author: z.string(),
    role: z.object({
      en: z.string(),
      zh: z.string(),
    }),
    company: z.string(),
    companyLogo: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Metatree Lab'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { testimonials, insights };
