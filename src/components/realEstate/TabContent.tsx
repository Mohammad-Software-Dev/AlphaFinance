import React, { useRef, useEffect } from "react";

import PropertyInfoTab from "./tabs/PropertyInfoTab";
import FinancialTab from "./tabs/FinancialTab";
import RealEstateTab from "./tabs/RealEstateTab";
import UpdatesTab from "./tabs/UpdatesTab";
import ReachUs from "./tabs/ReachUs";

interface Props {
  tab: string;
  assetId: string;
}

const STICKY_HEADER_HEIGHT = 160;

const TabContent: React.FC<Props> = ({ tab }) => {
  const topRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (topRef.current) {
      const y =
        topRef.current.getBoundingClientRect().top +
        window.scrollY -
        STICKY_HEADER_HEIGHT;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [tab]);

  if (tab === "asset") {
    return (
      <div ref={topRef}>
        <RealEstateTab />
      </div>
    );
  }

  if (tab === "info") {
    return (
      <div ref={topRef}>
        <PropertyInfoTab />
      </div>
    );
  }

  if (tab === "financial") {
    return (
      <div ref={topRef}>
        <FinancialTab />
      </div>
    );
  }
  if (tab === "update") {
    return (
      <div ref={topRef}>
        <UpdatesTab />
      </div>
    );
  }
  if (tab === "reach") {
    return (
      <div ref={topRef}>
        <ReachUs />
      </div>
    );
  }

  return (
    <div ref={topRef} className="flex items-start gap-12 mt-8">
      <div className="flex-1 min-h-[400px] flex items-center justify-center">
        <span className="text-gray-500">
          Content for "{tab}" tab coming soon...
        </span>
      </div>
    </div>
  );
};

export default TabContent;
