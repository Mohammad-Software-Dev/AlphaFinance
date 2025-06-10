import React, { useState } from "react";
import ReadMoreIcon from "../../assets/icons/top-right-arrow.svg?react";
import Tag from "../common/Tag";
import blog1 from "../../assets/images/blog_1.png";
import blog2 from "../../assets/images/blog_2.png";
import blog3 from "../../assets/images/blog_3.png";
import blog4 from "../../assets/images/blog_4.png";
import blog5 from "../../assets/images/blog_5.png";
import blog6 from "../../assets/images/blog_6.png";
import Pagination from "../common/Pagination";
interface Post {
  image: string;
  author: string;
  date: string;
  title: string;
  excerpt: string;
  tags: string[];
  categories: string[];
}

const POSTS: Post[] = [
  {
    image: blog1,
    author: "Alec Whitten",
    date: "24 March 2024",
    title: "Bill Walsh leadership lessons",
    excerpt:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    tags: ["Product", "Research"],
    categories: ["Research"],
  },
  {
    image: blog2,
    author: "Demi Wilkinson",
    date: "24 March 2024",
    title: "PM mental models",
    excerpt:
      "Mental models are simple expressions of complex processes or relationships.",
    tags: ["Research", "Product", "Research"],
    categories: ["Product"],
  },
  {
    image: blog3,
    author: "Candice Wu",
    date: "24 March 2024",
    title: "What is Wireframing?",
    excerpt:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    tags: ["Frameworks", "Presentation", "Design"],
    categories: ["Product", "Design"],
  },
  {
    image: blog4,
    author: "Natali Craig",
    date: "24 March 2024",
    title: "How collaboration makes us better designers",
    excerpt:
      "Collaboration can make our teams stronger, and our individual designs better.",
    tags: ["Research", "Product"],
    categories: ["Leadership"],
  },
  {
    image: blog5,
    author: "Drew Cano",
    date: "24 March 2024",
    title: "Our top 10 JavaScript frameworks to use",
    excerpt:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    tags: ["Research", "Product"],
    categories: ["Research"],
  },
  {
    image: blog6,
    author: "Orlando Diggs",
    date: "24 March 2024",
    title: "Podcast: Creating a better CX Community",
    excerpt:
      "Starting a community doesn’t need to be complicated, but how do you get started?",
    tags: ["Research", "Product"],
    categories: ["Leadership"],
  },
];

export const AllPosts: React.FC = () => {
  const [page, setPage] = useState(1);
  const totalPages = 10;
  const startIdx = (page - 1) * 6;
  const visiblePosts = POSTS.slice(startIdx, startIdx + 6);

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-[var(--color-dark-blue)]">
        All blog posts
      </h2>
      {/* 3-column grid */}
      <div className="grid grid-cols-3 gap-6">
        {visiblePosts.map((post, idx) => (
          <article key={idx} className="flex flex-col space-y-3">
            {/* Image */}
            <div className="h-48 w-full  overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Meta + read-more */}
            <p className=" mt-3 font-medium text-[14px] text-brand">
              {post.author} • {post.date}
            </p>
            <div className="flex items-start justify-between">
              {/* Title */}
              <h3 className="text-gray-900 text-[23px]">{post.title}</h3>
              <button
                aria-label="Read more"
                className="p-1 rounded hover:bg-[var(--color-white-smoke)] transition"
              >
                <ReadMoreIcon className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Excerpt */}
            <p className="text-gray-500 line-clamp-2">{post.excerpt}</p>

            {/* Tags */}
            <div className="mt-3 flex flex-wrap gap-2">
              {post.categories.map((cat, cIdx) => (
                <Tag key={cat} colorIndex={idx + cIdx}>
                  {cat}
                </Tag>
              ))}
              {post.tags.map((tag, tIdx) => (
                <Tag key={tIdx}>{tag}</Tag>
              ))}
            </div>
          </article>
        ))}
      </div>
      {/* Pagination */}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
        className="my-16"
      />
    </section>
  );
};

export default AllPosts;
