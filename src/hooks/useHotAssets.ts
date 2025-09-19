import { useQuery } from "@tanstack/react-query";
import { getPropertyCards } from "../api/propertyCards";
import {
  cardToProps,
  type RealEstateCardProps,
} from "../mappers/propertyCardMappers";

export function useHotAssets() {
  const q = useQuery({
    queryKey: ["property-cards"],
    queryFn: getPropertyCards,
    staleTime: 60_000,
  });

  const cards: RealEstateCardProps[] = (q.data ?? []).map(cardToProps);

  return {
    loading: q.isLoading,
    error: q.isError ? (q.error as Error) : null,
    cards,
  };
}
