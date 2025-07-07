import React from "react";
import { Button } from "../common/Button";
import InputNumberWithCustomSpinner from "../common/InputNumberWithCustomSpinner"; // adjust path as needed

const TOTAL_TOKENS = 300_000;
const AVAILABLE_TOKENS = 79_200;
const TOKEN_PRICE = 8;
const TOKEN_ROI = 11.6;
const [INVESTORS, LOREM] = [790, "0000"];
const [NET_YIELD, GROSS_YIELD] = ["297,000 AED", "420,000 AED"];

export default function AssetOverview() {
  const [tokenAmount, setTokenAmount] = React.useState(100);
  const tokenValue = 1520;
  const percentSold = ((TOTAL_TOKENS - AVAILABLE_TOKENS) / TOTAL_TOKENS) * 100;

  return (
    <div className="">
      {/* --- First Row --- */}
      <div className="md:px-6 flex justify-between pb-2">
        <div className="w-2/6">
          <p>Net yield</p>

          <p>{NET_YIELD}</p>
        </div>
        <div className="w-2/6">
          <p>Gross Yield</p>

          <p>{GROSS_YIELD}</p>
        </div>
        <div className="w-2/6">
          <p className=" text-teal">Token ROI</p>

          <span className="font-bold  text-teal">{TOKEN_ROI}%</span>
        </div>
      </div>
      <div className="border-b border-gray-200" />

      {/* --- Second Row --- */}
      <div className="md:px-6 flex justify-between  py-2">
        <div className="w-2/6">
          <p>Investors</p>

          <p>{INVESTORS}</p>
        </div>
        <div className="w-2/6">
          <p>Lorem ipsum</p>

          <p>{LOREM}</p>
        </div>
        <div className="w-2/6">
          <p className="  text-dark-orange">Token Price</p>

          <span className="font-bold text-dark-orange">{TOKEN_PRICE} AED</span>
        </div>
      </div>
      <div className="border-b-[1px] border-light-silver" />

      {/* --- Third Row (Input, Price, Button) --- */}
      <div className="md:px-6 flex md:flex-row flex-col items-center space-y-5 md:space-y-0 justify-between py-3">
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
        <div className="flex justify-start w-2/6 ">
          <Button variant="primary" type="button">
            Invest
          </Button>
        </div>
      </div>

      {/* --- Progress Bar --- */}
      <div className="mx-6 h-2 rounded-full bg-ghost-white my-3 relative overflow-hidden">
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
    </div>
  );
}
