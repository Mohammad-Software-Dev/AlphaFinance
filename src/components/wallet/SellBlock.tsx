import Dropdown from "../common/Dropdown";
import TextInput from "../common/TextInput";
import PersonIcon from "../../assets/icons/person.svg?react";
import TransactionsIcon from "../../assets/icons/transaction.svg?react";
import { Button } from "../common/Button";

const SellBlock: React.FC = () => (
  <div className="flex-1 ">
    <h4 className="font-medium md:font-normal">Sell (Send)</h4>
    <div className="space-y-1">
      <TextInput
        id="amount"
        placeholder="Enter amount..."
        type="text"
        label="Amount"
        rightIcon={<TransactionsIcon className="w-8 h-8   " />}
      />
      <TextInput
        id="to"
        placeholder="Pick contact or enter address..."
        type="text"
        label="To"
        rightIcon={<PersonIcon className="w-8 h-8   " />}
      />
      <Dropdown
        id="state"
        placeholder="State"
        options={["State A", "State B", "State C"]}
        name="state"
        label="State"
        value="State"
        onChange={() => {}}
      />

      <TextInput
        id="zipcode"
        placeholder="Zip Code"
        type="text"
        label="Zip Code"
      />
      <div className="flex justify-end mt-2 gap-3">
        <Button variant="secondary" disabled>
          Cancel
        </Button>
        <Button variant="primary">Save</Button>
      </div>
    </div>
  </div>
);

export default SellBlock;
