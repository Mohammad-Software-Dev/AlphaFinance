import React from "react";
import Transactions from "../../common/Transaction";
import Invoices from "../../common/Invoices";
import userImage from "../../../assets/images/Daivd.png";
import VerticalDivider from "../../common/VerticalDivider";
import HorizontalDivider from "../../common/HorizontalDivider";
import EditIcon from "../../../assets/icons/edit_icon.svg?react";
import { Button } from "../../common/Button";
import DownloadIcon from "../../../assets/icons/download_text.svg?react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import MasterCardLogo from "../../../assets/icons/master_card_logo.svg?react";
import VisaCardLogo from "../../../assets/icons/visa_card_logo.svg?react";

import CreditCard from "../CreditCard";

const cardImages = [
  <MasterCardLogo className="w-14 h-14" />,
  <VisaCardLogo className="w-14 h-14" />,
];

const TransactionPage: React.FC = () => {
  return (
    <div className="flex  flex-col md:flex-row gap-8 lg:gap-0">
      <div className="w-full md:w-2/3">
        {/* Profile & Card */}
        <div className="flex flex-row w-full md:w-3/4  justify-start items-center  gap-6 mb-8">
          <div className="flex items-center gap-4 md:w-1/2">
            <img
              src={userImage}
              alt="David Peters"
              className="w-16 h-16 rounded-full object-cover "
            />
            <div>
              <h4 className="text-black">David Peters</h4>
              <div className="text-sm font-normal">
                Account Manager &nbsp; England, London UK
              </div>
            </div>
          </div>
          <div>
            <EditIcon />
          </div>
        </div>

        {/* Credit Card & Payment Methods */}
        <div className="flex  flex-col lg:flex-row w-full   gap-8 items-stretch mb-8">
          <div className=" px-6 py-2  md:w-sm lg:w-md">
            <Swiper
              effect="cards"
              modules={[EffectCards]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
            >
              {cardImages.map((logo, idx) => (
                <SwiperSlide className="rounded-xl" key={idx}>
                  {/* <img
                    src={img}
                    alt={`Card ${idx + 1}`}
                    className="w-full object-cover "
                  /> */}
                  <CreditCard logo={logo} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <HorizontalDivider className="block border-light-silver md:hidden  my-8  self-stretch" />
        <div className="mb-8">
          <h4 className="mb-4">Billing Information</h4>
          <div className="bg-ghost-white rounded-lg p-5 mb-2">
            <div className="text-sm md:text-base">
              <span className="text-base md:text-lg">Arrora Gaur</span>
            </div>

            <div className="text-sm md:text-base">
              Company Name:{" "}
              <span className="text-sm md:text-base font-semibold">
                Viking Norway
              </span>
            </div>
            <div className="text-sm md:text-base">
              Email Address:{" "}
              <span className="text-sm md:text-base font-semibold">
                aroragaur@gmail.com
              </span>
            </div>
            <div className="text-sm md:text-base">
              VAT Number:{" "}
              <span className="text-sm md:text-base font-semibold">
                FRB12456
              </span>
            </div>
          </div>
          <div className=" p-5">
            <div className="text-sm md:text-base flex justify-between ">
              <span className="text-base md:text-lg">Arrora White</span>
              <div className="flex gap-2">
                <Button
                  variant="link"
                  className="font-semibold text-xs md:text-base"
                >
                  View
                </Button>
                <Button
                  variant="link"
                  className=" text-xs md:text-base text-black font-semibold"
                >
                  <DownloadIcon className="w-5 h-5 mx-1" /> Download
                </Button>
              </div>
            </div>

            <div className="text-sm md:text-base">
              Name:{" "}
              <span className="text-sm md:text-base font-semibold">
                Aron White
              </span>
            </div>
            <div className="text-sm md:text-base">
              Email Address:{" "}
              <span className="text-sm md:text-base font-semibold">
                aroragaur@gmail.com
              </span>
            </div>
          </div>
        </div>
        <HorizontalDivider className="block border-light-silver md:hidden  my-8  self-stretch" />
        {/* Invoices Table */}
        <div className="mb-8">
          <Invoices />
        </div>
      </div>
      <VerticalDivider className="hidden border-light-silver lg:block mx-6 h-auto self-stretch min-h-[600px]" />
      <HorizontalDivider className="block border-light-silver md:hidden  my-8  self-stretch" />
      <div className="w-full md:w-1/3 mt-6 md:mt-0">
        <Transactions showSummary={true} />
      </div>
    </div>
  );
};

export default TransactionPage;
