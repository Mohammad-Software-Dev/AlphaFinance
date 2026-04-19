import React, { useState } from "react";
import ReadMoreIcon from "../../assets/icons/top-right-arrow.svg?react";
import Tag from "../common/Tag";
import { Link } from "react-router-dom";
import { Button } from "../common/Button";
import type { AllPostsModel, PostModel } from "../../models/blog";

import { resolveImage } from "../../assets/images";

export const AllPosts: React.FC<{ data: AllPostsModel }> = ({ data }) => {
  const [allPosts, setAllPosts] = useState<PostModel[]>(data.items);

  const handleLoadMore = () => setAllPosts((prev) => [...prev, ...data.items]);

  return (
    <section className="space-y-6">
      <h2 className="text-2xl lg:text-3xl font-semibold ui-text-primary">
        {data.title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {allPosts.map((post, idx) => (
          <Link
            to={`/blog/${post.id}`}
            aria-label="Read more"
            key={`${post.id}-${idx}`}
            className="focus-ring rounded-sm"
          >
            <article className="flex flex-col space-y-3 transition-transform duration-200 hover:-translate-y-1">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={resolveImage(post.image)}
                  alt={post.title}
                  className="w-full h-full object-cover rounded-sm"
                />
              </div>
              <p className="font-semibold text-sm text-brand mt-3">
                {post.author} • {post.publishedAt}
              </p>
              <div className="flex items-start justify-between">
                <h5 className="font-semibold">{post.title}</h5>
                <ReadMoreIcon className="w-6 h-6 text-dim-gray" />
              </div>
              <p className="test-sm lg:text-base text-dark-silver mb-4">
                {post.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {post.topics.map((t, cIdx) => (
                  <Tag key={`${post.id}-top-${cIdx}`} colorIndex={idx + cIdx}>
                    {t.value}
                  </Tag>
                ))}
                {post.tags.map((t, tIdx) => (
                  <Tag key={`${post.id}-tag-${tIdx}`}>{t.value}</Tag>
                ))}
              </div>
            </article>
          </Link>
        ))}
      </div>

      <div className="flex justify-start my-8">
        <Button variant="link" onClick={handleLoadMore}>
          Show more...
        </Button>
      </div>
    </section>
  );
};

export default AllPosts;
