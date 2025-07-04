import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import VerticalDivider from "../common/VerticalDivider";
import BankTransactionsBlock from "./BankTransactionsBlock";
import SellBlock from "./SellBlock";
import WithdrewBlock from "./WithdrewBlock";

const blocks = [
  { key: "sell", component: <SellBlock /> },
  { key: "withdrew", component: <WithdrewBlock /> },
  { key: "bank", component: <BankTransactionsBlock /> },
];

const TransactionsRow: React.FC = () => (
  <div className="w-full">
    {/* Desktop/Flex */}
    <div className="hidden lg:flex flex-row w-full h-fit">
      <SellBlock />
      <VerticalDivider className="border-light-silver mx-6 h-auto self-stretch" />
      <WithdrewBlock />
      <VerticalDivider className="border-light-silver mx-6 h-auto self-stretch" />
      <BankTransactionsBlock />
    </div>
    {/* Mobile/Table: Swiper */}
    <div className="block lg:hidden w-full">
      <Swiper
        slidesPerView={1.2}
        spaceBetween={16}
        style={{ paddingRight: "8px" }}
      >
        {blocks.map((b) => (
          <SwiperSlide key={b.key}>
            <div className="px-2">{b.component}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);

export default TransactionsRow;
