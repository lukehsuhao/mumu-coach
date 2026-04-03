import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { getAllPosts } from "@/lib/blog";

export default function RelatedArticles({
  currentSlug,
  currentTags,
}: {
  currentSlug: string;
  currentTags: string[];
}) {
  const allPosts = getAllPosts();

  // Score each post by number of shared tags
  const scored = allPosts
    .filter((p) => p.slug !== currentSlug)
    .map((post) => {
      const shared = post.tags.filter((t) => currentTags.includes(t)).length;
      return { post, shared };
    })
    .filter((s) => s.shared > 0)
    .sort((a, b) => b.shared - a.shared)
    .slice(0, 3);

  if (scored.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t border-border">
      <h3 className="font-display text-xl font-bold tracking-wide mb-6">
        推薦閱讀
      </h3>
      <div className="grid gap-4">
        {scored.map(({ post }) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex gap-4 p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-sm transition-all duration-200"
          >
            <div className="flex-1 min-w-0">
              <p className="font-display font-bold group-hover:text-primary transition-colors duration-200 line-clamp-2">
                {post.title}
              </p>
              <p className="text-sm text-muted mt-1 line-clamp-1">
                {post.description}
              </p>
              <div className="flex items-center gap-3 mt-2 text-xs text-muted">
                <time>
                  {new Date(post.date).toLocaleDateString("zh-TW", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
                <span>{post.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
