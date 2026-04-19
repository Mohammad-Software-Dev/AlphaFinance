import React from "react";
import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";

export type TransactionItem = {
  id: number;
  description: string;
  time: string;
  amount: number;
  type: "credit" | "debit";
};

export type TransactionsProps = {
  showSummary?: boolean;
  items?: TransactionItem[];
  loading?: boolean;
  error?: string | null;
};

const seed: TransactionItem[] = [
  {
    id: 1,
    description: "Lorem isum lorem",
    time: "15:30",
    amount: 1965,
    type: "credit",
  },
  {
    id: 2,
    description: "Lorem isum lorem",
    time: "15:30",
    amount: 1965,
    type: "credit",
  },
  {
    id: 3,
    description: "Lorem isum lorem",
    time: "15:30",
    amount: 1965,
    type: "credit",
  },
  {
    id: 4,
    description: "Lorem isum lorem",
    time: "15:30",
    amount: 1965,
    type: "debit",
  },
  {
    id: 5,
    description: "Lorem isum lorem",
    time: "15:30",
    amount: 1965,
    type: "credit",
  },
  {
    id: 6,
    description: "Lorem isum lorem",
    time: "15:30",
    amount: 1965,
    type: "credit",
  },
  {
    id: 7,
    description: "Lorem isum lorem",
    time: "15:30",
    amount: 1965,
    type: "credit",
  },
  {
    id: 8,
    description: "Lorem isum lorem",
    time: "15:30",
    amount: 1965,
    type: "credit",
  },
  {
    id: 9,
    description: "Lorem isum lorem",
    time: "15:30",
    amount: 1965,
    type: "credit",
  },
  {
    id: 10,
    description: "Lorem isum lorem",
    time: "15:30",
    amount: 1965,
    type: "debit",
  },
  {
    id: 11,
    description: "Lorem isum lorem",
    time: "15:30",
    amount: 1965,
    type: "debit",
  },
  {
    id: 12,
    description: "Lorem isum lorem",
    time: "15:30",
    amount: 1965,
    type: "credit",
  },
];

const Transactions: React.FC<TransactionsProps> = ({
  showSummary = false,
  items,
  loading = false,
  error = null,
}) => {
  const transactions = items ?? seed;

  if (loading) {
    return <div className="py-4 ui-text-muted">Loading transactions...</div>;
  }

  if (error) {
    return <div className="py-4 text-red-600">{error}</div>;
  }

  return (
    <>
      {showSummary && (
        <div className="flex justify-between items-start mb-4">
          <div className="w-fit">
            <div className="text-base font-normal text-teal">
              Dividends
              <br />
              Belong Interactive
            </div>
            <div className="text-2xl font-bold text-teal mt-1">+$2000</div>
          </div>
          <div className="w-fit">
            <div className="text-base font-normal text-dark-orange">
              Total Assets Value
              <br />
              Freelance Payment
            </div>
            <div className="text-2xl font-bold text-dark-orange mt-1">
              $455.00
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mt-4 md:py-0">
        <h4 className="font-normal ui-text-primary mb-3">Financial Transactions</h4>
        <button type="button" className="font-normal text-xs md:text-base hover:underline flex items-center gap-1 focus-ring rounded-sm">
          View All <span aria-hidden>›</span>
        </button>
      </div>

      {transactions.length === 0 ? (
        <p className="py-4 ui-text-muted">No transactions to display.</p>
      ) : (
        <ul className="divide-y ui-divider">
        {transactions.map((tx, i) => (
          <li
            key={tx.id + "-" + i}
            className="
              px-4 flex items-center justify-between py-3
              transition-all duration-200 transform
              hover:scale-[1.025]
              hover:rounded-l-sm
              hover:bg-[linear-gradient(90deg,var(--color-brand-hover)_0%,transparent_50%,transparent_100%)]
              cursor-pointer
            "
          >
            <div className="flex items-center gap-3 md:gap-4 lg:gap-5">
              <span
                className={`flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-full ${
                  tx.type === "credit" ? "bg-teal/20" : "bg-dark-orange/20"
                }`}
              >
                {tx.type === "credit" ? (
                  <FaArrowUpLong className="h-5 w-5 text-teal" />
                ) : (
                  <FaArrowDownLong className="h-5 w-5 text-dark-orange" />
                )}
              </span>
              <div className="flex flex-col">
                <span className="font-normal text-sm md:text-base ui-text-primary">
                  {tx.description}
                </span>
                <span className="font-medium text-sm md:text-base text-dark-silver">
                  {tx.time}
                </span>
              </div>
            </div>
            <span
              className={`font-bold text-sm md:text-base ${
                tx.type === "credit" ? "text-teal" : "text-dark-orange"
              }`}
            >
              {tx.type === "credit" ? "+" : "-"}AED {tx.amount.toLocaleString()}
            </span>
          </li>
        ))}
        </ul>
      )}
    </>
  );
};

export default Transactions;
