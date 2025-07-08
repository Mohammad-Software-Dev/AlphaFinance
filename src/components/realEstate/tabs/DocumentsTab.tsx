import React, { useState } from "react";
import Invoices from "../../common/Invoices";
import FilePreviewer from "../../common/FilePreviewer";
import VerticalDivider from "../../common/VerticalDivider";

const DocumentsTab: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  return (
    <div className="flex   w-full min-h-screen">
      <section className="w-full md:w-5/12">
        <Invoices
          onRowClick={setSelectedFile}
          selectedFile={selectedFile}
          withPreview={true}
        />
      </section>
      <VerticalDivider className="hidden border-light-silver lg:block mx-6 h-auto self-stretch " />
      <section className="flex-1 w-full min-h-[60vh] flex justify-center items-start">
        <FilePreviewer fileUrl={selectedFile} />
      </section>
    </div>
  );
};

export default DocumentsTab;
