import React from "react";
import Sidebar from "../Sidebar";

import Stories from "./Stories";

interface BlogsLayoutProps {
  children?: React.ReactNode;
}

const BlogsLayout: React.FC<BlogsLayoutProps> = ({ children }) => (
  <div className="min-h-screen pt-[47px]  flex">
    {/* 1) Sidebar slot with “cushion” and sticky */}
    <div className=" min-w-[8vw] max-w-[8vw] px-[26px] sticky top-[47px] self-start">
      <Sidebar />
    </div>

    {/* 2) Main content */}
    <main className="px-5 space-y-12 overflow-x-hidden">{children}</main>

    {/* 3) Stories & interviews */}
    <aside className="px-6 border-l border-[var(--color-light-silver)] sticky top-[47px] self-start min-w-[25vw] max-w-[25vw] min-h-0 h-[calc(100vh-94px)]">
      <Stories />
    </aside>
  </div>
);

export default BlogsLayout;
