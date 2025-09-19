export type PropertyCardMetrics = {
  tokenROI: number;
  tokenPrice: number;
  investors: number;
};

export type PropertyCardModel = {
  code: string;
  address: string;

  image: string | null;
  tags: string[];
  comingSoon: boolean;

  metrics: PropertyCardMetrics;

  investmentPercentage: number;
  viewers: number;
};
