import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PackageDetailView } from "@/components/packages/package-detail-view";
import {
  getPackageBySlug,
  getPackageDetailForPage,
  getRelatedPackages,
  getStoredPackages,
} from "@/lib/store/content";

interface PackagePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const packages = await getStoredPackages();
  return packages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({
  params,
}: PackagePageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = await getPackageBySlug(slug);

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
  const pkg = await getPackageBySlug(slug);

  if (!pkg) {
    notFound();
  }

  const [detail, related] = await Promise.all([
    getPackageDetailForPage(slug),
    getRelatedPackages(slug, pkg.category),
  ]);

  return <PackageDetailView pkg={pkg} detail={detail} relatedPackages={related} />;
}
