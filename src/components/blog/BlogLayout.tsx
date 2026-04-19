import React from "react";
import GeneralLayout from "../layouts/GeneralLayout";
import Stories from "./Stories";
import VerticalDivider from "../common/VerticalDivider";
import { useBlogSidebar } from "../../hooks/useBlogSidebar";

interface BlogLayoutProps {
  children?: React.ReactNode;
  showStories?: boolean;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({
  children,
  showStories = true,
}) => {
  const { data, isLoading, error } = useBlogSidebar();

  return (
    <GeneralLayout>
      <div className="flex flex-col lg:flex-row">
        <section className="w-full lg:w-3/4 order-2 lg:order-1">
          {children}
        </section>

        {showStories && (
          <>
            <VerticalDivider className="hidden lg:order-2 border-light-silver lg:block mx-6 h-auto self-stretch min-h-[600px]" />
            <section
              className="w-full lg:w-1/4
                order-1 lg:order-3
                lg:sticky lg:top-[47px] self-start
                min-h-0 h-auto lg:h-[calc(100vh-94px)]
              "
            >
              {isLoading && (
                <div className="p-4 text-sm ui-text-muted">Loading…</div>
              )}
              {error && (
                <div className="p-4 text-sm text-red-600">
                  {(error as Error).message}
                </div>
              )}
              {data && (
                <Stories
                  subscribe={data.subscribe}
                  worldNews={data.worldNews}
                />
              )}
            </section>
          </>
        )}
      </div>
    </GeneralLayout>
  );
};

export default BlogLayout;
