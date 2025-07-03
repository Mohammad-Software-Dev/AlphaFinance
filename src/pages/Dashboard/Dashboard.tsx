import React from "react";
import GeneralLayout from "../../components/layouts/GeneralLayout";
import HorizontalDivider from "../../components/common/HorizontalDivider";
import StatCardsRow from "../../components/dashnoard/StatCardsRow";
import VerticalDivider from "../../components/common/VerticalDivider";
import Instructions from "../../components/dashnoard/Instructions";
import PortfolioCards from "../../components/dashnoard/PortfolioCards";

const Dashboard: React.FC = () => {
  return (
    <GeneralLayout title="Dashboard">
      <section className="flex">
        <div className="w-full md:w-3/4">
          <StatCardsRow />
          <HorizontalDivider className="block border-light-silver  md:my-8  self-stretch" />
          <div className="flex md:flex-row flex-col">
            <div className="w-1/4">
              <Instructions />
            </div>
            <div className="w-3/4">
              <PortfolioCards />
            </div>
          </div>

          <HorizontalDivider className="block border-light-silver  md:my-8  self-stretch" />
        </div>
        <VerticalDivider className="hidden border-light-silver md:block mx-6 h-auto self-stretch min-h-[600px]" />

        <div className="w-full md:w-1/4"></div>
      </section>
    </GeneralLayout>
  );
};

export default Dashboard;
