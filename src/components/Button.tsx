import type { CSSProperties } from "react";

type Variant = "primary" | "secondary" | "link";
type Size = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  width?: string;
  height?: string;
  underline?: boolean;
  linkWeight?: 400 | 600;
}

const variantClasses: Record<Variant, string> = {
  primary: `
    inline-flex items-center justify-center
    font-inter font-medium
    rounded border
    bg-[var(--color-black-russian)] text-white
    border-[var(--color-black-russian)]
    h-[35px]
    hover:opacity-90 transition
  `,
  secondary: `
    inline-flex items-center justify-center
    font-inter font-medium
    rounded border
    bg-white text-[var(--color-black-russian)]
    border-[#F0F0F0]
    h-[35px]
    hover:bg-gray-100 transition
  `,
  link: `
    inline-flex items-center justify-center
    font-inter text-[var(--color-brand)]
    bg-transparent border-0 p-0
    transition
  `,
};

// only horizontal padding for non-link buttons
const paddingClasses: Record<Size, string> = {
  sm: "px-3",
  md: "px-4",
  lg: "px-5",
};

// text-size for all variants
const textSizeClasses: Record<Size, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  width,
  height,
  underline = false,
  linkWeight = 400,
  className = "",
  style,
  children,
  ...props
}) => {
  const classes = [
    variantClasses[variant].trim(),
    textSizeClasses[size],
    variant !== "link" ? paddingClasses[size] : "",
    variant === "link" && underline ? "underline" : "",
    variant !== "link" && fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const defaultStyle: CSSProperties = {};
  if (variant !== "link") {
    if (!fullWidth) defaultStyle.width = "115px";
  } else {
    defaultStyle.fontWeight = linkWeight;
    defaultStyle.lineHeight = "1";
  }

  const combinedStyle: CSSProperties = {
    ...defaultStyle,
    ...(width  ? { width }  : {}),
    ...(height ? { height } : {}),
    ...style,
  };

  return (
    <button
      className={classes}
      style={combinedStyle}
      {...props}
    >
      {children}
    </button>
  );
};
