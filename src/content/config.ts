import { defineCollection, z } from "astro:content";
// z = zod

const actors = defineCollection({
  schema: z.object({
    name: z.string(),
    player: z.string(),
    img: z.string(),
  })
});


export const collections = { actors };