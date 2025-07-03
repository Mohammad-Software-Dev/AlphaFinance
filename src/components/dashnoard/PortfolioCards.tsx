import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PortfolioCard from "./PortofolioCard";

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
];

const PortfolioCards: React.FC = () => (
  <section className="py-4 md:pt-0 ">
    <h4 className="font-normal">Portfolio</h4>
    <Swiper
      slidesPerView={1.1}
      spaceBetween={18}
      style={{ paddingRight: "8px" }}
    >
      {portfolioData.map((item, idx) => (
        <SwiperSlide key={idx} className="max-w-fit">
          <PortfolioCard {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default PortfolioCards;
