import { z } from "zod";
import { StatCard } from "./shared";

export const PropertyDetailsDto = z.object({
  general: z.object({
    code: z.string(),
    address: z.string(),
    image: z.string().nullable(),
    tags: z.array(z.string()),
    comingSoon: z.boolean().nullable(),

    promoFeatures: z.array(z.string()),
    features: z.array(z.string()),

    iconFeatures: z.array(
      z.object({
        icon: z.string(),
        value: z.string(),
      })
    ),

    statsCards: z.array(StatCard),

    tokenEconomics: z.object({
      netYield: z.number(),
      grossYield: z.number(),
      tokenROI: z.number(),
      investors: z.number(),
      tokenPrice: z.number(),
      totalTokens: z.number(),
      availableTokens: z.number(),
    }),
  }),

  info: z.object({
    features: z.array(z.string()),
    details: z.array(z.string()),
    description: z.string().nullable(),
    community: z.object({
      text: z.string().nullable(),
      propertyImage: z.string().nullable(),
      map: z.array(z.object({ lat: z.number(), lng: z.number() })),
    }),
    amenities: z.array(z.string()),
    management: z.object({
      propertyDeveloper: z.object({
        name: z.string().nullable(),
        logo: z.string().nullable(),
      }),
      propertyManagement: z.object({
        name: z.string().nullable(),
        logo: z.string().nullable(),
      }),
      facilityManagement: z.object({
        name: z.string().nullable(),
        logo: z.string().nullable(),
      }),
    }),
  }),
});

export type PropertyDetailsDto = z.infer<typeof PropertyDetailsDto>;
