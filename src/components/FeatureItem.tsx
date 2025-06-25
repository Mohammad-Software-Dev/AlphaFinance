import React from "react";
import CheckIcon from "../assets/icons/check.svg?react";

interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => {
  return (
    <div className="flex space-x-3">
      <CheckIcon className="w-6 h-6 flex-shrink-0" />
      <div>
        <p className="font-inter font-semibold text-base text-[#282C32]">
          {title}
        </p>
        <p className="font-open-sans font-normal text-sm text-dim-gray mt-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureItem;
