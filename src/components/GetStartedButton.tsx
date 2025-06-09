import React from "react";
import ArrowIcon from "../assets/icons/arrow.svg?react";

interface GetStartedButtonProps {
  disabled?: boolean;
  loading?: boolean;
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({
  disabled,
  loading,
}) => (
  <button
    type="submit"
    disabled={disabled}
    className={`flex items-center bg-[#C9D7FD] rounded-[32px] p-1 font-inter font-medium text-[16px] transition ${
      disabled ? "opacity-60 cursor-not-allowed" : "hover:bg-[#b4c4f8]"
    }`}
  >
    <span className="text-[#1C1C1C] px-2">
      {loading ? "Submitting..." : "Get Started"}
    </span>
    <span className="ml-2 bg-[#1C1C1C] rounded-full p-2 flex items-center justify-center">
      <ArrowIcon className="w-4 h-4 text-white" />
    </span>
  </button>
);

export default GetStartedButton;
