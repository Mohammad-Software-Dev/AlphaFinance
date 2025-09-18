import { useQuery } from "@tanstack/react-query";
import { getPropertyDetails } from "../api/properties";
import {
  toLeftVM,
  toStatCardsVM,
  toAssetOverviewVM,
} from "../mappers/propertyDetailsMappers";
import type {
  PropertyDetailsModel,
  AssetOverviewVM,
  RealEstateLeftVM,
} from "../models/propertyDetails";

export function usePropertyDetails(code?: string) {
  const enabled = Boolean(code);
  const q = useQuery({
    queryKey: ["propertyDetails", code],
    queryFn: () => getPropertyDetails(code!),
    enabled,
    staleTime: 60_000,
  });

  const model: PropertyDetailsModel | undefined = q.data;

  const leftVM: RealEstateLeftVM | undefined = model
    ? toLeftVM(model)
    : undefined;
  const statCards = model ? toStatCardsVM(model) : [];
  const overviewVM: AssetOverviewVM | undefined = model
    ? toAssetOverviewVM(model)
    : undefined;

  return {
    loading: q.isLoading,
    error: q.isError ? (q.error as Error) : null,
    model,
    leftVM,
    statCards,
    overviewVM,
  };
}
