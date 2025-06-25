import React from "react";

const Step2Journey: React.FC = () => {
  return (
    <>
      <h2 className="font-inter font-bold text-[18px] text-black max-w-md">
        Let’s start with where you’re at in your investing journey
      </h2>

      <div className="flex flex-col space-y-5 w-full max-w-md">
        <button className="text-left border border-gray-300 rounded px-4 py-2 text-sm hover:bg-gray-100 transition">
          I am just looking
        </button>
        <button className="text-left border border-gray-300 rounded px-4 py-2 text-sm hover:bg-gray-100 transition">
          I am comparing investing options
        </button>
        <button className="text-left border border-gray-300 rounded px-4 py-2 text-sm hover:bg-gray-100 transition">
          I am prepared to invest
        </button>
      </div>
    </>
  );
};

export default Step2Journey;
