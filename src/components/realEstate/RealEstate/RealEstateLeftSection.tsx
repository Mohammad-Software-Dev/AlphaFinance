import React from "react";
import sampleProperty from "../../../assets/images/sample-property.jpg";
import BedIcon from "../../../assets/icons/bed.svg?react";
import BathIcon from "../../../assets/icons/bath.svg?react";
import AreaIcon from "../../../assets/icons/area.svg?react";
import ParkingIcon from "../../../assets/icons/parking.svg?react";

const rowClass =
  "flex flex-wrap  md:gap-y-2  divide-x-[1px] divide-light-silver";
const cellClass =
  "flex items-center justify-center py-2 px-2 md:py-3 md:px-3  border-b-[1px] border-light-silver";
const iconCellClass =
  "flex items-center gap-2 justify-center py-2 px-2 md:py-3 md:px-3 border-b-[1px] border-light-silver";

const RealEstateLeftSection: React.FC = () => (
  <div>
    {/* Image */}
    <div className="relative aspect-[9/5] w-full h-auto  rounded-[10px] overflow-hidden">
      <img
        src={sampleProperty}
        alt="Property"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-4 left-4 flex gap-3">
        <button className="px-2 py-1 bg-white rounded-[8px] md:text-sm text-xs font-semibold shadow">
          DXB
        </button>
        <button className="px-2 py-1 bg-white rounded-[8px] md:text-sm  text-xs font-semibold shadow">
          COMING SOON
        </button>
      </div>
    </div>

    {/* Main Info */}
    <div className="mt-8">
      <h4 className="font-normal  leading-tight mb-6">1,250,000 AED</h4>
      <h4 className="font-normal  leading-tight border-b-[1px] border-light-silver pb-2 ">
        148-15 89th Avenue #8B Jameco Park
      </h4>

      <div className="space-y-0.5">
        {/* First row */}
        <div className={rowClass}>
          <div className={cellClass}>
            <p>Net Effective Rent</p>
          </div>
          <div className={cellClass}>
            <p>3 Months Free</p>
          </div>
          <div className={cellClass}>
            <p>15‑Month Invest</p>
          </div>
          <div className={cellClass}>
            <p>3 Months Free</p>
          </div>
        </div>
        {/* Second row */}
        <div className={rowClass}>
          <div className={cellClass}>
            <p>3 rooms</p>
          </div>
          <div className={cellClass}>
            <p>1 bed</p>
          </div>
          <div className={cellClass}>
            <p>1 bath</p>
          </div>
          <div className={cellClass}>
            <p>Rental Unit in Dubai</p>
          </div>
          <div className={cellClass}>
            <p>1 Living Room</p>
          </div>
          <div className={cellClass}>
            <p>(14 Reviews)</p>
          </div>
        </div>
        {/* Third row */}
        <div className={rowClass}>
          <div className={iconCellClass}>
            <BedIcon className="w-4 h-4" />
            <p>3 Studio‑2 Beds</p>
          </div>
          <div className={iconCellClass}>
            <BathIcon className="w-4 h-4" />
            <p>1‑2 Baths</p>
          </div>
          <div className={iconCellClass}>
            <AreaIcon className="w-4 h-4" />
            <p>557‑907 sqft</p>
          </div>
          <div className={iconCellClass}>
            <ParkingIcon className="w-4 h-4" />
            <p>Parking</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RealEstateLeftSection;
