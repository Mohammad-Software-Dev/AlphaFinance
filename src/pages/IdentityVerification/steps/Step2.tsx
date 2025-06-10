import React, { useState, useRef, useEffect } from "react";
import InfoIcon from "../../../assets/icons/info-icon.svg?react";
import TextInput from "../../../components/common/TextInput";
import Dropdown from "../../../components/common/Dropdown";

const statesList = ["Alabama", "Alaska", "Arizona", "Wyoming"];

const Step2: React.FC = () => {
  const [showInfo, setShowInfo] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);

  const [street, setStreet] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [stateValue, setStateValue] = useState("");
  const [zip, setZip] = useState("");

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
        Where is your permanent residence?
      </h2>

      <div className="relative w-full max-w-md">
        <TextInput
          id="street"
          placeholder="Street Address"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
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
                Please enter your full street address.
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="space-y-4 w-full max-w-md">
        <TextInput
          id="apartment"
          placeholder=" Apartment, Suite or Building Number: (Optional)"
          value={apartment}
          onChange={(e) => setApartment(e.target.value)}
        />

        <TextInput
          id="city"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <Dropdown
          id="state"
          placeholder="State"
          options={statesList}
          value={stateValue}
          onChange={(e) => setStateValue(e.target.value)}
        />

        <TextInput
          id="zip"
          placeholder="Zip Code"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />
      </div>
    </>
  );
};

export default Step2;
