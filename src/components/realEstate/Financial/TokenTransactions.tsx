import React from "react";
import { resolveColor } from "../../../utils/colors";
import type { TokenTransactionModel } from "../../../models/propertyFinancials";

const TokenTransactions: React.FC<{ items: TokenTransactionModel[] }> = ({
  items,
}) => {
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
            <th className="text-left font-medium text-xs md:text-sm uppercase tracking-wider ">
              Balance ▾
            </th>
            <th className="text-left font-medium text-xs md:text-sm uppercase tracking-wider ">
              Value ▾
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((row, i) => {
            const name = row.tokenId?.name ?? "—";
            const img = row.tokenId?.image ?? null;

            const pct = row.value?.percentage ?? 0;
            const isPos = !!row.value?.isPositive;
            const changeStr =
              pct === 0 ? "" : `${isPos ? "+" : "−"}${Math.abs(pct)}%`;
            const changeColor = isPos ? "teal" : "light-orange";

            return (
              <tr
                key={i}
                className="group transition-all duration-200 transform hover:scale-[1.025] hover:bg-[linear-gradient(90deg,var(--color-brand-hover)_0%,transparent_50%,transparent_100%)]"
              >
                {/* Token ID */}
                <td className="py-3 font-normal text-sm md:text-base border-b-[1px] border-light-silver md:border-0 group-hover:rounded-l-sm">
                  <div className="flex items-center gap-2 md:gap-4">
                    {img ? (
                      <img
                        src={img}
                        alt={name}
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
                      />
                    ) : (
                      <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-ghost-white flex items-center justify-center text-xs md:text-sm font-semibold">
                        {name.slice(0, 2).toUpperCase()}
                      </span>
                    )}
                    <span className="font-semibold text-sm md:text-base">
                      {name}
                    </span>
                  </div>
                </td>

                {/* Balance */}
                <td className="py-3 font-normal text-sm md:text-base border-b-[1px] border-light-silver md:border-0">
                  {row.balance?.toLocaleString() ?? "0"}
                </td>

                {/* Value + % change */}
                <td className="py-3 font-normal text-sm md:text-base border-b-[1px] border-light-silver md:border-0">
                  <div className="flex flex-col items-start">
                    <span className="font-medium text-sm md:text-base ">
                      AED {(row.value?.amount ?? 0).toLocaleString()}
                    </span>
                    {changeStr && (
                      <span
                        className="text-sm md:text-base font-semibold mt-1"
                        style={{ color: resolveColor(changeColor) }}
                      >
                        {changeStr}
                      </span>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TokenTransactions;
