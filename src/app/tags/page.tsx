import { getAllTags } from "@/lib/blog";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "所有標籤 | 牧牧教練 Mumu Coach",
  description: "依照標籤瀏覽牧牧教練的部落格文章。",
};

export default function TagsPage() {
  const tags = getAllTags();
  const totalTags = tags.length;

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16 px-6 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-wide mb-2">
            所有標籤
          </h1>
          <p className="text-muted text-lg mb-10">
            共 {totalTags} 個標籤
          </p>

          <div className="flex flex-wrap gap-3">
            {tags.map(({ tag, count }) => (
              <Link
                key={tag}
                href={`/tags/${encodeURIComponent(tag)}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-card hover:border-primary hover:text-primary transition-all duration-200 cursor-pointer group"
              >
                <span className="text-primary font-medium">#</span>
                <span className="font-medium">{tag}</span>
                <span className="text-xs text-muted bg-background group-hover:bg-primary/5 px-2 py-0.5 rounded-full transition-colors">
                  {count}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
