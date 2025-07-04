import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PortfolioCard from "../common/PortofolioCard";

const portfolioData = [
  {
    code: "DXBDIFC007",
    tokens: 2000,
    tokensValue: 455,
    dividends: 2000,
    roi: 5.6,
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    code: "DXBDIFC008",
    tokens: 2000,
    tokensValue: 455,
    dividends: 2000,
    roi: 5.6,
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    code: "DXBDIFC007",
    tokens: 2000,
    tokensValue: 455,
    dividends: 2000,
    roi: 5.6,
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    code: "DXBDIFC008",
    tokens: 2000,
    tokensValue: 455,
    dividends: 2000,
    roi: 5.6,
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    code: "DXBDIFC007",
    tokens: 2000,
    tokensValue: 455,
    dividends: 2000,
    roi: 5.6,
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    code: "DXBDIFC008",
    tokens: 2000,
    tokensValue: 455,
    dividends: 2000,
    roi: 5.6,
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    code: "DXBDIFC007",
    tokens: 2000,
    tokensValue: 455,
    dividends: 2000,
    roi: 5.6,
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    code: "DXBDIFC008",
    tokens: 2000,
    tokensValue: 455,
    dividends: 2000,
    roi: 5.6,
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
];
const PortfolioRow: React.FC = () => (
  <>
    <section className="py-4 md:pt-0 hidden md:block">
      <h4 className="font-medium md:font-normal ">Portfolio</h4>
      <Swiper slidesPerView={4.3} spaceBetween={18} watchSlidesProgress={true}>
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

export default PortfolioRow;
