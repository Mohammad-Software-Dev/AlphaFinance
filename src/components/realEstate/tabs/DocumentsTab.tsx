import React from "react";
import Invoices from "../../common/Invoices";

const DocumentsTab: React.FC = () => {
  return (
    <div className="flex flex-col  w-full min-h-screen">
      <section className="w-full md:w-5/12">
        <Invoices />
      </section>
    </div>
  );
};

export default DocumentsTab;
