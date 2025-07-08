import React, { Suspense } from "react";

const InvestmentChart = React.lazy(() => import("./InvestmentChart"));
const PortfolioPieChart = React.lazy(() => import("./PortfolioPieChart"));

import Edit from "../../../assets/icons/edit.svg?react";
import Switch from "@mui/material/Switch";
import Legend from "./Legend";

const OldFinancialCalculator: React.FC = () => {
  const [enabled, setEnabled] = React.useState(true);
  return (
    <div className="">
      {/* Header */}
      <h4>Financial Calculator</h4>
      <div className="my-4">
        <p>
          Considering The Token Price
          <span className="text-dark-orange font-semibold"> 8 AED</span> And
          Token <span className="text-teal font-semibold"> ROI 11.6%</span>{" "}
          And...
        </p>
      </div>
      {/* Inputs row */}
      <div className="flex flex-row flex-wrap justify-evenly md:justify-between mb-6 space-x-0.5">
        {/* Starting amount */}
        <div>
          <p>Starting amount</p>
          <div className="flex md:justify-between items-center md:gap-2">
            <h5> 1,520AED</h5>
            <button className="w-10 h-10 p-1  rounded-[8px] bg-white-smoke flex items-center justify-center hover:bg-gray-200 transition">
              <Edit />
            </button>
          </div>
        </div>

        {/* Additional Contribution */}
        <div>
          <p>Additional Contribution</p>
          <div className="flex md:justify-between   items-center md:gap-2 ">
            <h5>520AED</h5>
            <button className="w-10 h-10 p-1  rounded-[8px] bg-white-smoke flex items-center justify-center hover:bg-gray-200 transition">
              <Edit />
            </button>
            <div className="hidden md:block">
              <Switch
                onChange={(e) => setEnabled(e.target.checked)}
                checked={enabled}
                sx={{
                  width: 45,
                  height: 28,
                  padding: 0,
                  "& .MuiSwitch-switchBase": {
                    padding: 0.5,
                    "&.Mui-checked": {
                      transform: "translateX(16px)",
                      color: "#fff",
                      "& + .MuiSwitch-track": {
                        backgroundColor: "var(--color-brand)", // Your brand color
                        opacity: 1,
                      },
                    },
                  },
                  "& .MuiSwitch-thumb": {
                    backgroundColor: "white", // Thumb color when checked
                    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                  },
                  "& .MuiSwitch-track": {
                    backgroundColor: "var(--color-brand)", // Light brand color when unchecked
                    borderRadius: 13,
                  },
                }}
              />
            </div>
          </div>
        </div>

        {/* Years to Grow */}
        <div>
          <p>Years to Grow</p>
          <div className="flex  md:justify-between  items-center md:gap-2">
            <h5>20 Years</h5>
            <button className="w-10 h-10 p-1  rounded-[8px] bg-white-smoke flex items-center justify-center hover:bg-gray-200 transition">
              <Edit />
            </button>
          </div>
        </div>
      </div>
      {/* Charts */}
      <div className="w-full mt-8 mb-4">
        {/* Charts in a row */}
        <div className="flex md:flex-row flex-col justify-center md:justify-between items-center gap-10 md:gap-0">
          <div className="w-full md:w-2/3 ">
            <Suspense
              fallback={<div style={{ height: 320 }}>Loading chart…</div>}
            >
              <InvestmentChart />
            </Suspense>
          </div>
          <div className="w-full md:w-1/3 aspect-square  ">
            <Suspense
              fallback={<div style={{ height: 320 }}>Loading chart…</div>}
            >
              <PortfolioPieChart />
            </Suspense>
          </div>
        </div>
        {/* Legend below, centered and full width */}
        <Legend />
      </div>
    </div>
  );
};

export default OldFinancialCalculator;
