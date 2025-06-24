import React, { useRef, useState } from "react";
import User1 from "../../../assets/images/male.png";
import User2 from "../../../assets/images/female.png";
import PaperclipIcon from "../../../assets/icons/attachement.svg?react";
import ImageIcon from "../../../assets/icons/image_attachement.svg?react";
import SendButtonIcon from "../../../assets/icons/send_button.svg?react";

// Left sidebar contacts (mock)
const contacts = [
  {
    avatar: User1,
    name: "Mr.David Peters",
    title: "Account Manager",
    info: (
      <>
        <div className="text-xs text-gray-400">
          I am available everyday
          <br />
          from 10:30 AM to 5:40 PM
        </div>
        <div className="text-xs text-gray-400 mt-1">
          <span className="font-medium">Tel:</span> +20 398 5427
          <br />
          <span className="font-medium">Email:</span> info@newzop.pro
        </div>
      </>
    ),
    active: true,
    time: "10:35 AM",
    message: "",
  },
  {
    avatar: User2,
    name: "Support Agent Lisa Roy",
    title: "",
    info: (
      <div className="text-xs text-gray-400">
        Hi, are you! I’m Lisa how can I help you?
      </div>
    ),
    active: false,
    time: "10:35 AM",
    message: "",
  },
];

// Chat messages (mock)
const messages = [
  // Today
  {
    sender: "David Peters",
    senderRole: "Senior Developer",
    avatar: User1,
    self: false,
    text: '"Explain quantum computing insimple terms"',
    time: "9:14am",
    day: "today",
  },
  {
    sender: "David Peters",
    senderRole: "Senior Developer",
    avatar: User1,
    self: false,
    text: '"Got any creative ideas for a 10year old’s birthday?"',
    time: "9:14am",
    day: "today",
  },
  {
    sender: "Me",
    avatar: User2,
    self: true,
    text: '"How do I make an HTTP requestin Javascript?"',
    time: "9:14am",
    day: "today",
  },
  {
    sender: "Me",
    avatar: User2,
    self: true,
    text: '"How do I make an HTTP requestin Javascript?"\nLimited knowledge of world andevents after 2021.',
    time: "9:14am",
    day: "today",
  },
  // Yesterday separator
  {
    system: true,
    text: "Yesterday",
  },
  // Yesterday
  {
    sender: "David Peters",
    senderRole: "Senior Developer",
    avatar: User1,
    self: false,
    text: "May occasionally generate incorrect information.",
    time: "",
    day: "yesterday",
  },
  {
    sender: "David Peters",
    senderRole: "Senior Developer",
    avatar: User1,
    self: false,
    text: "Trained to decline inappropriate requests.",
    time: "8:14am",
    day: "yesterday",
  },
  {
    sender: "Me",
    avatar: User2,
    self: true,
    text: '"How do I make an HTTP requestin Javascript?"\nLimited knowledge of world andevents after 2021.',
    time: "9:14am",
    day: "yesterday",
  },
];

const ReachUs: React.FC = () => {
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-fit bg-[#F8F9FB]">
      {/* Sidebar */}
      <aside className="w-full lg:w-[280px] bg-white border-r border-[#EEF1F4] py-6 px-3">
        {contacts.map((c, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 mb-5 p-3 rounded-xl ${
              c.active ? "bg-[#F7F8FD]" : ""
            }`}
          >
            <img
              src={c.avatar}
              alt={c.name}
              className="w-11 h-11 rounded-full object-cover border"
            />
            <div>
              <div className="font-medium text-[#2C4273] leading-tight">
                {c.name}
              </div>
              <div className="text-xs text-[#A2A3B7] mb-1">{c.title}</div>
              <div>{c.info}</div>
            </div>
          </div>
        ))}
      </aside>
      {/* Chat section */}
      <main className="flex-1 flex flex-col min-h-[600px] bg-[#F8F9FB] relative">
        {/* Chat area */}
        <div className="flex flex-col px-8 py-6 h-full overflow-y-auto">
          {/* Chat header */}
          <div className="flex items-center mb-8">
            <img
              src={User1}
              alt="David Peters"
              className="w-11 h-11 rounded-full object-cover border"
            />
            <div className="ml-3">
              <div className="font-semibold text-[#2C4273] text-base leading-tight">
                David Peters
              </div>
              <div className="text-xs text-[#B8B6C1]">Senior Developer</div>
            </div>
          </div>
          {/* Messages */}
          <div className="flex-1 flex flex-col gap-3">
            {messages.map((msg, idx) =>
              msg.system ? (
                <div
                  key={idx}
                  className="w-full text-center text-[#B8B6C1] text-xs font-medium py-2"
                >
                  {msg.text}
                </div>
              ) : (
                <div
                  key={idx}
                  className={`flex ${
                    msg.self ? "justify-end" : "justify-start"
                  } items-end gap-2`}
                >
                  {!msg.self && (
                    <img
                      src={msg.avatar}
                      alt={msg.sender}
                      className="w-9 h-9 rounded-full object-cover mb-3 border"
                    />
                  )}
                  <div
                    className={`flex flex-col ${
                      msg.self ? "items-end" : "items-start"
                    }`}
                  >
                    {idx === 0 || messages[idx - 1].sender !== msg.sender
                      ? !msg.self && (
                          <span className="text-sm font-medium text-[#4464C4] mb-1">
                            {msg.sender}{" "}
                            <span className="text-xs text-[#B8B6C1] font-normal">
                              {msg.senderRole}
                            </span>
                          </span>
                        )
                      : null}
                    <div
                      className={`px-4 py-2 rounded-xl text-sm whitespace-pre-line ${
                        msg.self
                          ? "bg-[#E6EBFB] text-[#4464C4]"
                          : "bg-[#F6F6F8] text-[#20232E]"
                      }`}
                    >
                      {msg.text}
                    </div>
                    {msg.time && (
                      <span className="text-xs text-[#B8B6C1] mt-1">
                        ✓ {msg.time}
                      </span>
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        {/* Chat input */}
        <div className="flex items-center px-8 py-4 bg-white border-t border-[#EEF1F4] gap-3">
          <button>
            <PaperclipIcon className="w-5 h-5 text-[#B8B6C1]" />
          </button>
          <button>
            <ImageIcon className="w-5 h-5 text-[#B8B6C1]" />
          </button>
          <input
            ref={inputRef}
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type message"
            className="flex-1 bg-transparent outline-none border-none text-[15px] px-2 py-2"
          />
          <button
            className="w-9 h-9 flex items-center justify-center bg-[#E6EBFB] hover:bg-[#BFC3F5] rounded-xl ml-1 disabled:opacity-60"
            disabled={!message.trim()}
          >
            <SendButtonIcon className="w-5 h-5 text-[#4464C4]" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default ReachUs;
