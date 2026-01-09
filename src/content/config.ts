import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    // Support both string paths (public/) and imported images (src/assets/)
    image: z.union([z.string(), image()]).optional(),
    // Additional images for project galleries
    images: z.array(z.union([z.string(), image()])).optional(),
    tags: z.array(z.string()),
    demoUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    date: z.date(),
    // Optional metadata
    role: z.string().optional(),
    duration: z.string().optional(),
    category: z.enum(['web', 'mobile', 'desktop', 'fullstack', 'other']).optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
