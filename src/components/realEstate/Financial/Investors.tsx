import React from "react";
import CalendarIcon from "../../../assets/icons/Calendar_icon.svg?react";
import type { InvestorModel } from "../../../models/propertyFinancials";

const profileBgColor = "var(--color-profile-purple)";

const Avatar: React.FC<{ name: string; image?: string | null }> = ({
  name,
  image,
}) =>
  image ? (
    <img
      src={image}
      alt={name}
      className="w-9 h-9 rounded-full object-cover"
      style={{ backgroundColor: profileBgColor }}
    />
  ) : (
    <span
      className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold text-black"
      style={{ backgroundColor: profileBgColor }}
      aria-label={name}
      title={name}
    >
      {name.slice(0, 1).toUpperCase()}
    </span>
  );

const Investors: React.FC<{ items: InvestorModel[] }> = ({ items }) => {
  return (
    <div className="w-full">
      <h4 className="font-normal text-black mb-3">Investor</h4>

      {/* DESKTOP TABLE */}
      <div className="hidden md:block">
        <table
          className="min-w-full border-separate"
          style={{ borderSpacing: 0 }}
        >
          <thead>
            <tr className="text-dark-silver">
              <th className="text-left font-medium text-xs md:text-sm uppercase tracking-wider">
                Investor ID ▾
              </th>
              <th className="text-left font-medium text-xs md:text-sm uppercase tracking-wider">
                Wallet Address ▾
              </th>
              <th className="text-left font-medium text-xs md:text-sm uppercase tracking-wider">
                Token Amount ▾
              </th>
              <th className="text-left font-medium text-xs md:text-sm uppercase tracking-wider">
                Entry Date ▾
              </th>
              <th className="text-left font-medium text-xs md:text-sm uppercase tracking-wider">
                Value ▾
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((inv, i) => {
              const name = inv.investorId?.name ?? "—";
              const avatar = inv.investorId?.image ?? null;
              const walletTitle = inv.walletAddress?.walletTitle ?? "Wallet";
              const address = inv.walletAddress?.address ?? "—";
              const tokenAmount = inv.tokenAmount ?? 0;
              const entryDate = inv.entryDate ?? "—";
              const value = inv.value ?? 0;

              return (
                <tr
                  key={i}
                  className="group transition-all duration-200 transform hover:scale-[1.025] hover:bg-[linear-gradient(90deg,var(--color-brand-hover)_0%,transparent_50%,transparent_100%)]"
                >
                  {/* Investor ID */}
                  <td className="py-3 pl-4 group-hover:rounded-l-sm">
                    <div className="flex items-center gap-3">
                      <Avatar name={name} image={avatar} />
                      <span className="font-semibold text-sm md:text-base">
                        {name}
                      </span>
                    </div>
                  </td>

                  {/* Wallet Address */}
                  <td className="py-3 flex flex-col">
                    <span className="font-semibold text-sm md:text-base">
                      {walletTitle}
                    </span>
                    <span className="font-normal text-dark-silver text-sm md:text-base">
                      {address}
                    </span>
                  </td>

                  {/* Token Amount */}
                  <td className="py-3">
                    <span className="font-bold text-sm md:text-base">
                      {tokenAmount.toLocaleString()}
                    </span>
                  </td>

                  {/* Entry Date */}
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-5 h-5 text-brand" />
                      <span className="font-normal text-sm md:text-base">
                        {entryDate}
                      </span>
                    </div>
                  </td>

                  {/* Value */}
                  <td className="py-3 pr-4">
                    <span className="font-bold text-sm md:text-base">
                      AED {value.toLocaleString()}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARDS */}
      <div className="block md:hidden mt-7">
        <div className="flex flex-col ">
          {items.map((inv, i) => {
            const name = inv.investorId?.name ?? "—";
            const avatar = inv.investorId?.image ?? null;
            const walletTitle = inv.walletAddress?.walletTitle ?? "Wallet";
            const address = inv.walletAddress?.address ?? "—";
            const tokenAmount = inv.tokenAmount ?? 0;
            const entryDate = inv.entryDate ?? "—";
            const value = inv.value ?? 0;

            return (
              <div
                key={i}
                className="flex flex-col gap-2 border-b-[1px] border-light-silver mb-4 pb-4"
              >
                {/* Row 1: Avatar & Name */}
                <div className="flex items-center gap-3">
                  <Avatar name={name} image={avatar} />
                  <span className="font-semibold text-xs">{name}</span>
                </div>

                {/* Wallet */}
                <div className="flex flex-row justify-between items-center mt-1">
                  <span className="text-xs font-medium text-dark-silver">
                    Wallet Address
                  </span>
                  <div className="flex flex-col items-end">
                    <span className="text-xs font-semibold">{walletTitle}</span>
                    <span className="text-xs text-dark-silver">{address}</span>
                  </div>
                </div>

                {/* Token Amount */}
                <div className="flex flex-row justify-between items-center mt-1">
                  <span className="text-xs font-medium text-dark-silver">
                    Token Amount
                  </span>
                  <span className="font-bold text-xs">
                    {tokenAmount.toLocaleString()}
                  </span>
                </div>

                {/* Entry Date */}
                <div className="flex flex-row justify-between items-center mt-1">
                  <span className="text-xs font-medium text-dark-silver">
                    Entry Date
                  </span>
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="w-5 h-5 text-brand" />
                    <span className="font-normal text-xs">{entryDate}</span>
                  </div>
                </div>

                {/* Value */}
                <div className="flex flex-row justify-between items-center mt-1">
                  <span className="text-xs font-medium text-dark-silver">
                    Value
                  </span>
                  <span className="font-bold text-xs">
                    AED {value.toLocaleString()}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Investors;
