import React, { useRef, useEffect } from "react";
import InlineNotBuiltYet from "../common/InlineNotBuiltYet";
import type { TabKey } from "./tabTypes";

import PropertyInfoTab from "../realEstate/tabs/PropertyInfoTab";
import FinancialTab from "../realEstate/tabs/FinancialTab";
import RealEstateTab from "../realEstate/tabs/RealEstateTab";
import UpdatesTab from "../realEstate/tabs/UpdatesTab";
import ReachUs from "../realEstate/tabs/ReachUsTab";

import Transactions from "../profile/tabs/Transactions";
import Profile from "../profile/tabs/Profile";
import Settings from "../profile/tabs/Settings";
import Identification from "../profile/tabs/Identification";
import Security from "../profile/tabs/Security";
import Balance from "../wallet/tabs/Balance";
import Portfolio from "../wallet/tabs/Portfolio";
import Transfer from "../wallet/tabs/Transfer";
import Bank from "../wallet/tabs/Bank";
import CalculatorTab from "../realEstate/tabs/CalculatorTab";
import DocumentsTab from "../realEstate/tabs/DocumentsTab";

interface Props {
  tab: TabKey | string;
}

const TAB_COMPONENTS: Record<TabKey, React.ComponentType> = {
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
  identification: Identification,
  security: Security,
  balance: Balance,
  wallet_portfolio: Portfolio,
  transfer: Transfer,
  bank: Bank,
};

const TabContent: React.FC<Props> = ({ tab }) => {
  const topRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (topRef.current) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [tab]);

  const TabComponent = TAB_COMPONENTS[tab as TabKey];

  if (TabComponent) {
    return (
      <div ref={topRef}>
        <TabComponent />
      </div>
    );
  }

  return (
    <div ref={topRef} className="mt-8">
      <InlineNotBuiltYet />
    </div>
  );
};

export default TabContent;
