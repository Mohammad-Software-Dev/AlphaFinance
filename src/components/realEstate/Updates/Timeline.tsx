import React from "react";
import FacilityIcon from "../../../assets/icons/facility_management.svg?react";
import PropertyIcon from "../../../assets/icons/property_management.svg?react";
import TenantIcon from "../../../assets/icons/tenant.svg?react";
import ChargesIcon from "../../../assets/icons/services_charges.svg?react";
import CourtIcon from "../../../assets/icons/court.svg?react";
import BankCheckIcon from "../../../assets/icons/banl_check.svg?react";
import LawyerIcon from "../../../assets/icons/lawyer.svg?react";

const TAGS: Record<
  string,
  { label: string; icon: React.ReactNode; classes: string }
> = {
  property: {
    label: "PROPERTY MANAGEMENT",
    icon: <PropertyIcon className="w-4 h-4" />,
    classes: "border-[1px] border-light-silver text-sand",
  },
  tenant: {
    label: "TENANT",
    icon: <TenantIcon className="w-4 h-4" />,
    classes: "border-[1px] border-light-silver text-dim-gray",
  },
  facility: {
    label: "FACILITY MANAGEMENT",
    icon: <FacilityIcon className="w-4 h-4" />,
    classes: "border-[1px] border-light-silver  text-teal-700",
  },
  charges: {
    label: "SERVICES CHARGES",
    icon: <ChargesIcon className="w-4 h-4" />,
    classes: "border-[1px] border-light-silver  text-dark-orange",
  },
  check: {
    label: "BANK CHECK",
    icon: <BankCheckIcon className="w-4 h-4" />,
    classes: "border-[1px] border-light-silver  ",
  },
  lawyer: {
    label: "LAWYER",
    icon: <LawyerIcon className="w-4 h-4" />,
    classes: "border-[1px] border-light-silver ",
  },
  court: {
    label: "COURT",
    icon: <CourtIcon className="w-4 h-4" />,

    classes: "border-[1px] border-light-silver  ",
  },
  alphaseed: {
    label: "ALPHASEED FEES",
    icon: "",
    classes: "border-[1px]  border-light-silver text-brand",
  },
};

const timeline = [
  {
    date: "Jan 22",
    title: "Apparent ready to be rented",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",
    tags: ["property", "tenant"],
    marked: false,
  },
  {
    date: "Dec 12",
    title: "Tenant is ready to move",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ullamcorper quis.",
    tags: ["tenant", "property"],
    marked: true,
  },
  {
    date: "Nov 18",
    title: "Maintenance",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hac at mattis egestas.",
    tags: ["facility"],
    marked: false,
  },
  {
    date: "Nov 4",
    title: "First check deposited",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hac at mattis egestas.",
    tags: ["property", "check", "lawyer"],
    marked: false,
  },
  {
    date: "Oct 28",
    title: "First check bounced",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hac at mattis egestas.",
    tags: ["property", "charges", "check", "court"],
    marked: false,
  },
  {
    date: "March 28",
    title: "Token transaction",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hac at mattis egestas.",
    tags: ["alphaseed", "property"],
    marked: false,
  },
];

const Timeline: React.FC = () => (
  <div className="w-full h-full flex flex-col">
    <h4 className="font-normal text-black mb-3">Timeline</h4>
    <div className="relative flex flex-1 h-0">
      <div className="flex flex-col w-full overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-track-transparent">
        {timeline.map((event) => (
          <div key={event.title} className="flex  relative pr-2">
            <div className="w-[13%] min-w-[60px] flex-shrink-0 pt-4 text-xs md:text-sm font-medium ">
              {event.date}
            </div>

            {/* Timeline content */}
            <div
              className={`
                            flex-1 pl-6 md:pl-8 pr-1 py-3
                            ${
                              event.marked ? "border-l-[3px]" : "border-l-[2px]"
                            }
                        `}
              style={{
                borderLeftColor: event.marked
                  ? "black"
                  : "var(--color-light-silver)",
                background: event.marked
                  ? "linear-gradient(90deg, var(--color-brand-bg, #EEF0FA) 10%, rgba(255,255,255,0) 100%)"
                  : undefined,
              }}
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
                        className={`inline-flex items-center px-3 gap-2 py-1 rounded-md font-medium text-[10px] md:text-xs border ${TAGS[key].classes}`}
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
        ))}
      </div>
    </div>
  </div>
);

export default Timeline;
