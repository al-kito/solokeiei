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
  status: "draft" | "review" | "published";
  tags?: string[];
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
};

export async function getPosts() {
  const data = await client.getList<Post>({
    endpoint: "posts",
    queries: {
      filters: "status[equals]published",
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
      filters: `slug[equals]${slug}[and]status[equals]published`,
      limit: 1,
    },
  });

  return data.contents[0] || null;
}
