import { useState } from "react";
import CircularSlider from "react-circular-slider-svg";
import EditIcon from "../../../assets/icons/edit.svg?react";

// Props type
type SemiRadialInputProps = {
  value: number; // initial or controlled value
  min: number;
  max: number;
  label: string;
  withEdit?: boolean;
  onChange?: (v: number) => void;
};

const SemiRadialInput = ({
  value: propValue,
  min,
  max,
  label,
  withEdit = false,
  onChange,
}: SemiRadialInputProps) => {
  // For uncontrolled mode, use internal state. For controlled, use props.
  const isControlled = typeof onChange === "function";
  const [internalValue, setInternalValue] = useState<number>(propValue ?? min);

  // Always use a valid number for rendering
  const value = isControlled
    ? typeof propValue === "number" && !isNaN(propValue)
      ? propValue
      : min
    : typeof internalValue === "number" && !isNaN(internalValue)
    ? internalValue
    : min;

  // Change handler
  const handleValueChange = (v: number) => {
    if (isControlled && onChange) onChange(v);
    else setInternalValue(v);
  };

  return (
    <div className="relative  mx-auto w-full flex flex-col items-center justify-between">
      <CircularSlider
        size={250}
        trackWidth={8}
        minValue={min}
        maxValue={max}
        startAngle={40}
        endAngle={320}
        angleType={{
          direction: "cw",
          axis: "-y",
        }}
        handle1={{
          color: "black",
          value,
          onChange: handleValueChange,
        }}
        arcColor="black"
        arcBackgroundColor="#F2F4F7"
      />
      {/* Center Content Overlay */}
      <div className="absolute  w-full h-full flex flex-col justify-center items-center pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="text-base md:text-xl lg:text-2xl">
            {/* Defensive rendering */}
            {typeof value === "number" && !isNaN(value)
              ? value.toLocaleString()
              : "-"}
          </span>
          {withEdit && (
            <span className="bg-alabaster rounded-sm p-1">
              <EditIcon />
            </span>
          )}
        </div>
        <span className="text-base font-semibold mt-1">{label}</span>
      </div>
      {/* Min/Max + Label */}
      <div className="absolute left-0 bottom-0 flex justify-between items-center w-full px-4">
        <span className="text-lg font-medium">
          {typeof min === "number" && !isNaN(min) ? min.toLocaleString() : "-"}
        </span>
        <span className="text-base font-medium">Starting amount</span>
        <span className="text-lg font-medium">
          {typeof max === "number" && !isNaN(max) ? max.toLocaleString() : "-"}
        </span>
      </div>
    </div>
  );
};

export default SemiRadialInput;
