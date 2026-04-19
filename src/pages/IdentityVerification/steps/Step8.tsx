import React from "react";

const Step8: React.FC = () => {
  const options = [
    "Your family member is an officer",
    "You work for a brokerage or FINRA registered firm",
    "Your family member is politically exposed person",
    "No, none apply",
    "You work for or with AlphaFinance",
  ];

  return (
    <>
      <h2 className="font-inter font-bold text-[18px] text-black max-w-md">
        Do any of the following apply to you?
      </h2>
      <div className="flex flex-col space-y-5 w-full max-w-md mt-4">
        {options.map((label, idx) => (
          <button
            key={idx}
            className="w-full text-left border border-gray-300 rounded px-4 py-3 text-sm hover:bg-gray-100 transition"
          >
            {label}
          </button>
        ))}
      </div>
    </>
  );
};

export default Step8;
