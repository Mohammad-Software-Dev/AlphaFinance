import { useQuery } from "@tanstack/react-query";
import { getPropertyUpdates } from "../api/updates";
import type { PropertyUpdatesModel } from "../models/propertyUpdates";

export function usePropertyUpdates(code?: string) {
  return useQuery<PropertyUpdatesModel, Error>({
    queryKey: ["property-updates", code],
    queryFn: () => getPropertyUpdates(code as string),
    enabled: !!code,
    staleTime: 5 * 60 * 1000,
  });
}
