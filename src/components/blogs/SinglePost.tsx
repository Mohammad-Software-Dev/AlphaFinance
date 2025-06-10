import React from "react";
import Tag from "../common/Tag";

export interface SinglePostProps {
  post: {
    image: string;
    author: string;
    date: string;
    categories: string[];
    tags: string[];
    title: string;
    content: string[];
    citation?: string;
  };
}

const SinglePost: React.FC<SinglePostProps> = ({ post }) => (
  <article className="space-y-4 mb-18">
    <div className="w-full h-[400px] overflow-hidden rounded-lg">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="flex items-center flex-wrap gap-2">
      <p className="font-medium text-[14px] text-brand">
        {post.author} • {post.date}
      </p>
      {post.categories.map((cat, i) => (
        <Tag key={cat} colorIndex={i}>
          {cat}
        </Tag>
      ))}
      {post.tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </div>

    <h4 className=" text-gray-900">{post.title}</h4>

    <div className="space-y-0 text-base text-black-2 leading-relaxed">
      {post.content.map((para, i) => (
        <p key={i}>{para}</p>
      ))}
    </div>

    <h4 className=" text-gray-900">{post.citation}</h4>
    <div className="space-y-0 text-base text-black-2 leading-relaxed">
      {post.content.map((para, i) => (
        <p key={i}>{para}</p>
      ))}
    </div>

    <div className="w-full h-[400px] overflow-hidden rounded-lg">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="space-y-0 text-base text-black-2 leading-relaxed">
      {post.content.map((para, i) => (
        <p key={i}>{para}</p>
      ))}
    </div>
  </article>
);

export default SinglePost;
