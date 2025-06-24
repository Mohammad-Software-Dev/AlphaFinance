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
    <div className={`flex items-center  h-[35px] ${className}`}>
      {/* Input */}
      <input
        type="number"
        className="
          w-full h-full px-3 text-lg border border-black
          rounded-l-[8px] border-r-0 outline-none focus:ring-0
          appearance-none
        "
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ fontFamily: "inherit" }}
      />
      {/* Custom vertical spinner */}
      <div className="flex flex-col h-full">
        <button
          type="button"
          className="w-10 h-1/2 p-0 bg-black rounded-tr-[8px] flex items-center justify-center"
          tabIndex={-1}
          onClick={() =>
            onChange(max !== undefined ? Math.min(max, value + 1) : value + 1)
          }
        >
          <ArrowUp className="w-6 h-5" />
        </button>
        <button
          type="button"
          className="w-10 h-1/2 p-0 bg-black rounded-br-[8px] flex items-center justify-center"
          tabIndex={-1}
          onClick={() => onChange(Math.max(min, value - 1))}
        >
          <ArrowDown className="w-6 h-5" />
        </button>
      </div>
    </div>
  );
};

export default InputNumberWithCustomSpinner;
