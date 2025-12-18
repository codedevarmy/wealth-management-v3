import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMDX } from '@content-collections/mdx';
import { z } from 'zod';

const postContentSchema = z.object({
  type: z.enum(['paragraph', 'heading', 'list', 'image', 'code', 'blockquote']),
  value: z.any(),
});

const postSchema = z.object({
  title: z.string(),
  slug: z.string(),
  image: z.string(), // Changed from 'coverImage' to match JSON
  summary: z.string().optional(),
  content: z.array(postContentSchema).optional(),
  categories: z.array(z.string()),
  createdAt: z
    .string()
    .or(z.date())
    .default(() => new Date().toISOString()), // Accept both string and date
});

export type PostValues = z.infer<typeof postSchema>;

const posts = defineCollection({
  name: 'posts',
  directory: '/contents',
  include: '**/*.md',
  schema: postSchema,
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [posts],
});
