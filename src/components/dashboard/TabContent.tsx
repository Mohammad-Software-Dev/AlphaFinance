import React, { useRef, useEffect } from "react";
import Profile from "./tabs/Profile";
import Transactions from "./tabs/Transactions";

interface Props {
  tab: string;
}

const STICKY_HEADER_HEIGHT = 160;

const TabContent: React.FC<Props> = ({ tab }) => {
  const topRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (topRef.current) {
      const y =
        topRef.current.getBoundingClientRect().top +
        window.scrollY -
        STICKY_HEADER_HEIGHT;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [tab]);

  if (tab === "profile") {
    return (
      <div ref={topRef}>
        <Profile />
      </div>
    );
  }
  if (tab === "transactions") {
    return (
      <div ref={topRef}>
        <Transactions />
      </div>
    );
  }

  return (
    <div ref={topRef} className="flex items-start gap-12 mt-8">
      <div className="flex-1 min-h-[400px] flex items-center justify-center">
        <span className="text-dark-silver">
          Content for "{tab}" tab coming soon...
        </span>
      </div>
    </div>
  );
};

export default TabContent;
