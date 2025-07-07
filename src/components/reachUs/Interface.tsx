import React, { useRef, useState, useEffect } from "react";

import ChatDaySeparator from "../common/ChatDaySeparator";
import User1 from "../../assets/images/male.png";
import User2 from "../../assets/images/female.png";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";

const messages = [
  // Today
  {
    sender: "Mohammad Ahmad",
    senderRole: "Senior Developer",
    avatar: User1,
    self: false,
    text: '"Explain quantum computing insimple terms"',
    time: "9:14am",
    day: "today",
  },
  {
    sender: "Mohammad Ahmad",
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
    sender: "Mohammad Ahmad",
    senderRole: "Senior Developer",
    avatar: User1,
    self: false,
    text: "May occasionally generate incorrect information.",
    time: "",
    day: "yesterday",
  },
  {
    sender: "Mohammad Ahmad",
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
    sender: "Mohammad Ahmad",
    senderRole: "Senior Developer",
    avatar: User1,
    self: false,
    text: '"Explain quantum computing insimple terms"',
    time: "9:14am",
    day: "today",
  },
  {
    sender: "Mohammad Ahmad",
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
    sender: "Mohammad Ahmad",
    senderRole: "Senior Developer",
    avatar: User1,
    self: false,
    text: "May occasionally generate incorrect information.",
    time: "",
    day: "yesterday",
  },
  {
    sender: "Mohammad Ahmad",
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
      <div className="fixed top-25 md:static bg-white w-full">
        <ChatHeader
          onBack={onBack}
          userImage={User1}
          userName="Mohammad Ahmad"
          userPosition="Senior Developer"
        />
      </div>

      <div className="flex flex-col flex-1 min-h-0 overflow-y-auto">
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
      <div className="fixed  bottom-1 md:static">
        <ChatInput
          inputRef={inputRef}
          message={message}
          setMessage={setMessage}
        />
      </div>
    </main>
  );
};

export default Interface;
