import React from "react";
import GeneralLayout from "../../components/layouts/GeneralLayout";
import HorizontalDivider from "../../components/common/HorizontalDivider";
import StatCardsRow from "../../components/dashboard/StatCardsRow";
import VerticalDivider from "../../components/common/VerticalDivider";
import Instructions from "../../components/dashboard/Instructions";
import PortfolioCards from "../../components/dashboard/PortfolioCards";
import ReportsOverview from "../../components/dashboard/ReportsOverview";
import Trending from "../../components/dashboard/Trending";
import HotAssets from "../../components/dashboard/HotAssets";

const Dashboard: React.FC = () => {
  return (
    <GeneralLayout>
      <section className="flex flex-col mb-6">
        <div className="flex flex-col lg:flex-row ">
          <div className="w-full lg:w-2/3">
            <StatCardsRow />
            <HorizontalDivider className="block border-light-silver  md:my-4  self-stretch" />
            <div className="flex lg:flex-row  flex-col">
              <div className="w-full lg:w-1/3">
                <Instructions />
              </div>
              <VerticalDivider className="hidden border-light-silver md:block mx-4 h-auto self-stretch " />
              <div className="w-full lg:w-2/3">
                <PortfolioCards />
              </div>
            </div>
            <HorizontalDivider className="block border-light-silver my-4 md:my-4  self-stretch" />
            <ReportsOverview />
          </div>
          <VerticalDivider className="hidden border-light-silver md:block mx-6 h-auto self-stretch " />
          <div className="w-full lg:w-1/3 ">
            <Trending />
          </div>
        </div>
        <HorizontalDivider className="block border-light-silver  md:my-4  self-stretch" />
        <HotAssets />
      </section>
    </GeneralLayout>
  );
};

export default Dashboard;
