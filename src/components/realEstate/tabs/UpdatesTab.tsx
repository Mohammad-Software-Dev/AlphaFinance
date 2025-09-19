import React, { useState } from "react";
import VerticalDivider from "../../common/VerticalDivider";
import UpdatesAndVotes from "../Updates/UpdatesAndVotes";
import Timeline from "../Updates/Timeline";
import TimelineIcon from "../../../assets/icons/timeline.svg?react";
import Modal from "../../common/Modal";
import { useParams } from "react-router-dom";
import { usePropertyUpdates } from "../../../hooks/usePropertyUpdates";

const UpdatesTab: React.FC = () => {
  const [timelineOpen, setTimelineOpen] = useState(false);
  const { assetId } = useParams();
  const { data, isLoading, error } = usePropertyUpdates(assetId);

  if (isLoading) return <div>Loading…</div>;
  if (error || !data)
    return <div className="text-red-600">{error?.message ?? "No data"}</div>;

  return (
    <div className="flex flex-col lg:flex-row justify-between w-full min-h-fit relative">
      <div className="fixed right-2 bottom-2 z-20 lg:hidden">
        <button
          onClick={() => setTimelineOpen(true)}
          className="bg-brand rounded-full p-4 font-semibold shadow hover:bg-brand-dark transition"
        >
          <TimelineIcon className="w-full h-full" />
        </button>
      </div>

      <section className="max-w-5xl w-full lg:w-7/12 flex flex-col h-full lg:h-[85.2vh]">
        <UpdatesAndVotes vote={data.vote} updates={data.updates} />
      </section>

      <VerticalDivider className="hidden border-light-silver lg:block mx-6 h-auto self-stretch min-h-[600px]" />

      <section className="hidden lg:flex max-w-3xl w-full lg:w-5/12 flex-col h-[85.2vh]">
        <div className="flex flex-col h-full">
          <Timeline items={data.operationsTransactions} />
        </div>
      </section>

      <Modal
        open={timelineOpen}
        onClose={() => setTimelineOpen(false)}
        className="w-[98vw] max-w-lg h-[90vh] p-4 flex flex-col overflow-y-auto"
      >
        <Timeline items={data.operationsTransactions} />
      </Modal>
    </div>
  );
};

export default UpdatesTab;
