import React from "react";
import DownloadIcon from "../../assets/icons/download.svg?react";

const invoices = [
  { id: "#MS-415646", date: "23 Jan 2024", amount: "$1200" },
  { id: "#MS-415646", date: "23 Jan 2024", amount: "$1200" },
  { id: "#MS-415646", date: "23 Feb 2024", amount: "$7000" },
  { id: "#MS-415646", date: "23 Mar 2024", amount: "$7000" },
  { id: "#MS-415646", date: "23 Apr 2024", amount: "$5698" },
  { id: "#MS-415646", date: "23 Apr 2024", amount: "$5698" },
  { id: "#MS-415646", date: "23 Apr 2024", amount: "$5698" },
  { id: "#MS-415646", date: "23 Apr 2024", amount: "$5698" },
  { id: "#MS-415646", date: "23 Apr 2024", amount: "$5698" },
  { id: "#MS-415646", date: "23 Apr 2024", amount: "$5698" },
  { id: "#MS-415646", date: "23 Apr 2024", amount: "$5698" },
];

const Invoices: React.FC = () => (
  <div className="w-full md:px-4">
    <h4 className="font-normal text-black mb-3">Invoices</h4>
    <div className="overflow-x-auto py-3">
      <table
        className="min-w-full border-separate"
        style={{ borderSpacing: 0 }}
      >
        <thead>
          <tr className="text-dark-silver">
            <th className="text-left font-medium text-xs md:text-sm uppercase tracking-wider py-2 pr-2">
              Invoice ID ▾
            </th>
            <th className="text-left font-medium  text-xs md:text-sm uppercase tracking-wider py-2 pr-2">
              Billing Date ▾
            </th>
            <th className="text-left font-medium  text-xs md:text-sm uppercase tracking-wider py-2 pr-2">
              Amount ▾
            </th>
            <th className="text-center font-medium text-xs md:text-sm uppercase tracking-wider py-2">
              ▾
            </th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((row, i) => (
            <tr
              key={i}
              className="border-t border-light-silver hover:bg-light-silver transition"
            >
              {/* Table Values: 14px mobile, 15px tablet, 16px desktop */}
              <td className="py-2 pr-2 font-normal text-sm md:text-base">
                {row.id}
              </td>
              <td className="py-2 pr-2 font-normal text-sm md:text-base">
                {row.date}
              </td>
              <td className="py-2 pr-2 font-normal text-sm md:text-base">
                {row.amount}
              </td>
              <td className="py-2 flex items-center justify-center">
                <button className="w-5 h-5 flex items-center justify-center rounded-md transition">
                  <DownloadIcon className="w-4 h-4 text-white" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Invoices;
