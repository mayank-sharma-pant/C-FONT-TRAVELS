import { notFound } from "next/navigation";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { DestinationForm } from "@/components/admin/destination-form";
import { getStoredDestinations } from "@/lib/store/content";

interface EditDestinationPageProps {
  params: Promise<{ slug: string }>;
}

export default async function AdminEditDestinationPage({
  params,
}: EditDestinationPageProps) {
  const { slug } = await params;
  const destinations = await getStoredDestinations();
  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) notFound();

  return (
    <div className="px-4 py-8 sm:px-8">
      <AdminPageHeader title="Edit Destination" />
      <DestinationForm mode="edit" initialDestination={destination} />
    </div>
  );
}
