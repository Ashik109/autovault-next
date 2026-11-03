import fs from "node:fs";
import path from "node:path";
import prettier from "prettier";

async function write(filename, content) {
  fs.mkdirSync(path.dirname(filename), { recursive: true });
  fs.writeFileSync(
    filename,
    await prettier.format(content, { parser: "typescript" }),
  );
}

export async function writeDetailPage({
  kind,
  canonicalBase,
  legacyBase,
  sections,
}) {
  await write(
    `src/app/${canonicalBase}/[slug]/page.tsx`,
    `
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailShell from "@/components/DetailShell";
import PageEffects from "@/components/PageEffects";
import { getDetail, getDetails } from "@/data/details";
${sections.map((name) => `import ${name} from "@/components/sections/${name}";`).join("\n")}
type Props = {params: Promise<{slug: string}>};
export function generateStaticParams(){return getDetails(${JSON.stringify(kind)}).map(({slug})=>({slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{
  const {slug}=await params;
  const record=getDetail(${JSON.stringify(kind)},slug);
  if(!record)notFound();
  return {title:record.title+" | AutoVault", description:record.description, alternates:{canonical:${JSON.stringify("/" + canonicalBase + "/")}+record.slug}};
}
export default function Page({params}:Props){
  return <DetailShell><Details params={params}/></DetailShell>;
}
async function Details({params}:Props){
  const {slug}=await params;
  const record=getDetail(${JSON.stringify(kind)},slug);
  if(!record)notFound();
  return <div data-detail-kind={record.kind} data-detail-slug={record.slug}>
    <PageEffects bodyClass="with-sidebar"/>
    ${sections.map((name) => `<${name} record={record}/>`).join("\n")}
  </div>;
}`,
  );
  await write(
    `src/app/${legacyBase}/[slug]/page.tsx`,
    `
import { notFound, permanentRedirect } from "next/navigation";
import DetailShell from "@/components/DetailShell";
import { getDetail, getDetails } from "@/data/details";
import { detailPath } from "@/lib/detail-paths";
type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return getDetails(${JSON.stringify(kind)}).map(({slug})=>({slug}));}
export default function Page({params}:Props){return <DetailShell><Redirect params={params}/></DetailShell>;}
async function Redirect({params}:Props){const {slug}=await params; if(!getDetail(${JSON.stringify(kind)},slug))notFound(); return permanentRedirect(detailPath(${JSON.stringify(kind)},slug,${canonicalBase === "car-two"}));}
`,
  );
}
