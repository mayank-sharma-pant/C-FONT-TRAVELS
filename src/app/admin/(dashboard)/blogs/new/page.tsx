import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { BlogForm } from "@/components/admin/blog-form";

export default function AdminNewBlogPage() {
  return (
    <div className="px-4 py-8 sm:px-8">
      <AdminPageHeader
        title="Add Blog"
        description="Create a new blog article for the website."
      />
      <BlogForm mode="create" />
    </div>
  );
}
