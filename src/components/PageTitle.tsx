import React from "react";

interface PageTitleProps {
  children: React.ReactNode;
  classNames?: string | null;
}

const PageTitle: React.FC<PageTitleProps> = ({ children, classNames }) => {
  return <h1 className={`font-extrabold ${classNames}`}>{children}</h1>;
};

export default PageTitle;
