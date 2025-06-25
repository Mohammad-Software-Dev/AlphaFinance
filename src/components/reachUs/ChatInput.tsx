import type { Ref } from "react";
import PaperclipIcon from "../../assets/icons/attachement.svg?react";
import ImageIcon from "../../assets/icons/image_attachement.svg?react";
import SendButtonIcon from "../../assets/icons/send_message_button.svg?react";

interface ChatInputProps {
  inputRef: Ref<HTMLInputElement> | undefined;
  message: string | number | readonly string[] | undefined;
  setMessage: (value: React.SetStateAction<string>) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({
  inputRef,
  message,
  setMessage,
}) => {
  return (
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
  );
};

export default ChatInput;
