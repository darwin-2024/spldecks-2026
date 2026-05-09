import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/services' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    category: z.enum(['commercial', 'residential']),
    heroImage: image(),
    heroAlt: z.string(),
    // SEO overrides
    seo: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      canonicalURL: z.string().optional(),
      ogImage: image().optional(),
      noindex: z.boolean().optional(),
    }).optional(),
    structuredData: z.object({
      serviceType: z.string().optional(),
      areaServed: z.array(z.string()).optional(),
    }).optional(),
    // Service specific data
    features: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      items: z.array(z.object({
        icon: z.string().optional(),
        text: z.string()
      }))
    }).optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string()
    })).optional(),
    // For simpler list of features if needed
    simpleFeatures: z.array(z.string()).optional(),
  }),
});

export const collections = { services };