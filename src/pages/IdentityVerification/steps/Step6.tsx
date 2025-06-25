import React, { useState, useRef, useEffect } from "react";
import InfoIcon from "../../../assets/icons/info-icon.svg?react";

const Step6: React.FC = () => {
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

  const options = ["Employed", "Student", "Unemployed", "Retired"];

  return (
    <>
      <h2 className="font-inter font-bold text-[18px] text-black max-w-md">
        When is your employment status?
      </h2>
      <div className="flex flex-col space-y-5 w-full max-w-md mt-4">
        <div className="relative group">
          <button className="w-full text-left border border-gray-300 rounded px-4 py-3 text-sm hover:bg-gray-100 transition">
            {options[0]}
          </button>
          <div className="absolute right-3 top-3">
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
                <>
                  <div
                    ref={popupRef}
                    className="hidden lg:block absolute left-full top-1/2 -translate-y-1/2 ml-2 px-4 py-2 bg-black text-white rounded-lg whitespace-nowrap shadow-lg z-10"
                  >
                    <div className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-r-[6px] border-transparent border-r-black" />
                    Select the status that best describes your current
                    employment.
                  </div>

                  <div
                    ref={popupRef}
                    className="block lg:hidden absolute right-full top-1/2 -translate-y-1/2 mr-2 px-4 py-2 bg-black text-white rounded-lg whitespace-nowrap shadow-lg z-10"
                  >
                    <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-l-[6px] border-transparent border-l-black" />
                    Select the status that best describes your current
                    employment.
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        {options.slice(1).map((label, idx) => (
          <button
            key={idx}
            className="w-full text-left border border-gray-300 rounded px-4 py-3 text-sm hover:bg-gray-100 transition"
          >
            {label}
          </button>
        ))}
      </div>
    </>
  );
};

export default Step6;
