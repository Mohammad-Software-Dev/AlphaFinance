import { useQuery } from "@tanstack/react-query";
import { getBlogSidebar } from "../api/blog";

export function useBlogSidebar() {
  return useQuery({
    queryKey: ["blog", "sidebar"],
    queryFn: getBlogSidebar,
  });
}
