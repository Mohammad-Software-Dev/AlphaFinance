import React from "react";
import { useParams } from "react-router-dom";
import TabsLayout from "../../components/layouts/TabsLayout";
import type { TabItem } from "../../components/layouts/tabTypes";

const TAB_LIST: TabItem[] = [
  { label: "", value: "asset" },
  { label: "Property Info", value: "info" },
  { label: "Financial", value: "financial" },
  { label: "Calculator", value: "calculator" },
  { label: "Update", value: "update" },
  { label: "Documents", value: "documents" },
  { label: "Reach Us", value: "reach" },
];

const RealEstatePage: React.FC = () => {
  const { assetId } = useParams<{ assetId: string }>();

  return <TabsLayout tabList={TAB_LIST} assetId={assetId || ""} />;
};

export default RealEstatePage;
