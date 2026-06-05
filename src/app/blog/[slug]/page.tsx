import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogDetailView } from "@/components/blog/blog-detail-view";
import { getBlogDetail } from "@/lib/data/blog-details";
import { blogPosts, getBlogPost } from "@/lib/data/blog";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const detail = getBlogDetail(slug);

  return <BlogDetailView post={post} detail={detail} />;
}
