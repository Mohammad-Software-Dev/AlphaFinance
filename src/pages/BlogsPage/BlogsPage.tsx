import React from "react";
import BlogsLayout from "../../components/blogs/BlogsLayout";
import RecentPosts from "../../components/blogs/RecentPosts";
import AllPosts from "../../components/blogs/AllPosts";

const BlogsPage: React.FC = () => {
  return (
    <BlogsLayout>
      <>
        <RecentPosts />
        <AllPosts />
      </>
    </BlogsLayout>
  );
};

export default BlogsPage;
