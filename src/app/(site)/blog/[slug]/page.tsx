import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogDetailView } from "@/components/blog/blog-detail-view";
import {
  getBlogDetailForPage,
  getBlogPostBySlug,
  getRelatedPosts,
  getStoredBlogPosts,
} from "@/lib/store/content";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getStoredBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

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
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const [detail, related] = await Promise.all([
    getBlogDetailForPage(slug),
    getRelatedPosts(slug, post.category),
  ]);

  return <BlogDetailView post={post} detail={detail} relatedPosts={related} />;
}
