import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    summary: z.string().max(160),
    tags: z.array(z.string()).max(3),
    category: z.enum(['commerce', 'backend', 'performance', 'accessibility']),
    internal: z.boolean().default(false),
    archived: z.boolean().default(false),
    featured: z.boolean().default(false),
    role: z.string(),
    team: z.string().optional(),
    timeline: z.string(),
    stack: z.array(z.string()),
    status: z.string(),
    results: z.array(z.object({
      label: z.string(),
      value: z.string(),
      before: z.string().optional(),
      note: z.string().optional(),
    })).max(4).optional(),
    measurement: z.string().optional(),
  }),
});

export const collections = { work };