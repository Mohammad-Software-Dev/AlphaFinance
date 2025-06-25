import React from "react";
import { useNavigate } from "react-router-dom";
import BackArrowIcon from "../../assets/icons/back-arrow.svg?react";
import Logo from "../Logo";

interface ProgressHeaderProps {
  step: number;
  totalSteps?: number;
  onSkip?: () => void;
  onBack?: () => void;
  showSkip?: boolean;
}

const ProgressHeader: React.FC<ProgressHeaderProps> = ({
  step,
  totalSteps = 5,
  onSkip,
  onBack,
  showSkip = true,
}) => {
  const navigate = useNavigate();
  const progressPercentage = Math.min(100, (step / totalSteps) * 100);

  return (
    <div className="w-full">
      <div className="w-full px-8 py-2 grid grid-cols-3 items-center ">
        <div className="flex justify-start items-center space-x-2 ">
          <button
            onClick={onBack || (() => navigate("/signin"))}
            className="flex items-center space-x-2 hover:underline"
          >
            <BackArrowIcon className="w-4 h-4" />
            <span className="hidden md:block text-sm font-inter text-dim-gray ">
              Log out
            </span>
          </button>
        </div>

        <div className="flex justify-center items-center">
          <Logo small={true} />
        </div>

        <div className="flex justify-end items-center">
          {showSkip && (
            <button
              onClick={onSkip || (() => navigate("/dashboard"))}
              className="text-sm font-inter text-dim-gray hover:underline"
            >
              Skip
            </button>
          )}
        </div>
      </div>

      <div className="w-full h-[2px] bg-gray-200">
        <div
          className="h-full bg-brand transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressHeader;
