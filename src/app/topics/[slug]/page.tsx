import { notFound } from "next/navigation";
import { client } from "@/lib/microcms";

export const revalidate = 60;

type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  body: string;
  topic: {
    name: string;
    slug: string;
  };
};

async function getPostsByTopic(slug: string) {
  const data = await client.getList<Post>({
    endpoint: "posts",
    queries: {
      filters: `topic.slug[equals]${slug}`,
      orders: "-publishedAt",
      limit: 100,
    },
  });

  return data.contents;
}

export default async function TopicPage({
  params,
}: {
  params: { slug: string };
}) {
  const posts = await getPostsByTopic(params.slug);

  if (!posts.length) {
    notFound();
  }

  return (
    <main className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold">
          {posts[0].topic?.name}
        </h1>
      </header>

      <div className="space-y-4">
        {posts.map((post) => (
          <article key={post.id} className="border p-4 rounded-lg">
            <a href={`/articles/${post.slug}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
            </a>
            {post.excerpt && (
              <p className="text-zinc-600 mt-2">{post.excerpt}</p>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}
