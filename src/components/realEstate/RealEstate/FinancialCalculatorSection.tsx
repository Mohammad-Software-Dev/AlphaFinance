import { Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import InvestmentChart from "./InvestmentChart";
import SemiRadialInput from "./SemiRadialInput";

const radialInputs = [
  { value: 1520, min: 1000, max: 10000, label: "1520" },
  { value: 4520, min: 1000, max: 10000, label: "520" },
  { value: 6520, min: 1000, max: 10000, label: "20" },
];

const FinancialCalculatorSection: React.FC = () => (
  <div>
    <h4 className="font-normal text-black mb-3">Financial Calculator</h4>
    <div>
      <p>
        Considering The Token Price
        <span className="text-dark-orange font-semibold"> 8 AED</span> And Token{" "}
        <span className="text-teal font-semibold"> ROI 11.6%</span> And...
      </p>
    </div>

    {/* Desktop layout (lg and up) */}
    <div className="hidden lg:flex  py-8">
      {radialInputs.map((props, idx) => (
        <SemiRadialInput key={idx} {...props} />
      ))}
    </div>

    {/* Mobile + md Swiper */}
    <div className="lg:hidden py-8">
      <Swiper
        slidesPerView={1.3}
        spaceBetween={16}
        style={{ paddingRight: "8px" }}
      >
        {radialInputs.map((props, idx) => (
          <SwiperSlide key={idx}>
            <SemiRadialInput {...props} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    {/* Chart below, unchanged */}
    <div className="w-full hidden md:block">
      <Suspense fallback={<div>Loading chart…</div>}>
        <InvestmentChart height={360} />
      </Suspense>
    </div>
    <div className="w-full md:hidden">
      <Suspense fallback={<div>Loading chart…</div>}>
        <InvestmentChart height={180} />
      </Suspense>
    </div>
  </div>
);

export default FinancialCalculatorSection;
