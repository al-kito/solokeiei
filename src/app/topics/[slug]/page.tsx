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
      <header className="rounded-2xl border border-amber-200 bg-amber-50 px-6 py-8 sm:px-8">
        <div className="inline-flex rounded-full border border-amber-200 bg-white px-3 py-1 text-xs font-medium text-amber-700">
          Topic
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900">
          {topic.name}
        </h1>
        {topic.description ? (
          <p className="mt-2 text-sm leading-7 text-zinc-600">{topic.description}</p>
        ) : null}
        <p className="mt-3 text-xs text-amber-600">{posts.length}件の記事</p>
      </header>

      <div className="space-y-4">
        {posts.length === 0 ? (
          <p className="text-zinc-600">このカテゴリの記事はまだありません。</p>
        ) : (
          posts.map((post, index) => (
            <article
              key={post.id}
              className="rounded-2xl border border-zinc-200 bg-white p-6 transition hover:border-amber-300 hover:shadow-sm"
            >
              <div className="mb-3 flex items-center justify-between gap-4">
                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                  {topic.name}
                </span>
                <span className="text-xs font-medium text-amber-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h2 className="text-xl font-semibold leading-snug text-zinc-900">
                <Link
                  href={`/articles/${post.slug}`}
                  className="text-zinc-900 no-underline hover:underline"
                >
                  {post.title}
                </Link>
              </h2>

              {post.excerpt ? (
                <p className="mt-3 text-sm leading-7 text-zinc-700">{post.excerpt}</p>
              ) : null}

              {post.tags?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          ))
        )}
      </div>

      <div className="pt-4">
        <Link
          href="/articles"
          className="text-sm text-amber-600 underline decoration-amber-300 underline-offset-4 hover:decoration-amber-600"
        >
          ← 記事一覧に戻る
        </Link>
      </div>
    </main>
  );
}
