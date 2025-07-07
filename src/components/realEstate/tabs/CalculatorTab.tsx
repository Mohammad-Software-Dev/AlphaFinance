import React from "react";
import FinancialCalculator from "../RealEstate/FinancialCalculator";

const CalculatorTab: React.FC = () => {
  return (
    <div className="flex flex-col  w-full min-h-screen">
      <section className="w-full md:w-1/2">
        <FinancialCalculator />
      </section>
    </div>
  );
};

export default CalculatorTab;
