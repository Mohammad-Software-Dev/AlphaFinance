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

type TimelineEvent = {
  date: string;
  title: string;
  desc: string;
  tags: string[];
};

const TAGS: Record<
  string,
  { label: string; icon: React.ReactNode; classes: string }
> = {
  property: {
    label: "PROPERTY MANAGEMENT",
    icon: <PropertyIcon />,
    classes: " text-sand",
  },
  tenant: {
    label: "TENANT",
    icon: <TenantIcon />,
    classes: " text-dim-gray",
  },
  facility: {
    label: "FACILITY MANAGEMENT",
    icon: <FacilityIcon />,
    classes: "  text-teal-700",
  },
  charges: {
    label: "SERVICES CHARGES",
    icon: <ChargesIcon />,
    classes: "  text-dark-orange",
  },
  check: {
    label: "BANK CHECK",
    icon: <BankCheckIcon />,
    classes: "  ",
  },
  lawyer: {
    label: "LAWYER",
    icon: <LawyerIcon />,
    classes: " ",
  },
  court: {
    label: "COURT",
    icon: <CourtIcon />,
    classes: "  ",
  },
  alphaseed: {
    label: "ALPHASEED FEES",
    icon: "",
    classes: " text-brand",
  },
};

const timeline: TimelineEvent[] = [
  {
    date: "Jan 22",
    title: "Apparent ready to be rented",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",
    tags: ["property", "tenant"],
  },
  {
    date: "Dec 12",
    title: "Tenant is ready to move",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ullamcorper quis.",
    tags: ["tenant", "property"],
  },
  {
    date: "Nov 18",
    title: "Maintenance",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hac at mattis egestas.",
    tags: ["facility"],
  },
  {
    date: "Nov 4",
    title: "First check deposited",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hac at mattis egestas.",
    tags: ["property", "check", "lawyer"],
  },
  {
    date: "Oct 28",
    title: "First check bounced",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hac at mattis egestas.",
    tags: ["property", "charges", "check", "court"],
  },
  {
    date: "March 28",
    title: "Token transaction",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hac at mattis egestas.",
    tags: ["alphaseed", "property"],
  },
];

const Timeline: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(
    null
  );
  return (
    <div className="w-full h-full flex flex-col">
      <h4 className="font-normal text-black mb-3">Operations Transactions</h4>
      <div className="relative flex flex-1 h-0">
        <div className="flex flex-col w-full overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-track-transparent">
          {timeline.map((event) => (
            <div key={event.title} className="flex  relative ">
              <div className="w-[13%] min-w-[60px] flex-shrink-0 pt-4 text-xs md:text-sm font-medium ">
                {event.date}
              </div>

              {/* Timeline content */}
              <div
                className="
                    flex-1 pl-6 md:pl-8  py-3 border-l-[2px] border-light-silver
                    transition-all duration-200
                    hover:border-l-[3px] hover:border-black
                   hover:bg-[linear-gradient(90deg,var(--color-brand-hover)_0%,transparent_50%,transparent_100%)]
                    group cursor-pointer
                  "
                onClick={() => setSelectedEvent(event)}
              >
                <div
                  className="
                    transition-transform duration-200 transform
                    group-hover:translate-x-2
                  "
                >
                  <h6 className="font-medium text-base md:text-lg lg:text-xl mb-1 text-black">
                    {event.title}
                  </h6>
                  <p className="w-full text-sm md:text-base lg:text-lg py-1">
                    {event.desc}
                  </p>
                  <div className="flex flex-wrap gap-4 mt-2">
                    {event.tags.map(
                      (key) =>
                        TAGS[key] && (
                          <span
                            key={key}
                            className={`inline-flex  items-center px-3 gap-2 py-1 rounded-md font-medium text-[10px] md:text-xs border-[1px] border-light-silver bg-white ${TAGS[key].classes}`}
                            style={{ letterSpacing: 0.2 }}
                          >
                            {TAGS[key].icon}
                            {TAGS[key].label}
                          </span>
                        )
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Modal open={!!selectedEvent} onClose={() => setSelectedEvent(null)}>
          {selectedEvent && (
            <OperationModalContent event={selectedEvent} TAGS={TAGS} />
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Timeline;
