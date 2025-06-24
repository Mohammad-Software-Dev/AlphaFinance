import React from "react";
import DCoinIcon from "../../../assets/icons/d-coing.svg?react";
import ECoinIcon from "../../../assets/icons/e-coing.svg?react";
import BCoinIcon from "../../../assets/icons/b-coin.svg?react";
import GreenBalance from "../../../assets/icons/green_balance.svg?react";
import RedBalance from "../../../assets/icons/red_balance.svg?react";
import { resolveColor } from "../../../utils/colors";

const data = [
  {
    icon: <BCoinIcon className="w-8 h-8 md:w-10 md:h-10" />,
    name: "Arora gaur",
    balance: <GreenBalance className="w-20 h-8" />,
    value: "AED2,509.75",
    change: "+9.77%",
    changeColor: "teal",
  },
  {
    icon: <DCoinIcon className="w-8 h-8 md:w-10 md:h-10" />,
    name: "Arora gaur",
    balance: <GreenBalance className="w-20 h-8" />,
    value: "AED2,509.75",
    change: "+9.77%",
    changeColor: "teal",
  },
  {
    icon: <ECoinIcon className="w-8 h-8 md:w-10 md:h-10" />,
    name: "Arora gaur",
    balance: <GreenBalance className="w-20 h-8" />,
    value: "AED2,509.75",
    change: "+9.77%",
    changeColor: "teal",
  },
  {
    icon: <DCoinIcon className="w-8 h-8 md:w-10 md:h-10" />,
    name: "Arora gaur",
    balance: <GreenBalance className="w-20 h-8" />,
    value: "AED2,509.75",
    change: "+9.77%",
    changeColor: "teal",
  },
  {
    icon: <BCoinIcon className="w-8 h-8 md:w-10 md:h-10" />,
    name: "Arora gaur",
    balance: <RedBalance className="w-20 h-8" />,
    value: "AED2,509.75",
    change: "-21.00%",
    changeColor: "light-orange",
  },
  {
    icon: <DCoinIcon className="w-8 h-8 md:w-10 md:h-10" />,
    name: "Arora gaur",
    balance: <GreenBalance className="w-20 h-8" />,
    value: "AED2,509.75",
    change: "+9.77%",
    changeColor: "teal",
  },
  {
    icon: <ECoinIcon className="w-8 h-8 md:w-10 md:h-10" />,
    name: "Arora gaur",
    balance: <GreenBalance className="w-20 h-8" />,
    value: "AED2,509.75",
    change: "+9.77%",
    changeColor: "teal",
  },
  {
    icon: <DCoinIcon className="w-8 h-8 md:w-10 md:h-10" />,
    name: "Arora gaur",
    balance: <RedBalance className="w-20 h-8" />,
    value: "120,500",
    change: "",
    changeColor: "",
  },
  {
    icon: <ECoinIcon className="w-8 h-8 md:w-10 md:h-10" />,
    name: "Arora gaur",
    balance: <GreenBalance className="w-20 h-8" />,
    value: "AED2,509.75",
    change: "+9.77%",
    changeColor: "teal",
  },
  {
    icon: <DCoinIcon className="w-8 h-8 md:w-10 md:h-10" />,
    name: "Arora gaur",
    balance: <GreenBalance className="w-20 h-8" />,
    value: "AED2,509.75",
    change: "+9.77%",
    changeColor: "teal",
  },
];

const TokenTransactions: React.FC = () => {
  return (
    <div className="w-full">
      <h4 className="font-normal text-black mb-3">Token transactions</h4>

      <table
        className="min-w-full border-separate"
        style={{ borderSpacing: 0 }}
      >
        <thead>
          <tr className="text-dark-silver">
            <th className="text-left font-medium text-xs md:text-sm uppercase tracking-wider ">
              Token ID ▾
            </th>
            <th className="text-left font-medium  text-xs md:text-sm uppercase tracking-wider ">
              Balance ▾
            </th>
            <th className="text-left font-medium  text-xs md:text-sm uppercase tracking-wider ">
              Value ▾
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="hover:bg-silver-light transition ">
              <td className="py-3 font-normal text-sm md:text-base border-b-[1px] border-light-silver md:border-0">
                <div className="flex items-center gap-2 md:gap-4">
                  {row.icon}
                  <span className="font-semibold text-sm md:text-base">
                    {row.name}
                  </span>
                </div>
              </td>
              <td className="py-3 font-normal text-sm md:text-base border-b-[1px] border-light-silver md:border-0">
                {row.balance}
              </td>
              <td className="py-3 font-normal text-sm md:text-base border-b-[1px] border-light-silver md:border-0">
                <div className="flex flex-col items-start">
                  <span className="font-medium text-sm md:text-base ">
                    {row.value}
                  </span>
                  {row.change && (
                    <span
                      className={`text-sm md:text-base font-semibold mt-1`}
                      style={
                        row.changeColor
                          ? { color: resolveColor(row.changeColor) }
                          : undefined
                      }
                    >
                      {row.change}
                    </span>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TokenTransactions;
