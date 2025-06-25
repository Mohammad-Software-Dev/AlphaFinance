import React from "react";

const Step4: React.FC = () => {
  const options = ["U.S. Citizen", "Greencard Holder", "Visa Holder"];

  return (
    <>
      <h2 className="font-inter font-bold text-[18px] text-black max-w-md">
        What is your citizenship status?
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

export default Step4;
