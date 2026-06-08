import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { DestinationForm } from "@/components/admin/destination-form";

export default function AdminNewDestinationPage() {
  return (
    <div className="px-4 py-8 sm:px-8">
      <AdminPageHeader title="Add Destination" />
      <DestinationForm mode="create" />
    </div>
  );
}
