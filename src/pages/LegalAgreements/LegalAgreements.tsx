// src/pages/LegalAgreements/LegalAgreements.tsx
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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

const agreementContent: Record<string, React.ReactNode> = {
  "User Agreement": (
    <>
      <h4 className="font-inter font-semibold text-lg">1. Introduction</h4>
      <p>
        Welcome to AlphaSeed. By using our services, you agree to the following
        terms and conditions:
      </p>

      <h4 className="font-inter font-semibold text-lg">2. Your Account</h4>
      <ul className="list-disc list-inside space-y-2">
        <li>Eligibility: You must be at least 18 years old.</li>
        <li>
          Accuracy: You agree to provide accurate and complete information.
        </li>
        <li>
          Security: You are responsible for safeguarding your login credentials.
        </li>
      </ul>

      <h4 className="font-inter font-semibold text-lg">3. Fees & Charges</h4>
      <p>
        All fees associated with your account are described in our{" "}
        <strong>Fee Schedule</strong>. You agree to pay all applicable fees
        promptly.
      </p>

      <h4 className="font-inter font-semibold text-lg">4. Privacy</h4>
      <p>
        Your personal data is governed by our <strong>Privacy Policy</strong>,
        which explains how we collect, use, and store your information.
      </p>

      <h4 className="font-inter font-semibold text-lg">5. Termination</h4>
      <ul className="list-decimal list-inside space-y-2">
        <li>Either party may terminate this agreement with 30 days’ notice.</li>
        <li>
          We reserve the right to suspend or close accounts for violations.
        </li>
      </ul>

      <h4 className="font-inter font-semibold text-lg">6. Contact Us</h4>
      <p>
        Questions? Email{" "}
        <a
          href="mailto:support@alphaseed.com"
          className="text-[var(--color-brand)] hover:underline"
        >
          support@alphaseed.com
        </a>
        .
      </p>
    </>
  ),

  "Privacy Policy": (
    <>
      <h4 className="font-inter font-semibold text-lg">1. Data Collection</h4>
      <p>
        We collect information you provide directly, and usage data when you
        interact with our services.
      </p>

      <h4 className="font-inter font-semibold text-lg">
        2. Use of Information
      </h4>
      <ul className="list-disc list-inside space-y-2">
        <li>To provide and maintain our services.</li>
        <li>To communicate updates and offers.</li>
        <li>To improve user experience.</li>
      </ul>

      <h4 className="font-inter font-semibold text-lg">3. Sharing</h4>
      <p>
        We do not sell your personal data. We may share it with service
        providers under NDA.
      </p>
    </>
  ),

  "Cookie Policy": <p>Cookie Policy content goes here.</p>,
  "Risk Disclosure": <p>Risk Disclosure content goes here.</p>,
  "Terms of Service": <p>Terms of Service content goes here.</p>,
  "Electronic Communications": (
    <p>Electronic Communications content goes here.</p>
  ),
  "Fee Schedule": <p>Fee Schedule content goes here.</p>,
  "Account Agreement": <p>Account Agreement content goes here.</p>,
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const modalVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 25 },
  },
};

const LegalAgreements: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setOpen(null);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [open]);

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
            <h2 className="font-inter font-semibold  text-black">
              Alphaseed Legal Agreements
            </h2>
            <p className="font-open-sans text-sm text-black max-w-md">
              Lorem ipsum dolor sit amet consectetur. Scelerisque tempus congue
              egestas tristique arcu eu viverra.
            </p>
            <ul className="list-disc list-inside px-4 space-y-2">
              {agreements.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => setOpen(item)}
                    className="text-sm text-granite-gray hover:underline"
                  >
                    {item}
                  </button>
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

      {/* modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <motion.div
              ref={modalRef}
              className="bg-white rounded-[4px] shadow-xl w-[90%] max-w-2xl max-h-[90vh] flex flex-col overflow-hidden"
              variants={modalVariants}
            >
              {/* header */}
              <div className="sticky top-0 px-6 py-4 border-b bg-white flex justify-between items-center">
                <h3 className="font-inter font-semibold text-lg">{open}</h3>
                <button
                  onClick={() => setOpen(null)}
                  className="text-gray-500 hover:text-gray-800 text-xl"
                >
                  &times;
                </button>
              </div>
              {/* content */}
              <div className="px-6 py-4 overflow-y-auto text-sm font-open-sans text-gray-700 space-y-6 flex-1">
                {agreementContent[open]}
              </div>
              {/* footer */}
              <div className="px-6 py-4 flex justify-end">
                <Button
                  variant="primary"
                  size="sm"
                  className="px-4"
                  onClick={() => setOpen(null)}
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LegalAgreements;
