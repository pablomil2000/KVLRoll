import { defineCollection, z } from "astro:content";
// z = zod

const actors = defineCollection({
  schema: z.object({
    name: z.string(),
    player: z.string(),
    img: z.string(),
  })
});

const games = defineCollection({
  schema: z.object({
    title: z.string(),
    img: z.optional(z.string()),
    gallery: z.optional(
      z.array(
        z.object({
          name: z.string(),
          url: z.string(),
        })
      )
    )
  })
  })

export const collections = { actors, games };