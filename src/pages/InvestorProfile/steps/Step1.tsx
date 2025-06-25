import React from "react";
import InvestorProfileIcon from "../../../assets/icons/investor-profile.svg?react";

const Step1Intro: React.FC = () => (
  <>
    <div className="flex items-center justify-center w-[90px] h-[90px] rounded-full bg-[#F5F5F5]">
      <InvestorProfileIcon className="p-2 object-contain w-full h-full" />
    </div>
    <h2 className="font-inter font-bold text-[18px] text-black max-w-sm">
      Fine, let’s work together to create a personalized investing plan.
    </h2>
    <p className="font-open-sans text-sm text-dim-gray max-w-md">
      Lorem ipsum dolor sit amet consectetur. Id amet amet diam sit mi lectus
      augue tempor.
    </p>
  </>
);

export default Step1Intro;
