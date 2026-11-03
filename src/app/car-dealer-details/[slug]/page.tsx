import { notFound, permanentRedirect } from "next/navigation";
import { getDetail, getDetails } from "@/data/details";
import { detailPath } from "@/lib/detail-paths";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return getDetails("dealer").map(({ slug }) => ({ slug }));
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!getDetail("dealer", slug)) notFound();
  permanentRedirect(detailPath("dealer", slug, false));
}
