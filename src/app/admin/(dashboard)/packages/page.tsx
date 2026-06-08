import Link from "next/link";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { DeleteButton } from "@/components/admin/delete-button";
import { getStoredPackages } from "@/lib/store/content";
import { Button } from "@/components/ui/button";

export default async function AdminPackagesPage() {
  const packages = await getStoredPackages();

  return (
    <div className="px-4 py-8 sm:px-8">
      <AdminPageHeader
        title="Packages"
        description="Manage tour packages shown on the website."
        action={
          <Button asChild>
            <Link href="/admin/packages/new">Add Package</Link>
          </Button>
        }
      />

      <div className="overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border/60 bg-cream/50">
            <tr>
              <th className="px-4 py-3 font-medium">Package</th>
              <th className="px-4 py-3 font-medium">Location</th>
              <th className="px-4 py-3 font-medium">Price</th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg) => (
              <tr key={pkg.slug} className="border-b border-border/40 last:border-0">
                <td className="px-4 py-4">
                  <p className="font-medium text-navy">{pkg.name}</p>
                  <p className="text-xs text-muted-foreground">{pkg.slug}</p>
                </td>
                <td className="px-4 py-4">{pkg.location}</td>
                <td className="px-4 py-4">{pkg.priceDisplay}</td>
                <td className="px-4 py-4">
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/admin/packages/${pkg.slug}/edit`}>Edit</Link>
                    </Button>
                    <DeleteButton
                      label={pkg.name}
                      endpoint={`/api/admin/packages/${pkg.slug}`}
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
