import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailShell from "@/components/DetailShell";
import PageEffects from "@/components/PageEffects";
import { getDetail, getDetails } from "@/data/details";
import BlogDetailsBreadcrumb from "@/components/sections/BlogDetailsBreadcrumb";
import BlogDetailsPortfolio from "@/components/sections/BlogDetailsPortfolio";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return getDetails("blog").map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const record = getDetail("blog", slug);
  if (!record) notFound();
  return {
    title: record.title + " | AutoVault",
    description: record.description,
    alternates: { canonical: "/blog/" + record.slug },
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
  const record = getDetail("blog", slug);
  if (!record) notFound();
  return (
    <div data-detail-kind={record.kind} data-detail-slug={record.slug}>
      <PageEffects bodyClass="with-sidebar" />
      <BlogDetailsBreadcrumb record={record} />
      <BlogDetailsPortfolio record={record} />
    </div>
  );
}
