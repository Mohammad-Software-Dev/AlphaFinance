import React from "react";
import TabsLayout from "../../components/layouts/TabsLayout";
import type { TabItem } from "../../components/layouts/tabTypes";

const TAB_LIST: TabItem[] = [
  { label: "Balance", value: "balance" },
  { label: "Portfolio", value: "wallet_portfolio" },
  { label: "Transfer", value: "transfer" },
  { label: "Bank", value: "bank" },
];

const WalletPage: React.FC = () => {
  return <TabsLayout tabList={TAB_LIST} defaultTab="balance" />;
};

export default WalletPage;
