import React, { useState, useRef, useEffect } from "react";
import infoIcon from "../../../assets/icons/info-icon.png";

const timeHorizons = ["1–5 Years", "5–10 Years", "10–20 Years", "20+ Years"];

const Step4: React.FC = () => {
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
        What’s your time horizon?
      </h2>

      <div className="flex flex-col space-y-5 w-full max-w-md">
        <div className="relative group">
          <button className="w-full text-left border border-gray-300 rounded px-4 py-3 text-sm group-hover:bg-gray-100 transition">
            {timeHorizons[0]}
          </button>
          <img
            ref={iconRef}
            src={infoIcon}
            alt="Info"
            className="w-5 h-5 cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2"
            onClick={() => setShowInfo((prev) => !prev)}
          />
          {showInfo && (
            <div
              ref={popupRef}
              className="absolute top-0 left-full ml-3 bg-[#F0F4F8] rounded-lg p-4 w-64 shadow"
            >
              <div className="flex justify-center items-center mb-4 space-x-2">
                <img src={infoIcon} alt="Info" className="w-5 h-5" />
                <span className="font-inter font-semibold text-base text-gray-800">
                  Why We Ask
                </span>
                <button
                  onClick={() => setShowInfo(false)}
                  className="text-gray-500 hover:text-gray-800 ml-auto"
                >
                  ✕
                </button>
              </div>
              <p className="font-open-sans text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Scelerisque volutpat ut elementum facilisis adipiscing purus. Nulla tortor urna integer arcu tortor vitae mattis adipiscing quis. Pretium dignissim sapien gravida ridiculus ultrices viverra volutpat. Ac aliquam eget pellentesque nullam vivamus non imperdiet.
              </p>
            </div>
          )}
        </div>

        {timeHorizons.slice(1).map((label, idx) => (
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

export default Step4;
