import PetsIcon from "../../../assets/icons/pets.svg?react";
import ParkingIcon from "../../../assets/icons/parking_2.svg?react";
import OutdoorIcon from "../../../assets/icons/outdoor.svg?react";
import ACIcon from "../../../assets/icons/ac.svg?react";
import ListedIcon from "../../../assets/icons/listed.svg?react";
import UtilitiesIcon from "../../../assets/icons/utilities.svg?react";

type Props = {
  items: string[];
};

function pickIcon(label: string) {
  const l = label.toLowerCase();
  if (l.includes("pet")) return <PetsIcon />;
  if (l.includes("park")) return <ParkingIcon />;
  if (l.includes("outdoor") || l.includes("patio") || l.includes("deck"))
    return <OutdoorIcon />;
  if (l.includes("a/c") || l.includes("ac")) return <ACIcon />;
  if (l.includes("listed")) return <ListedIcon />;
  if (l.includes("utilit")) return <UtilitiesIcon />;
  return null;
}

const AmenitiesCard: React.FC<Props> = ({ items }) => {
  const pairs: Array<[string, string | undefined]> = [];
  for (let i = 0; i < items.length; i += 2) {
    pairs.push([items[i], items[i + 1]]);
  }

  return (
    <div className="bg-ghost-white py-4 px-4 md:px-6 rounded-[8px]">
      <h4 className="font-normal text-black mb-3">Amenities:</h4>
      <div className="grid md:grid-cols-2 gap-x-20 gap-y-1 md:gap-y-3">
        {pairs.map(([left, right], i) => (
          <div key={i} className="grid grid-cols-2">
            <div className="flex items-center truncate mb-1">
              {pickIcon(left) && (
                <span className="w-6 h-6 mr-2 flex items-center justify-center">
                  {pickIcon(left)}
                </span>
              )}
              <span>{left}</span>
            </div>
            <span>{right ?? ""}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmenitiesCard;
