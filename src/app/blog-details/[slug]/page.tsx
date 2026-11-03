import { notFound, permanentRedirect } from "next/navigation";
import { getDetail, getDetails } from "@/data/details";
import { detailPath } from "@/lib/detail-paths";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return getDetails("blog").map(({ slug }) => ({ slug }));
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!getDetail("blog", slug)) notFound();
  permanentRedirect(detailPath("blog", slug, false));
}
