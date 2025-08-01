import React from "react";
import StatCard from "./StatCard";
import { Swiper, SwiperSlide } from "swiper/react";
const stats = [
  {
    title: "Total Asset Value",
    value: "1.75 M",
    label: "Total",
    percent: "+20%",
    percentColor: "teal",
  },
  {
    title: "Total Dividends",
    value: "115 K",
    label: "Last",
    percent: "+6%",
    percentColor: "sand",
    secondLabel: "Annual",
  },
  {
    title: "Capital Growth",
    value: "140 K",
    label: "Last",
    percent: "+8%",
    percentColor: "teal",
    secondLabel: "YTD",
  },
  {
    title: "ROI",
    value: "192,500",
    label: "Total",
    percent: "+11%",
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
