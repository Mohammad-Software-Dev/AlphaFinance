import React, { useState, useRef, useEffect } from "react";
import infoIcon from "../../../assets/icons/info-icon.png";

const Step6: React.FC = () => {
  const [showInfo, setShowInfo] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLImageElement>(null);

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
        What is your annual pre-tax income?
      </h2>
      <label className="font-open-sans text-sm text-gray-400">
        Pre-Tax
      </label>
      <div className="relative w-full max-w-md">
        <input
          type="text"
          defaultValue="$0"
          className="w-full border-b border-gray-200 focus:outline-none text-sm py-2"
        />
        <div className="absolute right-0 top-2">
          <div
            className="relative group"
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
          >
            <img
              ref={iconRef}
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
                This helps us tailor your plan
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Step6;
