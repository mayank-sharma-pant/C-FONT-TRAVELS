import Link from "next/link";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { DeleteButton } from "@/components/admin/delete-button";
import { getStoredBlogPosts } from "@/lib/store/content";
import { Button } from "@/components/ui/button";

export default async function AdminBlogsPage() {
  const blogs = await getStoredBlogPosts();

  return (
    <div className="px-4 py-8 sm:px-8">
      <AdminPageHeader
        title="Blogs"
        description="Manage blog articles shown on the website."
        action={
          <Button asChild>
            <Link href="/admin/blogs/new">Add Blog</Link>
          </Button>
        }
      />

      <div className="overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border/60 bg-cream/50">
            <tr>
              <th className="px-4 py-3 font-medium">Title</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Featured</th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.slug} className="border-b border-border/40 last:border-0">
                <td className="px-4 py-4">
                  <p className="font-medium text-navy">{blog.title}</p>
                  <p className="text-xs text-muted-foreground">{blog.slug}</p>
                </td>
                <td className="px-4 py-4">{blog.category}</td>
                <td className="px-4 py-4">{blog.featured ? "Yes" : "No"}</td>
                <td className="px-4 py-4">
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/admin/blogs/${blog.slug}/edit`}>Edit</Link>
                    </Button>
                    <DeleteButton
                      label={blog.title}
                      endpoint={`/api/admin/blogs/${blog.slug}`}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
