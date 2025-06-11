import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Stories from "./Stories";
import AnimatedBurgerIcon from "../common/AnimatedBurgerIcon";

interface BlogsLayoutProps {
  children?: React.ReactNode;
}

const BlogsLayout: React.FC<BlogsLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen pt-[47px] flex flex-col md:flex-row relative">
      <button
        className="fixed top-5 right-5 z-50 md:hidden bg-white border border-light-silver rounded-lg p-2"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
      >
        <AnimatedBurgerIcon open={sidebarOpen} />
      </button>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
        />
      )}

      <div
        className={`
          fixed top-8 left-1 z-50 h-fit w-fit bg-transparent transition-transform duration-200
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
           md:translate-x-0 md:w-[8vw] md:max-w-[8vw] md:h-auto
          pl-0 md:pl-[26px]
          md:sticky md:top-[47px] md:self-start
        `}
      >
        <Sidebar />
      </div>

      <aside
        className="
          order-1 md:order-3
          w-full md:min-w-[25vw] md:max-w-[25vw]
          px-0 md:px-6
          border-l-0 md:border-l border-[var(--color-light-silver)]
          md:sticky md:top-[47px] self-start
          min-h-0 h-auto md:h-[calc(100vh-94px)]
        "
      >
        <Stories />
      </aside>

      <main
        className="
          order-2 md:order-2
          w-full
          md:px-5
          space-y-8 md:space-y-12
          overflow-x-hidden
        "
      >
        {children}
      </main>
    </div>
  );
};

export default BlogsLayout;
