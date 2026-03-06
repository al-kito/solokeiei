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
        className="prose prose-zinc max-w-none"
        dangerouslySetInnerHTML={{ __html: post.body }}
      />
    </article>
  );
}
