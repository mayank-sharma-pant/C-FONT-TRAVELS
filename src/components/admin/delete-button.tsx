"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface DeleteButtonProps {
  label: string;
  endpoint: string;
}

export function DeleteButton({ label, endpoint }: DeleteButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    if (!window.confirm(`Delete ${label}? This cannot be undone.`)) return;

    setLoading(true);
    const response = await fetch(endpoint, { method: "DELETE" });
    setLoading(false);

    if (response.ok) {
      router.refresh();
    }
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      className="text-destructive hover:text-destructive"
      disabled={loading}
      onClick={handleClick}
    >
      {loading ? "Deleting..." : "Delete"}
    </Button>
  );
}
