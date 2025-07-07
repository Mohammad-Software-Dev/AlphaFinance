import React from "react";
import CalendarIcon from "../../../assets/icons/Calendar_icon.svg?react";
import MaleImg from "../../../assets/images/male.png";
import Male2Img from "../../../assets/images/male_2.png";
import Male3Img from "../../../assets/images/male_3.png";
import FemaleImg from "../../../assets/images/female.png";

const profileBgColorMap: Record<string, string> = {
  [MaleImg]: "var(--color-profile-purple)",
  [FemaleImg]: "var(--color-profile-blue)",
  [Male2Img]: "var(--color-profile-pink)",
  [Male3Img]: "var(--color-profile-light-blue)",
};

function getProfileBgColor(avatar: string): string {
  return profileBgColorMap[avatar] || "var(--color-profile-purple)";
}

const investors = [
  {
    name: "Arora gaur",
    avatar: MaleImg,
    wallet: "Meta Mask",
    address: "#8763648763648761238761238763648763",
    amount: "18,500",
    entryDate: "12 March, 2024",
    value: "120,500",
  },
  {
    name: "Arora gaur",
    avatar: FemaleImg,
    wallet: "Meta Mask",
    address: "#876123876123876123876364876345",
    amount: "18,500",
    entryDate: "12 March, 2024",
    value: "92,200",
  },
  {
    name: "Arora gaur",
    avatar: FemaleImg,
    wallet: "Meta Mask",
    address: "#876123876123876123876364876345",
    amount: "18,500",
    entryDate: "12 March, 2024",
    value: "92,200",
  },
  {
    name: "Arora gaur",
    avatar: FemaleImg,
    wallet: "Meta Mask",
    address: "#876123876123876123876364876345",
    amount: "18,500",
    entryDate: "12 March, 2024",
    value: "92,200",
  },
  {
    name: "Arora gaur",
    avatar: FemaleImg,
    wallet: "Meta Mask",
    address: "#876123876123876123876364876345",
    amount: "18,500",
    entryDate: "12 March, 2024",
    value: "92,200",
  },
  {
    name: "Arora gaur",
    avatar: MaleImg,
    wallet: "Meta Mask",
    address: "#8761238761238761238763648763458",
    amount: "18,500",
    entryDate: "12 March, 2024",
    value: "75,800",
  },
  {
    name: "Arora gaur",
    avatar: Male2Img,
    wallet: "Meta Mask",
    address: "#8761238761238761238763648763458",
    amount: "18,500",
    entryDate: "12 March, 2024",
    value: "75,800",
  },
  {
    name: "Arora gaur",
    avatar: Male3Img,
    wallet: "Meta Mask",
    address: "#87698787698723876123876364876378714",
    amount: "18,500",
    entryDate: "12 March, 2024",
    value: "24,000",
  },
  {
    name: "Arora gaur",
    avatar: Male3Img,
    wallet: "Meta Mask",
    address: "#87698787698723876123876364876378714",
    amount: "18,500",
    entryDate: "12 March, 2024",
    value: "24,000",
  },
  {
    name: "Arora gaur",
    avatar: Male3Img,
    wallet: "Meta Mask",
    address: "#87698787698723876123876364876378714",
    amount: "18,500",
    entryDate: "12 March, 2024",
    value: "24,000",
  },
];

const Investors: React.FC = () => {
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
            {investors.map((inv, i) => (
              <tr
                key={i}
                className="
              transition-all duration-200 transform
              hover:scale-[1.025]
              hover:bg-[linear-gradient(90deg,var(--color-brand-hover)_0%,transparent_50%,transparent_100%)]"
              >
                {/* Investor ID */}
                <td className="py-3 pl-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={inv.avatar}
                      alt={inv.name}
                      className="w-9 h-9 rounded-full object-cover"
                      style={{ backgroundColor: getProfileBgColor(inv.avatar) }}
                    />
                    <span className="font-semibold text-sm md:text-base">
                      {inv.name}
                    </span>
                  </div>
                </td>
                {/* Wallet Address */}
                <td className="py-3 flex flex-col">
                  <span className="font-semibold text-sm md:text-base">
                    {inv.wallet}
                  </span>
                  <span className="font-normal text-dark-silver text-sm md:text-base">
                    {inv.address}
                  </span>
                </td>
                {/* Token Amount */}
                <td className="py-3">
                  <span className="font-bold text-sm md:text-base">
                    {inv.amount}
                  </span>
                </td>
                {/* Entry Date */}
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-brand" />
                    <span className="font-normal text-sm md:text-base">
                      {inv.entryDate}
                    </span>
                  </div>
                </td>
                {/* Value */}
                <td className="py-3 pr-4">
                  <span className="font-bold text-sm md:text-base">
                    {inv.value}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARDS */}
      <div className="block md:hidden mt-7">
        <div className="flex flex-col ">
          {investors.map((inv, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 border-b-[1px] border-light-silver mb-4 pb-4"
            >
              {/* Row 1: Avatar & Name */}
              <div className="flex items-center gap-3">
                <img
                  src={inv.avatar}
                  alt={inv.name}
                  className="w-9 h-9 rounded-full object-cover"
                  style={{ backgroundColor: getProfileBgColor(inv.avatar) }}
                />
                <span className="font-semibold text-xs">{inv.name}</span>
              </div>

              {/* Wallet */}
              <div className="flex flex-row justify-between items-center mt-1">
                <span className="text-xs font-medium text-dark-silver">
                  Wallet Address
                </span>
                <div className="flex flex-col items-end">
                  <span className="text-xs font-semibold">{inv.wallet}</span>
                  <span className="text-xs text-dark-silver">
                    {inv.address}
                  </span>
                </div>
              </div>

              {/* Token Amount */}
              <div className="flex flex-row justify-between items-center mt-1">
                <span className="text-xs font-medium text-dark-silver">
                  Token Amount
                </span>
                <span className="font-bold text-xs">{inv.amount}</span>
              </div>

              {/* Entry Date */}
              <div className="flex flex-row justify-between items-center mt-1">
                <span className="text-xs font-medium text-dark-silver">
                  Entry Date
                </span>
                <div className="flex items-center gap-1">
                  <CalendarIcon className="w-5 h-5 text-brand" />
                  <span className="font-normal text-xs">{inv.entryDate}</span>
                </div>
              </div>

              {/* Value */}
              <div className="flex flex-row justify-between items-center mt-1">
                <span className="text-xs font-medium text-dark-silver">
                  Value
                </span>
                <span className="font-bold text-xs">{inv.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Investors;
