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
      border-b-[1px] border-light-silver 
      overflow-x-auto
      whitespace-nowrap
      scrollbar-hide
      w-full
    "
    style={{ WebkitOverflowScrolling: "touch" }}
    aria-label="Tabs"
  >
    <ul className="flex justify-between w-full">
      {tabList.map((item, idx) => (
        <li
          key={item.value}
          className={idx === tabList.length - 1 ? "" : "mr-8 md:mr-0"}
        >
          <button
            className={`
              py-1 lg:px-0 lg:py-0
              text-sm md:text-lg font-bold border-b-[2px]
              ${
                tab === item.value
                  ? "border-brand text-brand "
                  : "border-transparent text-black hover:text-brand"
              }
            `}
            aria-current={tab === item.value ? "page" : undefined}
            onClick={() => setTab(item.value)}
            style={{ minWidth: "max-content" }}
            type="button"
          >
            {idx === 0 ? assetId ?? item.label : item.label}
          </button>
        </li>
      ))}
    </ul>
  </nav>
);

export default Tabs;
