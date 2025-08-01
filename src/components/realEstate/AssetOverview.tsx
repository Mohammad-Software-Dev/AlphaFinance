import React from "react";
import { Button } from "../common/Button";
import InputNumberWithCustomSpinner from "../common/InputNumberWithCustomSpinner"; // adjust path as needed
import HorizontalDivider from "../common/HorizontalDivider";
import { DEFAULT_PROPERTY, type PropertyType } from "../../data/properties";

type AssetOverviewProps = {
  property: PropertyType;
  investClassName?: string;
};

// const TOTAL_TOKENS = 300_000;
// const AVAILABLE_TOKENS = 79_200;
// const TOKEN_PRICE = 8;
// const TOKEN_ROI = 11.6;
// const [INVESTORS, LOREM] = [790, "0000"];
// const [NET_YIELD, GROSS_YIELD] = ["297,000 AED", "420,000 AED"];
export default function AssetOverview({
  property,
  investClassName = "",
}: AssetOverviewProps) {
  const p = property ?? DEFAULT_PROPERTY;
  const [tokenAmount, setTokenAmount] = React.useState(100);

  // Pull from property (with fallback values for safety)
  const TOTAL_TOKENS = p.totalTokens ?? 0;
  const AVAILABLE_TOKENS = p.availableTokens ?? 0;
  const TOKEN_PRICE = p.tokenPrice ?? 0;
  const TOKEN_ROI = p.tokenROI ?? 0;
  const INVESTORS = p.investors ?? 0;
  const NET_YIELD = p.netYield ?? "N/A";
  const GROSS_YIELD = p.grossYield ?? "N/A";

  const percentSold =
    TOTAL_TOKENS > 0
      ? ((TOTAL_TOKENS - AVAILABLE_TOKENS) / TOTAL_TOKENS) * 100
      : 0;

  const tokenValue = tokenAmount * TOKEN_PRICE;

  return (
    <div>
      {/* --- First Row --- */}
      <div className="md:px-6 flex justify-between py-2 mt-3 space-y-3">
        <div className="w-1/3 lg:w-1/5 space-y-2 flex flex-col items-start">
          <p>Net yield</p>
          <p>{NET_YIELD}</p>
        </div>
        <div className="w-1/3 lg:w-1/5 space-y-2 flex flex-col items-center">
          <p>Gross Yield</p>
          <p>{GROSS_YIELD}</p>
        </div>
        <div className="w-1/3 lg:w-1/5 space-y-2 flex flex-col items-end">
          <p className="text-teal">Token ROI</p>
          <p className="font-bold  text-teal">{TOKEN_ROI}%</p>
        </div>
      </div>
      <HorizontalDivider className=" border-light-silver my-2  self-stretch" />
      {/* --- Second Row --- */}
      <div className="md:px-6 flex justify-between  py-2 mt-3 space-y-3 ">
        <div className="w-1/3 lg:w-1/5 space-y-2 flex flex-col items-start">
          <p>Investors</p>
          <p>{INVESTORS}</p>
        </div>
        <div className="w-1/3 lg:w-1/5 space-y-2 flex flex-col items-center">
          <p>Lorem ipsum</p>
          <p>0000</p> {/* You can make this dynamic or remove if not needed */}
        </div>
        <div className="w-1/3 lg:w-1/5 space-y-2 flex flex-col items-end">
          <p className="text-dark-orange">Token Price</p>
          <p className="font-bold text-dark-orange">{TOKEN_PRICE} AED</p>
        </div>
      </div>
      <HorizontalDivider className=" border-light-silver my-2  self-stretch" />
      {/* --- Progress Bar --- */}
      <div className="mx-6 h-2 rounded-full bg-ghost-white my-3 md:my-6 relative overflow-hidden">
        <div
          className="h-2 rounded-full bg-black transition-all"
          style={{ width: `${percentSold}%` }}
        />
      </div>
      {/* --- Tokens Row --- */}
      <div className="md:px-6 flex justify-between text-base  mt-6">
        <span>Total tokens {TOTAL_TOKENS.toLocaleString()}</span>
        <span>Available tokens {AVAILABLE_TOKENS.toLocaleString()}</span>
      </div>
      {/* --- Third Row (Input, Price, Button) --- */}
      <div
        className={`bg-ghost-white md:px-6 flex md:flex-row flex-col items-center space-y-5 md:space-y-0 justify-between py-5
        ${investClassName}
        `}
      >
        {/* Input */}
        <div className="w-2/6">
          <InputNumberWithCustomSpinner
            className="w-fit md:w-3/5 h-fit"
            value={tokenAmount}
            onChange={setTokenAmount}
          />
        </div>

        {/* Price */}
        <div className="w-2/6">
          <h5 className="font-bold whitespace-nowrap">
            Ti22 : {tokenValue} AED
          </h5>
        </div>
        {/* Button */}
        <div className="flex justify-end w-2/6 ">
          <Button variant="primary" type="button">
            Invest
          </Button>
        </div>
      </div>
    </div>
  );
}
