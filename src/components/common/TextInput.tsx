import React from "react";

interface TextInputProps {
  id: string;
  placeholder: string;
  type?: "text" | "email" | "password" | "tel";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
  label?: string;
  name?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
  className = "",
  label = null,
  name = "",
}) => {
  return (
    <div className={`py-2 flex flex-col items-start ${className}`}>
      {label && (
        <label className="block text-dim-gray text-sm md:text-base mb-1 py-1">
          {label}
        </label>
      )}
      <input
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full border-b-[1px] border-light-silver placeholder:text-dark-silver text-sm md:text-base px-2  focus:outline-none 
          focus:border-black  ${error ? "error" : ""}`}
      />
      {error && <p className="mt-1 text-xs text-error font-inter">{error}</p>}
    </div>
  );
};

export default TextInput;
