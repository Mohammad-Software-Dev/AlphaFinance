import React from "react";

interface ChatDaySeparatorProps {
  label: string;
}

const ChatDaySeparator: React.FC<ChatDaySeparatorProps> = ({ label }) => (
  <div className="flex items-center w-full my-3 select-none">
    <div className="flex-1 border-t border-light-silver"></div>
    <span className="mx-4 text-dark-silver text-sm  whitespace-nowrap">
      {label}
    </span>
    <div className="flex-1 border-t border-light-silver"></div>
  </div>
);

export default ChatDaySeparator;
