import { api } from "./client";
import { PropertyDetailsDto } from "./schemas";
import type { PropertyDetailsModel } from "../models/propertyDetails";

export async function getPropertyDetails(
  code: string
): Promise<PropertyDetailsModel> {
  const res = await api.get(`/property-details/${code}`);
  const parsed = PropertyDetailsDto.parse(res.data);
  return parsed;
}
