import React from "react";
import Tag from "../common/Tag";
import { Button } from "../common/Button";

interface Story {
  title: string;
  excerpt: string;
  author: string;
  role: string;
  categories: string[];
  tags: string[];
}

const STORIES: Story[] = [
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    excerpt:
      "Commodo in tempor pellentesque dapibus cras feugiat pharetra. Diam in sed senectus adipiscing. Dignissim non cras posuere aliquet neque maecenas ullamcorper placerat mauris. Pharetra sagittis nascetur neque fringilla.",
    author: "Alicia Liu",
    role: "Engineering",
    categories: ["Research"],
    tags: ["Management", "Research", "Design"],
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    excerpt:
      "Commodo in tempor pellentesque dapibus cras feugiat pharetra. Diam in sed senectus adipiscing. Dignissim non cras posuere aliquet neque maecenas ullamcorper placerat mauris. Pharetra sagittis nascetur neque fringilla.",
    author: "Alicia Liu",
    role: "Engineering",
    categories: ["Design"],
    tags: ["Research", "Product", "Research"],
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    excerpt:
      "Commodo in tempor pellentesque dapibus cras feugiat pharetra. Diam in sed senectus adipiscing. Dignissim non cras posuere aliquet neque maecenas ullamcorper placerat mauris. Pharetra sagittis nascetur neque fringilla.",
    author: "Alicia Liu",
    role: "Engineering",
    categories: ["AI"],
    tags: ["Frameworks", "Presentation", "Design"],
  },
];

const Stories: React.FC = () => (
  <section className="flex flex-col h-full">
    {/* Subscribe Section (always visible) */}
    <div className="min-h-[40%] w-full px-2 py-4 space-y-4 overflow-hidden flex flex-col items-center">
      <h2 className="text-4xl text-center w-3/4 font-semibold text-gray-900">
        Stories and interviews
      </h2>
      <p className="text-lg font-normal w-11/12 text-dark-silver text-center">
        Subscribe to learn about new product features, the latest in technology,
        solutions, and updates.
      </p>
      <div className="w-3/4 lg:w-full flex flex-col justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] placeholder-gray-500"
        />
        <Button variant="primary" size="md" fullWidth className="mt-4">
          Subscribe
        </Button>
      </div>
      <div className="w-full">
        <p className="text-sm font-normal text-dark-silver">
          We care about your data in our{" "}
          <a href="/privacy-policy" className="underline">
            privacy policy
          </a>
          .
        </p>
      </div>
      <hr className="border-gray-200" />
    </div>

    {/* WORLD NEWS badge (hidden on mobile/tablet) */}
    <div className="px-2 h-fit w-fit hidden lg:block">
      <span className="text-[12px] font-[400] bg-brand px-[12px] py-[5px] text-white rounded-lg w-fit">
        WORLD NEWS
      </span>
    </div>

    {/* Stories List (hidden on mobile/tablet) */}
    <div className="flex-1 space-y-6 px-4 mt-4 overflow-y-auto w-full border-l-[1px] border-gray-300 hidden lg:block">
      {STORIES.map((story, idx) => (
        <article
          key={idx}
          className="space-y-2 pb-3 border-b-[1px] border-gray-300"
        >
          <h3 className="text-base font-normal text-gray-900">{story.title}</h3>
          <p className="text-xs font-normal text-dark-silver leading-relaxed">
            {story.excerpt}
          </p>
          <p className="text-xs text-dim-gray">
            {story.author} &#8226; {story.role}
          </p>
          <div className="flex flex-wrap gap-2">
            {story.categories.map((cat) => (
              <Tag key={cat} colorIndex={idx} small={true}>
                {cat}
              </Tag>
            ))}
            {story.tags.map((tag) => (
              <Tag key={tag} small={true}>
                {tag}
              </Tag>
            ))}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Stories;
