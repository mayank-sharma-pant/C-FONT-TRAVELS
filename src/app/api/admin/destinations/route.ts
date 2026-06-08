import type { Destination } from "@/lib/data/destinations";
import { revalidatePublicContent } from "@/lib/admin/revalidate";
import { jsonError, jsonOk } from "@/lib/admin/api";
import {
  getStoredDestinations,
  saveStoredDestinations,
} from "@/lib/store/content";

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function GET() {
  const destinations = await getStoredDestinations();
  return jsonOk(destinations);
}

export async function POST(request: Request) {
  const body = (await request.json()) as Destination;
  const destinations = await getStoredDestinations();

  if (!body.name?.trim()) {
    return jsonError("Destination name is required");
  }

  const slug = body.slug?.trim() || slugify(body.name);

  if (destinations.some((item) => item.slug === slug)) {
    return jsonError("A destination with this slug already exists");
  }

  const destination: Destination = {
    slug,
    name: body.name.trim(),
    description: body.description?.trim() || "",
    image: body.image?.trim() || "",
    price: body.price?.trim() || "₹0",
    duration: body.duration?.trim() || "2 Days / 1 Night",
    region: body.region?.trim() || "India",
    categories: body.categories?.length ? body.categories : ["domestic"],
    popular: Boolean(body.popular),
    trending: Boolean(body.trending),
  };

  destinations.unshift(destination);
  await saveStoredDestinations(destinations);
  revalidatePublicContent();
  return jsonOk(destination, 201);
}
