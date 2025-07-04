import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCards } from "swiper/modules";

import leftImage from "../../assets/images/left.png";
import rightTopImage from "../../assets/images/right-top.png";
import rightBottomImage from "../../assets/images/right-bottom.png";
import ArrowIcon from "../../assets/icons/top-right-arrow.svg?react";
import Tag from "../common/Tag";
import { Link } from "react-router-dom";

type Post = {
  author: string;
  date: string;
  title: string;
  excerpt: string;
  categories: readonly string[];
  tags: readonly string[];
  image: string;
};

const featured: Post = {
  author: "Olivia Rhye",
  date: "24 March 2024",
  title: "UX review presentations",
  excerpt:
    "How do you create compelling presentations that wow your colleagues and impress your managers?",
  categories: ["Management", "Research"],
  tags: ["Design"],
  image: leftImage,
};

const smallPosts: Post[] = [
  {
    author: "Phoenix Baker",
    date: "24 March 2024",
    title: "Migrating to Linear 101",
    excerpt:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    categories: ["Research"],
    tags: ["Product"],
    image: rightTopImage,
  },
  {
    author: "Lana Steiner",
    date: "24 March 2024",
    title: "Building Your API Stack",
    excerpt:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    categories: ["Leadership"],
    tags: ["Research"],
    image: rightBottomImage,
  },
];

// Combine all posts for the mobile swiper
const allPosts = [featured, ...smallPosts];

export default function RecentPosts() {
  return (
    <section className="space-y-3 ">
      <h3 className="text-gray-900 text-xl lg:text-2xl font-semibold">
        Recent blog posts
      </h3>

      {/* Desktop/Tablet Layout (md and up) */}
      <div className="hidden lg:grid grid-cols-2 gap-6 ">
        {/* Featured Post */}
        <article className="flex flex-col transition-transform duration-200 hover:-translate-y-1">
          <div>
            <img
              src={featured.image}
              alt=""
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
          <div className="py-6 flex flex-col space-y-2">
            <p className="font-semibold test-xs lg:text-sm text-brand">
              {featured.author} • {featured.date}
            </p>
            <div className="flex items-center justify-between">
              <h5 className="font-semibold">{featured.title}</h5>
              <Link
                to="/blog-post"
                aria-label="Read more"
                className="p-1 rounded hover:bg-[var(--color-white-smoke)] transition"
              >
                <ArrowIcon className="w-6 h-6 text-dim-gray" />
              </Link>
            </div>
            <p className="test-sm lg:text-base text-dark-silver mb-4">
              {featured.excerpt}
            </p>
            <div className="flex flex-wrap gap-2">
              {featured.categories.map((cat, idx) => (
                <Tag key={cat} colorIndex={idx}>
                  {cat}
                </Tag>
              ))}
              {featured.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        </article>

        <div className="flex flex-col space-y-6">
          {smallPosts.map((post, postIdx) => (
            <article
              key={post.title}
              className="flex items-stretch transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="max-w-1/2 min-w-1/2">
                <img
                  src={post.image}
                  alt=""
                  className="w-full h-full object-cover rounded-sm"
                />
              </div>
              <div className="flex flex-col flex-1 justify-between px-5 space-y-2">
                <p className="font-semibold test-xs lg:text-sm text-brand">
                  {post.author} • {post.date}
                </p>
                <h4 className="font-semibold text-base lg:text-lg">
                  {post.title}
                </h4>
                <p className="text-sm lg:text-base text-dark-silver overflow-hidden line-clamp-3 ">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((cat, idx) => (
                    <Tag key={cat} colorIndex={idx + postIdx * 2}>
                      {cat}
                    </Tag>
                  ))}
                  {post.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Mobile Swiper Layout */}
      <div className="block lg:hidden mb-4">
        <Swiper
          slidesPerView={1.1}
          // spaceBetween={14}
          style={{ paddingRight: "8px" }}
          // effect={"cards"}
          // grabCursor={true}
          // modules={[EffectCards]}
          spaceBetween={16}
          // slidesPerView={1}
        >
          {allPosts.map((post) => (
            <SwiperSlide key={post.title}>
              <article className="bg-white   flex flex-col">
                <img
                  src={post.image}
                  alt=""
                  className="w-full h-52 object-cover rounded-sm"
                />
                <div className="my-4 flex flex-col space-y-2">
                  <p className="font-medium text-[14px] text-brand">
                    {post.author} • {post.date}
                  </p>
                  <div className="flex items-center justify-between">
                    <h3 className="text-gray-900 text-lg font-semibold">
                      {post.title}
                    </h3>
                    <Link
                      to="/blog-post"
                      aria-label="Read more"
                      className="p-1 rounded hover:bg-[var(--color-white-smoke)] transition"
                    >
                      <ArrowIcon className="w-6 h-6 text-dim-gray" />
                    </Link>
                  </div>
                  <p className="text-dark-silver">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.categories.map((cat, cIdx) => (
                      <Tag key={cat} colorIndex={cIdx}>
                        {cat}
                      </Tag>
                    ))}
                    {post.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
