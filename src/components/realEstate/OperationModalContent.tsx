import React from "react";
import { VerticalStepper } from "./VerticalStepper";
import VerticalDivider from "../common/VerticalDivider";
import { Button } from "../common/Button";
import type { OperationItemModel } from "../../models/propertyUpdates";
import { openExternal } from "../../utils/openExternal";

const steps = [
  { label: "Submitted", date: "2024-07-01" },
  { label: "Review", date: "2024-07-02" },
  { label: "Interview", date: "2024-07-03" },
  { label: "Decision", date: "2024-07-04" },
  { label: "Onboarding", date: "2024-07-05" },
];

type OperationModalProps = {
  event: OperationItemModel;
  TAGS: Record<
    string,
    { label: string; icon: React.ReactNode; classes: string }
  >;
};

const mockDocuments = [
  { name: "Contract.pdf", fileUrl: "/previews/invoice1.pdf" },
  { name: "Invoice.pdf", fileUrl: "/previews/invoice3.png" },
  { name: "ID.png", fileUrl: "/previews/invoice2.jpg" },
];

const mockParticipants = ["John Doe", "Jane Smith", "Legal Team"];

const OperationModalContent: React.FC<OperationModalProps> = ({
  event,
  TAGS,
}) => (
  <div className="w-full max-w-5xl mx-auto flex flex-col h-[80vh]">
    <div className="sticky top-0 z-20 border-b-[1px] border-light-silver flex items-center justify-between px-6 py-4">
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-black">{event.headline}</span>
        <span className="text-sm text-gray-400 mt-0.5">{event.date}</span>
      </div>
      <div className="w-1/9 justify-start items-center flex rounded-sm bg-[linear-gradient(90deg,var(--color-brand-hover)_0%,transparent_100%,transparent_100%)] border-l-[1px]">
        <span className="ml-2 px-3 text-base">Paid</span>
      </div>
    </div>

    <div className="flex flex-1 overflow-hidden">
      <div className="flex-1 flex flex-col overflow-y-auto px-6 py-5 space-y-4">
        <div className="bg-ghost-white rounded-sm p-4 flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm font-semibold text-dim-gray">
              Participants:
            </span>
            <div className="flex flex-wrap gap-2">
              {mockParticipants.map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center px-3 gap-2 py-1 rounded-sm font-medium text-xs border-[1px] border-light-silver bg-white text-brand"
                  style={{ letterSpacing: 0.2 }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm font-semibold text-dim-gray">Topics:</span>
            <div className="flex flex-wrap gap-2">
              {event.tags.map((t, i) => {
                const tag = TAGS[t.type];
                if (!tag) return null;
                return (
                  <span
                    key={t.type + i}
                    className={`inline-flex items-center px-3 gap-2 py-1 rounded-sm font-medium text-xs bg-white border-[1px] border-light-silver ${tag.classes}`}
                    style={{ letterSpacing: 0.2 }}
                  >
                    {tag.icon}
                    {tag.label}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-white p-4 flex flex-col gap-2">
          <span className="block text-sm font-semibold text-dim-gray">
            Description
          </span>
          <p className="text-base leading-relaxed">{event.description}</p>
        </div>

        <div className="flex-1" />
      </div>

      <VerticalDivider className="hidden border-light-silver lg:block mx-3 h-auto self-stretch" />
      <div className="flex flex-col justify-start w-fit pr-6 pt-5">
        <VerticalStepper steps={steps} activeStep={2} />
      </div>
    </div>

    <div className="sticky bottom-0 z-20 bg-white border-t-[1px] border-light-silver px-6 py-3 flex flex-wrap gap-4 items-center">
      {mockDocuments.map((doc) => (
        <Button
          key={doc.name}
          variant="link"
          underline
          className="md:text-sm cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            openExternal(doc.fileUrl);
          }}
        >
          {doc.name}
        </Button>
      ))}
    </div>
  </div>
);

export default OperationModalContent;
