import Link from "next/link";
import { getPosts } from "@/lib/microcms";

export const revalidate = 60;

export const metadata = {
  title: "記事一覧",
  description: "一人で働くこと、法人化、利益率、採用しない経営について発信しています。",
};

export default async function ArticlesPage() {
  const posts = await getPosts();

  return (
    <main className="space-y-8">
      <header className="space-y-2 border-b border-zinc-200 pb-6">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">記事一覧</h1>
        <p className="text-sm text-zinc-600">
          一人で働くこと、法人化、利益率、採用しない経営について発信しています。
        </p>
      </header>

      <div className="space-y-4">
        {posts.map((post, index) => (
          <article
            key={post.id}
            className="rounded-2xl border border-zinc-200 bg-white p-6 transition hover:border-amber-300 hover:shadow-sm"
          >
            <div className="mb-3 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {post.topic?.slug ? (
                  <Link
                    href={`/topics/${post.topic.slug}`}
                    className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 no-underline transition hover:bg-amber-100"
                  >
                    {post.topic.name}
                  </Link>
                ) : post.topic?.name ? (
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                    {post.topic.name}
                  </span>
                ) : null}
              </div>

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
        ))}
      </div>
    </main>
  );
}
