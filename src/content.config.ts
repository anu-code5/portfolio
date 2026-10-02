import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Projects: one .mdx file per project in src/content/work. The body is the case study.
const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    track: z.string(), // e.g. "Full-stack", "ML", "Systems"
    //origin: z.string(), // the hobby it came from, e.g. "from reading"
    summary: z.string(),
    stack: z.array(z.string()),
    //result: z.string(),
    //broke: z.string(), // the one-line "what broke" margin note
    //doodle: z.enum(['smart_surveillance', 'medical_transcriptions', 'rover', 'doclit_ai']),
    role: z.string(),
    timeline: z.string(),
    code: z.string().optional(),
    demo: z.string().optional(),
  }),
});

// Writing: one .mdx file per essay in src/content/notes.
const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    kind: z.string(), // "Essay", "Postmortem", "Reading notes"
    date: z.string(),
    order: z.number(),
    readTime: z.string(),
    description: z.string(),
  }),
});

export const collections = { work, notes };
