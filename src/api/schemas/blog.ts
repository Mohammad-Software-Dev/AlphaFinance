import { z } from "zod";

export const TagTopicDto = z.object({
  type: z.string().nullable(),
  value: z.string(),
});

export const PostDto = z.object({
  id: z.string(),
  title: z.string(),
  author: z.string(),
  publishedAt: z.string(),
  description: z.string(),
  image: z.string(),
  tags: z.array(TagTopicDto),
  topics: z.array(TagTopicDto),
});

export const RecentPostsDto = z.object({
  title: z.string(),
  primary: PostDto,
  sidebar: z.array(PostDto),
});

export const AllPostsDto = z.object({
  title: z.string(),
  items: z.array(PostDto),
});

export const SubscribeDto = z.object({
  title: z.string(),
  subtitle: z.string(),
  placeholder: z.string(),
  ctaLabel: z.string(),
  privacy: z.object({
    text: z.string(),
    href: z.string(),
  }),
});

export const WorldNewsItemDto = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  author: z.object({ name: z.string(), role: z.string() }),
  tags: z.array(TagTopicDto),
  topics: z.array(TagTopicDto),
  publishedAt: z.string(),
});

export const WorldNewsDto = z.object({
  sectionLabel: z.string(),
  items: z.array(WorldNewsItemDto),
});

export const BlogDto = z.object({
  recentPosts: RecentPostsDto,
  allPosts: AllPostsDto,
  subscribe: SubscribeDto,
  worldNews: WorldNewsDto,
});

export type BlogDto = z.infer<typeof BlogDto>;
