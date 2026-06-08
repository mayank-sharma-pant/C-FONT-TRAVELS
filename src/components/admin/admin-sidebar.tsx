"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  ImageIcon,
  LayoutDashboard,
  LogOut,
  MapPinned,
  Package,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/blogs", label: "Blogs", icon: BookOpen },
  { href: "/admin/gallery", label: "Gallery", icon: ImageIcon },
  { href: "/admin/destinations", label: "Destinations", icon: MapPinned },
  { href: "/admin/packages", label: "Packages", icon: Package },
];

export function AdminSidebar() {
  const pathname = usePathname();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  return (
    <aside className="flex w-full flex-col border-b border-border/60 bg-white lg:fixed lg:inset-y-0 lg:w-64 lg:border-b-0 lg:border-r">
      <div className="border-b border-border/60 px-6 py-5">
        <Link href="/admin" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary font-display text-lg font-bold text-white">
            CF
          </div>
          <div>
            <p className="font-display text-lg font-semibold text-navy">Admin Panel</p>
            <p className="text-xs text-muted-foreground">C Font Travels</p>
          </div>
        </Link>
      </div>

      <nav className="flex flex-1 flex-col gap-1 p-4">
        {links.map((link) => {
          const active =
            link.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                active
                  ? "bg-primary text-white"
                  : "text-muted-foreground hover:bg-cream hover:text-navy"
              )}
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-border/60 p-4">
        <Button variant="outline" className="w-full justify-start" onClick={handleLogout}>
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
        <Link
          href="/"
          className="mt-3 block text-center text-xs text-muted-foreground hover:text-primary"
        >
          View Website
        </Link>
      </div>
    </aside>
  );
}
