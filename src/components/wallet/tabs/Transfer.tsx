import React from "react";

import HorizontalDivider from "../../common/HorizontalDivider";

import TransactionsRow from "../TransactionsRow";
import TransactionsTranscripts from "../TransactionsTranscripts";

const Transfer: React.FC = () => (
  <div className="flex flex-col lg:flex-row w-full">
    <div className="w-full">
      <TransactionsRow />
      <HorizontalDivider className=" border-light-silver my-8  self-stretch" />
      <TransactionsTranscripts />
    </div>
  </div>
);

export default Transfer;
