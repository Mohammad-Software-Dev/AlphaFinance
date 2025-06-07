import React from "react";

interface TextInputProps {
  id: string;
  placeholder: string;
  type?: "text" | "email" | "password" | "tel";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  placeholder,
  type = "text",
  value,
  onChange,
  error = "",
  className = "",
}) => {
  return (
    <div className={`flex flex-col items-start  ${className}`}>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`text-input px-2 ${
          error ? "border-b-2 border-red-500 focus:border-red-500" : ""
        }`}
      />
      {error && (
        <p className="mt-1 text-xs text-red-600 font-inter">{error}</p>
      )}
    </div>
  );
};

export default TextInput;
