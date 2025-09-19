import React, { useState } from "react";
import FacilityIcon from "../../../assets/icons/facility_management.svg?react";
import PropertyIcon from "../../../assets/icons/property_management.svg?react";
import TenantIcon from "../../../assets/icons/tenant.svg?react";
import ChargesIcon from "../../../assets/icons/services_charges.svg?react";
import CourtIcon from "../../../assets/icons/court.svg?react";
import BankCheckIcon from "../../../assets/icons/banl_check.svg?react";
import LawyerIcon from "../../../assets/icons/lawyer.svg?react";
import Modal from "../../common/Modal";
import OperationModalContent from "../OperationModalContent";
import type { OperationItemModel } from "../../../models/propertyUpdates";

type Props = { items: OperationItemModel[] };

const TAGS: Record<
  string,
  { label: string; icon: React.ReactNode; classes: string }
> = {
  property_management: {
    label: "PROPERTY MANAGEMENT",
    icon: <PropertyIcon />,
    classes: "text-sand",
  },
  tenant: { label: "TENANT", icon: <TenantIcon />, classes: "text-dim-gray" },
  facility_management: {
    label: "FACILITY MANAGEMENT",
    icon: <FacilityIcon />,
    classes: "text-teal-700",
  },
  services_charges: {
    label: "SERVICES CHARGES",
    icon: <ChargesIcon />,
    classes: "text-dark-orange",
  },
  bank_check: { label: "BANK CHECK", icon: <BankCheckIcon />, classes: "" },
  lawyer: { label: "LAWYER", icon: <LawyerIcon />, classes: "" },
  court: { label: "COURT", icon: <CourtIcon />, classes: "" },
  alphased_fees: { label: "ALPHASED FEES", icon: "", classes: "text-brand" },
};

const Timeline: React.FC<Props> = ({ items }) => {
  const [selected, setSelected] = useState<OperationItemModel | null>(null);

  return (
    <div className="w-full h-full flex flex-col">
      <h4 className="font-normal text-black mb-3">Operations Transactions</h4>
      <div className="relative flex flex-1 h-0">
        <div className="flex flex-col w-full overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-track-transparent">
          {items.map((event) => (
            <div key={event.id} className="flex relative">
              <div className="w-[13%] min-w-[60px] flex-shrink-0 pt-4 text-xs md:text-sm font-medium">
                {event.date}
              </div>

              <div
                className="flex-1 pl-6 md:pl-8 py-3 border-l-[2px] border-light-silver transition-all duration-200 hover:border-l-[3px] hover:border-black hover:bg-[linear-gradient(90deg,var(--color-brand-hover)_0%,transparent_50%,transparent_100%)] group cursor-pointer"
                onClick={() => setSelected(event)}
              >
                <div className="transition-transform duration-200 transform group-hover:translate-x-2">
                  <h6 className="font-medium text-base md:text-lg lg:text-xl mb-1 text-black">
                    {event.headline}
                  </h6>
                  <p className="w-full text-sm md:text-base lg:text-lg py-1">
                    {event.description}
                  </p>
                  <div className="flex flex-wrap gap-4 mt-2">
                    {event.tags.map((t, idx) => {
                      const tag = TAGS[t.type];
                      if (!tag) return null;
                      return (
                        <span
                          key={t.type + idx}
                          className={`inline-flex items-center px-3 gap-2 py-1 rounded-md font-medium text-[10px] md:text-xs border-[1px] border-light-silver bg-white ${tag.classes}`}
                          style={{ letterSpacing: 0.2 }}
                        >
                          {tag.icon}
                          {tag.label}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Modal open={!!selected} onClose={() => setSelected(null)}>
          {selected && (
            <OperationModalContent
              event={selected} // pass modern shape
              TAGS={TAGS}
            />
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Timeline;
