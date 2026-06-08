import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { PackageForm } from "@/components/admin/package-form";

export default function AdminNewPackagePage() {
  return (
    <div className="px-4 py-8 sm:px-8">
      <AdminPageHeader title="Add Package" />
      <PackageForm mode="create" />
    </div>
  );
}
