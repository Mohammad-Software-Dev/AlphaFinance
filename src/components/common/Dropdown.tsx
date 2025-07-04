import React from "react";

interface DropdownProps {
  id: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  className?: string;
  label?: string;
  name?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  id,
  options,
  value,
  onChange,
  placeholder = "Select",
  className = "",
  name = "",
  label = null,
}) => {
  return (
    <div className={`py-2 relative flex flex-col items-start  ${className}`}>
      {label && (
        <label className="block text-dim-gray text-sm md:text-base mb-1 py-1">
          {label}
        </label>
      )}
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full focus:outline-none 
          focus:border-black text-dark-silver border-b-[1px] border-light-silver placeholder:text-dark-silver text-sm md:text-base bg-transparent pr-8 appearance-none px-2 "
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-dark-silver"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default Dropdown;
