import type { TourPackage } from "@/lib/data/packages";
import type { PackageDetail } from "@/lib/data/package-details";
import { revalidatePublicContent } from "@/lib/admin/revalidate";
import { jsonError, jsonOk } from "@/lib/admin/api";
import {
  getStoredPackageDetails,
  getStoredPackages,
  saveStoredPackageDetails,
  saveStoredPackages,
} from "@/lib/store/content";

interface RouteProps {
  params: Promise<{ slug: string }>;
}

export async function PUT(request: Request, { params }: RouteProps) {
  const { slug } = await params;
  const body = (await request.json()) as TourPackage & {
    detail?: PackageDetail;
    newSlug?: string;
  };

  const packages = await getStoredPackages();
  const index = packages.findIndex((item) => item.slug === slug);

  if (index === -1) {
    return jsonError("Package not found", 404);
  }

  const nextSlug = body.newSlug?.trim() || body.slug?.trim() || slug;

  if (nextSlug !== slug && packages.some((item) => item.slug === nextSlug)) {
    return jsonError("Another package already uses this slug");
  }

  const updated: TourPackage = {
    ...packages[index],
    ...body,
    slug: nextSlug,
    name: body.name?.trim() || packages[index].name,
    location: body.location?.trim() ?? packages[index].location,
    duration: body.duration?.trim() ?? packages[index].duration,
    price: Number(body.price ?? packages[index].price),
    priceDisplay: body.priceDisplay?.trim() ?? packages[index].priceDisplay,
    image: body.image?.trim() ?? packages[index].image,
    category: body.category ?? packages[index].category,
    highlights: body.highlights?.length ? body.highlights : packages[index].highlights,
    description: body.description?.trim() ?? packages[index].description,
    featured: Boolean(body.featured),
  };

  packages[index] = updated;
  await saveStoredPackages(packages);

  if (nextSlug !== slug) {
    const details = await getStoredPackageDetails();
    if (details[slug]) {
      details[nextSlug] = details[slug];
      delete details[slug];
      await saveStoredPackageDetails(details);
    }
  }

  if (body.detail) {
    const details = await getStoredPackageDetails();
    details[nextSlug] = body.detail;
    await saveStoredPackageDetails(details);
  }

  revalidatePublicContent();
  return jsonOk(updated);
}

export async function DELETE(_request: Request, { params }: RouteProps) {
  const { slug } = await params;
  const packages = await getStoredPackages();
  const filtered = packages.filter((item) => item.slug !== slug);

  if (filtered.length === packages.length) {
    return jsonError("Package not found", 404);
  }

  await saveStoredPackages(filtered);

  const details = await getStoredPackageDetails();
  if (details[slug]) {
    delete details[slug];
    await saveStoredPackageDetails(details);
  }

  revalidatePublicContent();
  return jsonOk({ success: true });
}
