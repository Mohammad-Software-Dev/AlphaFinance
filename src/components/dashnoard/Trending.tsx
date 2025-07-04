import React from "react";

import rightTopImage from "../../assets/images/right-top.png";
import rightBottomImage from "../../assets/images/right-bottom.png";
import Tag from "../common/Tag";

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
    <h4 className="font-medium md:font-normal mb-6">Trending This Week</h4>

    <div className="flex flex-col space-y-6 max-h-[87vh]  overflow-auto">
      {smallPosts.map((post, postIdx) => (
        <article key={post.title} className="flex items-stretch">
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
            <h4 className="font-semibold text-base lg:text-lg">{post.title}</h4>
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
);

export default Trending;
