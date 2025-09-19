import { api } from "./client";
import { BlogDto } from "./schemas";
import type { BlogModel } from "../models/blog";
import type { SubscribeModel, WorldNewsModel } from "../models/blog";

export type BlogSidebarModel = {
  subscribe: SubscribeModel;
  worldNews: WorldNewsModel;
};

export async function getBlog(): Promise<BlogModel> {
  const res = await api.get("/blog");
  return BlogDto.parse(res.data);
}

export async function getBlogSidebar(): Promise<BlogSidebarModel> {
  const res = await api.get("/blog-sidebar");
  return res.data as BlogSidebarModel;
}
