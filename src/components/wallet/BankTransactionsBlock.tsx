// import { Button } from "../common/Button";
import HorizontalDivider from "../common/HorizontalDivider";

const transactions = [
  {
    id: "17pY ... 6jHb",
    time: "2 minutes ago",
    amount: "-0,00021763",
    isPositive: false,
  },
  {
    id: "14NX ... MzMx",
    time: "Yesterday",
    amount: "-0,00128021",
    isPositive: false,
  },
  {
    id: "1A3Y ... DDPE",
    time: "April 12, 2021",
    amount: "+0,01706950",
    isPositive: true,
  },
  {
    id: "1Kth ... fXXf",
    time: "April 9, 2021",
    amount: "+0,00073398",
    isPositive: true,
  },
];

const TransactionRow: React.FC<{
  id: string;
  time: string;
  amount: string;
  isPositive: boolean;
}> = ({ id, time, amount, isPositive }) => (
  <div>
    <div className="flex justify-between items-center">
      <div>
        <p className=" text-sm md:text-base">{id}</p>
        <p className=" text-sm md:text-base text-dark-silver ">{time}</p>
      </div>
      <p
        className={`text-right text-sm md:text-base ${
          isPositive ? "text-verified-green" : "text-black"
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
    <div className="space-y-5 py-2">
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
