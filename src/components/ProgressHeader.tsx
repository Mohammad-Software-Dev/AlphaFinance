import React from "react";
import { useNavigate } from "react-router-dom";
import backArrow from "../assets/icons/back-arrow.png";
import Logo from "./Logo";

interface ProgressHeaderProps {
  step: number;
  totalSteps?: number;
  onSkip?: () => void;
  onBack?: () => void;
}

const ProgressHeader: React.FC<ProgressHeaderProps> = ({
  step,
  totalSteps = 10,
  onSkip,
  onBack,
}) => {
  const navigate = useNavigate();
  const progressPercentage = Math.min(100, (step / totalSteps) * 100);

  return (
    <div className="w-full">
      <div className="w-full px-8 py-2 grid grid-cols-3 items-center">
        <div className="flex justify-start items-center space-x-2">
          <button
            onClick={onBack || (() => navigate("/signin"))}
            className="flex items-center space-x-2 hover:underline"
          >
            <img src={backArrow} alt="Back" className="w-4 h-4" />
            <span className="text-sm font-inter text-gray-700">Log out</span>
          </button>
        </div>

        <div className="flex justify-center items-center">
          <Logo small />
        </div>

        <div className="flex justify-end items-center">
          <button
            onClick={onSkip || (() => navigate("/dashboard"))}
            className="text-sm font-inter text-gray-700 hover:underline"
          >
            Skip
          </button>
        </div>
      </div>

      <div className="w-full h-[2px] bg-gray-200">
        <div
          className="h-full bg-[#8496E7] transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressHeader;
