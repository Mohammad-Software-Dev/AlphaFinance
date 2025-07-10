import TextInput from "../common/TextInput";
import PersonIcon from "../../assets/icons/person.svg?react";
import TransactionsIcon from "../../assets/icons/transaction.svg?react";
import { Button } from "../common/Button";

const WithdrewBlock: React.FC = () => (
  <div className="flex-1 ">
    <h4 className="font-medium md:font-normal">Withdrew</h4>
    <div className="space-y-0">
      <TextInput
        id="withdrew-amount"
        label="Amount"
        placeholder="$650.00"
        className="pointer-events-none"
        rightIcon={<TransactionsIcon className="w-8 h-8   " />}
      />
      <TextInput
        id="withdrew-sender"
        label="Sender node ID#"
        placeholder="02b...bd9@lua...qid.onion:9735"
        className="pointer-events-none truncate"
        rightIcon={<PersonIcon className="w-8 h-8   " />}
      />
      <TextInput
        id="withdrew-fee"
        label="Fee"
        placeholder="Total fee $20"
        className="pointer-events-none"
      />
      <TextInput
        id="withdrew-duration"
        label="Duration"
        placeholder="20 minutes"
        className="pointer-events-none"
      />
      <div className="flex justify-end mt-6 gap-3">
        <Button variant="secondary" disabled>
          Cancel
        </Button>
        <Button variant="primary">Withdraw</Button>
      </div>
    </div>
  </div>
);

export default WithdrewBlock;
