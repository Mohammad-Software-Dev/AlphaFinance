import { z } from "zod";

export const CurrencyCode = z.string(); // keep simple for now (e.g., "AED")
export const NullableStr = z.string().nullable();

export const StatCardType = z.enum([
  "assetValue",
  "assetDividends",
  "capitalGrowth",
  "roi",
]);

export const StatCard = z.object({
  type: StatCardType,
  label: z.string(),
  amount: z.number().nullable(),
  currency: CurrencyCode.nullable(),
  percentage: z.number().nullable(),
  infoLabel: z.string().nullable(),
});
