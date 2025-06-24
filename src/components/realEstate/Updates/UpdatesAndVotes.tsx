import React, { useRef, useState } from "react";
import MaleImg from "../../../assets/images/male.png";

import FemaleImg from "../../../assets/images/female.png";
import SendButtonIcon from "../../../assets/icons/send_button.svg?react";
import ImageAttachmentIcon from "../../../assets/icons/image_attachement.svg?react";
import EditPenIcon from "../../../assets/icons/edit_pen_icon.svg?react";
import CalIcon from "../../../assets/icons/cal_icon.svg?react";
import AttachmentIcon from "../../../assets/icons/attachement.svg?react";

const votes = {
  user: {
    avatar: MaleImg,
    name: "Jane Doe",
    date: "Posted 3 days ago",
  },
  text: "Personal profiles are the perfect way for you to grab their attention and persuade recruiters to continue reading your CV because you’re telling them from the off exactly why they should hire you.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ullamcorper quis.",
  results: [
    { label: "Yes", count: 540, percent: 58 },
    { label: "No", count: 374, percent: 40 },
    { label: "No respond", count: 93, percent: 10 },
  ],
};

const updates = [
  {
    user: { avatar: MaleImg, name: "John Doe", tag: "Facility management" },
    text: "I just tried this recipe and it was amazing! The instructions were clear and easy to follow, and the end result was delicious. I will definitely be making this again. Thanks for sharing!Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ullamcorper quis.",
    date: "5 min ago",
    image: null,
    attachments: [],
  },
  {
    user: { avatar: MaleImg, name: "Jane Doe", tag: "Facility management" },
    text: "I really appreciate the insights and perspective shared in this article. It's definitely given me something to think about and has helped me see things from a different angle. Thank you for writing and sharing! Think about and has helped me see things from a different angle.",
    date: "5 min ago",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    attachments: [],
  },
  {
    user: { avatar: FemaleImg, name: "Jane Doe", tag: "Facility management" },
    text: "I really appreciate the insights and perspective shared in this article. It's definitely given me something to think about and has helped me see things from a different angle. Thank you for writing and sharing!",
    date: "5 min ago",
    image: null,
    attachments: [],
  },
  {
    user: { avatar: FemaleImg, name: "Jane Doe", tag: "Facility management" },
    text: "I really appreciate the insights and perspective shared in this article. It's definitely given me something to think about and has helped me see things from a different angle. Thank you for writing and sharing!",
    date: "5 min ago",
    image: null,
    attachments: [],
  },
];

type VoteBarProps = {
  label: string;
  count: number;
  percent: number;
};

function VoteBar({ label, count, percent }: VoteBarProps) {
  return (
    <div className="my-4">
      <div className="flex justify-between items-center text-[14px] font-medium text-[#222] mb-1">
        <span className="text-sm md:text-base">{label}</span>
        <span>{count}</span>
      </div>
      <div className="w-full h-[5px] rounded-full bg-[#F3F3F4] overflow-hidden">
        <div
          className="h-full transition-all duration-300 bg-black"
          style={{
            width: `${percent}%`,
          }}
        />
      </div>
    </div>
  );
}

