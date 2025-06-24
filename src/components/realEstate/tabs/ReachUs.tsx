import React, { useRef, useState, useEffect } from "react";
import User1 from "../../../assets/images/male.png";
import User2 from "../../../assets/images/female.png";
import PaperclipIcon from "../../../assets/icons/attachement.svg?react";
import ImageIcon from "../../../assets/icons/image_attachement.svg?react";
import SendButtonIcon from "../../../assets/icons/send_button.svg?react";
import PhoneIcon from "../../../assets/icons/chat_phone.svg?react";
import MailIcon from "../../../assets/icons/chat_mail.svg?react";

const contacts = [
  {
    avatar: User1,
    bg_color: "bg-profile-blue",
    name: "Mr.David Peters",
    title: "Account Manager",
    info: (
      <>
        <div className="text-xs text-dark-silver w-3/4">
          Note: I am available everyday from 10:30 AM to 5:40 PM
        </div>
        <div className="text-xs flex flex-row gap-2 justify-start items-center mt-1">
          <PhoneIcon className="w-3 h-3" />
          <span className="text-xs text-dark-silver">Tel: +20 398 5427</span>
        </div>
        <div className="text-xs flex flex-row gap-2 justify-start items-center mt-1">
          <MailIcon className="w-3 h-3" />
          <span className="text-xs text-dark-silver">
            Email: info@newzop.pro
          </span>
        </div>
      </>
    ),
    active: true,
    time: "",
    message: "",
  },
  {
    avatar: User2,
    bg_color: "bg-profile-pink",
    name: "Support Agent Lisa Roy",
    title: "",
    info: (
      <div className="text-xs text-dark-silver w-3/4">
        Hi, are you! I’m Lisa how can I help you?
      </div>
    ),
    active: false,
    time: "10:35 AM",
    message: "",
  },
];

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
  const chatListRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (chatListRef.current) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
    }
  }, []);
  return (
    <div className="flex flex-col lg:flex-row w-full h-full gap-3">
      <aside className="w-full flex  flex-col gap-5 bg-ghost-white h-fit py-3 px-5 md:py-4 md:px-6 rounded-lg lg:w-1/4 ">
        {contacts.map((c, i) => (
          <div
            key={i}
            className={`flex items-start gap-3 p-3 rounded-lg ${
              c.active ? "bg-white" : ""
            }`}
          >
            <img
              src={c.avatar}
              alt={c.name}
              className={`w-13 h-13 rounded-full object-cover ${c.bg_color}`}
            />
            <div>
              <div className="font-semibold flex flex-row w-full justify-between items-center lg:items-start leading-tight">
                <span className="text-brand text-sm md:text-base w-3/4 lg:text-lg">
                  {c.name}
                </span>
                <span className="text-dark-silver flex-1 w-fit text-xs md:text-sm lg:pt-1 lg:text-sm">
                  {c.time}
                </span>
              </div>
              <div className="text-xs font-semibold mb-1">{c.title}</div>
              <div>{c.info}</div>
            </div>
          </div>
        ))}
      </aside>

      {/* Chat section */}
      <main className="flex-1 flex flex-col bg-[#F8F9FB]  h-[80vh]">
        {/* Chat area */}
        <div className="flex flex-col px-8 py-6 flex-1 min-h-0 overflow-y-auto">
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

          {/* Messages container (visually bottom-anchored) */}
          <div
            ref={chatListRef}
            className="flex flex-col gap-3 flex-1 min-h-0 overflow-y-auto"
          >
            {[...messages].map((msg, idx) =>
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
                    {!msg.self &&
                      (idx === 0 ||
                        messages[idx - 1].sender !== msg.sender) && (
                        <span className="text-sm font-medium text-[#4464C4] mb-1">
                          {msg.sender}{" "}
                          <span className="text-xs text-[#B8B6C1] font-normal">
                            {msg.senderRole}
                          </span>
                        </span>
                      )}
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

        {/* Input bar */}
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
            className="flex-1 bg-transparent outline-none text-[15px] px-2 py-2"
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
