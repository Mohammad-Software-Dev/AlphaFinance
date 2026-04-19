import React from "react";

interface TextInputProps {
  id: string;
  placeholder: string;
  type?: "text" | "email" | "password" | "tel";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | null | undefined;
  className?: string;
  label?: string;
  name?: string;
  rightIcon?: React.ReactNode;
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
  rightIcon,
}) => {
  return (
    <div className={`py-2 flex flex-col items-start ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="block ui-text-muted text-sm md:text-base mb-1 py-1"
        >
          {label}
        </label>
      )}
      <div className="relative w-full">
        <input
          name={name}
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`
            text-input w-full border-b-[1px] ui-border-subtle placeholder:text-dark-silver ui-text-primary text-sm md:text-base px-2 bg-transparent
            focus:outline-none focus:border-[var(--focus-ring)]
            ${rightIcon ? "pr-10" : ""}
            ${error ? "error" : ""}
          `}
        />
        {rightIcon && (
          <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
            {rightIcon}
          </span>
        )}
      </div>
      {error && <p className="mt-1 text-xs text-error font-inter">{error}</p>}
    </div>
  );
};

export default TextInput;
