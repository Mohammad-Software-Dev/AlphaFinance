import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PortfolioCard from "../common/PortofolioCard";
import { properties } from "../../data/properties";

import type { PropertyType } from "../../data/properties";

function mapPropertyToPortfolioCardProps(p: PropertyType) {
  return {
    code: p.code,
    tokens: p.totalTokens ?? 0,
    tokensValue: (p.totalTokens ?? 0) * (p.tokenPrice ?? 0),
    dividends: p.netYield
      ? Number(String(p.netYield).replace(/[^\d.]/g, ""))
      : 0,
    roi: typeof p.roi === "string" ? parseFloat(p.roi) : p.roi ?? 0,
    description: p.title,
  };
}
const PortfolioRow: React.FC = () => (
  <>
    <section className="py-4 md:pt-0 hidden md:block">
      <h4 className="font-medium md:font-normal ">Portfolio</h4>
      <Swiper slidesPerView={4.3} spaceBetween={18} watchSlidesProgress={true}>
        {properties.map((item, idx) => (
          <SwiperSlide key={idx}>
            <PortfolioCard {...mapPropertyToPortfolioCardProps(item)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    <section className="py-4 md:pt-0  md:hidden">
      <h4 className="font-medium md:font-normal ">Portfolio</h4>
      <Swiper slidesPerView={1.2} spaceBetween={18} watchSlidesProgress={true}>
        {properties.map((item, idx) => (
          <SwiperSlide key={idx}>
            <PortfolioCard {...mapPropertyToPortfolioCardProps(item)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  </>
);

export default PortfolioRow;
