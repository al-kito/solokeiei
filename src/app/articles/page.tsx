import Link from "next/link";
import { getPosts } from "@/lib/microcms";
export const revalidate = 60;

export default async function ArticlesPage() {
  const posts = await getPosts();

  return (
    <main className="space-y-6">
      <h1 className="text-2xl font-bold">記事一覧</h1>

      <div className="space-y-4">
        {posts.map((post) => (
          <article key={post.id} className="rounded-xl border border-zinc-200 p-4">
            <p className="text-sm text-zinc-500">{post.topic?.name}</p>
            <h2 className="mt-1 text-lg font-semibold">
              <Link href={`/articles/${post.slug}`}>{post.title}</Link>
            </h2>
            {post.excerpt ? (
              <p className="mt-2 text-zinc-700 leading-7">{post.excerpt}</p>
            ) : null}
          </article>
        ))}
      </div>
    </main>
  );
}
