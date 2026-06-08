import Link from "next/link";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { DeleteButton } from "@/components/admin/delete-button";
import { getStoredDestinations } from "@/lib/store/content";
import { Button } from "@/components/ui/button";

export default async function AdminDestinationsPage() {
  const destinations = await getStoredDestinations();

  return (
    <div className="px-4 py-8 sm:px-8">
      <AdminPageHeader
        title="Destinations"
        description="Manage destinations shown across the website."
        action={
          <Button asChild>
            <Link href="/admin/destinations/new">Add Destination</Link>
          </Button>
        }
      />

      <div className="overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border/60 bg-cream/50">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Region</th>
              <th className="px-4 py-3 font-medium">Price</th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {destinations.map((destination) => (
              <tr key={destination.slug} className="border-b border-border/40 last:border-0">
                <td className="px-4 py-4">
                  <p className="font-medium text-navy">{destination.name}</p>
                  <p className="text-xs text-muted-foreground">{destination.slug}</p>
                </td>
                <td className="px-4 py-4">{destination.region}</td>
                <td className="px-4 py-4">{destination.price}</td>
                <td className="px-4 py-4">
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/admin/destinations/${destination.slug}/edit`}>
                        Edit
                      </Link>
                    </Button>
                    <DeleteButton
                      label={destination.name}
                      endpoint={`/api/admin/destinations/${destination.slug}`}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
