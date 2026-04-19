import React, { Suspense } from "react";

const DividendsChart = React.lazy(
  () => import("../realEstate/Financial/DividendsChart")
);
const StatChart = React.lazy(() => import("../realEstate/Financial/StatChart"));

import { Swiper, SwiperSlide } from "swiper/react";
import Loader from "../common/Loader";

const priceData = [62, 74, 93, 108, 120, 110, 97, 101, 105, 112, 120, 132];
const netIncomeData = [124, 98, 67, 77, 102, 109, 101, 105, 91, 87, 75, 67];

const chartConfigs = [
  {
    key: "property",
    title: "Property Price",
    value: "AED 130,832",
    change: "+9%",
    changeColor: "text-verified-green",
    renderChart: () => (
      <Suspense fallback={<Loader />}>
        <StatChart
          color="brand"
          data={priceData}
          min={60}
          max={140}
          tickAmount={4}
          height={180}
        />
      </Suspense>
    ),
  },
  {
    key: "netincome",
    title: "NET Income",
    value: "AED 130,832",
    change: "+9%",
    changeColor: "text-verified-green",
    renderChart: () => (
      <Suspense fallback={<Loader />}>
        <StatChart
          color="black"
          data={netIncomeData}
          min={60}
          max={140}
          tickAmount={4}
          height={180}
        />
      </Suspense>
    ),
  },
  {
    key: "dividends",
    title: "Dividends",
    value: "125,927",
    change: "+4%",
    changeColor: "text-verified-green",
    renderChart: () => (
      <Suspense fallback={<Loader />}>
        <DividendsChart />
      </Suspense>
    ),
  },
] as const;

const ChartsRow: React.FC = () => (
  <div className="w-full ">
    {/* Summary Row */}
    {/* <div className="flex flex-wrap gap-10 pb-3 mb-4 text-lg border-b-[1px] border-light-silver">
      <div className="flex flex-col space-y-2 justify-between">
        <span className="text-dim-gray text-sm">Gross volume</span>
        <span className="font-semibold text-xl">€1,452.25</span>
      </div>
      <div className="flex flex-col space-y-2 justify-between">
        <span className="text-dim-gray text-sm">Yesterday</span>
        <span className="text-dim-gray  font-semibold text-base">
          €1,253.61
        </span>
      </div>
      <div className="flex flex-col space-y-2 justify-between">
        <span className="text-dim-gray text-sm">Yesterday</span>
        <span className="text-dim-gray  font-semibold text-base">
          €1,253.61
        </span>
      </div>
      <div className="flex flex-col space-y-2 justify-between">
        <span className="text-dim-gray text-sm">Yesterday</span>
        <span className="text-dim-gray  font-semibold text-base">
          €1,253.61
        </span>
      </div>
    </div> */}

    {/* Chart Row */}
    <div className="hidden 2xl:flex flex-row justify-between">
      {chartConfigs.map((stat) => (
        <div className="flex-1" key={stat.key}>
          <div className="mb-1">
            <h4 className="font-medium md:font-normal">{stat.title}</h4>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-base text-dim-gray">{stat.value}</span>
            <span className={`${stat.changeColor} font-bold text-base`}>
              {stat.change}
            </span>
          </div>
          {stat.renderChart()}
        </div>
      ))}
    </div>
    <div className="block 2xl:hidden w-full">
      <Swiper
        slidesPerView={1.15}
        spaceBetween={16}
        style={{ paddingRight: "8px" }}
      >
        {chartConfigs.map((stat) => (
          <SwiperSlide key={stat.key}>
            <div className="">
              <div className="mb-1">
                <h4 className="font-medium">{stat.title}</h4>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base text-dim-gray">{stat.value}</span>
                <span className={`${stat.changeColor} font-bold text-base`}>
                  {stat.change}
                </span>
              </div>
              {stat.renderChart()}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);

export default ChartsRow;
