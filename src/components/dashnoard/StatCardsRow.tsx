import React from "react";
import StatCard from "./StatCard";
import { Swiper, SwiperSlide } from "swiper/react";

const stats = [
  {
    title: "Asset Value",
    value: "53.000",
    label: "Total",
    percent: "+53%",
    percentColor: "teal",
  },
  {
    title: "Total Dividends",
    value: "53.000",
    label: "Last",
    percent: "+53%",
    percentColor: "sand",
    secondLabel: "Quarter",
  },
  {
    title: "Capital Growth",
    value: "53.000",
    label: "Last",
    percent: "+53%",
    percentColor: "teal",
    secondLabel: "3 Months",
  },
  {
    title: "ROI",
    value: "53.000",
    label: "Total",
    percent: "+53%",
    percentColor: "orange",
    secondLabel: "ROI",
  },
] as const;

const StatCardsRow: React.FC = () => (
  <>
    {/* Desktop & Tablet: Flex Row */}
    <div className="hidden lg:flex gap-6 w-full py-2">
      {stats.map((s) => (
        <StatCard key={s.title} {...s} />
      ))}
    </div>

    <div className="hidden md:block lg:hidden py-4 w-full">
      <Swiper slidesPerView={2.7} spaceBetween={18} watchSlidesProgress={true}>
        {stats.map((s) => (
          <SwiperSlide key={s.title}>
            <div className="pr-1">
              <StatCard {...s} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    <div className="block md:hidden py-6 w-full">
      <Swiper
        slidesPerView={1.15}
        spaceBetween={16}
        style={{ paddingRight: 8 }}
      >
        {stats.map((s) => (
          <SwiperSlide key={s.title}>
            <div className="pr-1">
              <StatCard {...s} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </>
);

export default StatCardsRow;
