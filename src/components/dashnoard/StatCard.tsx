import React from "react";

type StatCardProps = {
  title: string;
  value: string;
  label: string;
  percent: string;
  percentColor: "teal" | "sand" | "orange";
  secondLabel?: string;
};

const percentBg = {
  teal: "bg-teal text-white",
  sand: "bg-sand text-white",
  orange: "bg-light-orange text-white",
};

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  label,
  percent,
  percentColor,
  secondLabel,
}) => (
  <div className="relative pt-[14px] transition-transform duration-200 hover:-translate-y-2">
    <div className="relative flex flex-row overflow-clip justify-between bg-ghost-white rounded-2xl min-w-[200px] min-h-[90px]">
      <div className="self-stretch w-2 bg-brand" />
      <div className="flex flex-col flex-1 pl-2 pr-3 py-3 ">
        <div className="flex flex-col justify-between ">
          <h2 className="text-lg">{title}</h2>
          <div className="flex items-center justify-between gap-6">
            <p className="text-2xl font-bold">${value}</p>
            <div className="text-sm text-right items-center flex flex-col leading-tight ml-auto pr-2">
              <span className="text-sm">{label}</span>
              {secondLabel && <span className="text-sm">{secondLabel}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      className={`absolute top-0 right-3 px-2 py-1 text-xs md:text-sm font-semibold rounded-full ${percentBg[percentColor]}`}
    >
      {percent}
    </div>
  </div>
);

export default StatCard;
