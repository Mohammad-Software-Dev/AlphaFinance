import React from "react";

interface Tab {
  label: string;
  value: string;
}

interface Props {
  tabList: Tab[];
  assetId: string;
  tab: string;
  setTab: (tab: string) => void;
}

const Tabs: React.FC<Props> = ({ tabList, assetId, tab, setTab }) => (
  <nav
    className="
      flex
      border-b-[1px] border-light-silver w-full
      overflow-x-auto
      whitespace-nowrap
      scrollbar-hide
      sm:justify-between sm:w-5/6
      "
    style={{ WebkitOverflowScrolling: "touch" }}
  >
    {tabList.map((item, idx) => (
      <button
        key={item.value}
        className={`
          mr-8 py-1 lg:px-0 lg:py-0
          text-sm md:text-base font-base border-b-[2px]
          ${
            tab === item.value
              ? "border-brand text-brand font-semibold"
              : "border-transparent text-black hover:text-brand"
          }
        `}
        onClick={() => setTab(item.value)}
        style={{ minWidth: "max-content" }}
      >
        {idx === 0 ? assetId : item.label}
      </button>
    ))}
  </nav>
);

export default Tabs;
