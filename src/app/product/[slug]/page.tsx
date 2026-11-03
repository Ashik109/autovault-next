import LoaderWrapper from "@/components/sections/LoaderWrapper";
import SearchInput from "@/components/sections/SearchInput";
import Overlay from "@/components/sections/Overlay";
import ProgressWrap from "@/components/sections/ProgressWrap";
import HeaderThree from "@/components/sections/HeaderThree";
import ShopDetailsPortfolio from "@/components/sections/ShopDetailsPortfolio";
import AboutCta from "@/components/sections/AboutCta";
import AboutFooter from "@/components/sections/AboutFooter";
import MobileMenu from "@/components/sections/MobileMenu";
import PageEffects from "@/components/PageEffects";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDetail, getDetails } from "@/data/details";

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
export default async function ShopDetailsPage({ params }: Props) {
  const { slug } = await params;
  const record = getDetail("product", slug);
  if (!record) notFound();
  return (
    <div
      data-autovault-page
      data-detail-kind={record.kind}
      data-detail-slug={record.slug}
    >
      <PageEffects bodyClass="with-sidebar" />
      <LoaderWrapper />

      <SearchInput />

      <Overlay />

      <ProgressWrap />

      <div className="rts-wrapper">
        <div className="rts-wrapper-inner">
          <HeaderThree />

          <ShopDetailsPortfolio record={record} />

          <AboutCta />
        </div>
      </div>

      <AboutFooter />

      <MobileMenu />
    </div>
  );
}
