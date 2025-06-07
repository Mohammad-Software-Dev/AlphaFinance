// src/pages/AccountVerification/AccountVerification.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StepSidebar from "../../components/StepSidebar";
import VerificationSection from "../../components/VerificationSection";
import ProgressHeader from "../../components/ProgressHeader";
import { Button } from "../../components/Button";

const AccountVerification: React.FC = () => {
  const phoneNumber = "+44 324 684 279";
  const emailAddress = "davidpeters@gmail.com";
  const navigate = useNavigate();

  const [smsVerified, setSmsVerified] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);

  const bothVerified = smsVerified && emailVerified;

  return (
    <div className="min-h-screen bg-white">
      <ProgressHeader step={1} showSkip={false} />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex">
          <div className="hidden lg:block w-1/4">
            <StepSidebar currentStep="account" />
          </div>
          <div className="hidden lg:block w-1/12" />
          <div className="w-full lg:w-2/3 ">
            <div className="space-y-12">
              {" "}
              <VerificationSection
                method="sms"
                destination={phoneNumber}
                verified={smsVerified}
                onSubmitCode={() => setSmsVerified(true)}
                onResend={() => console.log("Resend SMS")}
                onContact={() => console.log("Contact support")}
              />
              <VerificationSection
                method="email"
                destination={emailAddress}
                verified={emailVerified}
                onSubmitCode={() => setEmailVerified(true)}
                onResend={() => console.log("Resend Email")}
                onContact={() => console.log("Contact support")}
              />
            </div>

            {/* Next button shown only when both verified */}
            {bothVerified && (
              <div className="flex justify-end lg:w-2/3 ">
                <Button
                  variant="primary"
                  size="sm"
                  className="px-4"
                  onClick={() => navigate("/legal-agreements")}
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountVerification;
