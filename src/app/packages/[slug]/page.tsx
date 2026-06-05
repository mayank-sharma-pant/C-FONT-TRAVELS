import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PackageDetailView } from "@/components/packages/package-detail-view";
import { getPackageDetail } from "@/lib/data/package-details";
import { getPackageBySlug, tourPackages } from "@/lib/data/packages";

interface PackagePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tourPackages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({
  params,
}: PackagePageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    return { title: "Package Not Found" };
  }

  return {
    title: pkg.name,
    description: pkg.description,
  };
}

export default async function PackageDetailPage({ params }: PackagePageProps) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    notFound();
  }

  const detail = getPackageDetail(slug);

  return <PackageDetailView pkg={pkg} detail={detail} />;
}
