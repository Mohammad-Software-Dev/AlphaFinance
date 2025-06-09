import React, { useState, useRef, useEffect } from "react";
import InfoIcon from "../../../assets/icons/info-icon.svg?react";

const Step3: React.FC = () => {
  const [showInfo, setShowInfo] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        iconRef.current &&
        !iconRef.current.contains(event.target as Node)
      ) {
        setShowInfo(false);
      }
    };
    if (showInfo) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showInfo]);

  return (
    <>
      <h2 className="font-inter font-bold text-[18px] text-black max-w-md">
        When is your birthday?
      </h2>
      <div className="font-open-sans text-sm text-gray-400">Date of birth</div>
      <div className="relative w-full max-w-md">
        <input
          type="text"
          defaultValue="04/03/2025"
          className="w-full border-b border-gray-200 focus:outline-none text-sm py-2"
        />
        <div className="absolute right-0 top-2">
          <div
            className="relative group"
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
          >
            <InfoIcon
              ref={iconRef}
              className="w-5 h-5 cursor-pointer"
              title="Info"
            />

            {showInfo && (
              <div
                ref={popupRef}
                className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-4 py-2 bg-black text-white rounded-lg whitespace-nowrap shadow-lg z-10"
              >
                <div className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-r-[6px] border-transparent border-r-black" />
                Your date of birth helps verify your identity.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Step3;
