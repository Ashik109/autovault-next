import { notFound, permanentRedirect } from "next/navigation";
import DetailShell from "@/components/DetailShell";
import { getDetail, getDetails } from "@/data/details";
import { detailPath } from "@/lib/detail-paths";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return getDetails("car").map(({ slug }) => ({ slug }));
}
export default function Page({ params }: Props) {
  return (
    <DetailShell>
      <Redirect params={params} />
    </DetailShell>
  );
}
async function Redirect({ params }: Props) {
  const { slug } = await params;
  if (!getDetail("car", slug)) notFound();
  return permanentRedirect(detailPath("car", slug, false));
}
