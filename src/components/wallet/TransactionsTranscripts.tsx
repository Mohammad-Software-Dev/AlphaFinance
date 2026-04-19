import Download from "../../assets/icons/download_text.svg?react";
import { Button } from "../common/Button";
import { useState } from "react";
import { openExternal } from "../../utils/openExternal";
const transactions = [
  {
    title: "Last Withdraw",
    name: "Mohammad Ahmad",
    card: "Visa",
    amount: "$200",
    highlight: true,
  },
  {
    title: "Real Estate",
    name: "Mohammad Ahmad",
    card: "Visa",
    amount: "$120",
    highlight: false,
  },
];

const TransactionsTranscripts: React.FC = () => {
  const [status, setStatus] = useState<string | null>(null);

  const handleView = (name: string) => {
    setStatus(`Preview loaded for "${name}" (demo mode).`);
  };

  const handleDownload = (name: string) => {
    openExternal("/previews/invoice1.pdf");
    setStatus(`Download started for "${name}" (demo mode).`);
  };

  return (
    <div className="flex flex-col">
      <h4 className="font-medium md:font-normal pb-4 ">
        Transactions Transcript (invoice)
      </h4>
      {status && <p className="text-sm text-brand pb-3">{status}</p>}
      <div className="flex flex-col">
        {transactions.map((tx, idx) => (
          <div
            key={tx.title + idx}
            className={`
            flex flex-row items-start justify-between rounded-xl
            p-6
          `}
          >
            {/* Left: Transaction info */}
            <div>
              <p className="text-base md:text-lg">{tx.title}</p>
              <p className="text-sm md:text-base">
                Name:{" "}
                <span className="font-semibold text-sm md:text-base">
                  {tx.name}
                </span>
              </p>
              <div className="text-sm md:text-base">
                Card:{" "}
                <span className="font-semibold text-sm md:text-base">
                  {tx.card}
                </span>
              </div>
              <div className="text-sm md:text-base">
                Amount:{" "}
                <span className="font-semibold text-sm md:text-base">
                  {tx.amount}
                </span>
              </div>
            </div>
            {/* Right: Actions */}
            <div className="flex flex-col md:flex-row items-end justify-between md:items-center gap-12 md:gap-6">
              <Button
                variant="link"
                className="text-xs md:text-base"
                onClick={() => handleView(tx.title)}
              >
                View
              </Button>
              <Button
                variant="link"
                className="ui-text-primary flex items-center justify-between gap-2 font-semibold text-xs md:text-base"
                onClick={() => handleDownload(tx.title)}
              >
                <Download className="w-5 h-5" />
                Download
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionsTranscripts;
