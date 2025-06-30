import React from "react";

const logs = [
  {
    date: "Jan 22",
    time: "7:00PM",
    message: "$2400, Design changes",
    marked: false,
  },
  {
    date: "Dec 12",
    time: "2:00PM",
    message: "New order #1832412",
    marked: true,
  },
  {
    date: "June 21",
    time: "4:00PM",
    message: "Server payments for April",
    marked: false,
  },
  {
    date: "Mar 21",
    time: "4:00PM",
    message: "New card added for order #4395133",
    marked: false,
  },
  {
    date: "Dec 21",
    time: "4:00PM",
    message: "Unlock packages for development",
    marked: false,
  },
];

const LogOverview: React.FC = () => (
  <section>
    <h4 className="mb-4 md:mb-6">Log Overview</h4>
    <div className="w-full flex flex-col">
      {logs.map((log) => (
        <div key={log.date + log.time} className="flex w-full relative ">
          <div className="w-fit text-right pr-3 flex flex-col justify-center items-start text-sm ">
            <span className="text-xs md:text-sm">{log.date}</span>
            <span className="text-xs md:text-sm">{log.time}</span>
          </div>
          <div
            className={`
                  flex-1 pl-6 md:pl-8 pr-1 py-3
                  ${log.marked ? "border-l-[3px]" : "border-l-[2px]"}
              `}
            style={{
              borderLeftColor: log.marked
                ? "black"
                : "var(--color-light-silver)",
              background: log.marked
                ? "linear-gradient(90deg, var(--color-brand-bg, #EEF0FA) 10%, rgba(255,255,255,0) 100%)"
                : undefined,
            }}
          >
            {log.message}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default LogOverview;
