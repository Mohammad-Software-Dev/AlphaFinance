import React from "react";
import sampleProperty from "../../../assets/images/sample-property.jpg";
import BedIcon from "../../../assets/icons/bed.svg?react";
import BathIcon from "../../../assets/icons/bath.svg?react";
import AreaIcon from "../../../assets/icons/area.svg?react";
import ParkingIcon from "../../../assets/icons/parking.svg?react";
import type { RealEstateLeftVM } from "../../../models/propertyDetails";

const rowClass = "flex flex-wrap md:gap-y-2 divide-x-[1px] divide-light-silver";
const cellClass =
  "flex items-center justify-center py-2 px-2 md:py-3 md:px-3 border-b-[1px] border-light-silver";
const iconCellClass =
  "flex items-center gap-2 justify-center py-2 px-2 md:py-3 md:px-3 border-b-[1px] border-light-silver";

const RealEstateLeftSection: React.FC<{ vm: RealEstateLeftVM }> = ({ vm }) => (
  <div>
    <div className="relative aspect-[9/5] w-full h-auto overflow-hidden">
      <img
        src={vm.image ?? sampleProperty}
        alt={vm.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-4 left-4 flex gap-3">
        <button className="px-2 py-1 bg-white/30 md:text-sm text-xs font-semibold shadow">
          {vm.statusTag ?? "DXB"}
        </button>
        {vm.comingSoon && (
          <button className="px-2 py-1 bg-white/30 md:text-sm text-xs font-semibold shadow">
            COMING SOON
          </button>
        )}
      </div>
    </div>

    <div className="mt-8">
      {vm.assetValueText && (
        <h4 className="font-normal leading-tight mb-6">{vm.assetValueText}</h4>
      )}
      <h4 className="font-normal leading-tight border-b-[1px] border-light-silver pb-2">
        {vm.title}
      </h4>

      <div className="space-y-0.5">
        <div className={rowClass}>
          {vm.promoChips.map((txt, i) => (
            <div key={i} className={cellClass}>
              <p>{txt}</p>
            </div>
          ))}
        </div>

        <div className={rowClass}>
          <div className={cellClass}>
            <p>3 rooms</p>
          </div>
          <div className={cellClass}>
            <p>{vm.quickFacts.bedrooms ?? "2 bed"}</p>
          </div>
          <div className={cellClass}>
            <p>{vm.quickFacts.bathrooms ?? "2 bath"}</p>
          </div>
          <div className={cellClass}>
            <p>{vm.quickFacts.unitType ?? "Rental Unit in Dubai"}</p>
          </div>
          <div className={cellClass}>
            <p>{vm.quickFacts.livingRooms ?? "1 Living Room"}</p>
          </div>
          <div className={cellClass}>
            <p>({vm.quickFacts.reviews ?? "22"} Reviews)</p>
          </div>
        </div>

        <div className={rowClass}>
          <div className={iconCellClass}>
            <BedIcon className="w-6 h-6" />
            <p>{vm.bedSummary ?? "2 Beds"}</p>
          </div>
          <div className={iconCellClass}>
            <BathIcon className="w-6 h-6" />
            <p>{vm.bathSummary ?? "2 Baths"}</p>
          </div>
          <div className={iconCellClass}>
            <AreaIcon className="w-6 h-6" />
            <p>{vm.areaText ?? "1,250 sqft"}</p>
          </div>
          <div className={iconCellClass}>
            <ParkingIcon className="w-6 h-6" />
            <p>Parking</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RealEstateLeftSection;
