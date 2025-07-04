import React from "react";
import GeneralLayout from "../../components/layouts/GeneralLayout";
import HorizontalDivider from "../../components/common/HorizontalDivider";
import StatCardsRow from "../../components/dashnoard/StatCardsRow";
import VerticalDivider from "../../components/common/VerticalDivider";
import Instructions from "../../components/dashnoard/Instructions";
import PortfolioCards from "../../components/dashnoard/PortfolioCards";
import ReportsOverview from "../../components/dashnoard/ReportsOverview";
import Trending from "../../components/dashnoard/Trending";
import HotAssets from "../../components/dashnoard/HotAssets";

const Dashboard: React.FC = () => {
  return (
    <GeneralLayout title="Dashboard">
      <section className="flex flex-col mb-6">
        <div className="flex">
          <div className="w-full lg:w-2/3">
            <StatCardsRow />
            <HorizontalDivider className="block border-light-silver  md:my-4  self-stretch" />
            <div className="flex md:flex-row  flex-col">
              <div className="w-full md:w-1/3">
                <Instructions />
              </div>
              <VerticalDivider className="hidden border-light-silver md:block mx-4 h-auto self-stretch " />
              <div className="w-full md:w-2/3">
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
