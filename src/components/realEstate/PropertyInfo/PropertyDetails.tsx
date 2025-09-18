import React from "react";
import CheckIcon from "../../../assets/icons/check.svg?react";

type Props = {
  features: string[]; // flat list from backend
};

const PropertyFeatures: React.FC<Props> = ({ features }) => {
  // chunk into rows of 3 to keep your existing layout feel
  const rows: string[][] = [];
  for (let i = 0; i < features.length; i += 3) {
    rows.push(features.slice(i, i + 3));
  }

  return (
    <section className="mb-8">
      <h4 className="font-normal text-black mb-3">Property Features</h4>
      <div className="border-t-[1px] border-b-[1px] border-light-silver px-2 py-1">
        {rows.map((row, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-wrap md:flex-row py-1 md:px-8 md:gap-2">
              {row.map((label, j) => (
                <div
                  key={j}
                  className="flex w-1/2 md:w-fit py-1 md:py-0 items-center gap-2 md:flex-1 font-normal"
                >
                  <CheckIcon className="w-6 h-6" />
                  <span className="text-sm md:text-base">{label}</span>
                </div>
              ))}
            </div>

            {i === 1 && (
              <div className="border-t-[1px] border-light-silver my-2" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default PropertyFeatures;
