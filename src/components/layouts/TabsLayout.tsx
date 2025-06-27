import React, { useState } from "react";
import GeneralLayout from "./GeneralLayout";
import Tabs from "../common/Tabs";
import TabContent from "./TabContent";

interface Tab {
  label: string;
  value: string;
}

interface Props {
  assetId?: string;
  tabList: Tab[];
  defaultTab?: string;
}

const TabsLayout: React.FC<Props> = ({ assetId, tabList, defaultTab }) => {
  const [tab, setTab] = useState(defaultTab ?? tabList[0]?.value ?? "profile");
  const selectedLabel =
    tabList.find((t) => t.value === tab)?.label || (assetId ?? "");

  return (
    <GeneralLayout>
      <div className="flex-1 flex flex-col">
        <div className="relative">
          <div className="" aria-hidden="true" />
          <div className="fixed md:sticky top-0 pt-6 md:pt-0 z-30 bg-white w-[92vw] md:w-full">
            <h4 className="font-bold mb-3 lg:mb-6 border-b-[4px] border-brand w-fit">
              {selectedLabel}
            </h4>
            <Tabs
              tabList={tabList}
              assetId={assetId}
              tab={tab}
              setTab={setTab}
            />
            <div className="w-full " />
          </div>
        </div>
        <div className="mt-16 md:mt-6">
          <TabContent tab={tab} assetId={assetId} />
        </div>
      </div>
    </GeneralLayout>
  );
};

export default TabsLayout;
