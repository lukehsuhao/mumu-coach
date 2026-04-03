import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import { Tag } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "部落格 | 牧牧教練 Mumu Coach",
  description: "健身知識、孕婦運動指南、飲食建議，牧牧教練的專業分享。",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16 px-6 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold tracking-wide mb-2">
                部落格
              </h1>
              <p className="text-muted text-lg">
                健身知識、訓練技巧、飲食建議，都在這裡。
              </p>
            </div>
            <Link
              href="/tags"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-medium hover:border-primary hover:text-primary transition-colors duration-200 cursor-pointer shrink-0"
            >
              <Tag size={14} />
              所有標籤
            </Link>
          </div>

          {/* Posts list */}
          <div className="space-y-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <article className="bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-200">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full border border-primary/20 text-primary"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="font-display text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors duration-200">
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
