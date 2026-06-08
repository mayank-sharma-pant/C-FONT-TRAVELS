"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { TourPackage, PackageCategory } from "@/lib/data/packages";
import type { PackageDetail } from "@/lib/data/package-details";
import { packageCategories } from "@/lib/data/packages";
import { AdminField, adminInputClassName, adminTextareaClassName } from "@/components/admin/admin-field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const emptyDetail: PackageDetail = {
  overview: [""],
  itinerary: [{ day: 1, title: "", description: "" }],
  included: [""],
  excluded: [""],
  accommodation: { title: "", description: "", hotels: [""] },
  gallery: [""],
  faqs: [{ question: "", answer: "" }],
};

interface PackageFormProps {
  initialPackage?: TourPackage;
  initialDetail?: PackageDetail;
  mode: "create" | "edit";
}

export function PackageForm({ initialPackage, initialDetail, mode }: PackageFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [pkg, setPkg] = useState<TourPackage>(
    initialPackage || {
      slug: "",
      name: "",
      location: "",
      duration: "3 Days / 2 Nights",
      price: 0,
      priceDisplay: "₹0",
      image: "",
      category: "family",
      highlights: [],
      description: "",
      featured: false,
    }
  );
  const [highlightsText, setHighlightsText] = useState(
    (initialPackage?.highlights || []).join(", ")
  );
  const [detailJson, setDetailJson] = useState(
    JSON.stringify(initialDetail || emptyDetail, null, 2)
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    let detail: PackageDetail;
    try {
      detail = JSON.parse(detailJson) as PackageDetail;
    } catch {
      setError("Package detail JSON is invalid.");
      setLoading(false);
      return;
    }

    const payload = {
      ...pkg,
      highlights: highlightsText
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      detail,
    };

    const url =
      mode === "create"
        ? "/api/admin/packages"
        : `/api/admin/packages/${initialPackage?.slug}`;
    const method = mode === "create" ? "POST" : "PUT";

    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setLoading(false);

    if (!response.ok) {
      const data = (await response.json()) as { error?: string };
      setError(data.error || "Failed to save package.");
      return;
    }

    router.push("/admin/packages");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-border/60 bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <AdminField label="Package Name">
          <Input
            value={pkg.name}
            onChange={(e) => setPkg({ ...pkg, name: e.target.value })}
            required
          />
        </AdminField>
        <AdminField label="Slug">
          <Input
            value={pkg.slug}
            onChange={(e) => setPkg({ ...pkg, slug: e.target.value })}
          />
        </AdminField>
        <AdminField label="Location">
          <Input
            value={pkg.location}
            onChange={(e) => setPkg({ ...pkg, location: e.target.value })}
          />
        </AdminField>
        <AdminField label="Duration">
          <Input
            value={pkg.duration}
            onChange={(e) => setPkg({ ...pkg, duration: e.target.value })}
          />
        </AdminField>
        <AdminField label="Price (number)">
          <Input
            type="number"
            value={pkg.price}
            onChange={(e) => setPkg({ ...pkg, price: Number(e.target.value) })}
          />
        </AdminField>
        <AdminField label="Price Display">
          <Input
            value={pkg.priceDisplay}
            onChange={(e) => setPkg({ ...pkg, priceDisplay: e.target.value })}
          />
        </AdminField>
        <AdminField label="Category">
          <select
            value={pkg.category}
            onChange={(e) =>
              setPkg({ ...pkg, category: e.target.value as PackageCategory })
            }
            className={adminInputClassName}
          >
            {packageCategories
              .filter((item) => item.id !== "all")
              .map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
          </select>
        </AdminField>
        <AdminField label="Image URL">
          <Input
            value={pkg.image}
            onChange={(e) => setPkg({ ...pkg, image: e.target.value })}
            required
          />
        </AdminField>
      </div>

      <AdminField label="Highlights (comma separated)">
        <Input
          value={highlightsText}
          onChange={(e) => setHighlightsText(e.target.value)}
        />
      </AdminField>

      <AdminField label="Description">
        <textarea
          value={pkg.description}
          onChange={(e) => setPkg({ ...pkg, description: e.target.value })}
          rows={4}
          className={adminTextareaClassName}
          required
        />
      </AdminField>

      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={pkg.featured}
          onChange={(e) => setPkg({ ...pkg, featured: e.target.checked })}
        />
        Featured package
      </label>

      <AdminField label="Package Detail Page Content (JSON)">
        <textarea
          value={detailJson}
          onChange={(e) => setDetailJson(e.target.value)}
          rows={18}
          className={`${adminTextareaClassName} font-mono text-xs`}
        />
      </AdminField>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <div className="flex gap-3">
        <Button type="submit" disabled={loading}>
          {loading ? "Saving..." : mode === "create" ? "Create Package" : "Save Changes"}
        </Button>
        <Button asChild variant="outline">
          <Link href="/admin/packages">Cancel</Link>
        </Button>
      </div>
    </form>
  );
}
