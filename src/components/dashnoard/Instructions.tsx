import React from "react";

const CheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path
      d="M6 11.5L10 15.5L16 8.5"
      stroke="#212121"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const tasks = [
  { label: "Task 1 Lorem ipsum ispum", done: true },
  { label: "Task 2 Lorem ipsum ispum", done: true },
  { label: "Task 3 Lorem ipsum ispum", done: true },
  { label: "Task 4 Lorem ipsum ispum", done: false },
];

const Instructions: React.FC = () => (
  <section>
    {/* Header */}
    <div className="py-4 md:pt-0">
      <h4 className="font-normal">Instructions</h4>
    </div>
    {/* Main instruction */}
    <div className="py-1">
      <p className="text-xs md:text-sm mb-1 text-dim-gray">Get Started</p>
      <p className="text-base md:text-xl  py-1">Make your first deposit</p>
      <div className="text-xs md:text-sm text-dim-gray">
        Earn yield on your cash with Cash.
      </div>
    </div>
    {/* Task list */}
    <div className="py-4 space-y-3">
      {tasks.map((task, idx) =>
        task.done ? (
          <div key={idx} className="flex items-center gap-1  text-dim-gray">
            <CheckIcon />
            <p className="text-xs md:text-sm ">{task.label}</p>
          </div>
        ) : (
          <div key={idx} className="flex items-center gap-1  text-black">
            <p className="text-xs md:text-sm  px-2">&#8226;</p>
            <p className="text-xs md:text-sm ">{task.label}</p>
          </div>
        )
      )}
    </div>
  </section>
);

export default Instructions;
