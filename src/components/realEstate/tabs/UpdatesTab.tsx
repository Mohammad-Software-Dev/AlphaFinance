import React from "react";
import HorizontalDivider from "../../common/HorizontalDivider";
import VerticalDivider from "../../common/VerticalDivider";
import UpdatesAndVotes from "../Updates/UpdatesAndVotes";
import Timeline from "../Updates/Timeline";

const UpdatesTab: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-fit">
      <section className="w-full lg:w-2/3 flex flex-col  h-[85.2vh]">
        <UpdatesAndVotes />
      </section>
      <VerticalDivider className="hidden border-light-silver lg:block mx-6 h-auto self-stretch min-h-[600px]" />
      <HorizontalDivider className="block border-light-silver md:hidden  my-8  self-stretch" />

      <section className="w-full lg:w-1/3 flex flex-col h-[85.2vh]">
        <Timeline />
      </section>
    </div>
  );
};

export default UpdatesTab;
