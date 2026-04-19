import React, { Suspense } from "react";
const DividendsChart = React.lazy(
  () => import("../realEstate/Financial/DividendsChart")
);
const StatChart = React.lazy(() => import("../realEstate/Financial/StatChart"));

import { Swiper, SwiperSlide } from "swiper/react";
import Loader from "../common/Loader";
import DateInput from "../common/DateInput";

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

const ReportsOverview: React.FC = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );
  const [status, setStatus] = React.useState<string | null>(null);

  // Optional: formatted string

  return (
    <div className="w-full ">
      {/* Top Title */}
      <h4 className="font-medium md:font-normal ">Reports overview</h4>

      {/* Filters Row */}
      <div className="flex flex-wrap  h-fit  gap-4 items-center mb-4 py-1">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0  gap-6 items-center w-full md:w-fit mb-6 md:mb-0">
          <select className=" border-b-[1px] border-light-silver  px-2 py-1 rounded text-sm  focus:outline-none ">
            <option>Last 12 months</option>
            <option>Last 6 months</option>
            <option>Last 3 months</option>
          </select>

          <DateInput value={selectedDate} onChange={setSelectedDate} />
          <span className=" text-dim-gray text-sm w-1/4">compared to</span>

          <select className="border-b-[1px] border-light-silver  px-2 py-1  text-sm  focus:outline-none ">
            <option>Previous period</option>
            <option>Same period last year</option>
          </select>
        </div>
        <div className="md:ml-auto flex gap-2">
          <select className="border-b-[1px] border-light-silver  px-2 py-1 rounded text-sm  focus:outline-none ">
            <option>Monthly</option>
            <option>Weekly</option>
          </select>
          <button
            type="button"
            className="border-b-[1px] border-light-silver  px-3 py-1 rounded flex items-center gap-1 text-sm focus-ring"
            onClick={() => setStatus("Chart layout controls opened (demo mode).")}
          >
            <span className="text-sm" role="img" aria-label="edit">
              ⚙️
            </span>
            Edit charts
          </button>
        </div>
      </div>
      {status && <p className="text-sm text-brand mb-3">{status}</p>}

      {/* Summary Row */}
      <div className="flex flex-wrap gap-10 pb-3 mb-4 text-lg border-b-[1px] border-light-silver">
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
      </div>

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
              <div className="px-2">
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
};

export default ReportsOverview;
