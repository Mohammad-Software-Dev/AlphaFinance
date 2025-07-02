import React, { useRef, useEffect } from "react";

import PropertyInfoTab from "../realEstate/tabs/PropertyInfoTab";
import FinancialTab from "../realEstate/tabs/FinancialTab";
import RealEstateTab from "../realEstate/tabs/RealEstateTab";
import UpdatesTab from "../realEstate/tabs/UpdatesTab";
import ReachUs from "../realEstate/tabs/ReachUsTab";

import Transactions from "../profile/tabs/Transactions";
import Profile from "../profile/tabs/Profile";
import Settings from "../profile/tabs/Settings";

interface Props {
  tab: string;
  assetId?: string;
}

const TabContent: React.FC<Props> = ({ tab }) => {
  const topRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (topRef.current) {
      const y = window.scrollY;
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
  if (tab === "profile") {
    return (
      <div ref={topRef}>
        <Profile />
      </div>
    );
  }
  if (tab === "transactions") {
    return (
      <div ref={topRef}>
        <Transactions />
      </div>
    );
  }
  if (tab === "settings") {
    return (
      <div ref={topRef}>
        <Settings />
      </div>
    );
  }

  return (
    <div ref={topRef} className="flex items-start gap-12 mt-8">
      <div className="flex-1 min-h-[400px] flex items-center justify-center">
        <span className="text-dark-silver">
          Content for "{tab}" tab coming soon...
        </span>
      </div>
    </div>
  );
};

export default TabContent;
