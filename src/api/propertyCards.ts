import { api } from "./client";
import { PropertyCardListDto } from "./schemas";
import type { PropertyCardModel } from "../models/propertyCard";

export async function getPropertyCards(): Promise<PropertyCardModel[]> {
  const res = await api.get("/property-cards");
  return PropertyCardListDto.parse(res.data);
}
