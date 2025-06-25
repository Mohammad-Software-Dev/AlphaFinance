import React, { useRef, useState, useEffect } from "react";
import PaperclipIcon from "../../assets/icons/attachement.svg?react";
import ImageIcon from "../../assets/icons/image_attachement.svg?react";
import SendButtonIcon from "../../assets/icons/send_message_button.svg?react";
import ChatDaySeparator from "../common/ChatDaySeparator";
import User1 from "../../assets/images/male.png";
import User2 from "../../assets/images/female.png";

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

interface InterfaceProps {
  contactIndex: number | null;
  onBack: () => void;
}

const Interface: React.FC<InterfaceProps> = ({ contactIndex, onBack }) => {
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const chatListRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (chatListRef.current) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
    }
  }, []);
  if (contactIndex === null) return null;

  return (
    <main className="flex-1 flex flex-col   h-[80vh]">
      <div className="flex flex-col  flex-1 min-h-0 overflow-y-auto">
        <div className="flex items-center border-b-[1px] pb-1 border-light-silver">
          <div className="flex flex-row items-center justify-center ">
            <button
              onClick={onBack}
              className="lg:hidden text-brand text-lg mr-3"
            >
              ❮
            </button>
            <img
              src={User1}
              alt="David Peters"
              className="w-12 h-12 rounded-full object-cover bg-profile-blue"
            />
          </div>

          <div className="ml-3">
            <div className="text-brand text-sm md:text-base lg:text-lg font-semibold">
              David Peters
            </div>
            <div className="text-xs">Senior Developer</div>
          </div>
        </div>

        <div
          ref={chatListRef}
          className="flex flex-col gap-3 flex-1 min-h-0 overflow-y-auto lg:pr-4"
        >
          {[...messages].map((msg, idx) =>
            msg.system ? (
              <ChatDaySeparator key={idx} label={msg.text} />
            ) : (
              <div
                key={idx}
                className={`flex ${
                  msg.self ? "justify-end" : "justify-start"
                } items-end gap-2`}
              >
                {!msg.self}
                <div
                  className={`flex flex-col max-w-3/4 ${
                    msg.self ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`px-4 py-2 rounded-xl text-sm whitespace-pre-line ${
                      msg.self ? "bg-brand-light/60" : "bg-ghost-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.time &&
                    (() => {
                      // Find if next message is from a different sender or a system separator, or this is the last message
                      const isLastOfGroup =
                        idx === messages.length - 1 ||
                        messages[idx + 1].system ||
                        messages[idx + 1].self !== msg.self;
                      return isLastOfGroup ? (
                        <div className="w-full flex justify-end">
                          <span className="mt-1  text-xs text-dark-silver">
                            ✓ {msg.time}
                          </span>
                        </div>
                      ) : null;
                    })()}
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Input bar */}
      <div className="flex items-center mt-2 px-4 lg:pl-8 lg:pr-4 lg:mx-4 py-4 bg-ghost-white rounded-lg  gap-3">
        <button>
          <PaperclipIcon className="w-5 h-5 " />
        </button>
        <button>
          <ImageIcon className="w-5 h-5 " />
        </button>
        <input
          ref={inputRef}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type message"
          className="flex-1 bg-transparent outline-none text-sm lg:px-2 "
        />
        <button className="w-6 h-6 flex items-center justify-end ">
          <SendButtonIcon className="w-6 h-6 " />
        </button>
      </div>
    </main>
  );
};

export default Interface;
