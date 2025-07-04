import { Swiper, SwiperSlide } from "swiper/react";
import React, { Suspense } from "react";
const StatChart = React.lazy(() => import("./StatChart"));

const statConfigs = [
  {
    label: "Property Price",
    value: "AED 130,832",
    change: "+9%",
    changeColor: "text-green-500",
    chartProps: {
      color: "brand",
      data: [62, 74, 93, 108, 120, 110, 97, 101, 105, 112, 120, 132],
      min: 60,
      max: 140,
      tickAmount: 4,
    },
  },
  {
    label: "Total Revenue",
    value: "AED 5,927",
    change: "+4%",
    changeColor: "text-green-500",
    chartProps: {
      color: "dark-orange",
      data: [55, 62, 68, 79, 86, 78, 71, 80, 91, 98, 100, 110],
      min: 40,
      max: 120,
      tickAmount: 4,
    },
  },
  {
    label: "NET Income",
    value: "AED 130,832",
    change: "+9%",
    changeColor: "text-green-500",
    chartProps: {
      color: "black",
      data: [124, 98, 67, 77, 102, 109, 101, 105, 91, 87, 75, 67],
      min: 60,
      max: 140,
      tickAmount: 4,
    },
  },
];

const FinancialStatsRow: React.FC = () => (
  <>
    {/* Desktop & Tablet Layout */}
    <div className="hidden lg:flex flex-row h-fit border-b-[1px] border-light-silver w-full">
      {statConfigs.map((stat) => (
        <section
          key={stat.label}
          className="flex-1 flex flex-col gap-5 pr-4"
          aria-label={stat.label}
        >
          <header>
            <h4 className="font-normal text-black mb-3">{stat.label}</h4>
            <div className="flex items-end gap-2">
              <h6 className=" font-semibold ">{stat.value}</h6>
              <span className="font-bold text-xs md:text-base text-verified-green">
                {stat.change}
              </span>
            </div>
          </header>
          <Suspense
            fallback={<div style={{ height: 180 }}>Loading chart…</div>}
          >
            <StatChart {...stat.chartProps} />
          </Suspense>
        </section>
      ))}
    </div>

    {/* Mobile Swiper Layout */}
    <div className="block lg:hidden w-full border-b-[1px] border-light-silver">
      <Swiper
        slidesPerView={1.1}
        spaceBetween={16}
        style={{ paddingRight: "8px" }}
      >
        {statConfigs.map((stat) => (
          <SwiperSlide key={stat.label}>
            <section className=" flex flex-col  gap-3 " aria-label={stat.label}>
              <header>
                <h4 className="font-normal text-black mb-3">{stat.label}</h4>
                <div className="flex items-end gap-2">
                  <h6 className=" font-semibold ">{stat.value}</h6>
                  <span className="font-bold text-xs md:text-base text-verified-green">
                    {stat.change}
                  </span>
                </div>
              </header>
              <Suspense
                fallback={<div style={{ height: 180 }}>Loading chart…</div>}
              >
                <StatChart height={250} {...stat.chartProps} />
              </Suspense>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </>
);

export default FinancialStatsRow;
