import React from "react";
import  checkIcon  from "../assets/icons/check.png";

interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => {
  return (
    <div className="flex space-x-3">
   <div className="flex-shrink-0">
        <img
          src={checkIcon}
          alt=""
          className="w-6 h-6"
        />
      </div>
      <div>
        <p className="font-inter font-semibold text-base text-[#282C32]">
          {title}
        </p>
        <p className="font-open-sans font-normal text-sm text-gray-600 mt-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureItem;
