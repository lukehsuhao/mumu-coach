import { getPaginatedPosts, getAllPosts, POSTS_PER_PAGE } from "@/lib/blog";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BlogList from "@/components/blog-list";

export function generateStaticParams() {
  const totalPages = Math.ceil(getAllPosts().length / POSTS_PER_PAGE);
  return Array.from({ length: totalPages }, (_, i) => ({
    page: String(i + 1),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page } = await params;
  return {
    title: `部落格 第 ${page} 頁 | 牧牧教練 Mumu Coach`,
    description: "健身知識、孕婦運動指南，牧牧教練的專業分享。",
  };
}

export default async function BlogPaginatedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page: pageStr } = await params;
  const page = parseInt(pageStr, 10);
  if (isNaN(page) || page < 1) notFound();

  const { posts, totalPages, currentPage } = getPaginatedPosts(page);
  if (posts.length === 0) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16 px-6 min-h-screen">
        <BlogList posts={posts} currentPage={currentPage} totalPages={totalPages} />
      </main>
      <Footer />
    </>
  );
}
