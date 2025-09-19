import { api } from "./client";
import { PropertyFinancialsDto } from "./schemas";
import type { PropertyFinancialsModel } from "../models/propertyFinancials";

export async function getPropertyFinancials(
  code: string
): Promise<PropertyFinancialsModel> {
  const res = await api.get(`/property-financials/${code}`);
  return PropertyFinancialsDto.parse(res.data);
}
