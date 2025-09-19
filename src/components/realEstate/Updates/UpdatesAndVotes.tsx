// src/components/realEstate/Updates/UpdatesAndVotes.tsx
import React, { useRef, useState } from "react";
import SendButtonIcon from "../../../assets/icons/send_button.svg?react";
import ImageAttachmentIcon from "../../../assets/icons/image_attachement.svg?react";
import EditPenIcon from "../../../assets/icons/edit_pen_icon.svg?react";
import CalIcon from "../../../assets/icons/cal_icon.svg?react";
import AttachmentIcon from "../../../assets/icons/attachement.svg?react";

import MaleImg from "../../../assets/images/male.png";
import FemaleImg from "../../../assets/images/female.png";
import Male2Img from "../../../assets/images/male_2.png";
import Male3Img from "../../../assets/images/male_3.png";

// any local post images you already use in the app:
import Sample1 from "../../../assets/images/sample_1.jpg";
import SampleProperty from "../../../assets/images/sample-property.jpg";

import type {
  VoteBlockModel,
  UpdateItemModel,
} from "../../../models/propertyUpdates";

type Props = {
  vote: VoteBlockModel;
  updates: UpdateItemModel[];
};

type VoteBarProps = { label: string; count: number; percent: number };

const AVATARS = [MaleImg, FemaleImg, Male2Img, Male3Img];
const POST_IMAGES = [Sample1, SampleProperty];

function pickAvatar(index = 0) {
  return AVATARS[index % AVATARS.length];
}

function pickPostImage(index = 0) {
  return POST_IMAGES[index % POST_IMAGES.length];
}

function VoteBar({ label, count, percent }: VoteBarProps) {
  return (
    <div className="my-4">
      <div className="flex justify-between items-center font-medium text-[#222] mb-1">
        <span className="text-sm md:text-base">{label}</span>
        <span>{count}</span>
      </div>
      <div className="w-full h-[5px] rounded-full bg-[#F3F3F4] overflow-hidden">
        <div
          className="h-full transition-all duration-300 bg-black"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

const UpdatesAndVotes: React.FC<Props> = ({ vote, updates }) => {
  // ── Always use local static images, ignore whatever comes from JSON ─────────
  const voting = vote.votings[0];
  const votingAvatar = pickAvatar(0);

  const total =
    voting.totalVotes || voting.options.reduce((s, o) => s + o.count, 0);

  const [newPost, setNewPost] = useState("");
  const [uploads, setUploads] = useState<{
    img: string | null;
    file: string | null;
  }>({
    img: null,
    file: null,
  });
  const fileInput = useRef<HTMLInputElement | null>(null);
  const imgInput = useRef<HTMLInputElement | null>(null);

  function handleSend() {
    setNewPost("");
    setUploads({ img: null, file: null });
  }

  return (
    <div className="flex flex-col w-full h-full lg:overflow-y-auto lg:scrollbar-thin lg:scrollbar-thumb-rounded lg:scrollbar-track-transparent">
      {/* Vote */}
      <div className="pb-5 border-b-[1px] border-light-silver pr-3">
        <div className="flex items-center justify-between">
          <h4 className="font-normal text-black mb-3">{vote.title}</h4>
          <h6 className="flex items-center text-dark-silver cursor-pointer select-none gap-1">
            {vote.timeRange === "last7days" ? "Last 7 Days" : vote.timeRange}{" "}
            <span className="text-lg">▾</span>
          </h6>
        </div>

        <div className="flex items-center gap-2 mt-3 mb-1">
          <img
            src={votingAvatar}
            alt={voting.author.name}
            className="w-10 h-10 rounded-full object-cover bg-profile-purple"
          />
          <div>
            <div className="font-semibold text-base">{voting.author.name}</div>
            <div className="text-dark-silver text-xs">{voting.postedAt}</div>
          </div>
        </div>

        <div className="mt-3 text-sm md:text-base leading-relaxed">
          {voting.content}
        </div>

        <div className="mt-5 space-y-3">
          {voting.options.map((o) => (
            <VoteBar
              key={o.label}
              label={o.label}
              count={o.count}
              percent={total ? Math.round((o.count / total) * 100) : 0}
            />
          ))}
        </div>
      </div>

      {/* Updates */}
      <div className="flex flex-col flex-1 pr-3 py-5 gap-3">
        <h4 className="font-normal text-black mb-3">Updates</h4>

        {/* composer */}
        <div className="flex items-center gap-0 mb-2">
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

          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            className="flex-1 text-sm md:text-base resize-none h-12 pl-3 ml-4 py-3 bg-ghost-white focus:outline-none placeholder-dark-silver"
            rows={1}
            placeholder="Write your update here..."
          />
          <button
            onClick={handleSend}
            disabled={!newPost.trim() && !uploads.img && !uploads.file}
            className="w-fit px-4 py-3 md:py-0 h-full flex items-center justify-center bg-brand rounded-r-lg"
          >
            <SendButtonIcon className="w-5 h-5" />
          </button>
        </div>

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
              <div className="bg-gray-100 px-2 py-1 rounded text-xs text-dim-gray">
                {uploads.file}
              </div>
            )}
          </div>
        )}

        {updates.map((u, idx) => {
          const staticAvatar = pickAvatar(idx + 1);
          const imageAttachments = u.attachments.filter(
            (a) => a.type === "image"
          );
          return (
            <div
              key={u.id}
              className="py-4 mb-2 border-b-[1px] border-light-silver lg:border-0"
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={staticAvatar}
                  alt={u.author.name}
                  className="w-10 h-10 rounded-full object-cover bg-profile-pink"
                />
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-base">
                    {u.author.name}
                  </span>
                  {u.author.role && (
                    <span className="text-dark-silver text-sm">
                      {u.author.role}
                    </span>
                  )}
                </div>
              </div>

              <div className="my-3 text-sm md:text-base leading-relaxed">
                {u.postText}
              </div>

              {/* Always render local static images for any image attachments */}
              {imageAttachments.map((_, j) => (
                <img
                  key={`${u.id}-img-${j}`}
                  src={pickPostImage(j)}
                  alt={_.title ?? "update"}
                  className="w-full rounded-xl mt-1 mb-2 object-cover max-h-[320px]"
                />
              ))}

              <div className="flex gap-2 items-center text-xs mt-3">
                <button className="flex items-center gap-1 bg-alabaster p-2 cursor-pointer">
                  <EditPenIcon className="w-5 h-5" />
                </button>
                <button className="flex items-center gap-1 bg-alabaster p-2 cursor-pointer">
                  <CalIcon className="w-5 h-5" />
                </button>
                <span className="flex items-center text-xs md:text-sm text-dark-silver">
                  {u.postedAt}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpdatesAndVotes;
