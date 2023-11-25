import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.string().transform((str) => new Date(str)),
    updatedAt: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    isDraft: z.boolean().optional(),
  }),
});

const pagesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updatedAt: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
  }),
});

export const collections = {
  posts: postsCollection,
  pages: pagesCollection,
};
