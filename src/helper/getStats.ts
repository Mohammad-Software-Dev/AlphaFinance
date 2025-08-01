import type { PropertyType } from "../data/properties";
function parseNumber(val?: string) {
  // "297,000 AED" => 297000
  if (!val) return 0;
  return parseFloat(val.replace(/[^\d.]/g, "")) || 0;
}
export const getStats = (property: PropertyType) => [
  {
    title: "Asset Value",
    value: property.assetValue ?? "N/A",
    label: "Total",
    percent: property.assetValue && property.grossYield
      ? `+${(
          (parseNumber(property.grossYield) / parseNumber(property.assetValue)) *
          100
        ).toFixed(1)}%`
      : "+0%",
    percentColor: "teal" as const,
  },
  {
    title: "Asset Dividends",
    value: property.netYield ?? "N/A",
    label: "Last",
    percent: property.netYield && property.assetValue
      ? `+${(
          (parseNumber(property.netYield) / parseNumber(property.assetValue)) *
          100
        ).toFixed(1)}%`
      : "+0%",
    percentColor: "sand" as const,
    secondLabel: "Quarter",
  },
  {
    title: "Capital Growth",
    value: property.grossYield ?? "N/A",
    label: "Last",
    percent: property.grossYield && property.assetValue
      ? `+${(
          (parseNumber(property.grossYield) / parseNumber(property.assetValue)) *
          100
        ).toFixed(1)}%`
      : "+0%",
    percentColor: "teal" as const,
    secondLabel: "3 Months",
  },
  {
    title: "ROI",
    value: property.roi ?? "N/A",
    label: "Total",
    percent: property.roi ? `+${property.roi}` : "+0%",
    percentColor: "orange" as const,
    secondLabel: "ROI",
  },
];