const UpdatesAndVotes: React.FC = () => {
  const [newPost, setNewPost] = useState("");
  const [uploads, setUploads] = useState<{
    img: string | null;
    file: string | null;
  }>({ img: null, file: null });
  const fileInput = useRef<HTMLInputElement | null>(null);
  const imgInput = useRef<HTMLInputElement | null>(null);

  function handleSend() {
    setNewPost("");
    setUploads({ img: null, file: null });
  }

  return (
    <div className="flex flex-col w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-track-transparent">
      <div className="pb-5 border-b-[1px] border-light-silver pr-3">
        <div className="flex items-center justify-between">
          <h4 className="font-normal text-black mb-3">Vote</h4>
          <h6 className="flex items-center  text-dark-silver cursor-pointer select-none gap-1">
            Last 7 Days <span className="text-lg">▾</span>
          </h6>
        </div>
        <div className="flex items-center gap-2 mt-3 mb-1">
          <img
            src={votes.user.avatar}
            alt="Jane Doe"
            className="w-10 h-10 rounded-full object-cover bg-profile-purple"
          />
          <div>
            <div className="font-semibold text-base">{votes.user.name}</div>
            <div className="text-dark-silver text-xs">{votes.user.date}</div>
          </div>
        </div>
        <div className=" mt-3 text-sm md:text-base leading-relaxed">
          {votes.text}
        </div>
        <div className="mt-5 space-y-3">
          {votes.results.map((v) => (
            <VoteBar key={v.label} {...v} />
          ))}
        </div>
      </div>
      {/* Updates Section */}
      <div className="flex flex-col flex-1 pr-3 py-5 gap-3">
        <h4 className="font-normal text-black mb-3">Updates</h4>
        {/* Post Box */}
        <div className="flex items-center gap-0  mb-2 ">
          {/* Icons */}
          <div className="flex items-center gap-3 py-2">
            <label
              className="cursor-pointer flex items-center"
              onClick={() => fileInput.current?.click()}
              title="Attach file"
            >
              <AttachmentIcon className="w-5 h-5" />
              <input
                type="file"
                ref={fileInput}
                accept=".pdf,.doc,.docx,.txt"
                className="hidden"
                onChange={(e) =>
                  setUploads((u) => ({
                    ...u,
                    file:
                      e.target.files && e.target.files[0]
                        ? e.target.files[0].name
                        : null,
                  }))
                }
              />
            </label>
            <label
              className="cursor-pointer flex items-center"
              onClick={() => imgInput.current?.click()}
              title="Attach image"
            >
              <ImageAttachmentIcon className="w-5 h-5" />
              <input
                type="file"
                ref={imgInput}
                accept="image/*"
                className="hidden"
                onChange={(e) =>
                  setUploads((u) => ({
                    ...u,
                    img:
                      e.target.files && e.target.files[0]
                        ? URL.createObjectURL(e.target.files[0])
                        : null,
                  }))
                }
              />
            </label>
          </div>
          {/* Textarea */}
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            className="flex-1 text-sm md:text-base resize-none h-12 pl-3 ml-4 py-3 bg-ghost-white  focus:outline-none placeholder-dark-silver"
            rows={1}
            placeholder="Write your update here..."
          />
          {/* Send Button */}
          <button
            onClick={handleSend}
            disabled={!newPost.trim() && !uploads.img && !uploads.file}
            className="w-fit px-4 h-full flex items-center justify-center bg-brand rounded-r-lg "
          >
            <SendButtonIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Attachments (always below the bar, not inside) */}
        {(uploads.img || uploads.file) && (
          <div className="flex items-center gap-2 mt-1 px-3">
            {uploads.img && (
              <img
                src={uploads.img}
                alt="Attachment"
                className="w-16 h-16 rounded-lg object-cover"
              />
            )}
            {uploads.file && (
              <div className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
                {uploads.file}
              </div>
            )}
          </div>
        )}

        {/* Updates List */}
        {updates.map((u, i) => (
          <div key={i} className=" py-4 mb-2 ">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={u.user.avatar}
                alt={u.user.name}
                className="w-10 h-10 rounded-full object-cover bg-profile-pink"
              />
              <div className="flex items-center gap-2">
                <span className="font-semibold text-base">{u.user.name}</span>
                <span className="text-dark-silver text-sm">{u.user.tag}</span>
              </div>
            </div>
            <div className="text-gray-800 mb-2 text-[15px]">{u.text}</div>
            {u.image && (
              <img
                src={u.image}
                alt="update"
                className="w-full rounded-xl mt-1 mb-2 object-cover max-h-[320px]"
              />
            )}
            <div className="flex gap-2 items-center text-xs mt-1">
              <button className="flex items-center gap-1 bg-alabaster p-2 cursor-pointer">
                <EditPenIcon className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-1 bg-alabaster p-2 cursor-pointer">
                <CalIcon className="w-5 h-5" />
              </button>
              <span className="flex items-center text-xs md:text-sm text-dark-silver">
                {u.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdatesAndVotes;
