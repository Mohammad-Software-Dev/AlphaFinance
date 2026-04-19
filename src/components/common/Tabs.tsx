import React from "react";
import type { TabItem, TabKey } from "../layouts/tabTypes";

interface Props {
  tabList: TabItem[];
  assetId?: string | null;
  tab: TabKey;
  setTab: (tab: TabKey) => void;
}

const Tabs: React.FC<Props> = ({ tabList, assetId, tab, setTab }) => (
  <nav
    className="
      relative
      border-b border-light-silver ui-divider
      overflow-x-auto
      whitespace-nowrap
      scrollbar-hide
      w-full
    "
    style={{ WebkitOverflowScrolling: "touch" }}
    aria-label="Tabs"
  >
    <ul className="flex justify-between w-full" role="tablist">
      {tabList.map((item, idx) => (
        <li
          key={item.value}
          className={idx === tabList.length - 1 ? "" : "mr-8 md:mr-0"}
        >
          <button
            className={`
              py-1 lg:px-0 lg:py-0
              text-sm md:text-lg font-bold border-b-2 focus-ring
              ${
                tab === item.value
                  ? "border-brand text-brand"
                  : "border-transparent ui-text-muted hover:text-brand"
              }
            `}
            role="tab"
            aria-selected={tab === item.value}
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
