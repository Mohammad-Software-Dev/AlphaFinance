// src/pages/BlogPostPage.tsx
import React from "react";
import BlogsLayout from "../../components/blogs/BlogsLayout";
// you’ll probably pull in some `useParams` / data-loader here

const BlogPostPage: React.FC = () => {
  // const { slug } = useParams<{ slug: string }>();
  // fetch/render the single post here…

  return (
    <BlogsLayout>{/* replace main slot with <SinglePost /> */}</BlogsLayout>
  );
};

export default BlogPostPage;
