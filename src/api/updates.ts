import { api } from "./client";
import { PropertyUpdatesDto } from "./schemas";
import type { PropertyUpdatesModel } from "../models/propertyUpdates";

export async function getPropertyUpdates(
  code: string
): Promise<PropertyUpdatesModel> {
  const res = await api.get(`/property-updates/${code}`);
  return PropertyUpdatesDto.parse(res.data);
}
