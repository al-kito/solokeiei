import Link from "next/link";
import { getPosts, getTopics } from "@/lib/microcms";

export const revalidate = 60;

export default async function Home() {
  const [posts, topics] = await Promise.all([getPosts(), getTopics()]);
  const latestPosts = posts.slice(0, 6);

  return (
    <main className="space-y-16">
      <section className="overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-stone-100 px-6 py-10 sm:px-10 sm:py-14">
        <div className="max-w-3xl space-y-5">
          <p className="text-sm tracking-wide text-zinc-500">solokeiei.jp</p>

          <h1 className="text-3xl font-semibold leading-tight text-zinc-900 sm:text-5xl">
            一人で働くことは、
            <br className="hidden sm:block" />
            不安定ではなく
            <br className="hidden sm:block" />
            「選択肢」を持つこと。
          </h1>

          <p className="max-w-2xl text-base leading-8 text-zinc-700 sm:text-lg">
            会社員、副業、フリーランス、法人化、一人社長。
            このメディアは、組織に依存しすぎず、小さく強く働くための選択肢を整理する場所です。
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/articles"
              className="rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white no-underline transition hover:bg-zinc-800"
            >
              記事一覧を見る
            </Link>
            <Link
              href="/why"
              className="rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-800 no-underline transition hover:border-zinc-900"
            >
              なぜこのメディアを作るのか
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
            テーマから探す
          </h2>
          <p className="mt-1 text-sm text-zinc-600">
            関心の近いテーマから読み進められるようにしています。
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              href={`/topics/${topic.slug}`}
              className="group rounded-2xl border border-zinc-200 bg-white p-5 no-underline transition hover:-translate-y-0.5 hover:border-zinc-900 hover:shadow-sm"
            >
              <div className="space-y-2">
                <div className="inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600">
                  Topic
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 group-hover:underline">
                  {topic.name}
                </h3>
                <p className="text-sm leading-7 text-zinc-600">
                  {topic.description || "このテーマの記事をまとめて読めます。"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
                最新記事
              </h2>
              <p className="mt-1 text-sm text-zinc-600">
                一人で働くこと、法人化、利益率、採用しない経営について発信しています。
              </p>
            </div>

            <Link
              href="/articles"
              className="text-sm text-zinc-600 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
            >
              すべて見る
            </Link>
          </div>

          <div className="space-y-4">
            {latestPosts.map((post) => (
              <article
                key={post.id}
                className="rounded-2xl border border-zinc-200 bg-white p-5 transition hover:border-zinc-900 hover:shadow-sm"
              >
                <div className="mb-2 flex items-center gap-2 text-sm text-zinc-500">
                  {post.topic?.slug ? (
                    <Link
                      href={`/topics/${post.topic.slug}`}
                      className="rounded-full bg-zinc-100 px-3 py-1 no-underline hover:bg-zinc-200"
                    >
                      {post.topic.name}
                    </Link>
                  ) : (
                    <span>{post.topic?.name}</span>
                  )}
                </div>

                <h3 className="text-xl font-semibold leading-snug">
                  <Link
                    href={`/articles/${post.slug}`}
                    className="text-zinc-900 no-underline hover:underline"
                  >
                    {post.title}
                  </Link>
                </h3>

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
        </div>

        <aside className="space-y-4">
          <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
            <p className="text-sm text-zinc-500">このメディアについて</p>
            <h2 className="mt-2 text-xl font-semibold leading-snug text-zinc-900">
              安定よりも、
              <br />
              選択肢を持てること。
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-700">
              会社員が悪いわけではありません。ただ、働き方の選択肢を持てることは、
              長い目で見ると大きな安心につながります。
            </p>
            <div className="mt-5">
              <Link
                href="/why"
                className="text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
              >
                whyページを読む
              </Link>
            </div>
          </section>

          <section className="rounded-2xl border border-zinc-200 bg-white p-6">
            <p className="text-sm text-zinc-500">おすすめの読み方</p>
            <ul className="mt-3 space-y-3 text-sm leading-7 text-zinc-700">
              <li>会社員から独立を考えている人は「法人化」から</li>
              <li>一人で経営を続けたい人は「採用しない構造」から</li>
              <li>利益を残したい人は「利益率・固定費」から</li>
            </ul>
          </section>
        </aside>
      </section>
    </main>
  );
}
