import React from "react";
import StepSidebar from "../../components/StepSidebar";
import VerificationSection from "../../components/VerificationSection";
import ProgressHeader from "../../components/ProgressHeader";
import { useNavigate } from "react-router-dom";
const AccountVerification: React.FC = () => {
  const phoneNumber = "+44 324 684 279";
  const emailAddress = "davidpeters@gmail.com";
  const navigate = useNavigate();

  const handleResendSms = () => console.log("Resend SMS");
  const handleResendEmail = () => console.log("Resend Email");
  const handleContact = () => console.log("Contact support");
  const handleNavigateNext = () => {
    navigate("/legal-agreements");
  };
  return (
    <div className="min-h-screen bg-white">
      <ProgressHeader step={1} showSkip={false} />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex">
          <div className="hidden lg:block w-1/4">
            <StepSidebar currentStep="account" />
          </div>
          <div className="hidden lg:block w-1/12" />
          <div className="w-full lg:w-2/3 space-y-24">
            <VerificationSection
              method="sms"
              destination={phoneNumber}
              onSubmitCode={handleNavigateNext}
              onResend={handleResendSms}
              onContact={handleContact}
            />
            <VerificationSection
              method="email"
              destination={emailAddress}
              onSubmitCode={handleNavigateNext}
              onResend={handleResendEmail}
              onContact={handleContact}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountVerification;
