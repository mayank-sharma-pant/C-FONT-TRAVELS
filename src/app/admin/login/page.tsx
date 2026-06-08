import type { Metadata } from "next";
import { AdminLoginForm } from "@/components/admin/admin-login-form";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="w-full max-w-md rounded-3xl border border-border/60 bg-white p-8 shadow-sm">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary font-display text-xl font-bold text-white">
            CF
          </div>
          <h1 className="font-display text-3xl font-medium text-navy">Admin Login</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to manage blogs, gallery, destinations, and packages.
          </p>
        </div>
        <AdminLoginForm />
      </div>
    </div>
  );
}
