import React, { useState } from "react";
import GeneralLayout from "../layouts/GeneralLayout";
import Tabs from "./Tabs";
import TabContent from "./TabContent";

interface Props {
  assetId: string;
}

const TAB_LIST = [
  { label: "", value: "asset" },
  { label: "Property Info", value: "info" },
  { label: "Financial", value: "financial" },
  { label: "Investment calculator", value: "calculator" },
  { label: "Update", value: "update" },
  { label: "Documents", value: "documents" },
  { label: "Reach Us", value: "reach" },
];

const Layout: React.FC<Props> = ({ assetId }) => {
  const [tab, setTab] = useState("asset");
  const selectedLabel =
    TAB_LIST.find((t) => t.value === tab)?.label || `${assetId}`;
  return (
    <GeneralLayout>
      <div className="flex-1 flex flex-col">
        <div className="relative">
          <div className="" aria-hidden="true" />
          <div className="fixed top-0 pt-6 md:pt-10 z-30 bg-white w-full">
            <h4 className="font-bold mb-3 lg:mb-6 border-b-[4px] border-brand w-fit">
              {selectedLabel}
            </h4>
            <Tabs
              tabList={TAB_LIST}
              assetId={assetId}
              tab={tab}
              setTab={setTab}
            />
            <div className="w-full " />
          </div>
        </div>
        <div className="mt-18 md:mt-28">
          <TabContent tab={tab} assetId={assetId} />
        </div>
      </div>
    </GeneralLayout>
  );
};

export default Layout;
