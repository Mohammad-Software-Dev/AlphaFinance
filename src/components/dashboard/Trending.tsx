import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import Tag from "../common/Tag";
import { useBlog } from "../../hooks/useBlog";
import { resolveImage } from "../../assets/images";
import type { PostModel } from "../../models/blog";

const Trending: React.FC = () => {
  const { data, isLoading, error } = useBlog();

  if (isLoading) {
    return <div className="py-4 ui-text-muted">Loading trending posts...</div>;
  }

  if (error || !data) {
    return <div className="py-4 text-red-600">Unable to load trending posts.</div>;
  }

  const posts: PostModel[] = [
    data.recentPosts.primary,
    ...data.recentPosts.sidebar,
    ...data.allPosts.items.slice(0, 5),
  ];

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium md:font-normal">Trending This Week</h4>
        <Link to="/blog" className="text-sm text-brand underline focus-ring rounded-sm">
          View all
        </Link>
      </div>

      <div className="w-full hidden lg:block">
        <Swiper
          direction="vertical"
          slidesPerView={4.6}
          spaceBetween={24}
          style={{ height: "890px" }}
          className="rounded"
        >
          {posts.map((post, postIdx) => (
            <SwiperSlide key={`${post.id}-${postIdx}`}>
              <Link to={`/blog/${post.id}`} className="block group focus-ring rounded-sm">
                <article className="flex items-stretch max-h-[175px]">
                  <div className="max-w-1/2">
                    <img
                      src={resolveImage(post.image)}
                      alt={post.title}
                      className="h-full w-full object-cover rounded-sm"
                    />
                  </div>
                  <div className="flex flex-col flex-1 justify-between pl-5 space-y-2">
                    <p className="font-semibold text-xs lg:text-sm text-brand">
                      {post.author} • {post.publishedAt}
                    </p>
                    <h4 className="font-semibold text-base lg:text-lg line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-sm lg:text-base text-dark-silver overflow-hidden line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.topics.map((topic, idx) => (
                        <Tag key={`${post.id}-topic-${idx}`} colorIndex={idx + postIdx * 2}>
                          {topic.value}
                        </Tag>
                      ))}
                      {post.tags.map((tag, idx) => (
                        <Tag key={`${post.id}-tag-${idx}`}>{tag.value}</Tag>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full lg:hidden">
        <Swiper
          slidesPerView="auto"
          spaceBetween={24}
          style={{ width: "100%" }}
          className="rounded"
        >
          {posts.map((post, postIdx) => (
            <SwiperSlide key={`mobile-${post.id}-${postIdx}`} className="max-w-[80vw]">
              <Link to={`/blog/${post.id}`} className="block group focus-ring rounded-sm">
                <article className="hidden sm:flex items-stretch max-h-[175px]">
                  <div className="max-w-1/2">
                    <img
                      src={resolveImage(post.image)}
                      alt={post.title}
                      className="h-full w-full object-cover rounded-sm"
                    />
                  </div>
                  <div className="flex flex-col flex-1 justify-between pl-5 space-y-2">
                    <p className="font-semibold text-xs lg:text-sm text-brand">
                      {post.author} • {post.publishedAt}
                    </p>
                    <h4 className="font-semibold text-base lg:text-lg line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-sm lg:text-base text-dark-silver overflow-hidden line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.topics.map((topic, idx) => (
                        <Tag key={`${post.id}-mobile-topic-${idx}`} colorIndex={idx + postIdx * 2}>
                          {topic.value}
                        </Tag>
                      ))}
                      {post.tags.map((tag, idx) => (
                        <Tag key={`${post.id}-mobile-tag-${idx}`}>{tag.value}</Tag>
                      ))}
                    </div>
                  </div>
                </article>
                <article className="flex flex-col sm:hidden items-stretch mb-2">
                  <div className="w-full">
                    <img
                      src={resolveImage(post.image)}
                      alt={post.title}
                      className="h-full w-full object-cover rounded-sm"
                    />
                  </div>
                  <div className="flex flex-col flex-1 justify-between py-3 space-y-2">
                    <p className="font-semibold text-xs lg:text-sm text-brand">
                      {post.author} • {post.publishedAt}
                    </p>
                    <h4 className="font-semibold text-base lg:text-lg line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-sm lg:text-base text-dark-silver overflow-hidden line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.topics.map((topic, idx) => (
                        <Tag key={`${post.id}-small-topic-${idx}`} colorIndex={idx + postIdx * 2}>
                          {topic.value}
                        </Tag>
                      ))}
                      {post.tags.map((tag, idx) => (
                        <Tag key={`${post.id}-small-tag-${idx}`}>{tag.value}</Tag>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Trending;

