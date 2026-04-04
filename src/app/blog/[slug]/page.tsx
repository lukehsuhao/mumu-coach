import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import TableOfContents from "@/components/table-of-contents";
import BlogCtaSection from "@/components/blog-cta";
import RelatedArticles from "@/components/related-articles";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "找不到文章" };
  return {
    title: `${post.title} | 牧牧教練`,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-12">
            {/* Article */}
            <article className="max-w-3xl">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tags/${encodeURIComponent(tag)}`}
                    className="text-sm px-3 py-1 rounded-full border border-primary/20 text-primary hover:bg-primary/5 transition-colors duration-200 cursor-pointer"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              <h1 className="font-display text-3xl md:text-5xl font-bold tracking-wide leading-tight">
                {post.title}
              </h1>

              <div className="mt-4 flex items-center gap-4 text-sm text-muted">
                <span>{post.readTime}</span>
              </div>

              <hr className="my-8 border-border" />

              {/* Article body */}
              <div
                className="prose prose-lg max-w-none
                  prose-headings:font-display prose-headings:tracking-wide
                  prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-border prose-h2:pb-2
                  prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-foreground/80 prose-p:leading-relaxed prose-p:mb-4
                  prose-li:text-foreground/80
                  prose-strong:text-foreground
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-code:bg-primary/5 prose-code:text-primary prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
                  prose-pre:bg-dark-bg prose-pre:text-white/90 prose-pre:rounded-xl
                  prose-ul:my-4 prose-ol:my-4"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Related articles */}
              <RelatedArticles currentSlug={post.slug} currentTags={post.tags} />

              {/* CTA */}
              <BlogCtaSection cta={post.cta} />

              {/* Back link */}
              <div className="mt-12 pt-8 border-t border-border">
                <Link
                  href="/blog"
                  className="text-primary hover:underline font-medium cursor-pointer"
                >
                  ← 返回部落格
                </Link>
              </div>
            </article>

            {/* Sidebar TOC */}
            <aside className="hidden lg:block">
              <TableOfContents headings={post.headings} />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
