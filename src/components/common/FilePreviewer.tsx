import React from "react";

type Props = {
  fileUrl: string | null;
};

const isImage = (fileUrl: string) =>
  /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(fileUrl);

const isPdf = (fileUrl: string) => /\.pdf$/i.test(fileUrl);

const FilePreviewer: React.FC<Props> = ({ fileUrl }) => {
  if (!fileUrl) {
    return (
      <div className="w-full h-1/2 flex items-center justify-center text-dim-gray">
        Select an invoice to preview the file.
      </div>
    );
  }

  if (isImage(fileUrl)) {
    return (
      <div className="max-w-full max-h-[80vh] flex items-center justify-center">
        <img
          src={fileUrl}
          alt="Preview"
          className="rounded-sm shadow-lg max-w-full max-h-[80vh] border"
        />
      </div>
    );
  }

  if (isPdf(fileUrl)) {
    return (
      <iframe
        src={fileUrl}
        title="PDF Preview"
        className="w-full h-[80vh] rounded-sm shadow-lg border"
      />
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center text-red-500">
      Unsupported file type.
    </div>
  );
};

export default FilePreviewer;
