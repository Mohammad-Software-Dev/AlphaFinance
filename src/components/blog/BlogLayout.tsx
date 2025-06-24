import React from "react";
import GeneralLayout from "../layouts/GeneralLayout";
import Stories from "./Stories";

interface BlogLayoutProps {
  children?: React.ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => (
  <GeneralLayout rightAside={<Stories />}>{children}</GeneralLayout>
);

export default BlogLayout;
