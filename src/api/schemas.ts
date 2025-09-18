import { z } from "zod";

const IconFeatureSchema = z.object({
  icon: z.string(),
  value: z.string(),
});

const StatsCardSchema = z.object({
  type: z.enum(["assetValue", "assetDividends", "capitalGrowth", "roi"]),
  label: z.string(),
  amount: z.number().nullable(),
  currency: z.string().nullable(),
  percentage: z.number().nullable(),
  infoLabel: z.string().nullable(),
});

const TokenEconomicsSchema = z.object({
  netYield: z.number(),
  grossYield: z.number(),
  tokenROI: z.number(),
  investors: z.number(),
  tokenPrice: z.number(),
  totalTokens: z.number(),
  availableTokens: z.number(),
});

export const PropertyGeneralDto = z.object({
  code: z.string(),
  address: z.string(),
  image: z.string().nullable(),
  tags: z.array(z.string()),
  comingSoon: z.boolean().nullable(),
  promoFeatures: z.array(z.string()),
  features: z.array(z.string()),
  iconFeatures: z.array(IconFeatureSchema),
  statsCards: z.array(StatsCardSchema),
  tokenEconomics: TokenEconomicsSchema,
});

const CommunitySchema = z.object({
  text: z.string().nullable(),
  propertyImage: z.string().nullable(),
  map: z.array(z.object({ lat: z.number(), lng: z.number() })),
});

export const PropertyInfoDto = z.object({
  features: z.array(z.string()),
  details: z.array(z.string()),
  description: z.string().nullable(),
  community: CommunitySchema,
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
});

export const PropertyDetailsDto = z.object({
  general: PropertyGeneralDto,
  info: PropertyInfoDto,
});

export type PropertyDetailsDto = z.infer<typeof PropertyDetailsDto>;
