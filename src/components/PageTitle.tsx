import React from "react";

interface PageTitleProps {
  children: React.ReactNode;
}

const PageTitle: React.FC<PageTitleProps> = ({ children }) => {
  return <h2 className="page-title">{children}</h2>;
};

export default PageTitle;
