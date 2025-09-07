import type { CSSProperties } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "link";
type Size = "sm" | "md" | "lg";
type UnifiedClick = (
  e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
) => void;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  width?: string;
  height?: string;
  underline?: boolean;
  linkWeight?: 400 | 600;
  to?: string;
  target?: string;
  onClick?: UnifiedClick;
}

const variantClasses: Record<Variant, string> = {
  primary: `
  text-sm
    md:text-base
    rounded-sm 
    inline-flex items-center justify-center
    font-inter font-medium
     border
    bg-black text-white
    border-black
    h-[30px] md:h-[35px]
    hover:opacity-90 transition
  `,
  secondary: `
    text-sm
    md:text-base
    rounded-sm
    inline-flex items-center justify-center
    font-inter font-medium
     border
    bg-white text-black
    border-light-silver
    h-[30px] md:h-[35px]
    hover:bg-gray-100 transition
  `,
  link: `
    text-sm
    md:text-base
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
  to,
  target,
  onClick,
  ...props
}) => {
  const classes = [
    variantClasses[variant].trim(),
    variant !== "link" ? paddingClasses[size] : "",
    variant === "link" && underline ? "underline" : "",
    variant !== "link" && fullWidth ? "115px lg:w-full" : "",
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
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
    ...style,
  };

  if (to) {
    return (
      <Link
        to={to}
        target={target}
        className={classes}
        style={combinedStyle}
        tabIndex={0}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      style={combinedStyle}
      onClick={(e) => onClick?.(e)}
      {...props}
    >
      {children}
    </button>
  );
};
