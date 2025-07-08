import React from "react";
import { VerticalStepper } from "./VerticalStepper";
import VerticalDivider from "../common/VerticalDivider";
import HorizontalDivider from "../common/HorizontalDivider";

const steps = [
  { label: "Submitted", date: "2024‑07‑01" },
  { label: "Review", date: "2024‑07‑02" },
  { label: "Interview", date: "2024‑07‑03" },
  { label: "Decision", date: "2024‑07‑04" },
  { label: "Onboarding", date: "2024‑07‑05" },
];

type OperationModalProps = {
  event: {
    title: string;
    date: string;
    desc: string;
    tags: string[];
  };
  TAGS: Record<
    string,
    { label: string; icon: React.ReactNode; classes: string }
  >;
};

const mockDocuments = [
  { name: "Contract.pdf" },
  { name: "Invoice.pdf" },
  { name: "ID.png" },
];

const mockParticipants = ["John Doe", "Jane Smith", "Legal Team"];

const OperationModalContent: React.FC<OperationModalProps> = ({
  event,
  TAGS,
}) => (
  <div className="w-full  mx-auto">
    {/* Header */}
    <div className="flex justify-between items-center mb-4 ">
      <h2 className="text-2xl font-bold text-black">{event.title}</h2>
      <span className="text-sm text-gray-400 pe-16">{event.date}</span>
    </div>

    <div className="flex flex-col md:flex-row min-h-[400px] ">
      {/* Left Section */}
      <div className="flex flex-col flex-1 min-w-0 ">
        {/* Participants */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-sm font-semibold text-dim-gray">
            Participants:
          </span>
          <div className="flex flex-wrap gap-2  ">
            {mockParticipants.map((p) => (
              <span
                key={p}
                className="inline-flex items-center px-3 gap-2 py-1 rounded-md font-medium text-xs border border-light-silver bg-white text-brand"
                style={{ letterSpacing: 0.2 }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-sm font-semibold text-dim-gray">Tags:</span>
          <div className="flex flex-wrap gap-2 ">
            {event.tags.map(
              (key) =>
                TAGS[key] && (
                  <span
                    key={key}
                    className={`inline-flex items-center px-3 gap-2 py-1 rounded-md font-medium text-xs border ${TAGS[key].classes}`}
                    style={{ letterSpacing: 0.2 }}
                  >
                    {TAGS[key].icon}
                    {TAGS[key].label}
                  </span>
                )
            )}
          </div>
        </div>
        <HorizontalDivider className=" border-light-silver self-stretch my-2" />
        {/* Description - fill available space */}
        <div className="mb-3 flex-1 overflow-auto">
          <span className="block text-sm font-semibold text-dim-gray mb-1">
            Description
          </span>
          <p className="text-base">{event.desc}</p>
        </div>

        {/* Documents (always at bottom) */}
        <div className="mt-auto mb-1">
          <span className="text-sm font-semibold text-dim-gray">Documents</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {mockDocuments.map((doc) => (
              <button
                key={doc.name}
                className="px-3 py-1 rounded border border-light-silver text-xs font-medium text-gray-700 bg-white hover:bg-brand/10 transition"
                type="button"
                tabIndex={-1}
              >
                {doc.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <VerticalDivider className="hidden border-light-silver lg:block mx-3 h-auto self-stretch " />
      {/* Right Section: Stepper */}
      <div className="flex flex-col justify-start w-fit ">
        <VerticalStepper steps={steps} activeStep={2} />
      </div>
    </div>
  </div>
);

export default OperationModalContent;
