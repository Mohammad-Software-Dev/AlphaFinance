import React from "react";
import Icon1 from "../../../assets/icons/icon_1.svg?react";
import Icon2 from "../../../assets/icons/icon_2.svg?react";
import Icon3 from "../../../assets/icons/icon_3.svg?react";

const Step3: React.FC = () => {
  return (
    <>
      <h2 className="font-inter font-bold text-[18px] text-black max-w-md">
        Where would you like to begin?
      </h2>

      <div className="flex flex-col space-y-5 w-full max-w-md">
        <button className="flex items-center space-x-3 border border-gray-300 rounded px-4 py-3 text-left text-sm hover:bg-gray-100 transition">
          <Icon1 className="w-[16px]" title="Build general wealth" />
          <span>Build general wealth</span>
        </button>

        <button className="flex items-center space-x-3 border border-gray-300 rounded px-4 py-3 text-left text-sm hover:bg-gray-100 transition">
          <Icon2 className="w-[16px]" title="Save for retirement" />
          <span>Save for retirement</span>
        </button>

        <button className="flex items-center space-x-3 border border-gray-300 rounded px-4 py-3 text-left text-sm hover:bg-gray-100 transition">
          <Icon3 className="w-[16px]" title="Grow your cash" />
          <span>Grow your cash</span>
        </button>
      </div>
    </>
  );
};

export default Step3;
