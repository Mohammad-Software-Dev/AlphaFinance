import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Tag from "../common/Tag";
import rightTopImage from "../../assets/images/right-top.png";
import rightBottomImage from "../../assets/images/right-bottom.png";

type Post = {
  author: string;
  date: string;
  title: string;
  excerpt: string;
  categories: readonly string[];
  tags: readonly string[];
  image: string;
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

const Trending: React.FC = () => (
  <div className="flex flex-col ">
    <h4 className="font-medium md:font-normal mb-2">Trending This Week</h4>
    <div className="w-full hidden lg:block">
      <Swiper
        direction="vertical"
        slidesPerView={4.6}
        spaceBetween={24}
        style={{ height: "890px" }}
        className="rounded"
      >
        {smallPosts.map((post, postIdx) => (
          <SwiperSlide key={post.title}>
            <article className="flex items-stretch max-h-[175px]">
              <div className="max-w-1/2">
                <img
                  src={post.image}
                  alt=""
                  className="h-full w-full object-cover rounded-sm"
                />
              </div>
              <div className="flex flex-col flex-1 justify-between pl-5 space-y-2 ">
                <p className="font-semibold text-xs lg:text-sm text-brand">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className="w-full  lg:hidden">
      <Swiper
        slidesPerView="auto"
        spaceBetween={24}
        style={{ width: "100%" }}
        className="rounded"
      >
        {smallPosts.map((post, postIdx) => (
          <SwiperSlide key={post.title} className="max-w-[80vw]">
            <article className="hidden sm:flex items-stretch max-h-[175px]">
              <div className="max-w-1/2">
                <img
                  src={post.image}
                  alt=""
                  className="h-full w-full object-cover rounded-sm"
                />
              </div>
              <div className="flex flex-col flex-1 justify-between pl-5 space-y-2 ">
                <p className="font-semibold text-xs lg:text-sm text-brand">
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
            <article className="flex flex-col sm:hidden items-stretch mb-2">
              <div className="w-full">
                <img
                  src={post.image}
                  alt=""
                  className="h-full w-full object-cover rounded-sm"
                />
              </div>
              <div className="flex flex-col flex-1 justify-between py-3 space-y-2 ">
                <p className="font-semibold text-xs lg:text-sm text-brand">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);

export default Trending;
