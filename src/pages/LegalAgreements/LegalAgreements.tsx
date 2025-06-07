import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressHeader from "../../components/ProgressHeader";
import StepSidebar from "../../components/StepSidebar";
import { Button } from "../../components/Button";

const agreements = [
  "User Agreement",
  "Privacy Policy",
  "Cookie Policy",
  "Risk Disclosure",
  "Terms of Service",
  "Electronic Communications",
  "Fee Schedule",
  "Account Agreement",
];

const LegalAgreements: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <ProgressHeader step={2} showSkip={false} />
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex">
          <div className="hidden lg:block w-1/4">
            <StepSidebar currentStep="legal" />
          </div>
          <div className="hidden lg:block w-1/12" />
          <div className="w-full lg:w-2/3 flex flex-col space-y-6 items-start">
            <h2 className="font-inter font-semibold text-[18px] text-black">
              Alphaseed Legal Agreements
            </h2>
            <p className="font-open-sans text-sm text-gray-600 max-w-md">
              Lorem ipsum dolor sit amet consectetur. Scelerisque tempus congue
              egestas tristique arcu eu viverra. Sapien sit urna eget varius
              egestas. Donec ut faucibus velit nibh adipiscing.
            </p>
            <ul className="list-disc list-inside space-y-2">
              {agreements.map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-sm text-[#4A5568] hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex justify-between w-full max-w-md mt-8">
              <Button
                variant="secondary"
                size="sm"
                className="px-4"
                onClick={() => navigate(-1)}
              >
                Back
              </Button>
              <Button
                variant="primary"
                size="sm"
                className="px-4"
                onClick={() => navigate("/identity-verification")}
              >
                Agree
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalAgreements;
