import React from "react";

interface TwoColumnLayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({
  leftContent,
  rightContent,
}) => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      <div className="order-2 lg:order-none md:flex flex-1 items-center justify-center overflow-auto px-6 py-12 bg-gray-50">
        <div className="max-w-lg w-full space-y-8">{leftContent}</div>
      </div>
      <div className="order-1 lg:order-none flex flex-1 items-center justify-center px-4 sm:px-8 py-8 bg-white min-h-screen lg:min-h-0">
        <div className="w-full max-w-md space-y-8">{rightContent}</div>
      </div>
    </div>
  );
};

export default TwoColumnLayout;
