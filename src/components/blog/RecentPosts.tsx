import { Swiper, SwiperSlide } from "swiper/react";
import ArrowIcon from "../../assets/icons/top-right-arrow.svg?react";
import Tag from "../common/Tag";
import { Link } from "react-router-dom";
import type { RecentPostsModel } from "../../models/blog";
import { resolveImage } from "../../assets/images";

export default function RecentPosts({ data }: { data: RecentPostsModel }) {
  const featured = data.primary;
  const smallPosts = data.sidebar;
  const allPosts = [featured, ...smallPosts];

  return (
    <section className="space-y-3">
      <h3 className="ui-text-primary text-xl lg:text-2xl font-semibold">
        {data.title}
      </h3>

      {/* Desktop */}
      <div className="hidden lg:grid grid-cols-2 gap-6">
        <Link to={`/blog/${featured.id}`} aria-label="Read more">
          <article className="flex flex-col transition-transform duration-200 hover:-translate-y-1">
            <img
              src={resolveImage(featured.image)}
              alt={featured.title}
              className="w-full h-full object-cover rounded-sm"
            />
            <div className="py-6 flex flex-col space-y-2">
              <p className="font-semibold test-xs lg:text-sm text-brand">
                {featured.author} • {featured.publishedAt}
              </p>
              <div className="flex items-center justify-between">
                <h5 className="font-semibold">{featured.title}</h5>
                <ArrowIcon className="w-6 h-6 text-dim-gray" />
              </div>
              <p className="test-sm lg:text-base text-dark-silver mb-4">
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {featured.topics.map((t, idx) => (
                  <Tag key={t.value} colorIndex={idx}>
                    {t.value}
                  </Tag>
                ))}
                {featured.tags.map((t) => (
                  <Tag key={t.value}>{t.value}</Tag>
                ))}
              </div>
            </div>
          </article>
        </Link>

        <div className="flex flex-col space-y-6">
          {smallPosts.map((post, postIdx) => (
            <Link to={`/blog/${post.id}`} key={post.id} aria-label="Read more">
              <article className="flex items-stretch transition-transform duration-200 hover:-translate-y-1">
                <div className="max-w-1/2 min-w-1/2">
                  <img
                    src={resolveImage(post.image)}
                    alt={post.title}
                    className="w-full h-full object-cover rounded-sm"
                  />
                </div>
                <div className="flex flex-col flex-1 justify-between px-5 space-y-2">
                  <p className="font-semibold test-xs lg:text-sm text-brand">
                    {post.author} • {post.publishedAt}
                  </p>
                  <h4 className="font-semibold text-base lg:text-lg">
                    {post.title}
                  </h4>
                  <p className="text-sm lg:text-base text-dark-silver overflow-hidden line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.topics.map((t, idx) => (
                      <Tag
                        key={`${post.id}-top-${idx}`}
                        colorIndex={idx + postIdx * 2}
                      >
                        {t.value}
                      </Tag>
                    ))}
                    {post.tags.map((t, i) => (
                      <Tag key={`${post.id}-tag-${i}`}>{t.value}</Tag>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="block lg:hidden mb-4">
        <Swiper
          slidesPerView={1.1}
          spaceBetween={16}
          style={{ paddingRight: "8px" }}
        >
          {allPosts.map((post) => (
            <SwiperSlide key={post.id}>
              <article className="ui-surface flex flex-col">
                <img
                  src={resolveImage(post.image)}
                  alt={post.title}
                  className="w-full h-52 object-cover rounded-sm"
                />
                <div className="my-4 flex flex-col space-y-2">
                  <p className="font-medium text-[14px] text-brand">
                    {post.author} • {post.publishedAt}
                  </p>
                  <div className="flex items-center justify-between">
                    <h3 className="ui-text-primary text-lg font-semibold">
                      {post.title}
                    </h3>
                    <Link
                      to={`/blog/${post.id}`}
                      aria-label="Read more"
                      className="p-1 rounded hover:bg-ghost-white transition focus-ring"
                    >
                      <ArrowIcon className="w-6 h-6 text-dim-gray" />
                    </Link>
                  </div>
                  <p className="text-dark-silver">{post.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.topics.map((t, i) => (
                      <Tag key={`${post.id}-m-top-${i}`} colorIndex={i}>
                        {t.value}
                      </Tag>
                    ))}
                    {post.tags.map((t, i) => (
                      <Tag key={`${post.id}-m-tag-${i}`}>{t.value}</Tag>
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
