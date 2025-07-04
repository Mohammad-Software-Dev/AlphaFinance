import React from "react";
import GeneralLayout from "../layouts/GeneralLayout";
import Stories from "./Stories";
import VerticalDivider from "../common/VerticalDivider";

interface BlogLayoutProps {
  children?: React.ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => (
  <GeneralLayout>
    <div className="flex flex-col lg:flex-row">
      <section className="w-full lg:w-3/4  order-2 lg:order-1">
        {children}
      </section>
      <VerticalDivider className="hidden lg:order-2 border-light-silver lg:block mx-6 h-auto self-stretch min-h-[600px]" />
      <section
        className="w-full lg:w-1/4
            order-1 lg:order-3
            lg:sticky lg:top-[47px] self-start
            min-h-0 h-auto lg:h-[calc(100vh-94px)]
      "
      >
        <Stories />
      </section>
    </div>
  </GeneralLayout>
);

export default BlogLayout;
