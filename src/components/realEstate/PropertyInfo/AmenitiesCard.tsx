import PetsIcon from "../../../assets/icons/pets.svg?react";
import ParkingIcon from "../../../assets/icons/parking_2.svg?react";
import OutdoorIcon from "../../../assets/icons/outdoor.svg?react";
import ACIcon from "../../../assets/icons/ac.svg?react";
import ListedIcon from "../../../assets/icons/listed.svg?react";
import UtilitiesIcon from "../../../assets/icons/utilities.svg?react";

// Restructured data as pairs
const amenities = [
  [{ icon: <PetsIcon />, label: "Pets" }, { label: "Dogs & Cats" }],
  [{ icon: <ACIcon />, label: "A/C" }, { label: "Cooling only" }],
  [{ icon: <ParkingIcon />, label: "Parking" }, { label: "Contact Manager" }],
  [
    { icon: <UtilitiesIcon />, label: "Utilities" },
    { label: "Contact Manager" },
  ],
  [{ icon: <OutdoorIcon />, label: "Outdoor" }, { label: "Patio, Deck, Pool" }],
  [{ icon: <ListedIcon />, label: "Listed" }, { label: "34 days ago" }],
];

const AmenitiesCard = () => (
  <div className="bg-ghost-white py-4 px-4 md:px-6 rounded-[8px]">
    <h4 className="font-normal text-black mb-3">Amenities:</h4>
    <div className="grid md:grid-cols-2  gap-x-20 gap-y-1 md:gap-y-3">
      {amenities.map(([iconObj, valueObj], i) => (
        <div key={i} className="grid grid-cols-2 ">
          <div className="flex items-center truncate mb-1">
            {iconObj.icon && (
              <span className="w-6 h-6 mr-2 flex items-center justify-center">
                {iconObj.icon}
              </span>
            )}
            <span>{iconObj.label}</span>
          </div>
          <span>{valueObj.label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default AmenitiesCard;
