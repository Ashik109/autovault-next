import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailShell from "@/components/DetailShell";
import PageEffects from "@/components/PageEffects";
import { getDetail, getDetails } from "@/data/details";
import PortfolioDetailsBreadcrumb from "@/components/sections/PortfolioDetailsBreadcrumb";
import PortfolioDetailsPortfolio from "@/components/sections/PortfolioDetailsPortfolio";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return getDetails("car").map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const record = getDetail("car", slug);
  if (!record) notFound();
  return {
    title: record.title + " | AutoVault",
    description: record.description,
    alternates: { canonical: "/car/" + record.slug },
  };
}
export default function Page({ params }: Props) {
  return (
    <DetailShell>
      <Details params={params} />
    </DetailShell>
  );
}
async function Details({ params }: Props) {
  const { slug } = await params;
  const record = getDetail("car", slug);
  if (!record) notFound();
  return (
    <div data-detail-kind={record.kind} data-detail-slug={record.slug}>
      <PageEffects bodyClass="with-sidebar" />
      <PortfolioDetailsBreadcrumb record={record} />
      <PortfolioDetailsPortfolio record={record} />
    </div>
  );
}
