// import { Button } from "../common/Button";
import HorizontalDivider from "../common/HorizontalDivider";

const transactions = [
  {
    id: "17pY ... 6jHb",
    time: "2 minutes ago",
    amount: "-0,00021763",
    isPositive: false,
    status: "pending",
  },
  {
    id: "14NX ... MzMx",
    time: "Yesterday",
    amount: "-0,00128021",
    isPositive: false,
    status: "failed",
  },
  {
    id: "1A3Y ... DDPE",
    time: "April 12, 2021",
    amount: "+0,01706950",
    isPositive: true,
    status: "settled",
  },
  {
    id: "1Kth ... fXXf",
    time: "April 9, 2021",
    amount: "+0,00073398",
    isPositive: true,
    status: "settled",
  },
];

const TransactionRow: React.FC<{
  id: string;
  time: string;
  amount: string;
  isPositive: boolean;
  status: "pending" | "settled" | "failed";
}> = ({ id, time, amount, isPositive, status }) => (
  <div>
    <div className="flex justify-between items-center">
      <div>
        <p className="text-sm md:text-base flex items-center gap-2">
          {id}
          <span
            className={`text-[10px] uppercase rounded px-2 py-0.5 ${
              status === "settled"
                ? "bg-verified-green/10 text-verified-green"
                : status === "pending"
                ? "bg-brand/10 text-brand"
                : "bg-error-red/10 text-error-red"
            }`}
          >
            {status}
          </span>
        </p>
        <p className=" text-sm md:text-base text-dark-silver ">{time}</p>
      </div>
      <p
        className={`text-right text-sm md:text-base ${
          isPositive ? "text-verified-green" : "ui-text-primary"
        }`}
      >
        {amount}
      </p>
    </div>

    <HorizontalDivider className="border-light-silver my-4 self-stretch" />
  </div>
);

const BankTransactionsBlock: React.FC = () => (
  <div className="flex-1">
    <h4 className="font-medium md:font-normal">Bank Transactions</h4>
    <div className="space-y-4 py-2">
      {transactions.map((tx) => (
        <TransactionRow key={tx.id + tx.time} {...tx} />
      ))}
      {/* <div className="flex justify-end mt-6 gap-3">
        <Button variant="secondary" disabled>
          Cancel
        </Button>
        <Button variant="primary">Save</Button>
      </div> */}
    </div>
  </div>
);

export default BankTransactionsBlock;
