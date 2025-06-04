import React from "react";
import icon1 from "../../../assets/icons/icon_1.png";
import icon2 from "../../../assets/icons/icon_2.png";
import icon3 from "../../../assets/icons/icon_3.png";

const Step3: React.FC = () => {
  return (
    <>
      <h2 className="font-inter font-bold text-[18px] text-black max-w-md">
        Where would you like to begin?
      </h2>

      <div className="flex flex-col space-y-5 w-full max-w-md">
        <button className="flex items-center space-x-3 border border-gray-300 rounded px-4 py-3 text-left text-sm hover:bg-gray-100 transition">
          <img src={icon1} alt="Build general wealth" className="w-[16px]" />
          <span>Build general wealth</span>
        </button>

        <button className="flex items-center space-x-3 border border-gray-300 rounded px-4 py-3 text-left text-sm hover:bg-gray-100 transition">
          <img src={icon2} alt="Save for retirement" className="w-[16px]" />
          <span>Save for retirement</span>
        </button>

        <button className="flex items-center space-x-3 border border-gray-300 rounded px-4 py-3 text-left text-sm hover:bg-gray-100 transition">
          <img src={icon3} alt="Grow your cash" className="w-[16px]" />
          <span>Grow your cash</span>
        </button>
      </div>
    </>
  );
};

export default Step3;
