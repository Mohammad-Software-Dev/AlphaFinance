import React, { useState } from "react";
import phoneIcon from "../assets/icons/phone.png";
import mailIcon from "../assets/icons/mail.png";
import TextInput from "./TextInput";

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
        Enter the {method === "sms" ? "SMS" : "Email"} verification code that we send to{" "}
          <br />
        <span className="font-inter font-semibold text-black">{destination}</span>
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
    <button 
      type="submit"
      className="bg-black text-white font-inter font-medium text-sm px-4 py-2 rounded"
    >
      Submit
    </button>

    <div className="flex flex-col items-end text-sm font-open-sans text-gray-600">
      <span>Don’t get the code?</span>
      <div className="space-x-2">
        <button
          onClick={onResend}
          className="text-[#8496E7] hover:underline"
        >
          Resend
        </button>
        <button
          onClick={onContact}
          className="text-[#8496E7] hover:underline"
        >
          Contact us
        </button>
      </div>
    </div>
  </div>
</form>

    </div>
  );
};

export default VerificationSection;
