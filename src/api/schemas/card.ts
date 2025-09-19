import { z } from "zod";

export const PropertyCardDto = z.object({
  code: z.string(),
  address: z.string(),
  image: z.string().nullable(),
  tags: z.array(z.string()),
  comingSoon: z.boolean(),
  metrics: z.object({
    tokenROI: z.number(),
    tokenPrice: z.number(),
    investors: z.number(),
  }),
  investmentPercentage: z.number(),
  viewers: z.number(),
});

export type PropertyCardDto = z.infer<typeof PropertyCardDto>;
export const PropertyCardListDto = z.array(PropertyCardDto);
