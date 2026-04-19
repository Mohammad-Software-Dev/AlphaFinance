import React from "react";
import AssetOverview from "../AssetOverview";
import StatCard from "../../dashboard/StatCard";
import { Swiper, SwiperSlide } from "swiper/react";
import HorizontalDivider from "../../common/HorizontalDivider";
import type {
  StatCardVM,
  AssetOverviewVM,
} from "../../../models/propertyDetails";

type Props = { statCards: StatCardVM[]; overviewVM: AssetOverviewVM };

const RealEstateRightSection: React.FC<Props> = ({ statCards, overviewVM }) => {
  return (
    <div className="flex flex-col gap-8 ">
      <div className="hidden md:grid grid-cols-2 gap-6">
        {statCards.map((s) => (
          <StatCard key={s.title} {...s} />
        ))}
      </div>
      <div className="block md:hidden py-6 w-full">
        <Swiper
          slidesPerView={1.15}
          spaceBetween={16}
          style={{ paddingRight: 8 }}
        >
          {statCards.map((s) => (
            <SwiperSlide key={s.title}>
              <div className="pr-1">
                <StatCard {...s} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <HorizontalDivider className=" border-light-silver my-2 self-stretch" />
        <AssetOverview property={overviewVM} investClassName="md:mt-35" />
      </div>
    </div>
  );
};

export default RealEstateRightSection;
