import React from "react";
import { Link } from "react-router-dom";

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
  <section className="py-4 md:pt-0 hidden md:block">
    {/* Header */}
    <h4 className="font-medium md:font-normal">Instructions</h4>
    {/* Main instruction */}
    <div className="py-1">
      <p className="text-xs md:text-sm  text-dim-gray">Get Started</p>
      <p className="text-sm md:text-base lg:text-xl  py-1">
        Make your first deposit
      </p>
      <div className="text-xs md:text-sm text-dim-gray">
        Earn yield on your cash with Cash.
      </div>
    </div>
    {/* Task list */}
    <div className="py-1 space-y-3">
      {tasks.map((task, idx) =>
        task.done ? (
          <div key={idx} className="flex items-center gap-1  text-dim-gray">
            <CheckIcon />
            <p className="text-xs md:text-sm ">{task.label}</p>
          </div>
        ) : (
          <div key={idx} className="flex items-center gap-1 ui-text-primary">
            <p className="text-xs md:text-sm  px-2">&#8226;</p>
            <p className="text-xs md:text-sm ">{task.label}</p>
          </div>
        )
      )}
    </div>
    <div className="mt-4 flex flex-wrap gap-2">
      <Link to="/wallet" className="text-xs text-brand underline focus-ring rounded-sm">
        Go to Wallet
      </Link>
      <Link to="/profile" className="text-xs text-brand underline focus-ring rounded-sm">
        Complete Profile
      </Link>
      <Link to="/blog" className="text-xs text-brand underline focus-ring rounded-sm">
        Read Insights
      </Link>
    </div>
  </section>
);

export default Instructions;
