import React, { useState } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import PhoneIcon from "../assets/icons/phone.svg?react";
import MailIcon from "../assets/icons/mail.svg?react";
import TextInput from "./common/TextInput";
import { Button } from "./common/Button";

import checkCircle from "../assets/animations/check-circle_1.json";

interface VerificationSectionProps {
  method: "sms" | "email";
  destination: string;
  verified: boolean;
  onSubmitCode: (code: string) => void;
  onResend: () => void;
  onContact: () => void;
}

const VerificationSection: React.FC<VerificationSectionProps> = ({
  method,
  destination,
  verified,
  onSubmitCode,
  onResend,
  onContact,
}) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState<string>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) {
      setError("Code is required.");
      return;
    }
    setError(undefined);
    onSubmitCode(code);
  };

  const iconSrc =
    method === "sms" ? (
      <PhoneIcon className="max-w-[90px]" />
    ) : (
      <MailIcon className="max-w-[90px]" />
    );

  const placeholderText =
    method === "sms" ? "Type SMS code here" : "Type email code here";

  return (
    <div className="flex flex-col items-start space-y-4 w-full max-w-md">
      <div className="flex items-center justify-center">{iconSrc}</div>

      <h4>Second step identity verification</h4>
      <p className="font-open-sans text-sm text-black">
        Enter the {method === "sms" ? "SMS" : "Email"} verification code that we
        send to <br />
        <span className="font-inter font-semibold text-black">
          {destination}
        </span>
      </p>

      <form onSubmit={handleSubmit} className="w-full space-y-6">
        {!verified ? (
          <>
            <TextInput
              id={`verification-${method}`}
              placeholder={placeholderText}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              error={error}
            />

            <div className="flex justify-between items-start w-full">
              <Button
                type="submit"
                variant="primary"
                size="sm"
                className="px-4"
              >
                Submit
              </Button>
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
          </>
        ) : (
          /* Verified animation row */
          <div className="flex items-center justify-start w-full  py-4">
            <Lottie
              animationData={checkCircle}
              autoplay
              loop={false}
              style={{ width: 80, height: 80 }}
            />
            <motion.span
              className="font-inter font-semibold text-verified"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: -10, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Verified!
            </motion.span>
          </div>
        )}
      </form>
    </div>
  );
};

export default VerificationSection;
