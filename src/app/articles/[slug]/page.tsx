import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "@/lib/microcms";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function ArticleDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="space-y-12">
      <article className="space-y-10">
        <header className="rounded-3xl border border-zinc-200 bg-white px-6 py-8 sm:px-8 sm:py-10">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500">
              {post.topic?.slug ? (
                <Link
                  href={`/topics/${post.topic.slug}`}
                  className="rounded-full bg-zinc-100 px-3 py-1 no-underline hover:bg-zinc-200"
                >
                  {post.topic.name}
                </Link>
              ) : null}

              {post.tags?.length ? (
                <div className="flex flex-wrap gap-2">
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
            </div>

            <h1 className="text-3xl font-semibold leading-tight text-zinc-900 sm:text-4xl">
              {post.title}
            </h1>

            {post.excerpt ? (
              <p className="max-w-3xl text-base leading-8 text-zinc-700 sm:text-lg">
                {post.excerpt}
              </p>
            ) : null}
          </div>
        </header>

        <div className="rounded-3xl border border-zinc-200 bg-white px-6 py-8 sm:px-8 sm:py-10">
          <div
            className="
              max-w-none
              [&_p]:my-5
              [&_p]:leading-8
              [&_p]:text-zinc-700
              [&_ul]:my-6
              [&_ul]:list-disc
              [&_ul]:pl-6
              [&_ol]:my-6
              [&_ol]:list-decimal
              [&_ol]:pl-6
              [&_li]:my-2
              [&_li]:leading-8
              [&_strong]:font-semibold
              [&_strong]:text-zinc-900
              [&_a]:text-zinc-900
              [&_a]:underline
              [&_a]:decoration-zinc-300
              [&_a]:underline-offset-4
              [&_blockquote]:my-8
              [&_blockquote]:border-l-4
              [&_blockquote]:border-zinc-300
              [&_blockquote]:bg-zinc-50
              [&_blockquote]:px-5
              [&_blockquote]:py-4
              [&_blockquote]:text-zinc-700
              [&_blockquote]:rounded-r-2xl
              [&_h2]:mt-14
              [&_h2]:mb-6
              [&_h2]:border-b
              [&_h2]:border-zinc-200
              [&_h2]:pb-3
              [&_h2]:text-2xl
              [&_h2]:font-bold
              [&_h2]:leading-tight
              [&_h2]:text-zinc-900
              [&_h3]:mt-10
              [&_h3]:mb-4
              [&_h3]:border-l-4
              [&_h3]:border-zinc-300
              [&_h3]:pl-3
              [&_h3]:text-xl
              [&_h3]:font-semibold
              [&_h3]:leading-snug
              [&_h3]:text-zinc-800
              [&_hr]:my-10
              [&_hr]:border-zinc-200
            "
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </div>
      </article>

      <section className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/articles"
          className="rounded-3xl border border-zinc-200 bg-white p-6 no-underline transition hover:border-zinc-900 hover:shadow-sm"
        >
          <p className="text-sm text-zinc-500">Articles</p>
          <h2 className="mt-2 text-lg font-semibold text-zinc-900">
            記事一覧を見る
          </h2>
          <p className="mt-2 text-sm leading-7 text-zinc-600">
            最新記事や過去の記事をまとめて確認できます。
          </p>
        </Link>

        {post.topic?.slug ? (
          <Link
            href={`/topics/${post.topic.slug}`}
            className="rounded-3xl border border-zinc-200 bg-white p-6 no-underline transition hover:border-zinc-900 hover:shadow-sm"
          >
            <p className="text-sm text-zinc-500">Topic</p>
            <h2 className="mt-2 text-lg font-semibold text-zinc-900">
              {post.topic.name}の記事をもっと読む
            </h2>
            <p className="mt-2 text-sm leading-7 text-zinc-600">
              同じテーマの記事をまとめて読めます。
            </p>
          </Link>
        ) : null}
      </section>
    </main>
  );
}
