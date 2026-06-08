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

interface RouteProps {
  params: Promise<{ slug: string }>;
}

export async function PUT(request: Request, { params }: RouteProps) {
  const { slug } = await params;
  const body = (await request.json()) as BlogPost & {
    detail?: BlogDetail;
    newSlug?: string;
  };

  const posts = await getStoredBlogPosts();
  const index = posts.findIndex((post) => post.slug === slug);

  if (index === -1) {
    return jsonError("Blog not found", 404);
  }

  const nextSlug = body.newSlug?.trim() || body.slug?.trim() || slug;

  if (nextSlug !== slug && posts.some((post) => post.slug === nextSlug)) {
    return jsonError("Another blog already uses this slug");
  }

  const updated: BlogPost = {
    ...posts[index],
    ...body,
    slug: nextSlug,
    title: body.title?.trim() || posts[index].title,
    excerpt: body.excerpt?.trim() ?? posts[index].excerpt,
    image: body.image?.trim() ?? posts[index].image,
    author: body.author?.trim() ?? posts[index].author,
    date: body.date?.trim() ?? posts[index].date,
    readTime: body.readTime?.trim() ?? posts[index].readTime,
    featured: Boolean(body.featured),
  };

  if (updated.featured) {
    posts.forEach((item) => {
      if (item.slug !== slug) item.featured = false;
    });
  }

  posts[index] = updated;
  await saveStoredBlogPosts(posts);

  if (nextSlug !== slug) {
    const details = await getStoredBlogDetails();
    if (details[slug]) {
      details[nextSlug] = details[slug];
      delete details[slug];
      await saveStoredBlogDetails(details);
    }
  }

  if (body.detail) {
    const details = await getStoredBlogDetails();
    details[nextSlug] = body.detail;
    await saveStoredBlogDetails(details);
  }

  revalidatePublicContent();
  return jsonOk(updated);
}

export async function DELETE(_request: Request, { params }: RouteProps) {
  const { slug } = await params;
  const posts = await getStoredBlogPosts();
  const filtered = posts.filter((post) => post.slug !== slug);

  if (filtered.length === posts.length) {
    return jsonError("Blog not found", 404);
  }

  await saveStoredBlogPosts(filtered);

  const details = await getStoredBlogDetails();
  if (details[slug]) {
    delete details[slug];
    await saveStoredBlogDetails(details);
  }

  revalidatePublicContent();
  return jsonOk({ success: true });
}
