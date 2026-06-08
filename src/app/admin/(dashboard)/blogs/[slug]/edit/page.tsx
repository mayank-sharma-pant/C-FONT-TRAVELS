import { notFound } from "next/navigation";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { BlogForm } from "@/components/admin/blog-form";
import {
  getBlogDetailBySlug,
  getBlogPostBySlug,
} from "@/lib/store/content";

interface EditBlogPageProps {
  params: Promise<{ slug: string }>;
}

export default async function AdminEditBlogPage({ params }: EditBlogPageProps) {
  const { slug } = await params;
  const [post, detail] = await Promise.all([
    getBlogPostBySlug(slug),
    getBlogDetailBySlug(slug),
  ]);

  if (!post) notFound();

  return (
    <div className="px-4 py-8 sm:px-8">
      <AdminPageHeader
        title="Edit Blog"
        description={`Update "${post.title}".`}
      />
      <BlogForm mode="edit" initialPost={post} initialDetail={detail} />
    </div>
  );
}
