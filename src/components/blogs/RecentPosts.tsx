import leftImage from "../../assets/images/left.png";
import rightTopImage from "../../assets/images/right-top.png";
import rightBottomImage from "../../assets/images/right-bottom.png";
import ArrowIcon from "../../assets/icons/top-right-arrow.svg?react";
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

export default function RecentPosts() {
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

  return (
    <section className="space-y-3">
      <h3 className="text-gray-900">Recent blog posts</h3>

      <div className="grid grid-cols-2 gap-6">
        {/* Left half: featured */}
        <article className="flex flex-col">
          {/* image */}
          <div className="">
            <img
              src={featured.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* content */}
          <div className="py-6 flex flex-col space-y-2">
            <p className="font-medium text-[14px] text-brand">
              {featured.author} • {featured.date}
            </p>

            <div className="flex items-center justify-between">
              <h3 className="text-gray-900">{featured.title}</h3>
              <button
                aria-label="Read more"
                className="p-1 rounded hover:bg-[var(--color-white-smoke)] transition"
              >
                <ArrowIcon className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <p className="text-gray-500">{featured.excerpt}</p>

            {/* categories (colored) first, then tags (gray-outline) */}
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

        {/* Right half: two small posts stacked */}
        <div className="flex flex-col space-y-7">
          {smallPosts.map((post, postIdx) => (
            <article key={post.title} className="flex items-stretch">
              <div className="max-w-1/2 min-w-1/2">
                <img
                  src={post.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col flex-1 justify-between px-5 space-y-2">
                <p className="font-medium text-[14px] text-brand">
                  {post.author} • {post.date}
                </p>
                <h4 className="text-gray-900">{post.title}</h4>
                <p className="text-gray-500 overflow-hidden line-clamp-3">
                  {post.excerpt}
                </p>

                {/* same pattern: categories colored, tags outline */}
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((cat, idx) => (
                    // offset index by e.g. postIdx*2 to vary the palette
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
    </section>
  );
}
