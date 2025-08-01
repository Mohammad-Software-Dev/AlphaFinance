import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PortfolioCard from "../common/PortofolioCard";

const portfolioData = [
  {
    code: "DXBDT001",
    tokens: 12000,
    tokensValue: 1200000, // $1.2M
    dividends: 90000, // 7.5% yield
    roi: 7.5,
    description: "2 BR Apt, Downtown Dubai, rental yield ~7.5%",
  },
  {
    code: "DXBDT002",
    tokens: 8000,
    tokensValue: 800000, // $0.8M
    dividends: 56000, // 7% yield
    roi: 7.0,
    description: "1 BR Apt, Dubai Mall area, yield ~7%",
  },
  {
    code: "DXBDT003",
    tokens: 6000,
    tokensValue: 600000,
    dividends: 42000, // 7.0% yield
    roi: 7.0,
    description: "Studio, Burj View, yield ~7%",
  },
  {
    code: "DXBDT004",
    tokens: 200000,
    tokensValue: 20000000, // $20M mega asset, e.g. penthouse
    dividends: 1600000, // 8% yield
    roi: 8.0,
    description: "Penthouse high-end, yield ~8%",
  },
  {
    code: "DXBDT005",
    tokens: 9000,
    tokensValue: 900000,
    dividends: 95000, // ~10.6% yield
    roi: 10.6,
    description: "Premium serviced suite, top-end yield ~10.6%",
  },
  {
    code: "DXBDT006",
    tokens: 5000,
    tokensValue: 500000,
    dividends: 30000, // 6.0% yield
    roi: 6.0,
    description: "1 BR condo mid-tier, yield ~6%",
  },
  {
    code: "DXBDT007",
    tokens: 15000,
    tokensValue: 1500000,
    dividends: 165000, // 11.0%
    roi: 11.0,
    description: "Luxury 3 BR, high yield ~11%",
  },
  {
    code: "DXBDT008",
    tokens: 11000,
    tokensValue: 1100000,
    dividends: 70400, // 6.4%
    roi: 6.4,
    description: "2 BR, Fountain View, yield ~6.4%",
  },
];

const PortfolioCards: React.FC = () => (
  <>
    <section className="py-4 md:pt-0 hidden md:block">
      <h4 className="font-medium md:font-normal ">Portfolio</h4>
      <Swiper slidesPerView={2.3} spaceBetween={18} watchSlidesProgress={true}>
        {portfolioData.map((item, idx) => (
          <SwiperSlide key={idx}>
            <PortfolioCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    <section className="py-4 md:pt-0  md:hidden">
      <h4 className="font-medium md:font-normal ">Portfolio</h4>
      <Swiper slidesPerView={1.2} spaceBetween={18} watchSlidesProgress={true}>
        {portfolioData.map((item, idx) => (
          <SwiperSlide key={idx}>
            <PortfolioCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  </>
);

export default PortfolioCards;
