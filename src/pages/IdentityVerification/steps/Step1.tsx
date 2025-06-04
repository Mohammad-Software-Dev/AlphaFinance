import React from "react";
import finishIcon from "../../../assets/icons/checklist.png";

const Step1: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center w-[90px] h-[90px] rounded-full bg-[#F5F5F5]">
        <img
          src={finishIcon}
          alt="Finish Setup Icon"
          className=" object-contain"
        />
      </div>
      <h2 className="font-inter font-semibold text-[18px] text-black max-w-md">
        Finish your account setup.
      </h2>
      <p className="font-open-sans text-sm text-gray-600 max-w-md">
        To open account we’ll need a few more details. This information is used to ensure your account security.
      </p>
    </>
  );
};

export default Step1;
