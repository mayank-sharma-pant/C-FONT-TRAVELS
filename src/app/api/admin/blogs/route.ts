import type { BlogPost } from "@/lib/data/blog";
import type { BlogDetail } from "@/lib/data/blog-details";
import { revalidatePublicContent } from "@/lib/admin/revalidate";
import { jsonError, jsonOk } from "@/lib/admin/api";
import {
  getStoredBlogDetails,
  getStoredBlogPosts,
  saveStoredBlogDetails,
  saveStoredBlogPosts,
} from "@/lib/store/content";

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function GET() {
  const posts = await getStoredBlogPosts();
  return jsonOk(posts);
}

export async function POST(request: Request) {
  const body = (await request.json()) as BlogPost & {
    detail?: BlogDetail;
  };

  if (!body.title?.trim()) {
    return jsonError("Title is required");
  }

  const posts = await getStoredBlogPosts();
  const slug = body.slug?.trim() || slugify(body.title);

  if (posts.some((post) => post.slug === slug)) {
    return jsonError("A blog with this slug already exists");
  }

  const post: BlogPost = {
    slug,
    title: body.title.trim(),
    excerpt: body.excerpt?.trim() || "",
    image: body.image?.trim() || "",
    category: body.category || "Travel Tips",
    author: body.author?.trim() || "C Font Travels Team",
    date: body.date?.trim() || new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    readTime: body.readTime?.trim() || "5 min read",
    featured: Boolean(body.featured),
  };

  if (post.featured) {
    posts.forEach((item) => {
      item.featured = false;
    });
  }

  posts.unshift(post);
  await saveStoredBlogPosts(posts);

  if (body.detail) {
    const details = await getStoredBlogDetails();
    details[slug] = body.detail;
    await saveStoredBlogDetails(details);
  }

  revalidatePublicContent();
  return jsonOk(post, 201);
}
