import React from "react";
import Tag from "../common/Tag";
import { Button } from "../common/Button";
import TextInput from "../common/TextInput";
import type { SubscribeModel, WorldNewsModel } from "../../models/blog";

type Props = {
  subscribe: SubscribeModel;
  worldNews: WorldNewsModel;
};

const Stories: React.FC<Props> = ({ subscribe, worldNews }) => (
  <section className="flex flex-col h-full">
    {/* Subscribe */}
    <div className="min-h-[40%] w-full px-2 py-4 space-y-4 overflow-hidden flex flex-col items-center">
      <h4 className="md:text-2xl lg:text-4xl text-center w-3/4 font-semibold">
        {subscribe.title}
      </h4>
      <p className="text-sm md:text-base lg:text-lg font-normal w-11/12 text-dark-silver text-center">
        {subscribe.subtitle}
      </p>
      <div className="w-3/4 lg:w-full flex flex-col justify-center">
        <TextInput id="email" placeholder={subscribe.placeholder} type="text" />
        <Button
          variant="primary"
          size="md"
          fullWidth
          className="mt-4 text-xs md:text-sm"
        >
          {subscribe.ctaLabel}
        </Button>
      </div>
      <div className="w-full">
        <p className="text-sm font-normal text-dark-silver">
          {subscribe.privacy.text.split("privacy policy")[0]}
          <a href={subscribe.privacy.href} className="underline">
            privacy policy
          </a>
          .
        </p>
      </div>
      <hr className="border-gray-200" />
    </div>

    {/* WORLD NEWS badge */}
    <div className="px-2 h-fit w-fit hidden lg:block">
      <span className="text-[12px] font-[400] bg-brand px-[12px] py-[5px] text-white rounded-lg w-fit">
        {worldNews.sectionLabel}
      </span>
    </div>

    {/* Stories list */}
    <div className="flex-1 space-y-6 px-4 mt-4 overflow-y-auto w-full border-l-[1px] border-light-silver hidden lg:block">
      {worldNews.items.map((story, idx) => (
        <article
          key={story.id}
          className="space-y-2 pb-3 border-b-[1px] border-light-silver"
        >
          <h3 className="text-base font-normal mb-3">{story.title}</h3>
          <p className="text-sm font-normal text-dim-gray leading-relaxed">
            {story.description}
          </p>
          <p className="text-sm text-dim-gray my-3">
            {story.author.name} &#8226; {story.author.role}
          </p>
          <div className="flex flex-wrap gap-2">
            {story.topics.map((t, i) => (
              <Tag key={`${story.id}-top-${i}`} colorIndex={idx}>
                {t.value}
              </Tag>
            ))}
            {story.tags.map((t, i) => (
              <Tag key={`${story.id}-tag-${i}`} small>
                {t.value}
              </Tag>
            ))}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Stories;
