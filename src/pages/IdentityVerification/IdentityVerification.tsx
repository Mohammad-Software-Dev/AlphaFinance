import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressHeader from "../../components/ProgressHeader";
import StepSidebar from "../../components/StepSidebar";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import Step6 from "./steps/Step6";
import Step7 from "./steps/Step7";
import Step8 from "./steps/Step8";
import Step9 from "./steps/Step9";
import { Button } from "../../components/Button";

const TOTAL_STEPS = 9;

const IdentityVerification: React.FC = () => {
  const [stepIndex, setStepIndex] = useState(1);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (stepIndex < TOTAL_STEPS) {
      setStepIndex((prev) => prev + 1);
    } else {
      navigate("/investor-profile");
    }
  };

  const handleBack = () => {
    if (stepIndex > 1) {
      setStepIndex((prev) => prev - 1);
    } else {
      navigate(-1);
    }
  };

  const renderStepContent = () => {
    switch (stepIndex) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      case 5:
        return <Step5 />;
      case 6:
        return <Step6 />;
      case 7:
        return <Step7 />;
      case 8:
        return <Step8 />;
      case 9:
        return <Step9 />;
      default:
        return (
          <p className="text-sm text-gray-500">
            Placeholder for step {stepIndex}. Implement remaining screens here.
          </p>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <ProgressHeader step={3} onSkip={() => navigate("/investor-profile")} />
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex">
          <div className="hidden lg:block w-1/4">
            <StepSidebar currentStep="identity" />
          </div>
          <div className="hidden lg:block w-1/12" />
          <div className="w-full lg:w-2/3 flex flex-col space-y-6 items-start">
            {renderStepContent()}
            <div className="flex justify-between w-full max-w-md mt-8">
              <Button
                variant="secondary"
                size="sm"
                className="px-4"
                onClick={handleBack}
              >
                Back
              </Button>

              <Button
                variant="primary"
                size="sm"
                className="px-4"
                onClick={handleContinue}
              >
                {stepIndex < TOTAL_STEPS ? "Continue" : "Finish"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentityVerification;
