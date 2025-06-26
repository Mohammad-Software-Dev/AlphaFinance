import { useState } from "react";
import GeneralLayout from "../../components/layouts/GeneralLayout";
import TabContent from "./TabContent";
import Tabs from "../common/Tabs";

const TAB_LIST = [
  { label: "Profile", value: "profile" },
  { label: "Transactions", value: "transactions" },
  { label: "Identification", value: "identification" },
  { label: "Settings", value: "settings" },
  { label: "Security", value: "security" },
];

const Layout: React.FC = () => {
  const [tab, setTab] = useState("profile");
  const selectedLabel =
    TAB_LIST.find((t) => t.value === tab)?.label || "Profile";

  return (
    <GeneralLayout>
      <div className="flex-1 flex flex-col">
        <div className="relative">
          <div className="" aria-hidden="true" />
          <div className="fixed top-0 pt-6 md:pt-10 z-30 bg-white w-full">
            <h4 className="font-bold mb-3 lg:mb-6 border-b-[4px] border-brand w-fit">
              {selectedLabel}
            </h4>
            <Tabs tabList={TAB_LIST} tab={tab} setTab={setTab} />
            <div className="w-full " />
          </div>
        </div>
        <div className="mt-18 md:mt-28">
          <TabContent tab={tab} />
        </div>
      </div>
    </GeneralLayout>
  );
};
export default Layout;
