import React, { useState, useRef } from "react";

type TooltipProps = {
  message: string;
  children: React.ReactNode;
};

export const Tooltip: React.FC<TooltipProps> = ({ message, children }) => {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    timeoutRef.current = window.setTimeout(() => setVisible(true), 400);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setVisible(false);
  };

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {visible && (
        <div
          className="
            absolute left-full ml-2 px-2 py-1 bg-black text-white text-xs rounded-sm  z-20
            whitespace-nowrap pointer-events-none
            "
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          {message}
        </div>
      )}
    </div>
  );
};
