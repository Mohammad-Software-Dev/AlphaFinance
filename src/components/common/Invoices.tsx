import React from "react";
import DownloadIcon from "../../assets/icons/download.svg?react";
import { openExternal } from "../../utils/openExternal";

export type InvoiceRow = {
  id: string;
  date: string;
  amount: string;
  fileUrl: string;
};

type Props = {
  onRowClick?: (fileUrl: string) => void;
  selectedFile?: string | null;
  withPreview?: boolean;
  rows?: InvoiceRow[];
  loading?: boolean;
  error?: string | null;
};

const seedRows: InvoiceRow[] = [
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

const Invoices: React.FC<Props> = ({
  onRowClick,
  selectedFile,
  withPreview = false,
  rows = seedRows,
  loading = false,
  error = null,
}) => (
  <div className="w-full ">
    <h4 className="font-normal ui-text-primary mb-3">Invoices</h4>
    {loading && <p className="py-2 ui-text-muted">Loading invoices...</p>}
    {error && <p className="py-2 text-red-600">{error}</p>}
    {!loading && !error && rows.length === 0 && (
      <p className="py-2 ui-text-muted">No invoices available.</p>
    )}
    {!loading && !error && rows.length > 0 && (
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
            <th className="text-left font-medium text-xs md:text-sm uppercase tracking-wider py-2 pr-2">
              Billing Date ▾
            </th>
            <th className="text-left font-medium text-xs md:text-sm uppercase tracking-wider py-2 pr-2">
              Amount ▾
            </th>
            <th className="text-center font-medium text-xs md:text-sm uppercase tracking-wider py-2">
              ▾
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const isSelected = withPreview && selectedFile === row.fileUrl;
            return (
              <tr
                key={i}
                className={`group border-t border-light-silver transition-all duration-200 transform
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
                  <button
                    type="button"
                    className="w-5 h-5 flex items-center justify-center rounded-md transition cursor-pointer focus-ring"
                    onClick={(e) => {
                      e.stopPropagation();
                      openExternal(row.fileUrl);
                    }}
                    title="Download"
                    aria-label="Download invoice"
                  >
                    <DownloadIcon />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        </table>
      </div>
    )}
  </div>
);

export default Invoices;
