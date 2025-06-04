import React from "react";
import investorProfileIcon from "../../../assets/icons/investor-profile.png";

const Step1Intro: React.FC = () => (
  <>
    <div className="flex items-center justify-center w-[90px] h-[90px] rounded-full bg-[#F5F5F5]">
      <img
        src={investorProfileIcon}
        alt="Investor Icon"
        className="p-2 object-contain"
      />
    </div>
    <h2 className="font-inter font-bold text-[18px] text-black max-w-sm">
      Fine, let’s work together to create a personalized investing plan.
    </h2>
    <p className="font-open-sans text-sm text-gray-600 max-w-md">
      Lorem ipsum dolor sit amet consectetur. Id amet amet diam sit mi lectus augue tempor.
    </p>
  </>
);

export default Step1Intro;
