import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getPostsByTopicId,
  getTopicBySlug,
  getTopics,
} from "@/lib/microcms";

export const revalidate = 60;

export async function generateStaticParams() {
  const topics = await getTopics();

  return topics.map((topic) => ({
    slug: topic.slug,
  }));
}

export default async function TopicPage({
  params,
}: {
  params: { slug: string };
}) {
  const topic = await getTopicBySlug(params.slug);

  if (!topic) {
    notFound();
  }

  const posts = await getPostsByTopicId(topic.id);

  return (
    <main className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">{topic.name}</h1>
        {topic.description ? (
          <p className="text-zinc-600">{topic.description}</p>
        ) : null}
      </header>

      <div className="space-y-4">
        {posts.length === 0 ? (
          <p className="text-zinc-600">このカテゴリの記事はまだありません。</p>
        ) : (
          posts.map((post) => (
            <article key={post.id} className="rounded-xl border border-zinc-200 p-4">
              <h2 className="text-xl font-semibold">
                <Link href={`/articles/${post.slug}`}>{post.title}</Link>
              </h2>
              {post.excerpt ? (
                <p className="mt-2 text-zinc-700">{post.excerpt}</p>
              ) : null}
            </article>
          ))
        )}
      </div>
    </main>
  );
}
