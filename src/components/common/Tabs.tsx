import React from "react";

interface Tab {
  label: string;
  value: string;
}

interface Props {
  tabList: Tab[];
  assetId?: string | null;
  tab: string;
  setTab: (tab: string) => void;
}

const Tabs: React.FC<Props> = ({ tabList, assetId, tab, setTab }) => (
  <nav
    className="
    relative
      flex
      border-b-[1px] border-light-silver 
      overflow-x-auto
      whitespace-nowrap
      scrollbar-hide
      justify-between w-full
      "
    style={{ WebkitOverflowScrolling: "touch" }}
  >
    {tabList.map((item, idx) => (
      <button
        key={item.value}
        className={`
          ${idx === tabList.length - 1 ? "" : "mr-8 md:mr-0"}
           py-1 lg:px-0 lg:py-0
          text-lg md:text-2xl font-base border-b-[2px]
          ${
            tab === item.value
              ? "border-brand text-brand font-semibold"
              : "border-transparent text-black hover:text-brand"
          }
        `}
        onClick={() => setTab(item.value)}
        style={{ minWidth: "max-content" }}
      >
        {idx === 0 ? assetId ?? item.label : item.label}
      </button>
    ))}
  </nav>
);

export default Tabs;
