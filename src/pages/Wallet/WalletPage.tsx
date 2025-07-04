import React from "react";
import TabsLayout from "../../components/layouts/TabsLayout";

const TAB_LIST = [
  { label: "Ballance", value: "ballance" },
  { label: "Portfolio", value: "wallet_portfolio" },
  { label: "Transfer", value: "transfer" },
  { label: "Bank", value: "bank" },
  { label: "Settings", value: "wallet_settings" },
];

const WalletPage: React.FC = () => {
  return <TabsLayout tabList={TAB_LIST} defaultTab="ballance" />;
};

export default WalletPage;
