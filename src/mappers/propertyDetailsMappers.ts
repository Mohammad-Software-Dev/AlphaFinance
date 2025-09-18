import type {
  PropertyDetailsModel,
  RealEstateLeftVM,
  StatCardVM,
  AssetOverviewVM,
} from "../models/propertyDetails";
import sampleProperty from "../assets/images/sample-property.jpg";

// small helpers
const nf = new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 });

const currencyFmt = (
  amount: number | null | undefined,
  currency: string | null | undefined
) => {
  if (amount == null) return "N/A";
  const cur = currency ?? "AED";
  return `${nf.format(amount)} ${cur}`;
};

const percentFmt = (p: number | null | undefined) =>
  p == null ? "" : `${p.toFixed(1)}%`;

// map stat.type -> badge color + titles
const STAT_TITLE: Record<string, string> = {
  assetValue: "Asset Value",
  assetDividends: "Asset Dividends",
  capitalGrowth: "Capital Growth",
  roi: "ROI",
};

const STAT_BADGE: Record<string, "teal" | "sand" | "orange"> = {
  assetValue: "teal",
  capitalGrowth: "teal",
  assetDividends: "sand",
  roi: "orange",
};

export function toLeftVM(m: PropertyDetailsModel): RealEstateLeftVM {
  const g = m.general;
  const statusTag = g.tags.find((t) => t.toUpperCase() === "DXB") ?? g.tags[0];

  // parse iconFeatures into useful bits (best-effort)
  const bedSummary = g.iconFeatures.find((i) =>
    i.icon.toLowerCase().includes("bed")
  )?.value;
  const bathSummary = g.iconFeatures.find((i) =>
    i.icon.toLowerCase().includes("bath")
  )?.value;
  const areaText = g.iconFeatures.find((i) =>
    i.icon.toLowerCase().includes("area")
  )?.value;
  const hasParking = g.iconFeatures.some((i) =>
    i.icon.toLowerCase().includes("parking")
  );

  // quick facts (from promo/features—you may extend later)
  const quickFacts = {
    rooms: undefined,
    bedrooms: undefined,
    bathrooms: undefined,
    unitType: "Rental Unit in Dubai",
    livingRooms: undefined,
    reviews: undefined,
  };

  // If you store asset value as a card, pull its formatted text
  const assetCard = g.statsCards.find((c) => c.type === "assetValue");
  const assetValueText = assetCard
    ? currencyFmt(assetCard.amount, assetCard.currency)
    : undefined;

  return {
    // image: g.image ?? undefined,
    image: sampleProperty,
    statusTag,
    comingSoon: g.comingSoon ?? undefined,
    assetValueText,
    title: g.address,
    promoChips: g.promoFeatures,
    quickFacts,
    bedSummary,
    bathSummary,
    areaText,
    hasParking,
  };
}

export function toStatCardsVM(m: PropertyDetailsModel): StatCardVM[] {
  return m.general.statsCards.map((c) => {
    const title = STAT_TITLE[c.type] ?? c.label;
    const percent = c.percentage != null ? `+${c.percentage.toFixed(1)}%` : "";
    const value =
      c.type === "roi"
        ? percentFmt(c.amount) || percentFmt(c.percentage) || "—"
        : currencyFmt(c.amount, c.currency);

    return {
      title,
      value,
      label: c.infoLabel ?? "",
      secondLabel: undefined,
      percent,
      percentColor: STAT_BADGE[c.type] ?? "teal",
    };
  });
}

export function toAssetOverviewVM(m: PropertyDetailsModel): AssetOverviewVM {
  const t = m.general.tokenEconomics;
  return {
    netYieldText: currencyFmt(t.netYield, "AED"),
    grossYieldText: currencyFmt(t.grossYield, "AED"),
    tokenRoiPct: t.tokenROI,
    tokenPrice: t.tokenPrice,
    investors: t.investors,
    totalTokens: t.totalTokens,
    availableTokens: t.availableTokens,
  };
}
