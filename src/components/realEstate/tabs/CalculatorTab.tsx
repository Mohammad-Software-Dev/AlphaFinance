import React from "react";
import VerticalDivider from "../../common/VerticalDivider";
import FinancialCalculatorSection from "../RealEstate/FinancialCalculatorSection";
// import OldFinancialCalculator from "../RealEstate/OldFinancialCalculator";
import ExpensesSection from "../RealEstate/ExpensesSection";
// import FinancialCalculator from "../RealEstate/FinancialCalculator";

const CalculatorTab: React.FC = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <section className="w-full lg:w-1/2">
          <FinancialCalculatorSection />
        </section>
        <VerticalDivider className="hidden border-light-silver lg:block mx-6 h-auto self-stretch min-h-[600px]" />
        <section className="w-full lg:w-1/2">
          <ExpensesSection />
        </section>
      </div>
    </>
  );
};

export default CalculatorTab;
