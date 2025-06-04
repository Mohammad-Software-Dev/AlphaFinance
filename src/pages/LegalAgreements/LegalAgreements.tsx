import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressHeader from "../../components/ProgressHeader";
import StepSidebar from "../../components/StepSidebar";

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
      <ProgressHeader step={8} />
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
              Lorem ipsum dolor sit amet consectetur. Scelerisque tempus congue egestas tristique arcu eu viverra. Sapien sit urna eget varius egestas. Donec ut faucibus velit nibh adipiscing.
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
              <button
                onClick={() => navigate(-1)}
                className="border border-gray-300 rounded px-4 py-2 text-sm font-inter hover:bg-gray-100 transition"
              >
                Back
              </button>
              <button
                onClick={() => navigate("/identity-verification")}
                className="bg-black text-white rounded px-4 py-2 text-sm font-inter font-medium hover:opacity-90 transition"
              >
                Agree
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalAgreements;
