import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || "",
  apiKey: process.env.MICROCMS_API_KEY || "",
});

export type Topic = {
  id: string;
  name: string;
  slug: string;
  description?: string;
};

export type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  body: string;
  topic: Topic;
  status?: string[];
  tags?: string[];
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
};

export async function getPosts() {
  const data = await client.getList<Post>({
    endpoint: "posts",
    queries: {
      filters: "status[contains]published",
      orders: "-publishedAt",
      limit: 100,
    },
  });

  return data.contents;
}

export async function getPostBySlug(slug: string) {
  const data = await client.getList<Post>({
    endpoint: "posts",
    queries: {
      filters: `slug[equals]${slug}[and]status[contains]published`,
      limit: 1,
    },
  });

  return data.contents[0] || null;
}

export async function getTopics() {
  const data = await client.getList<Topic>({
    endpoint: "topics",
    queries: {
      limit: 100,
    },
  });

  return data.contents;
}

export async function getTopicBySlug(slug: string) {
  const data = await client.getList<Topic>({
    endpoint: "topics",
    queries: {
      filters: `slug[equals]${slug}`,
      limit: 1,
    },
  });

  return data.contents[0] || null;
}

export async function getPostsByTopicId(topicId: string) {
  const data = await client.getList<Post>({
    endpoint: "posts",
    queries: {
      filters: `topic[equals]${topicId}[and]status[contains]published`,
      orders: "-publishedAt",
      limit: 100,
    },
  });

  return data.contents;
}
