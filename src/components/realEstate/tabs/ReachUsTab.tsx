import React, { useState, useEffect } from "react";
import VerticalDivider from "../../common/VerticalDivider";
import Contacts from "../../reachUs/Contacts";
import Interface from "../../reachUs/Interface";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 1024);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return isMobile;
};

const ReachUs: React.FC = () => {
  const isMobile = useIsMobile();
  const [activeContactIndex, setActiveContactIndex] = useState<number | null>(
    isMobile ? null : 0
  );

  return (
    <div className="flex flex-col lg:flex-row w-full h-full">
      {/* Contacts list */}
      {(!isMobile || activeContactIndex === null) && (
        <Contacts
          activeIndex={activeContactIndex}
          onContactClick={(i: number) => setActiveContactIndex(i)}
        />
      )}

      <VerticalDivider className="hidden border-light-silver lg:block mx-6 h-auto self-stretch min-h-[600px]" />

      {/* Interface (Chat) */}
      {(!isMobile || activeContactIndex !== null) && (
        <Interface
          contactIndex={activeContactIndex}
          onBack={() => setActiveContactIndex(null)}
        />
      )}
    </div>
  );
};

export default ReachUs;
