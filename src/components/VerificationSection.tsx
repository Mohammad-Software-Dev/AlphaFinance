// src/components/VerificationSection.tsx
import React, { useState } from "react";
import phoneIcon from "../assets/icons/phone.png";
import mailIcon from "../assets/icons/mail.png";
import TextInput from "./TextInput";
import { Button } from "./Button";    // ← import your Button

interface VerificationSectionProps {
  method: "sms" | "email";
  destination: string;
  onSubmitCode: (code: string) => void;
  onResend: () => void;
  onContact: () => void;
}

const VerificationSection: React.FC<VerificationSectionProps> = ({
  method,
  destination,
  onSubmitCode,
  onResend,
  onContact,
}) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | undefined>(undefined);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (code.trim() === "") {
      setError("Code is required.");
      return;
    }
    setError(undefined);
    onSubmitCode(code);
  }

  const iconSrc = method === "sms" ? phoneIcon : mailIcon;
  const placeholderText =
    method === "sms" ? "Type SMS code here" : "Type email code here";

  return (
    <div className="flex flex-col items-start space-y-4 w-full max-w-md">
      <div className="flex items-center justify-center">
        <img
          src={iconSrc}
          alt={`${method} icon`}
          className="max-w-[90px] object-contain"
        />
      </div>

      <h3 className="font-inter font-semibold text-lg text-black">
        Second step identity verification
      </h3>

      <p className="font-open-sans text-sm text-gray-600">
        Enter the {method === "sms" ? "SMS" : "Email"} verification code that we
        send to <br />
        <span className="font-inter font-semibold text-black">
          {destination}
        </span>
      </p>

      <form onSubmit={handleSubmit} className="w-full space-y-6">
        <TextInput
          id={`verification-${method}`}
          placeholder={placeholderText}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          error={error}
        />

        <div className="flex justify-between items-start w-full">
          {/* Primary “Submit” button */}
          <Button
            type="submit"
            variant="primary"
            size="sm"
            className="px-4"
          >
            Submit
          </Button>

          {/* Link-style “Resend” + “Contact us” */}
          <div className="flex flex-col items-end text-sm font-inter text-gray-600">
            <span>Don’t get the code?</span>
            <div className="space-x-2">
              <Button
                type="button"
                variant="link"
                size="sm"
                className="hover:underline p-0"
                onClick={onResend}
              >
                Resend
              </Button>
              <Button
                type="button"
                variant="link"
                size="sm"
                className="hover:underline p-0"
                onClick={onContact}
              >
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VerificationSection;
