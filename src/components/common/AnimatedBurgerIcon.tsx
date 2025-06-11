import React from "react";

interface AnimatedBurgerIconProps {
  open: boolean;
}

const AnimatedBurgerIcon: React.FC<AnimatedBurgerIconProps> = ({ open }) => (
  <div className="w-6 h-6 flex flex-col justify-center items-center relative">
    <span
      className={`
        block absolute h-0.5 w-6 bg-gray-800 rounded transition-all duration-300
        ${open ? "rotate-45 top-3" : "top-1"}
      `}
    />
    <span
      className={`
        block absolute h-0.5 w-6 bg-gray-800 rounded transition-all duration-300
        ${open ? "opacity-0 " : "top-3"}
      `}
    />
    <span
      className={`
        block absolute h-0.5 w-6 bg-gray-800 rounded transition-all duration-300
        ${open ? "-rotate-45 top-3" : "top-5"}
      `}
    />
  </div>
);

export default AnimatedBurgerIcon;
