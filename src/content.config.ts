import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every field here matches a field in the editor at /admin (public/admin/config.yml).
// If you add a field in one place, add it in the other.

const contact = z.object({
  name: z.string().optional(),
  role: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().optional(),
});

const link = z.object({ label: z.string(), url: z.string() });

const programs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/programs' }),
  schema: z.object({
    title: z.string(),
    lang: z.string().default('en'),
    category: z.enum(['community-services', 'employment', 'arts-culture', 'collaborations']),
    summary: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    schedule: z.string().optional(),
    location: z.string().optional(),
    contacts: z.array(contact).default([]),
    links: z.array(link).default([]),
    externalUrl: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    lang: z.string().default('en'),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    time: z.string().optional(),
    location: z.string().optional(),
    summary: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    program: z.string().optional(),
    links: z.array(link).default([]),
    draft: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    lang: z.string().default('en'),
    description: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    links: z.array(link).default([]),
  }),
});

export const collections = { programs, events, pages };
