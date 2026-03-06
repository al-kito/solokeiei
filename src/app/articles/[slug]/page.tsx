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
    <article className="space-y-6">
      <header className="space-y-3">
        <p className="text-sm text-zinc-500">{post.topic?.name}</p>
        <h1 className="text-3xl font-bold leading-tight">{post.title}</h1>
        {post.excerpt ? (
          <p className="text-zinc-700 leading-7">{post.excerpt}</p>
        ) : null}
      </header>

<div
  className="
    max-w-none
    [&_p]:my-5
    [&_p]:leading-8
    [&_p]:text-zinc-700
    [&_ul]:my-6
    [&_ul]:list-disc
    [&_ul]:pl-6
    [&_li]:my-2
    [&_li]:leading-8
    [&_strong]:text-zinc-900
    [&_h2]:mt-14
    [&_h2]:mb-6
    [&_h2]:rounded-xl
    [&_h2]:bg-zinc-100
    [&_h2]:px-4
    [&_h2]:py-3
    [&_h2]:text-2xl
    [&_h2]:font-bold
    [&_h2]:text-zinc-900
    [&_h3]:mt-10
    [&_h3]:mb-4
    [&_h3]:border-l-4
    [&_h3]:border-zinc-300
    [&_h3]:pl-3
    [&_h3]:text-xl
    [&_h3]:font-semibold
    [&_h3]:text-zinc-800
    [&_a]:text-zinc-900
    [&_a]:underline
    [&_a]:decoration-zinc-300
    [&_a]:underline-offset-4
  "
  dangerouslySetInnerHTML={{ __html: post.body }}
/>
    </article>
  );
}
