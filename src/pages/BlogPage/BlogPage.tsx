import React from "react";
import BlogLayout from "../../components/blog/BlogLayout";
import RecentPosts from "../../components/blog/RecentPosts";
import AllPosts from "../../components/blog/AllPosts";

import { useBlog } from "../../hooks/useBlog";

const BlogPage: React.FC = () => {
  const { data, isLoading, error } = useBlog();
  if (isLoading) return <div>Loading…</div>;
  if (error || !data)
    return <div className="text-red-600">{error?.message ?? "No data"}</div>;

  return (
    <BlogLayout>
      <>
        <RecentPosts data={data.recentPosts} />
        <AllPosts data={data.allPosts} />
      </>
    </BlogLayout>
  );
};
export default BlogPage;
