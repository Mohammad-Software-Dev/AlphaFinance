import React from "react";
import BlogLayout from "../../components/blog/BlogLayout";
import RecentPosts from "../../components/blog/RecentPosts";
import AllPosts from "../../components/blog/AllPosts";

const BlogPage: React.FC = () => {
  return (
    <BlogLayout>
      <>
        <RecentPosts />
        <AllPosts />
      </>
    </BlogLayout>
  );
};

export default BlogPage;
