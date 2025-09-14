import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string().default('博主'),
    category: z.string(),
    tags: z.array(z.string()),
    readingTime: z.string(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const faqCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    featured: z.boolean().default(false),
    difficulty: z.enum(['初级', '中级', '高级']).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  faq: faqCollection,
};