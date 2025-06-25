import React, { useState } from "react";
import VerticalDivider from "../../common/VerticalDivider";
import UpdatesAndVotes from "../Updates/UpdatesAndVotes";
import Timeline from "../Updates/Timeline";

const MOBILE_TABS = [
  {
    label: "Updates",
    key: "updates",
  },
  {
    label: "Timeline",
    key: "timeline",
  },
];

const UpdatesTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"updates" | "timeline">("updates");

  return (
    <div className="flex flex-col  lg:flex-row w-full min-h-fit relative">
      <div className="flex  lg:hidden w-full justify-evenly my-0 mb-2 mt-[-1rem]">
        {MOBILE_TABS.map((tab) => (
          <button
            key={tab.key}
            className={`flex  justify-center items-center gap-2 px-4 py-2  transition font-semibold text-sm w-full
              ${
                activeTab === tab.key
                  ? "border-b border-brand text-brand"
                  : " border-b border-light-silve"
              }`}
            onClick={() => setActiveTab(tab.key as "updates" | "timeline")}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <section
        className={`
          w-full flex flex-col
          ${activeTab === "updates" ? "" : "hidden"}
          lg:flex lg:w-2/3 lg:h-[85.2vh]
        `}
      >
        <UpdatesAndVotes />
      </section>

      <VerticalDivider className="hidden border-light-silver lg:block mx-6 h-auto self-stretch min-h-[600px]" />

      <section
        className={`
          w-full flex flex-col
          ${activeTab === "timeline" ? "" : "hidden"}
          lg:flex lg:w-1/3 lg:h-[85.2vh]
        `}
      >
        <div className="flex flex-col h-full">
          <Timeline />
        </div>
      </section>
    </div>
  );
};

export default UpdatesTab;
