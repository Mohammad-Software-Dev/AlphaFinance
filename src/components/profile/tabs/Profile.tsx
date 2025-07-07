import React, { useState, useEffect } from "react";
import ProfileInformation from "../ProfileInformation";

import LogOverview from "../LogOverview";
import Projects from "../Projects";
import LogIcon from "../../../assets/icons/logs.svg?react";
import VerticalDivider from "../../common/VerticalDivider";
import HorizontalDivider from "../../common/HorizontalDivider";

const Profile: React.FC = () => {
  const [logOpen, setLogOpen] = useState(false);

  useEffect(() => {
    if (logOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [logOpen]);

  return (
    <div className="flex flex-col md:flex-row  w-full relative">
      <div className="fixed right-2 bottom-2 z-20 md:hidden">
        <button
          onClick={() => setLogOpen(true)}
          className="bg-brand rounded-full p-4 shadow hover:bg-brand-dark transition"
        >
          <LogIcon className="w-7 h-7 " />
        </button>
      </div>

      <div className="w-full md:w-2/3">
        <div className="flex flex-wrap md:border-b-[1px] border-light-silver mb-4 md:mb-6">
          <div className="w-1/2 min-w-fit border-b-[1px] border-light-silver md:border-0 mb-4 md:mb-6">
            <ProfileInformation />
          </div>
        </div>
        <div className="w-full">
          <Projects />
        </div>
      </div>
      <VerticalDivider className="hidden border-light-silver lg:block mx-6 h-auto self-stretch min-h-[600px]" />
      <HorizontalDivider className="block border-light-silver md:hidden self-stretch" />
      <div className="hidden md:block w-full md:w-1/3 mt-6 md:mt-0">
        <LogOverview />
      </div>
      {/* LogOverview: mobile modal */}
      {logOpen && (
        <div className="fixed inset-0 bg-black/30 z-30 flex items-center justify-center md:hidden">
          <div
            className="bg-white w-[98vw] max-w-lg h-[90vh] rounded-2xl shadow-xl relative p-4 flex flex-col overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-3 top-3 text-gray-500 hover:text-brand text-2xl font-bold"
              onClick={() => setLogOpen(false)}
              aria-label="Close LogOverview"
            >
              ×
            </button>
            <LogOverview />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
