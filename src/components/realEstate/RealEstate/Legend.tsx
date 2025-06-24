// src/components/realEstate/FinancialCalculator/Legend.tsx

import React from "react";

// Color constants for easier updates
const LEGEND = [
  {
    label: "Starting amount",
    percent: "32%",
    value: "5400 AED",
    colorVar: "--color-brand",
  },
  {
    label: "Dividends earned",
    percent: "15%",
    value: "5400 AED",
    colorVar: "--color-teal",
  },
  {
    label: "Total contributions",
    percent: "20%",
    value: "5400 AED",
    colorVar: "--color-dark-orange",
  },
  {
    label: "Token value groth",
    percent: "13%",
    value: "5400 AED",
    colorVar: "--color-light-orange",
  },
];

const getCssVar = (name: string): string => {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  return value;
};

const Legend: React.FC = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between md:gap-4 w-full">
      {/* First Column */}
      <div>
        {LEGEND.slice(0, 2).map((item) => (
          <div
            key={item.label}
            className="flex justify-between items-center py-2 border-b-[1px] border-light-silver "
          >
            <span
              className="inline-block w-6 h-6 rounded-lg mr-2 flex-shrink-0"
              style={{
                backgroundColor: getCssVar(item.colorVar),
              }}
            />
            <span className="font-semibold text-sm md:text-base  mr-auto">
              {item.label}
            </span>
            <span className="flex items-center ">
              <span className="text-xs md:text-sm  mx-2 text-dim-gray">
                {item.percent}
              </span>
              <span className="text-xs md:text-sm  text-dim-gray">
                {item.value}
              </span>
            </span>
          </div>
        ))}
      </div>
      {/* Second Column */}
      <div>
        {LEGEND.slice(2).map((item) => (
          <div
            key={item.label}
            className="flex justify-between items-center py-2 border-b-[1px] border-light-silver "
          >
            <span
              className="inline-block w-6 h-6 rounded-lg mr-2 flex-shrink-0"
              style={{
                backgroundColor: getCssVar(item.colorVar),
              }}
            />
            <span className="font-semibold text-sm md:text-base  mr-auto">
              {item.label}
            </span>
            <span className="flex items-center ">
              <span className="text-xs md:text-sm mx-2 text-dim-gray">
                {item.percent}
              </span>
              <span className="text-xs md:text-sm text-dim-gray">
                {item.value}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legend;
