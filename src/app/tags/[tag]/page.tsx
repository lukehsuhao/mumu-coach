import { getPostsByTag, getAllTags } from "@/lib/blog";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export async function generateStaticParams() {
  return getAllTags().map(({ tag }) => ({ tag: encodeURIComponent(tag) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  return {
    title: `#${decoded} 的文章 | 牧牧教練`,
    description: `瀏覽所有標記為 #${decoded} 的部落格文章`,
  };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const posts = getPostsByTag(decoded);

  if (posts.length === 0) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16 px-6 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/tags"
            className="text-sm text-muted hover:text-primary transition-colors cursor-pointer"
          >
            ← 所有標籤
          </Link>

          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-wide mt-4 mb-2">
            <span className="text-primary">#</span>
            {decoded}
          </h1>
          <p className="text-muted text-lg mb-10">
            共 {posts.length} 篇文章
          </p>

          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <article className="bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-200">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className={`text-xs px-2.5 py-1 rounded-full border ${
                          t === decoded
                            ? "border-primary bg-primary/5 text-primary font-medium"
                            : "border-primary/20 text-primary"
                        }`}
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <h2 className="font-display text-2xl font-bold group-hover:text-primary transition-colors duration-200">
                    {post.title}
                  </h2>

                  <p className="mt-2 text-muted leading-relaxed">
                    {post.description}
                  </p>

                  <div className="mt-4 flex items-center gap-4 text-sm text-muted">
                    <time>
                      {new Date(post.date).toLocaleDateString("zh-TW", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
