export type TagTopicModel = { type: string | null; value: string };

export type PostModel = {
  id: string;
  title: string;
  author: string;
  publishedAt: string;
  description: string;
  image: string;
  tags: TagTopicModel[];
  topics: TagTopicModel[];
};

export type RecentPostsModel = {
  title: string;
  primary: PostModel;
  sidebar: PostModel[];
};

export type AllPostsModel = {
  title: string;
  items: PostModel[];
};

export type SubscribeModel = {
  title: string;
  subtitle: string;
  placeholder: string;
  ctaLabel: string;
  privacy: { text: string; href: string };
};

export type WorldNewsItemModel = {
  id: string;
  title: string;
  description: string;
  author: { name: string; role: string };
  tags: TagTopicModel[];
  topics: TagTopicModel[];
  publishedAt: string;
};

export type WorldNewsModel = {
  sectionLabel: string;
  items: WorldNewsItemModel[];
};

export type BlogModel = {
  recentPosts: RecentPostsModel;
  allPosts: AllPostsModel;
  subscribe: SubscribeModel;
  worldNews: WorldNewsModel;
};
