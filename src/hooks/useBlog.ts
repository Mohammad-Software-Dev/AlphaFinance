import { useQuery } from "@tanstack/react-query";
import { getBlog } from "../api/blog";
import type { BlogModel } from "../models/blog";

export function useBlog() {
  return useQuery<BlogModel, Error>({
    queryKey: ["blog"],
    queryFn: getBlog,
    staleTime: 5 * 60 * 1000,
  });
}
