import { getPaginatedPosts } from "@/lib/blog";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BlogList from "@/components/blog-list";

export const metadata = {
  title: "部落格 | 牧牧教練 Mumu Coach",
  description: "健身知識、孕婦運動指南、訓練技巧，牧牧教練的專業分享。",
};

export default function BlogPage() {
  const { posts, totalPages } = getPaginatedPosts(1);

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16 px-6 min-h-screen">
        <BlogList posts={posts} currentPage={1} totalPages={totalPages} />
      </main>
      <Footer />
    </>
  );
}
