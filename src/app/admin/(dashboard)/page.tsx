import Link from "next/link";
import { ArrowRight, BookOpen, ImageIcon, MapPinned, Package } from "lucide-react";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import {
  getStoredBlogPosts,
  getStoredDestinations,
  getStoredGalleryImages,
  getStoredPackages,
} from "@/lib/store/content";
import { Button } from "@/components/ui/button";

export default async function AdminDashboardPage() {
  const [blogs, gallery, destinations, packages] = await Promise.all([
    getStoredBlogPosts(),
    getStoredGalleryImages(),
    getStoredDestinations(),
    getStoredPackages(),
  ]);

  const cards = [
    { label: "Blog Articles", count: blogs.length, href: "/admin/blogs", icon: BookOpen },
    { label: "Gallery Photos", count: gallery.length, href: "/admin/gallery", icon: ImageIcon },
    {
      label: "Destinations",
      count: destinations.length,
      href: "/admin/destinations",
      icon: MapPinned,
    },
    { label: "Tour Packages", count: packages.length, href: "/admin/packages", icon: Package },
  ];

  return (
    <div className="px-4 py-8 sm:px-8">
      <AdminPageHeader
        title="Dashboard"
        description="Manage website content for C Font Travels."
      />

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <card.icon className="h-8 w-8 text-primary" />
            <p className="mt-4 text-3xl font-display font-semibold text-navy">{card.count}</p>
            <p className="mt-1 text-sm text-muted-foreground">{card.label}</p>
          </Link>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-border/60 bg-white p-6 shadow-sm">
        <h2 className="font-display text-xl font-medium text-navy">Quick Actions</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/admin/blogs/new">Add Blog</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/admin/gallery/new">Add Gallery Photo</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/admin/destinations/new">Add Destination</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/admin/packages/new">Add Package</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/">
              View Website
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
