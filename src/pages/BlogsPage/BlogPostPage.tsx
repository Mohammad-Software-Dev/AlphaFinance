import React, { useState } from "react";

import BlogsLayout from "../../components/blogs/BlogsLayout";
import SinglePost from "../../components/blogs/SinglePost";
import BulletRightArrowIcon from "../../assets/icons/bullet-arrow-right.svg?react";

import singleBlogImg from "../../assets/images/single_blog.png";
import rec1 from "../../assets/images/recommended_1.png";
import rec2 from "../../assets/images/recommended_2.png";
import rec3 from "../../assets/images/recommended_3.png";
import rec4 from "../../assets/images/recommended_4.png";

type Tab = "Following" | "Recommended";

const FILTERS = [
  "The Microsoft Copilot",
  "Cyber Security",
  "Technology",
  "AI",
  "General Topics",
  "Computers",
];

const RECOMMENDED_TOPICS = [
  "Technology",
  "Money",
  "Business",
  "Productivity",
  "Art",
  "Mindfulness",
  "Yada Yada",
];

const RECOMMENDED_FEED = [
  {
    image: rec1,
    title: "Gauging the Art Market’s Health",
    excerpt:
      "Auctions of Impressionist, modern and Surrealist art at Sotheby’s and Christie’s will be the first major test of buoyancy since the inauguration.",
  },
  {
    image: rec2,
    title: "Gauging the Art Market’s Health",
    excerpt:
      "Auctions of Impressionist, modern and Surrealist art at Sotheby’s and Christie’s will be the first major test of buoyancy since the inauguration.",
  },
  {
    image: rec3,
    title: "Gauging the Art Market’s Health",
    excerpt:
      "Auctions of Impressionist, modern and Surrealist art at Sotheby’s and Christie’s will be the first major test of buoyancy since the inauguration.",
  },
  {
    image: rec4,
    title: "Gauging the Art Market’s Health",
    excerpt:
      "Auctions of Impressionist, modern and Surrealist art at Sotheby’s and Christie’s will be the first major test of buoyancy since the inauguration.",
  },
];

const DUMMY_POST = {
  image: singleBlogImg,
  author: "Lana Steiner",
  date: "24 March 2024",
  categories: ["AI", "Management"],
  tags: ["Tutorial", "Deep Dive", "Research"],
  title: "Lorem ipsum dolor sit amet consectetur. Dolor mi vel pharetra.",
  content: [
    "Lorem ipsum dolor sit amet consectetur. Nam sociis aliquet vestibulum mi cursus sagittis cum. Arcu senectus felis quam lorem cras pellentesque ornare morbi.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  ],
  citation:
    'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
};

const BlogPostPage: React.FC = () => {
  const post = DUMMY_POST;

  const [activeTab, setActiveTab] = useState<Tab>("Recommended");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  return (
    <BlogsLayout>
      <div className="flex gap-x-8">
        {/* LEFT COLUMN: Filters / Topics / Tabs */}
        <aside className="w-3/11 space-y-8">
          {/* Filters */}
          <section className="space-y-2">
            <h5 className="text-xs font-semibold text-gray-900">Filter By</h5>
            <div className="divide-y divide-gray-200">
              {FILTERS.map((f) => (
                <div
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`
                    flex items-center gap-2 py-2 cursor-pointer
                    ${
                      activeFilter === f
                        ? "font-bold text-gray-900"
                        : "text-gray-700 hover:text-gray-900"
                    }
                  `}
                >
                  <BulletRightArrowIcon className="w-5 h-5 text-gray-400" />
                  <span className="text-sm">{f}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Recommended Topics */}
          <section className="space-y-2">
            <h5 className="text-sm font-medium text-gray-600">
              Recommended Topic
            </h5>
            <div className="flex flex-wrap gap-2">
              {RECOMMENDED_TOPICS.map((topic) => (
                <span
                  key={topic}
                  onClick={() => setActiveTopic(topic)}
                  className={`
                    cursor-pointer select-none
                    px-3 py-1 text-xs font-normal rounded-full
                    bg-color-white-smoke
                    border
                    ${
                      activeTopic === topic
                        ? " border-black text-gray-900 font-semibold"
                        : "  border-color-white-smoke text-gray-600"
                    }
                  `}
                >
                  {topic}
                </span>
              ))}
            </div>
          </section>

          {/* Following / Recommended Tabs + Feed */}
          <section className="space-y-4">
            {/* tabs */}
            <div className="flex gap-8 border-b border-gray-200">
              {(["Following", "Recommended"] as Tab[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={`
          pb-2 text-sm
          ${
            activeTab === t
              ? "text-gray-900 border-b-2 border-[var(--color-brand)]"
              : "text-gray-600"
          }
        `}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* feed */}
            <ul className="mt-4 space-y-6">
              {RECOMMENDED_FEED.map((item, i) => (
                <li key={i} className="flex  items-start gap-4">
                  <div className="min-w-1/3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full  object-cover rounded"
                    />
                  </div>

                  <div>
                    <h6 className="text-sm font-normal text-gray-900 leading-snug">
                      {item.title}
                    </h6>
                    <p className="mt-1 text-xs text-gray-600 line-clamp-2">
                      {item.excerpt}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </aside>

        {/* RIGHT COLUMN: Single Post */}
        <div className="flex-1">
          <SinglePost post={post} />
        </div>
      </div>
    </BlogsLayout>
  );
};

export default BlogPostPage;
