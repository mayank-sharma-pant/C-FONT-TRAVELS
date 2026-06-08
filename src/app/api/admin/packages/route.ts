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

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function GET() {
  const packages = await getStoredPackages();
  return jsonOk(packages);
}

export async function POST(request: Request) {
  const body = (await request.json()) as TourPackage & {
    detail?: PackageDetail;
  };

  const packages = await getStoredPackages();

  if (!body.name?.trim()) {
    return jsonError("Package name is required");
  }

  const slug = body.slug?.trim() || slugify(body.name);

  if (packages.some((item) => item.slug === slug)) {
    return jsonError("A package with this slug already exists");
  }

  const pkg: TourPackage = {
    slug,
    name: body.name.trim(),
    location: body.location?.trim() || "",
    duration: body.duration?.trim() || "3 Days / 2 Nights",
    price: Number(body.price) || 0,
    priceDisplay: body.priceDisplay?.trim() || `₹${body.price || 0}`,
    image: body.image?.trim() || "",
    category: body.category || "family",
    highlights: body.highlights?.length ? body.highlights : [],
    description: body.description?.trim() || "",
    featured: Boolean(body.featured),
  };

  packages.unshift(pkg);
  await saveStoredPackages(packages);

  if (body.detail) {
    const details = await getStoredPackageDetails();
    details[slug] = body.detail;
    await saveStoredPackageDetails(details);
  }

  revalidatePublicContent();
  return jsonOk(pkg, 201);
}
