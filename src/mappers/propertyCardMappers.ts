import type { PropertyCardModel } from "../models/propertyCard";

export type RealEstateCardProps = {
  code: string;
  title: string;
  roi: string;
  price: string;
  investors: number;
  foundedPercent: number;
  available: number;
  views: number;
  status?: string;
  comingSoon?: boolean;
  image?: string;
};

export function cardToProps(m: PropertyCardModel): RealEstateCardProps {
  const status = m.tags[0] ?? "DXB";
  const roi = `${m.metrics.tokenROI.toFixed(1)}%`;
  const price = `AED ${m.metrics.tokenPrice.toLocaleString()}`;

  return {
    code: m.code,
    title: m.address,
    roi,
    price,
    investors: m.metrics.investors,
    foundedPercent: m.investmentPercentage,
    available: 0,
    views: m.viewers,
    status,
    comingSoon: m.comingSoon,
  };
}
