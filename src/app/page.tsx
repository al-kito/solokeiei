import Link from "next/link";
import { getPosts } from "@/lib/microcms";
export const revalidate = 60;

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="space-y-8">
      <section className="space-y-3">
        <p className="text-sm text-zinc-600">一人経営戦略</p>
        <h2 className="text-3xl font-bold">利益率を守る一人経営の戦略論</h2>
        <p className="text-zinc-700 leading-7">
          組織化は正解とは限らない。拡大しないことも戦略である。
          本メディアは、一人で経営し続けるという選択を、数字と構造で検証する場所です。
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">最新記事</h3>

        <div className="space-y-4">
          {posts.map((post) => (
            <article key={post.id} className="rounded-xl border border-zinc-200 p-4">
              <p className="text-sm text-zinc-500">{post.topic?.name}</p>
              <h4 className="mt-1 text-lg font-semibold">
                <Link href={`/articles/${post.slug}`}>{post.title}</Link>
              </h4>
              {post.excerpt ? (
                <p className="mt-2 text-zinc-700 leading-7">{post.excerpt}</p>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
