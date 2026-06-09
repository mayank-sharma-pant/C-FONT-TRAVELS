import type { BlogPost } from "@/lib/data/blog";
import { blogPosts as defaultBlogPosts } from "@/lib/data/blog";
import type { BlogDetail } from "@/lib/data/blog-details";
import { blogDetailsSeed, getBlogDetail } from "@/lib/data/blog-details";
import type { GalleryImage } from "@/lib/data/gallery";
import { galleryImages as defaultGalleryImages } from "@/lib/data/gallery";
import type { Destination } from "@/lib/data/destinations";
import { allDestinations as defaultDestinations, enrichDestination } from "@/lib/data/destinations";
import type { TourPackage } from "@/lib/data/packages";
import { tourPackages as defaultPackages } from "@/lib/data/packages";
import type { PackageDetail } from "@/lib/data/package-details";
import { getPackageDetail, packageDetails as defaultPackageDetails } from "@/lib/data/package-details";
import { readStore, storeFiles, writeStore } from "@/lib/store";

export async function getStoredBlogPosts() {
  return readStore<BlogPost[]>(storeFiles.blogs, () => defaultBlogPosts);
}

export async function saveStoredBlogPosts(posts: BlogPost[]) {
  await writeStore(storeFiles.blogs, posts);
}

export async function getStoredBlogDetails() {
  return readStore<Record<string, BlogDetail>>(
    storeFiles.blogDetails,
    () => blogDetailsSeed
  );
}

export async function saveStoredBlogDetails(details: Record<string, BlogDetail>) {
  await writeStore(storeFiles.blogDetails, details);
}

export async function getStoredGalleryImages() {
  return readStore<GalleryImage[]>(storeFiles.gallery, () => defaultGalleryImages);
}

export async function saveStoredGalleryImages(images: GalleryImage[]) {
  await writeStore(storeFiles.gallery, images);
}

export async function getStoredDestinations() {
  const destinations = await readStore<Destination[]>(
    storeFiles.destinations,
    () => defaultDestinations
  );
  return destinations.map(enrichDestination);
}

export async function saveStoredDestinations(destinations: Destination[]) {
  await writeStore(storeFiles.destinations, destinations);
}

export async function getStoredPackages() {
  return readStore<TourPackage[]>(storeFiles.packages, () => defaultPackages);
}

export async function saveStoredPackages(packages: TourPackage[]) {
  await writeStore(storeFiles.packages, packages);
}

export async function getStoredPackageDetails() {
  return readStore<Record<string, PackageDetail>>(
    storeFiles.packageDetails,
    () => defaultPackageDetails
  );
}

export async function saveStoredPackageDetails(details: Record<string, PackageDetail>) {
  await writeStore(storeFiles.packageDetails, details);
}

export async function getBlogPostBySlug(slug: string) {
  const posts = await getStoredBlogPosts();
  return posts.find((post) => post.slug === slug);
}

export async function getBlogDetailBySlug(slug: string) {
  const details = await getStoredBlogDetails();
  return details[slug];
}

export async function getPackageBySlug(slug: string) {
  const packages = await getStoredPackages();
  return packages.find((pkg) => pkg.slug === slug);
}

export async function getPackageDetailBySlug(slug: string) {
  const details = await getStoredPackageDetails();
  return details[slug];
}

export async function getFeaturedDestinations() {
  const destinations = await getStoredDestinations();
  return destinations.filter((d) => d.popular);
}

export async function getTrendingDestinations() {
  const destinations = await getStoredDestinations();
  return destinations.filter((d) => d.trending);
}

export async function getRelatedPackages(
  slug: string,
  category: TourPackage["category"],
  limit = 3
) {
  const packages = await getStoredPackages();
  return packages
    .filter((pkg) => pkg.slug !== slug && pkg.category === category)
    .slice(0, limit);
}

export async function getBlogDetailForPage(slug: string) {
  const stored = await getBlogDetailBySlug(slug);
  return stored ?? getBlogDetail(slug);
}

export async function getPackageDetailForPage(slug: string) {
  const stored = await getPackageDetailBySlug(slug);
  return stored ?? getPackageDetail(slug);
}

export async function getRelatedPosts(
  slug: string,
  category: BlogPost["category"],
  limit = 3
) {
  const posts = await getStoredBlogPosts();
  return posts
    .filter((post) => post.slug !== slug && post.category === category)
    .slice(0, limit);
}
