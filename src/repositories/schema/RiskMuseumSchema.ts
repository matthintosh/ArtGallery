import { z } from "zod";

/**
 * Schema for the collection response from the RiksMuseum API
 */
const ArtObjectSchema = z.object({
  id: z.string(),
  objectNumber: z.string(),
  title: z.string(),
  longTitle: z.string(),
  principalOrFirstMaker: z.string(),
  webImage: z.object({
    url: z.string(),
  }),
});

export const CollectionResponseSchema = z.object({
  artObjects: z.array(ArtObjectSchema),
});

export type ArtObject = z.infer<typeof ArtObjectSchema>;
export type CollectionResponse = z.infer<typeof CollectionResponseSchema>;
