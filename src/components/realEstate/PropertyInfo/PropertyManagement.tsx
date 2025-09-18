import { useState, useMemo } from "react";
import fallbackLogo from "../../../assets/images/nakeel.png";

type Props = {
  mgmt: {
    propertyDeveloper: { name: string | null; logo: string | null };
    propertyManagement: { name: string | null; logo: string | null };
    facilityManagement: { name: string | null; logo: string | null };
  };
};

const TABS = [
  { key: "property", label: "Property Developer" },
  { key: "management", label: "Property management" },
  { key: "facility", label: "Facility management" },
];

const PropertyManagement: React.FC<Props> = ({ mgmt }) => {
  const [active, setActive] = useState("property");

  const current = useMemo(() => {
    if (active === "property") return mgmt.propertyDeveloper;
    if (active === "management") return mgmt.propertyManagement;
    return mgmt.facilityManagement;
  }, [active, mgmt]);

  const displayName = current.name ?? "—";
  const displayLogo = current.logo ?? fallbackLogo;

  return (
    <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto mt-8 min-h-[140px]">
      <div className="flex flex-row md:flex-col min-w-full md:min-w-[220px] pt-2 gap-2 md:gap-0">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className="flex items-center group focus:outline-none "
            style={{ cursor: "pointer" }}
            tabIndex={0}
            aria-selected={active === tab.key}
          >
            <span
              className={` block h-full w-1 mr-4 rounded-[5px] transition-all duration-200 ${
                active === tab.key ? "bg-[#7E98F4]" : "bg-[#E3E7EC]"
              }`}
            />
            <span
              className={`transition-colors duration-150 my-1 ${
                active === tab.key
                  ? "text-[#7E98F4] font-semibold text-lg ml-1"
                  : "text-[#A6B3CB]"
              }`}
            >
              {tab.label}
            </span>
          </button>
        ))}
      </div>

      <div className="flex flex-1 flex-col items-center justify-center w-full md:w-[260px] mt-4 md:mt-0 md:ml-auto">
        <img
          src={displayLogo}
          alt={displayName}
          className="w-[80px] h-[80px] object-contain mb-2"
          draggable={false}
        />
        <span className="text-lg">{displayName}</span>
      </div>
    </div>
  );
};

export default PropertyManagement;
