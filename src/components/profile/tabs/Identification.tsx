import React from "react";
import { Button } from "../../common/Button";

const Identification: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 max-w-4xl">
      <div>
        <h3 className="text-xl font-semibold">Identification Center</h3>
        <p className="text-sm ui-text-muted mt-2">
          Complete your verification steps to unlock the full demo onboarding
          journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <section className="border ui-border-subtle rounded-sm p-5 ui-surface">
          <h4 className="text-base font-semibold">Account Verification</h4>
          <p className="text-sm ui-text-muted mt-2">
            Verify email and phone via one-time codes.
          </p>
          <div className="mt-4">
            <Button to="/account-verification" variant="secondary" size="sm">
              Open Flow
            </Button>
          </div>
        </section>

        <section className="border ui-border-subtle rounded-sm p-5 ui-surface">
          <h4 className="text-base font-semibold">Identity Verification</h4>
          <p className="text-sm ui-text-muted mt-2">
            Run through KYC-style identity steps and documents.
          </p>
          <div className="mt-4">
            <Button to="/identity-verification" variant="secondary" size="sm">
              Open Flow
            </Button>
          </div>
        </section>
      </div>

      <section className="border ui-border-subtle rounded-sm p-5 ui-surface-subtle">
        <h4 className="text-base font-semibold">What this unlocks</h4>
        <ul className="list-disc ml-5 mt-3 text-sm ui-text-muted space-y-1">
          <li>Investor profile completion route</li>
          <li>End-to-end onboarding walkthrough</li>
          <li>Demo parity with account-related journeys</li>
        </ul>
      </section>
    </div>
  );
};

export default Identification;
