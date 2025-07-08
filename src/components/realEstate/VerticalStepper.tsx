import React from "react";
import { TiTick } from "react-icons/ti";

type Step = { label: string; date: string };
type Props = { steps: Step[]; activeStep: number };

export const VerticalStepper: React.FC<Props> = ({ steps, activeStep }) => (
  <div className="flex flex-col">
    {steps.map((step, idx) => {
      const completed = idx < activeStep;
      const active = idx === activeStep;
      const isLast = idx === steps.length - 1;

      return (
        <div key={idx} className="flex items-start">
          <div className="flex flex-col items-center mr-4">
            <div
              className={`w-6 h-6 flex items-center justify-center rounded-full text-white text-sm ${
                completed || active ? "bg-brand" : "bg-light-silver"
              }`}
            >
              {completed ? <TiTick /> : idx + 1}
            </div>

            {!isLast && (
              <div
                className={`w-px flex-auto min-h-[48px] ${
                  completed || active ? "bg-brand" : "bg-light-silver"
                }`}
              />
            )}
          </div>

          <div className="flex-1">
            <div
              className={`font-medium  text-base ${
                completed || active ? "text-brand" : "text-dim-gray"
              }`}
            >
              {step.label}
            </div>
            {completed && (
              <div className="text-xs text-dim-gray mt-1">
                Completed on {step.date}
              </div>
            )}
            {active && (
              <div className="text-xs text-brand font-semibold mt-1">
                In Progress
              </div>
            )}
          </div>
        </div>
      );
    })}
  </div>
);
