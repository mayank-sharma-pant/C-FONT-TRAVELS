import { notFound } from "next/navigation";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { PackageForm } from "@/components/admin/package-form";
import {
  getPackageBySlug,
  getPackageDetailBySlug,
} from "@/lib/store/content";

interface EditPackagePageProps {
  params: Promise<{ slug: string }>;
}

export default async function AdminEditPackagePage({ params }: EditPackagePageProps) {
  const { slug } = await params;
  const [pkg, detail] = await Promise.all([
    getPackageBySlug(slug),
    getPackageDetailBySlug(slug),
  ]);

  if (!pkg) notFound();

  return (
    <div className="px-4 py-8 sm:px-8">
      <AdminPageHeader title="Edit Package" />
      <PackageForm mode="edit" initialPackage={pkg} initialDetail={detail} />
    </div>
  );
}
