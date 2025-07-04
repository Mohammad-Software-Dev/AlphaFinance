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
import { Link } from "react-router-dom";

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
    <section className="space-y-6 ">
      <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-dark-blue)]">
        All blog posts
      </h2>
      {/* Responsive grid: 1 col (mobile), 2 cols (md), 3 cols (lg) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {visiblePosts.map((post, idx) => (
          <article
            key={idx}
            className="flex flex-col space-y-3 transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
            <p className="font-semibold text-sm text-brand mt-3">
              {post.author} • {post.date}
            </p>
            <div className="flex items-start justify-between">
              <h5 className="font-semibold">{post.title}</h5>
              <Link
                to="/blog-post"
                aria-label="Read more"
                className="p-1 rounded hover:bg-[var(--color-white-smoke)] transition"
              >
                <ReadMoreIcon className="w-6 h-6 text-dim-gray" />
              </Link>
            </div>
            <p className="test-sm lg:text-base text-dark-silver mb-4">
              {post.excerpt}
            </p>
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
