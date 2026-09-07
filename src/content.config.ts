import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    summary: z.string().max(200),
    tags: z.array(z.string()).max(3),
    category: z.enum(['commerce', 'backend', 'performance', 'accessibility']),

    // list flags
    internal: z.boolean().default(false),
    archived: z.boolean().default(false),
    featured: z.boolean().default(false),
    order: z.number().default(0),

    // case-study header
    lede: z.string(),
    role: z.string(),
    team: z.string().optional(),
    timeline: z.string(),
    stack: z.array(z.string()),
    status: z.string(),

    // results strip
    measurement: z.string().optional(),
    results: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
          before: z.string().optional(),
        }),
      )
      .max(4)
      .optional(),
  }),
});

export const collections = { work };