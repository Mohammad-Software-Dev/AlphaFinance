import { api } from "./client";
import { BlogDto } from "./schemas";
import type { BlogModel } from "../models/blog";

export async function getBlog(): Promise<BlogModel> {
  const res = await api.get("/blog");
  return BlogDto.parse(res.data);
}
