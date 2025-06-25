import React, { useState, useEffect } from "react";
import VerticalDivider from "../../common/VerticalDivider";
import UpdatesAndVotes from "../Updates/UpdatesAndVotes";
import Timeline from "../Updates/Timeline";
import TimelineIcon from "../../../assets/icons/timeline.svg?react";

const UpdatesTab: React.FC = () => {
  const [timelineOpen, setTimelineOpen] = useState(false);

  useEffect(() => {
    if (timelineOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [timelineOpen]);
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-fit relative">
      <div className="fixed right-2 bottom-2 z-20 lg:hidden">
        <button
          onClick={() => setTimelineOpen(true)}
          className="bg-brand  rounded-full p-4 font-semibold shadow hover:bg-brand-dark transition"
        >
          <TimelineIcon className="w-full h-full" />
        </button>
      </div>

      <section className="w-full lg:w-2/3 flex flex-col h-full lg:h-[85.2vh]">
        <UpdatesAndVotes />
      </section>
      <VerticalDivider className="hidden border-light-silver lg:block mx-6 h-auto self-stretch min-h-[600px]" />

      <section className="hidden lg:flex w-full lg:w-1/3  flex-col h-[85.2vh]">
        <div className="flex flex-col h-full">
          <Timeline />
        </div>
      </section>

      {timelineOpen && (
        <div className="fixed inset-0 bg-black/30 z-30 flex items-center justify-center lg:hidden">
          <div
            className="bg-white w-[98vw] max-w-lg h-[90vh] rounded-2xl shadow-xl relative p-4 flex flex-col overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-3 top-3 text-gray-500 hover:text-brand text-2xl font-bold"
              onClick={() => setTimelineOpen(false)}
              aria-label="Close Timeline"
            >
              ×
            </button>
            <Timeline />
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdatesTab;
