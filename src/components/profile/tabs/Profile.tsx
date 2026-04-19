import React, { useState } from "react";
import ProfileInformation from "../ProfileInformation";

import LogOverview from "../LogOverview";
import Projects from "../Projects";
import LogIcon from "../../../assets/icons/logs.svg?react";
import VerticalDivider from "../../common/VerticalDivider";
import HorizontalDivider from "../../common/HorizontalDivider";
import Modal from "../../common/Modal";

const Profile: React.FC = () => {
  const [logOpen, setLogOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row  w-full relative">
      <div className="fixed right-2 bottom-2 z-20 md:hidden">
        <button
          onClick={() => setLogOpen(true)}
          className="bg-brand rounded-full p-4 shadow transition focus-ring"
          aria-label="Open activity logs"
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
      <div className="md:hidden">
        <Modal
          open={logOpen}
          onClose={() => setLogOpen(false)}
          className="w-[95vw] max-w-xl max-h-[90vh] overflow-y-auto p-4"
          title="Activity logs"
        >
          <LogOverview />
        </Modal>
      </div>
    </div>
  );
};

export default Profile;
