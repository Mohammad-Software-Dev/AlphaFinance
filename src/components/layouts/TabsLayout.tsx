import React, { useState } from "react";
import GeneralLayout from "./GeneralLayout";
import Tabs from "../common/Tabs";
import TabContent from "./TabContent";
import type { TabItem, TabKey } from "./tabTypes";

interface Props {
  assetId?: string;
  tabList: TabItem[];
  defaultTab?: TabKey;
}

const TabsLayout: React.FC<Props> = ({ assetId, tabList, defaultTab }) => {
  const [tab, setTab] = useState<TabKey>(
    defaultTab ?? tabList[0]?.value ?? "profile"
  );

  return (
    <GeneralLayout>
      <div className="flex-1 flex flex-col">
        <div className="sticky top-0 z-30 ui-surface pt-6 md:pt-0">
          <Tabs
            tabList={tabList}
            assetId={assetId}
            tab={tab}
            setTab={setTab}
          />
        </div>
        <div className="mt-6">
          <TabContent tab={tab} />
        </div>
      </div>
    </GeneralLayout>
  );
};

export default TabsLayout;
