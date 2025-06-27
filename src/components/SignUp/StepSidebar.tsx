import React from "react";
import CheckIcon from "../../assets/icons/simple-check.svg?react";

interface StepSidebarProps {
  currentStep:
    | "account"
    | "legal"
    | "identity"
    | "real-estate-assets"
    | "start";
}

const steps = [
  { key: "account", label: "Account Verification" },
  { key: "legal", label: "Legal Agreement" },
  { key: "identity", label: "Identity Verification" },
  { key: "real-estate-assets", label: "Investor Profile" },
  { key: "start", label: "Start Investing" },
] as const;

const StepSidebar: React.FC<StepSidebarProps> = ({ currentStep }) => {
  const currentIndex = steps.findIndex((s) => s.key === currentStep);

  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-xs">
      <ul className="space-y-5">
        {steps.map((step, index) => {
          const isCurrent = step.key === currentStep;
          const isCompleted = index < currentIndex;

          let icon = null;
          if (isCompleted) {
            icon = <CheckIcon className="w-4 h-4 mt-1" />;
          } else if (isCurrent) {
            icon = <span className="text-black text-lg leading-[1.1]">•</span>;
          } else {
            icon = <span className="w-4" />;
          }

          return (
            <li key={step.key} className="flex items-start space-x-2">
              {icon}
              <span
                className={`text-base font-inter ${
                  isCurrent
                    ? "text-black"
                    : isCompleted
                    ? "text-gray-400"
                    : "text-gray-300"
                }`}
              >
                {step.label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StepSidebar;
