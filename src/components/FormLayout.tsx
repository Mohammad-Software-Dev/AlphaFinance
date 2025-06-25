import React from "react";

interface FormLayoutProps {
  leftImageSrc: string;
  leftImageAlt?: string;
  children: React.ReactNode;
}

const FormLayout: React.FC<FormLayoutProps> = ({
  leftImageSrc,
  leftImageAlt = "Illustration",
  children,
}) => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="hidden lg:flex flex-1 bg-gray-50 items-center justify-center overflow-hidden">
        <img src={leftImageSrc} alt={leftImageAlt} className="h-full" />
      </div>

      <div className="flex flex-1 bg-white items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full space-y-8">{children}</div>
      </div>
    </div>
  );
};

export default FormLayout;
