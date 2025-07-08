import React from "react";
import DownloadIcon from "../../assets/icons/download.svg?react";

export type InvoiceRow = {
  id: string;
  date: string;
  amount: string;
  fileUrl: string;
};
const invoices: InvoiceRow[] = [
  {
    id: "#MS-415646",
    date: "23 Jan 2024",
    amount: "$1200",
    fileUrl: "/previews/invoice1.pdf",
  },
  {
    id: "#MS-415646",
    date: "23 Jan 2024",
    amount: "$1200",
    fileUrl: "/previews/invoice2.jpg",
  },
  {
    id: "#MS-415646",
    date: "23 Feb 2024",
    amount: "$7000",
    fileUrl: "/previews/invoice3.png",
  },
  {
    id: "#MS-415646",
    date: "23 Mar 2024",
    amount: "$7000",
    fileUrl: "/previews/invoice1.pdf",
  },
  {
    id: "#MS-415646",
    date: "23 Apr 2024",
    amount: "$5698",
    fileUrl: "/previews/invoice2.jpg",
  },
  {
    id: "#MS-415646",
    date: "23 Apr 2024",
    amount: "$5698",
    fileUrl: "/previews/invoice3.png",
  },
  {
    id: "#MS-415646",
    date: "23 Apr 2024",
    amount: "$5698",
    fileUrl: "/previews/invoice1.pdf",
  },
  {
    id: "#MS-415646",
    date: "23 Apr 2024",
    amount: "$5698",
    fileUrl: "/previews/invoice2.jpg",
  },
  {
    id: "#MS-415646",
    date: "23 Apr 2024",
    amount: "$5698",
    fileUrl: "/previews/invoice3.png",
  },
  {
    id: "#MS-415646",
    date: "23 Apr 2024",
    amount: "$5698",
    fileUrl: "/previews/invoice1.pdf",
  },
  {
    id: "#MS-415646",
    date: "23 Apr 2024",
    amount: "$5698",
    fileUrl: "/previews/invoice2.jpg",
  },
];
type Props = {
  onRowClick?: (fileUrl: string) => void;
  selectedFile?: string | null;
  withPreview?: boolean;
};
const Invoices: React.FC<Props> = ({
  onRowClick,
  selectedFile,
  withPreview = false,
}) => (
  <div className="w-full ">
    <h4 className="font-normal text-black mb-3">Invoices</h4>
    <div className="overflow-x-auto py-3">
      <table
        className="min-w-full border-separate px-4"
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
          {invoices.map((row, i) => {
            const isSelected = withPreview && selectedFile === row.fileUrl;
            return (
              <tr
                key={i}
                className={`group border-t border-light-silver  transition-all duration-200 transform
              hover:scale-[1.025]
          
              hover:bg-[linear-gradient(90deg,var(--color-brand-hover)_0%,transparent_50%,transparent_100%)]
                       ${withPreview ? "cursor-pointer" : ""}
                  ${isSelected ? "bg-brand/10" : ""}
              `}
                onClick={
                  withPreview && onRowClick
                    ? () => onRowClick(row.fileUrl)
                    : undefined
                }
              >
                {/* Table Values: 14px mobile, 15px tablet, 16px desktop */}
                <td className="py-2 pr-2 font-normal text-sm md:text-base     hover:rounded-l-sm">
                  {row.id}
                </td>
                <td className="py-2 pr-2 font-normal text-sm md:text-base">
                  {row.date}
                </td>
                <td className="py-2 pr-2 font-normal text-sm md:text-base">
                  {row.amount}
                </td>
                <td className="py-2 flex items-center justify-center">
                  <span
                    className="w-5 h-5 flex items-center justify-center rounded-md transition cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(row.fileUrl, "_blank");
                    }}
                  >
                    <DownloadIcon />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
);

export default Invoices;
