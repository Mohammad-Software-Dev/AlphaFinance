import React, { useMemo, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import BlogLayout from "../../components/blog/BlogLayout";
import SinglePost from "../../components/blog/SinglePost";
import BulletRightArrowIcon from "../../assets/icons/bullet-arrow-right.svg?react";
import FilterIcon from "../../assets/icons/filter.svg?react";
import rec1 from "../../assets/images/recommended_1.png";
import rec2 from "../../assets/images/recommended_2.png";
import rec3 from "../../assets/images/recommended_3.png";
import rec4 from "../../assets/images/recommended_4.png";
import { useBlog } from "../../hooks/useBlog";
import { resolveImage } from "../../assets/images";
import type { PostModel } from "../../models/blog";

type Tab = "Following" | "Recommended";

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M6 6l12 12M6 18L18 6"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

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

function toSinglePost(post: PostModel) {
  return {
    image: resolveImage(post.image),
    author: post.author,
    date: post.publishedAt,
    categories: post.topics.map((t) => t.value),
    tags: post.tags.map((t) => t.value),
    title: post.title,
    content: [
      post.description,
      `${post.title} - additional context for demo presentation view.`,
      "This article is sourced from the demo blog feed and rendered from route-driven post IDs.",
    ],
    citation: "Demo blog article",
  };
}

const BlogPostPage: React.FC = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const { data, isLoading, error } = useBlog();

  const [filtersOpen, setFiltersOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("Recommended");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  useEffect(() => {
    if (filtersOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [filtersOpen]);

  const post = useMemo(() => {
    if (!data || !blogId) return null;
    const all = [
      data.recentPosts.primary,
      ...data.recentPosts.sidebar,
      ...data.allPosts.items,
    ];
    return all.find((item) => item.id === blogId) ?? null;
  }, [data, blogId]);

  if (isLoading) return <div>Loading…</div>;
  if (error || !data)
    return <div className="text-red-600">{error?.message ?? "No data"}</div>;

  return (
    <>
      <button
        className="fixed bottom-6 right-6 z-60 lg:hidden bg-white border border-light-silver text-black p-3 rounded-full shadow-lg flex items-center justify-center"
        onClick={() => setFiltersOpen((open) => !open)}
        aria-label={filtersOpen ? "Close filters" : "Open filters"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {!filtersOpen ? (
            <motion.span
              key="filter"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              <FilterIcon className="w-6 h-6" />
            </motion.span>
          ) : (
            <motion.span
              key="x"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              <XIcon className="w-6 h-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      <BlogLayout>
        <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-8 w-full px-3 lg:px-0">
          {filtersOpen && (
            <div
              className="fixed inset-0 z-50 lg:hidden bg-black/30"
              onClick={() => setFiltersOpen(false)}
              aria-label="Close filters"
            />
          )}

          <aside
            className={`
              w-3/5 max-w-[420px] lg:w-4/12 lg:w-3/11
              space-y-8 order-2 lg:order-1
              fixed top-0 left-0 z-50 h-full bg-white
              rounded-tr-2xl rounded-br-2xl
              shadow-2xl border-r border-gray-100
              transition-transform duration-300
              ${filtersOpen ? "translate-x-0" : "-translate-x-full"}
              lg:static lg:translate-x-0 lg:h-auto lg:bg-transparent lg:shadow-none lg:rounded-none lg:border-none
            `}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 lg:hidden">
              <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
              <button
                className="p-2 rounded-full hover:bg-gray-100 focus:outline-none"
                onClick={() => setFiltersOpen(false)}
                aria-label="Close filters"
              >
                <svg className="w-6 h-6 text-dim-gray" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M6 6l12 12M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="px-6 pt-3 pb-6 lg:px-0 lg:pt-0 lg:pb-0 space-y-7 overflow-y-auto h-[calc(100vh-64px)] lg:h-auto">
              <section className="space-y-2">
                <h5 className="text-xs font-semibold text-gray-900">Filter By</h5>
                <div className="divide-y divide-gray-200">
                  {FILTERS.map((f) => (
                    <div
                      key={f}
                      onClick={() => setActiveFilter(f)}
                      className={`
                        flex items-center gap-2 py-2 cursor-pointer select-none
                        transition
                        ${
                          activeFilter === f
                            ? "font-bold text-gray-900"
                            : "text-dim-gray hover:text-gray-900"
                        }
                      `}
                    >
                      <BulletRightArrowIcon className="w-5 h-5 text-gray-400" />
                      <span className="text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-2">
                <h5 className="text-sm font-medium text-dim-gray">Recommended Topic</h5>
                <div className="flex flex-wrap gap-2">
                  {RECOMMENDED_TOPICS.map((topic) => (
                    <span
                      key={topic}
                      onClick={() => setActiveTopic(topic)}
                      className={`
                        cursor-pointer select-none
                        px-3 py-1 text-xs font-normal rounded-full
                        bg-color-white-smoke border
                        ${
                          activeTopic === topic
                            ? "border-black text-gray-900 font-semibold"
                            : "border-color-white-smoke text-dim-gray"
                        }
                      `}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </section>

              <section className="space-y-4">
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
                            : "text-dim-gray"
                        }
                      `}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                <ul className="mt-4 space-y-6">
                  {RECOMMENDED_FEED.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 transition-transform duration-200 hover:-translate-y-1"
                    >
                      <div className="min-w-1/3 w-20 sm:w-24 lg:w-full">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-normal text-gray-900 leading-snug">
                          {item.title}
                        </h6>
                        <p className="mt-1 text-xs text-dim-gray line-clamp-2">
                          {item.excerpt}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </aside>

          <section className="order-1 lg:order-2 w-full lg:w-8/12 lg:w-8/11">
            {post ? (
              <SinglePost post={toSinglePost(post)} />
            ) : (
              <div className="py-12 px-2">
                <h2 className="text-2xl font-semibold mb-2">Post not found</h2>
                <p className="text-dim-gray mb-4">
                  This blog article does not exist in the demo dataset.
                </p>
                <Link to="/blog" className="underline text-brand">
                  Back to blog list
                </Link>
              </div>
            )}
          </section>
        </div>
      </BlogLayout>
    </>
  );
};

export default BlogPostPage;
