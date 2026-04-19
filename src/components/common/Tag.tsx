import React from "react";

export interface TagProps {
  children: string;

  colorIndex?: number;
  small?: boolean;
}

const PALETTE = [
  { bg: "bg-red-100", border: "border-red-100", text: "text-red-700" },
  { bg: "bg-blue-100", border: "border-blue-100", text: "text-blue-700" },
  { bg: "bg-green-100", border: "border-green-100", text: "text-green-700" },
  { bg: "bg-yellow-100", border: "border-yellow-100", text: "text-yellow-700" },
  { bg: "bg-indigo-100", border: "border-indigo-100", text: "text-indigo-700" },
  { bg: "bg-pink-100", border: "border-pink-100", text: "text-pink-700" },
  { bg: "bg-teal-100", border: "border-teal-100", text: "text-teal-700" },
  { bg: "bg-purple-100", border: "border-purple-100", text: "text-purple-700" },
] as const;

const GRAY = {
  bg: "bg-transparent",
  border: "ui-border-subtle",
  text: "ui-text-muted",
};

export const Tag: React.FC<TagProps> = ({
  children,
  colorIndex,
  small = false,
}) => {
  const radiusAndBorder = "rounded-[16px] border";
  const sizeClasses = small
    ? "inline-block px-2 py-0.5 text-xs font-medium"
    : "inline-block px-3 py-1 text-sm font-medium";

  const { bg, border, text } =
    typeof colorIndex === "number"
      ? PALETTE[colorIndex % PALETTE.length]
      : GRAY;

  return (
    <span
      className={`${sizeClasses} ${radiusAndBorder} ${bg} ${border} ${text}`}
    >
      {children}
    </span>
  );
};

export default Tag;
