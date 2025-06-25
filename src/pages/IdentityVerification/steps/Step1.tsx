import React from "react";
import ChecklistIcon from "../../../assets/icons/checklist.svg?react";

const Step1: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center w-[90px] h-[90px] rounded-full bg-[#F5F5F5]">
        <ChecklistIcon className="w-full h-full object-contain" />
      </div>
      <h2 className="font-inter font-semibold text-[18px] text-black max-w-md">
        Finish your account setup.
      </h2>
      <p className="font-open-sans text-sm text-dim-gray max-w-md">
        To open account we’ll need a few more details. This information is used
        to ensure your account security.
      </p>
    </>
  );
};

export default Step1;
