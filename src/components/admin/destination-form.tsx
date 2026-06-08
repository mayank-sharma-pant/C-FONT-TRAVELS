"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { Destination, DestinationCategory } from "@/lib/data/destinations";
import { destinationCategories } from "@/lib/data/destinations";
import { AdminField, adminInputClassName, adminTextareaClassName } from "@/components/admin/admin-field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface DestinationFormProps {
  initialDestination?: Destination;
  mode: "create" | "edit";
}

export function DestinationForm({ initialDestination, mode }: DestinationFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [destination, setDestination] = useState<Destination>(
    initialDestination || {
      slug: "",
      name: "",
      description: "",
      image: "",
      price: "₹0",
      duration: "2 Days / 1 Night",
      region: "India",
      categories: ["domestic"],
      popular: false,
      trending: false,
    }
  );

  function toggleCategory(category: DestinationCategory) {
    setDestination((current) => ({
      ...current,
      categories: current.categories.includes(category)
        ? current.categories.filter((item) => item !== category)
        : [...current.categories, category],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const url =
      mode === "create"
        ? "/api/admin/destinations"
        : `/api/admin/destinations/${initialDestination?.slug}`;
    const method = mode === "create" ? "POST" : "PUT";

    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(destination),
    });

    setLoading(false);

    if (!response.ok) {
      const data = (await response.json()) as { error?: string };
      setError(data.error || "Failed to save destination.");
      return;
    }

    router.push("/admin/destinations");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-border/60 bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <AdminField label="Name">
          <Input
            value={destination.name}
            onChange={(e) => setDestination({ ...destination, name: e.target.value })}
            required
          />
        </AdminField>
        <AdminField label="Slug">
          <Input
            value={destination.slug}
            onChange={(e) => setDestination({ ...destination, slug: e.target.value })}
          />
        </AdminField>
        <AdminField label="Region">
          <Input
            value={destination.region}
            onChange={(e) => setDestination({ ...destination, region: e.target.value })}
          />
        </AdminField>
        <AdminField label="Price Label">
          <Input
            value={destination.price}
            onChange={(e) => setDestination({ ...destination, price: e.target.value })}
          />
        </AdminField>
        <AdminField label="Duration">
          <Input
            value={destination.duration}
            onChange={(e) => setDestination({ ...destination, duration: e.target.value })}
          />
        </AdminField>
        <AdminField label="Image URL">
          <Input
            value={destination.image}
            onChange={(e) => setDestination({ ...destination, image: e.target.value })}
            required
          />
        </AdminField>
      </div>

      <AdminField label="Description">
        <textarea
          value={destination.description}
          onChange={(e) => setDestination({ ...destination, description: e.target.value })}
          rows={4}
          className={adminTextareaClassName}
          required
        />
      </AdminField>

      <AdminField label="Categories">
        <div className="flex flex-wrap gap-2">
          {destinationCategories
            .filter((item) => item.id !== "all")
            .map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => toggleCategory(item.id as DestinationCategory)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                  destination.categories.includes(item.id as DestinationCategory)
                    ? "bg-primary text-white"
                    : "bg-cream text-muted-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
        </div>
      </AdminField>

      <div className="flex flex-wrap gap-6">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={destination.popular}
            onChange={(e) => setDestination({ ...destination, popular: e.target.checked })}
          />
          Popular destination
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={destination.trending}
            onChange={(e) => setDestination({ ...destination, trending: e.target.checked })}
          />
          Trending destination
        </label>
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <div className="flex gap-3">
        <Button type="submit" disabled={loading}>
          {loading ? "Saving..." : mode === "create" ? "Add Destination" : "Save Changes"}
        </Button>
        <Button asChild variant="outline">
          <Link href="/admin/destinations">Cancel</Link>
        </Button>
      </div>
    </form>
  );
}
