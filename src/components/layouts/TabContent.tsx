import React, { useRef, useEffect } from "react";

import PropertyInfoTab from "../realEstate/tabs/PropertyInfoTab";
import FinancialTab from "../realEstate/tabs/FinancialTab";
import RealEstateTab from "../realEstate/tabs/RealEstateTab";
import UpdatesTab from "../realEstate/tabs/UpdatesTab";
import ReachUs from "../realEstate/tabs/ReachUsTab";

import Transactions from "../profile/tabs/Transactions";
import Profile from "../profile/tabs/Profile";
import Settings from "../profile/tabs/Settings";
import Ballance from "../wallet/tabs/Ballance";
import Portfolio from "../wallet/tabs/Portfolio";
import Transfer from "../wallet/tabs/Transfer";
import Bank from "../wallet/tabs/Bank";
import CalculatorTab from "../realEstate/tabs/CalculatorTab";
import DocumentsTab from "../realEstate/tabs/DocumentsTab";

interface Props {
  tab: string;
}

const TAB_COMPONENTS: Record<string, React.ComponentType> = {
  asset: RealEstateTab,
  info: PropertyInfoTab,
  financial: FinancialTab,
  calculator: CalculatorTab,
  update: UpdatesTab,
  documents: DocumentsTab,
  reach: ReachUs,
  profile: Profile,
  transactions: Transactions,
  settings: Settings,
  ballance: Ballance,
  wallet_portfolio: Portfolio,
  transfer: Transfer,
  bank: Bank,
};

const TabContent: React.FC<Props> = ({ tab }) => {
  const topRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (topRef.current) {
      const y = window.scrollY;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [tab]);

  const TabComponent = TAB_COMPONENTS[tab];

  if (TabComponent) {
    return (
      <div ref={topRef}>
        <TabComponent />
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
