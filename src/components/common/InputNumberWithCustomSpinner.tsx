import React from "react";
import ArrowUp from "../../assets/icons/input-arrow-up.svg?react";
import ArrowDown from "../../assets/icons/input-arrow-down.svg?react";

interface Props {
  value: number;
  onChange: (val: number) => void;
  min?: number;
  max?: number;
  className?: string;
}

const InputNumberWithCustomSpinner: React.FC<Props> = ({
  value,
  onChange,
  min = 1,
  max,
  className = "",
}) => {
  return (
    <div className={`flex  items-stretch h-fit  ${className}`}>
      {/* Input */}
      <input
        type="number"
        className="
          w-full  flex px-3 text-lg border border-black
          rounded-l-sm border-r-0 outline-none focus:ring-0
          appearance-none
        "
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ fontFamily: "inherit" }}
      />
      {/* Custom vertical spinner */}
      <div className="flex flex-col h-full bg-black rounded-r-sm">
        <button
          type="button"
          className="w-full p-0  bg flex items-center justify-center"
          tabIndex={-1}
          onClick={() =>
            onChange(max !== undefined ? Math.min(max, value + 1) : value + 1)
          }
        >
          <ArrowUp className="w-10 h-[22px]" />
        </button>
        <button
          type="button"
          className="w-full  p-0  flex items-center justify-center"
          tabIndex={-1}
          onClick={() => onChange(Math.max(min, value - 1))}
        >
          <ArrowDown className="w-10 h-[22px]" />
        </button>
      </div>
    </div>
  );
};

export default InputNumberWithCustomSpinner;
