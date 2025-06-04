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
    <div className="flex flex-col lg:flex-row min-h-screen">

      <div className="hidden lg:flex flex-1 bg-gray-50 items-center justify-center overflow-auto px-8 py-12">
       <div className="max-w-lg w-full space-y-8"> {leftContent}</div> 
      </div>


      <div className="flex flex-1 bg-white items-center justify-center px-4 sm:px-6 lg:px-8 overflow-auto">
        <div className="max-w-lg w-full space-y-8">{rightContent}</div>
      </div>
    </div>
  );
};

export default TwoColumnLayout;
