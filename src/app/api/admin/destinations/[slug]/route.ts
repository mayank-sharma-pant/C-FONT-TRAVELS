import type { Destination } from "@/lib/data/destinations";
import { revalidatePublicContent } from "@/lib/admin/revalidate";
import { jsonError, jsonOk } from "@/lib/admin/api";
import {
  getStoredDestinations,
  saveStoredDestinations,
} from "@/lib/store/content";

interface RouteProps {
  params: Promise<{ slug: string }>;
}

export async function PUT(request: Request, { params }: RouteProps) {
  const { slug } = await params;
  const body = (await request.json()) as Destination & { newSlug?: string };
  const destinations = await getStoredDestinations();
  const index = destinations.findIndex((item) => item.slug === slug);

  if (index === -1) {
    return jsonError("Destination not found", 404);
  }

  const nextSlug = body.newSlug?.trim() || body.slug?.trim() || slug;

  if (nextSlug !== slug && destinations.some((item) => item.slug === nextSlug)) {
    return jsonError("Another destination already uses this slug");
  }

  destinations[index] = {
    ...destinations[index],
    ...body,
    slug: nextSlug,
    name: body.name?.trim() || destinations[index].name,
    description: body.description?.trim() ?? destinations[index].description,
    image: body.image?.trim() ?? destinations[index].image,
    price: body.price?.trim() ?? destinations[index].price,
    duration: body.duration?.trim() ?? destinations[index].duration,
    region: body.region?.trim() ?? destinations[index].region,
    categories: body.categories?.length ? body.categories : destinations[index].categories,
    popular: Boolean(body.popular),
    trending: Boolean(body.trending),
  };

  await saveStoredDestinations(destinations);
  revalidatePublicContent();
  return jsonOk(destinations[index]);
}

export async function DELETE(_request: Request, { params }: RouteProps) {
  const { slug } = await params;
  const destinations = await getStoredDestinations();
  const filtered = destinations.filter((item) => item.slug !== slug);

  if (filtered.length === destinations.length) {
    return jsonError("Destination not found", 404);
  }

  await saveStoredDestinations(filtered);
  revalidatePublicContent();
  return jsonOk({ success: true });
}
