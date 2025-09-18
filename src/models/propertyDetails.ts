export type StatCardType =
  | "assetValue"
  | "assetDividends"
  | "capitalGrowth"
  | "roi";

export type IconFeature = {
  icon: string;
  value: string;
};

export type StatsCard = {
  type: StatCardType;
  label: string;
  amount: number | null;
  currency: string | null;
  percentage: number | null;
  infoLabel: string | null;
};

export type TokenEconomics = {
  netYield: number;
  grossYield: number;
  tokenROI: number;
  investors: number;
  tokenPrice: number;
  totalTokens: number;
  availableTokens: number;
};

export type PropertyGeneral = {
  code: string;
  address: string;
  image: string | null;
  tags: string[];
  comingSoon: boolean | null;

  promoFeatures: string[];
  features: string[];
  iconFeatures: IconFeature[];
  statsCards: StatsCard[];
  tokenEconomics: TokenEconomics;
};

export type PropertyCommunity = {
  text: string | null;
  propertyImage: string | null;
  map: Array<{ lat: number; lng: number }>;
};

export type PropertyInfo = {
  features: string[];
  details: string[];
  description: string | null;
  community: PropertyCommunity;
  amenities: string[];
  management: {
    propertyDeveloper: { name: string | null; logo: string | null };
    propertyManagement: { name: string | null; logo: string | null };
    facilityManagement: { name: string | null; logo: string | null };
  };
};

export type PropertyDetailsModel = {
  general: PropertyGeneral;
  info: PropertyInfo;
};

export type RealEstateLeftVM = {
  image?: string;
  statusTag?: string;
  comingSoon?: boolean;
  assetValueText?: string;
  title: string;
  promoChips: string[];
  quickFacts: {
    rooms?: string;
    bedrooms?: string;
    bathrooms?: string;
    unitType?: string;
    livingRooms?: string;
    reviews?: string;
  };
  bedSummary?: string;
  bathSummary?: string;
  areaText?: string;
  hasParking?: boolean;
};

export type StatCardVM = {
  title: string;
  value: string;
  label: string;
  secondLabel?: string;
  percent: string;
  percentColor: "teal" | "sand" | "orange";
};

export type AssetOverviewVM = {
  netYieldText: string;
  grossYieldText: string;
  tokenRoiPct: number;
  tokenPrice: number;
  investors: number;
  totalTokens: number;
  availableTokens: number;
};
