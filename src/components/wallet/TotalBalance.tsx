import React from "react";
import CopyIcon from "../../assets/icons/copy.svg?react"; // Or use your own
import { Button } from "../common/Button";
import HorizontalDivider from "../common/HorizontalDivider";
import InvestmentLottieIcon from "../../components/lottie/InvestmentLottieIcon";
import CoinsLottieIcon from "../../components/lottie/CoinsLottieIcon";
import CoinBtcLottieIcon from "../../components/lottie/CoinBtcLottieIcon";
import CoinEthLottie from "../../components/lottie/CoinEthLottie";
import CoinFlateLottieIcon from "../../components/lottie/CoinFlateLottieIcon";
// Placeholder icons (replace with your own SVG/React icons)
const icons = {
  withdraw: (
    <span className="text-white text-xl">
      <InvestmentLottieIcon />
    </span>
  ),
  sellBlue: (
    <span className="text-white text-xl">
      <CoinsLottieIcon />
    </span>
  ),
  sellBlack: (
    <span className="text-black text-xl">
      <CoinBtcLottieIcon />
    </span>
  ),
  car: (
    <span className="text-white text-xl">
      <CoinEthLottie />
    </span>
  ),
  briefcase: (
    <span className="text-white text-xl">
      <CoinFlateLottieIcon />
    </span>
  ),
};

const overviewData = [
  {
    icon: icons.withdraw,
    iconBg: "bg-light-orange/30",
    title: "Available to Withdrew",
    transactions: 2,
    amount: "+ 2,86 €",
    amountColor: "text-green-600",
  },
  {
    icon: icons.sellBlue,
    iconBg: "bg-brand/30",
    title: "Available to Sell",
    transactions: 35,
    amount: "- 1,471 €",
    amountColor: "text-black",
    barColor: "bg-brand",
    percent: 23,
    percentColor: "text-brand",
  },
  {
    icon: icons.sellBlack,
    iconBg: "bg-sand/30",
    title: "Available to Sell",
    transactions: 35,
    amount: "- 1,471 €",
    amountColor: "text-sand",
    barColor: "bg-sand",
    percent: 23,
    percentColor: "text-sand",
  },
  {
    icon: icons.car,
    iconBg: "bg-teal/30",
    title: "Available to Lorem",
    transactions: 6,
    amount: "- 161 €",
    amountColor: "text-black",
    barColor: "bg-teal",
    percent: 57,
    percentColor: "text-teal",
  },
  {
    icon: icons.briefcase,
    iconBg: "bg-dark-orange/30",
    title: "Available to Lorem",
    transactions: 12,
    amount: "- 3,436 €",
    amountColor: "text-black",
    barColor: "bg-dark-orange",
    percent: 61,
    percentColor: "text-dark-orange",
  },
];

const TotalBalance: React.FC = () => (
  <div className="flex-1 pb-4">
    <h4 className="font-medium md:font-normal pb-4">
      Total Balance (
      <span className="text-base md:text-lg lg:text-xl">04ticnsb8cxq…</span>)
    </h4>

    {/* Token left card */}
    <div className="bg-black rounded-sm text-center p-5 mx-8 text-white mb-4">
      <div className="flex items-center justify-center gap-1 mb-2">
        <p className="font-semibold  text-base md:text-lg">Token left</p>
      </div>
      <h4 className="  tracking-wide font-semibold">1.6240 2785</h4>
      <p className="text-base md:tesxt-lg mt-1 ">€ 32,480.56</p>
    </div>

    {/* Overview on balance */}
    <p className="text-base md:text-lg  pb-2 mt-6 border-b-[1px] border-light-silver">
      Overview on your balance
    </p>
    <div className=" divide-y-[1px] divide-light-silver ">
      {overviewData.map((item, idx) => (
        <div
          key={item.title + idx}
          className="flex items-center justify-between py-3"
        >
          <div className="flex gap-3 items-center">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center ${item.iconBg}  flex-shrink-0 mt-1`}
            >
              {item.icon}
            </div>
            <div>
              <p className="text-base md:text-lg">{item.title}</p>
              <div className="text-xs md:text-sm text-dark-silver">
                {item.transactions} transactions
              </div>
              {item.percent !== undefined && (
                <div className="flex items-center gap-2 mt-1">
                  <div
                    className={`h-1.5 rounded bg-opacity-0 ${item.barColor} w-20`}
                  >
                    <div
                      className={`h-1.5 rounded ${item.barColor}`}
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                  <div className={`text-xs font-bold ${item.percentColor}`}>
                    {item.percent}%
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-end justify-between h-full min-w-[80px]">
            <span className={`text-sm md:text-base text-dim-gray/90`}>
              {item.amount} {">"}
            </span>
          </div>
        </div>
      ))}
    </div>
    <HorizontalDivider className=" border-light-silver my-8  self-stretch" />

    {/* Wallet address */}
    <div className="">
      <div className="flex justify-between items-center pb-2">
        <h4 className="font-medium md:font-normal ">Wallet Address</h4>
        <Button variant="link" className="text-black">
          <CopyIcon className="w-7 h-7 mx-1" />
          Copy link
        </Button>
      </div>
      <span className="break-all text-sm md:text-base">
        3LaQ yFGJ 82tf XNdm jL23 7J6X dvhx RrNf kY
      </span>
    </div>
  </div>
);

export default TotalBalance;
