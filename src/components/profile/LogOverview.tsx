import React from "react";

const logs = [
  { date: "Jan 22", time: "7:00 PM", message: "$2400, Design changes" },
  { date: "Dec 12", time: "2:00 PM", message: "New order #1832412" },
  { date: "June 21", time: "4:00 PM", message: "Server payments for April" },
  {
    date: "Mar 21",
    time: "4:00 PM",
    message: "New card added for order #4395133",
  },
  {
    date: "Dec 21",
    time: "4:00 PM",
    message: "Unlock packages for development",
  },
  { date: "Feb 11", time: "9:30 AM", message: "Order #198321 paid" },
  { date: "May 2", time: "1:40 PM", message: "Team meeting scheduled" },
  { date: "Jul 13", time: "10:00 AM", message: "API usage increased" },
  { date: "Aug 4", time: "11:15 AM", message: "Security check completed" },
  { date: "Sep 18", time: "5:00 PM", message: "New developer onboarded" },
  { date: "Oct 30", time: "8:45 AM", message: "System backup created" },
  { date: "Nov 15", time: "3:30 PM", message: "Quarterly report submitted" },
  { date: "Jan 5", time: "9:15 AM", message: "Bug #939 resolved" },
  { date: "Mar 14", time: "12:00 PM", message: "Annual subscription renewed" },
  { date: "Apr 20", time: "6:00 PM", message: "Release v2.1 deployed" },
];

const LogOverview: React.FC = () => (
  <section>
    <h4 className="mb-4 md:mb-6">Log Overview</h4>
    <div className="w-full flex flex-col">
      {logs.map((log, idx) => (
        <div key={log.date + log.time + idx} className=" flex w-full relative">
          <div className="w-1/7 text-right pr-3 flex flex-col justify-center items-end text-sm ">
            <span className="text-xs md:text-sm">{log.date}</span>
            <span className="text-xs md:text-sm">{log.time}</span>
          </div>
          <div
            className="
              flex-1 pl-6 md:pl-8 pr-1 py-3 text-sm md:text-base border-l-[2px] border-light-silver
              transition-all duration-200 group cursor-pointer
              hover:border-l-[3px] hover:border-black
              hover:bg-[linear-gradient(90deg,var(--color-brand-hover)_0%,transparent_50%,transparent_100%)]
            "
          >
            <div className="transition-transform duration-200 group-hover:translate-x-2">
              {log.message}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default LogOverview;
