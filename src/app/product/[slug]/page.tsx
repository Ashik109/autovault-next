import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailShell from "@/components/DetailShell";
import PageEffects from "@/components/PageEffects";
import { getDetail, getDetails } from "@/data/details";
import ShopDetailsPortfolio from "@/components/sections/ShopDetailsPortfolio";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return getDetails("product").map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const record = getDetail("product", slug);
  if (!record) notFound();
  return {
    title: record.title + " | AutoVault",
    description: record.description,
    alternates: { canonical: "/product/" + record.slug },
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
  const record = getDetail("product", slug);
  if (!record) notFound();
  return (
    <div data-detail-kind={record.kind} data-detail-slug={record.slug}>
      <PageEffects bodyClass="with-sidebar" />
      <ShopDetailsPortfolio record={record} />
    </div>
  );
}
