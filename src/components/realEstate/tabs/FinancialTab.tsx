import React from "react";
import { useParams } from "react-router-dom";
import FinancialUpperPart from "../Financial/FinancialUpperPart";
import FinancialLowerPart from "../Financial/FinancialLowerPart";
import HorizontalDivider from "../../common/HorizontalDivider";
import { usePropertyFinancials } from "../../../hooks/usePropertyFinancials";

const FinancialTab: React.FC = () => {
  const { assetId } = useParams();
  const { data, isLoading, error } = usePropertyFinancials(assetId);

  if (isLoading) return <div>Loading…</div>;
  if (error || !data)
    return <div className="text-red-600">{error?.message ?? "No data"}</div>;

  return (
    <div className="flex flex-col w-full min-h-screen">
      <FinancialUpperPart financials={data} />
      <HorizontalDivider className="border-light-silver hidden md:block my-8 self-stretch" />
      <FinancialLowerPart financials={data} />
    </div>
  );
};

export default FinancialTab;
