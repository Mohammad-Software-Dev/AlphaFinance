import React, { useState, useRef, useEffect } from "react";
import infoIcon from "../../../assets/icons/info-icon.png";

const riskOptions = ["Conservative", "Moderate", "Aggressive"];

const Step5: React.FC = () => {
  const [showInfo, setShowInfo] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
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
        What’s your risk tolerance?
      </h2>
      <div className="flex flex-col space-y-5 w-full max-w-md">
        <div className="relative">
          <button className="w-full text-left border border-gray-300 rounded px-4 py-3 text-sm hover:bg-gray-100 transition">
            {riskOptions[0]}
          </button>
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div
              className="relative group"
              onMouseEnter={() => setShowInfo(true)}
              onMouseLeave={() => setShowInfo(false)}
            >
              <img
                src={infoIcon}
                alt="Info"
                className="w-5 h-5 cursor-pointer"
              />
              {showInfo && (
                <div
                  ref={popupRef}
                  className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-4 py-2 bg-black text-white rounded-lg whitespace-nowrap shadow-lg z-10"
                >
                  <div className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-r-[6px] border-transparent border-r-black" />
                  Why We Ask
                </div>
              )}
            </div>
          </div>
        </div>
        {riskOptions.slice(1).map((label, idx) => (
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

export default Step5;
