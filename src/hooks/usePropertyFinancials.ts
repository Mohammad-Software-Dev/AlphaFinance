import { useQuery } from "@tanstack/react-query";
import { getPropertyFinancials } from "../api/financials";
import type { PropertyFinancialsModel } from "../models/propertyFinancials";

export function usePropertyFinancials(code?: string) {
  return useQuery<PropertyFinancialsModel, Error>({
    queryKey: ["property-financials", code],
    queryFn: () => {
      if (!code) throw new Error("Missing property code");
      return getPropertyFinancials(code);
    },
    enabled: !!code,
    staleTime: 5 * 60 * 1000,
  });
}
