"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { BlogPost } from "@/lib/data/blog";
import type { BlogDetail } from "@/lib/data/blog-details";
import { blogCategories } from "@/lib/data/blog";
import { AdminField, adminInputClassName, adminTextareaClassName } from "@/components/admin/admin-field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const emptyDetail: BlogDetail = {
  introduction: "",
  sections: [{ heading: "", paragraphs: [""] }],
  tips: [""],
};

interface BlogFormProps {
  initialPost?: BlogPost;
  initialDetail?: BlogDetail;
  mode: "create" | "edit";
}

export function BlogForm({ initialPost, initialDetail, mode }: BlogFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [post, setPost] = useState<BlogPost>(
    initialPost || {
      slug: "",
      title: "",
      excerpt: "",
      image: "",
      category: "Travel Tips",
      author: "C Font Travels Team",
      date: "",
      readTime: "5 min read",
      featured: false,
    }
  );
  const [detailJson, setDetailJson] = useState(
    JSON.stringify(initialDetail || emptyDetail, null, 2)
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    let detail: BlogDetail;
    try {
      detail = JSON.parse(detailJson) as BlogDetail;
    } catch {
      setError("Article content JSON is invalid.");
      setLoading(false);
      return;
    }

    const url =
      mode === "create"
        ? "/api/admin/blogs"
        : `/api/admin/blogs/${initialPost?.slug}`;
    const method = mode === "create" ? "POST" : "PUT";

    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...post, detail }),
    });

    setLoading(false);

    if (!response.ok) {
      const data = (await response.json()) as { error?: string };
      setError(data.error || "Failed to save blog.");
      return;
    }

    router.push("/admin/blogs");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-border/60 bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <AdminField label="Title">
          <Input
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            required
          />
        </AdminField>
        <AdminField label="Slug">
          <Input
            value={post.slug}
            onChange={(e) => setPost({ ...post, slug: e.target.value })}
            placeholder="auto-generated-from-title"
          />
        </AdminField>
        <AdminField label="Category">
          <select
            value={post.category}
            onChange={(e) =>
              setPost({ ...post, category: e.target.value as BlogPost["category"] })
            }
            className={adminInputClassName}
          >
            {blogCategories
              .filter((item) => item.id !== "all")
              .map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
          </select>
        </AdminField>
        <AdminField label="Image URL">
          <Input
            value={post.image}
            onChange={(e) => setPost({ ...post, image: e.target.value })}
            required
          />
        </AdminField>
        <AdminField label="Author">
          <Input
            value={post.author}
            onChange={(e) => setPost({ ...post, author: e.target.value })}
          />
        </AdminField>
        <AdminField label="Date">
          <Input
            value={post.date}
            onChange={(e) => setPost({ ...post, date: e.target.value })}
          />
        </AdminField>
        <AdminField label="Read Time">
          <Input
            value={post.readTime}
            onChange={(e) => setPost({ ...post, readTime: e.target.value })}
          />
        </AdminField>
        <AdminField label="Featured">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={post.featured}
              onChange={(e) => setPost({ ...post, featured: e.target.checked })}
            />
            Mark as featured article
          </label>
        </AdminField>
      </div>

      <AdminField label="Excerpt">
        <textarea
          value={post.excerpt}
          onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
          rows={3}
          className={adminTextareaClassName}
          required
        />
      </AdminField>

      <AdminField label="Article Content (JSON)">
        <textarea
          value={detailJson}
          onChange={(e) => setDetailJson(e.target.value)}
          rows={16}
          className={`${adminTextareaClassName} font-mono text-xs`}
        />
      </AdminField>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <div className="flex gap-3">
        <Button type="submit" disabled={loading}>
          {loading ? "Saving..." : mode === "create" ? "Create Blog" : "Save Changes"}
        </Button>
        <Button asChild variant="outline">
          <Link href="/admin/blogs">Cancel</Link>
        </Button>
      </div>
    </form>
  );
}
