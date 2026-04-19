import React from "react";
import TabsLayout from "../../components/layouts/TabsLayout";
import type { TabItem } from "../../components/layouts/tabTypes";

const TAB_LIST: TabItem[] = [
  { label: "Profile", value: "profile" },
  { label: "Transactions", value: "transactions" },
  { label: "Identification", value: "identification" },
  { label: "Settings", value: "settings" },
  { label: "Security", value: "security" },
];

const Profile: React.FC = () => {
  return <TabsLayout tabList={TAB_LIST} defaultTab="profile" />;
};

export default Profile;
