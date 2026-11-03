import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const walk = (directory) =>
  fs
    .readdirSync(directory, { withFileTypes: true })
    .flatMap((item) =>
      item.isDirectory()
        ? walk(path.join(directory, item.name))
        : [path.join(directory, item.name)],
    );
const sourceFiles = walk("src");
const assets = walk("public");
const exactAssets = new Set(
  assets.map(
    (file) => "/" + path.relative("public", file).split(path.sep).join("/"),
  ),
);
const routes = new Set(
  sourceFiles
    .filter((file) => /[/\\]page\.tsx$/.test(file))
    .map(
      (file) =>
        "/" +
        path.relative("src/app", path.dirname(file)).split(path.sep).join("/"),
    ),
);
const errors = new Set();
for (const route of routes) if (route.includes("[")) routes.delete(route);
const catalog = JSON.parse(
  fs.readFileSync("src/data/detail-catalog.json", "utf8"),
);
const detailBases = {
  car: ["portfolio-details", "portfolio-details-2"],
  blog: ["blog-details"],
  dealer: ["car-dealer-details"],
  product: ["shop-details"],
};
for (const [kind, records] of Object.entries(catalog))
  for (const record of Object.values(records))
    for (const base of detailBases[kind]) routes.add(`/${base}/${record.slug}`);
const asset = (url, from) => {
  if (url.startsWith("/assets/") && !exactAssets.has(url.split(/[?#]/)[0]))
    errors.add(`${from}: missing asset ${url}`);
};
for (const [kind, records] of Object.entries(catalog))
  for (const [slug, record] of Object.entries(records)) {
    if (
      record.kind !== kind ||
      record.slug !== slug ||
      !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)
    )
      errors.add(`Invalid detail record: ${kind}/${slug}`);
    asset(record.image, `${kind}/${slug}`);
    record.gallery.forEach((image) => asset(image, `${kind}/${slug}`));
  }
for (const file of [...sourceFiles, ...assets])
  if (/\.html?$/i.test(file))
    errors.add(`HTML file must not be shipped: ${file}`);
for (const file of sourceFiles.filter((file) => file.endsWith(".tsx"))) {
  const content = fs.readFileSync(file, "utf8");
  if (/dangerouslySetInnerHTML|html-react-parser|\.html["']/.test(content))
    errors.add(`${file}: legacy HTML rendering or link`);
  const tree = ts.createSourceFile(
    file,
    content,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  function visit(node) {
    if (
      ts.isJsxAttribute(node) &&
      node.initializer &&
      ts.isStringLiteral(node.initializer)
    ) {
      const name = node.name.getText(tree),
        value = node.initializer.text;
      if (["src", "href", "poster"].includes(name)) asset(value, file);
      if (
        name === "href" &&
        value.startsWith("/") &&
        !value.startsWith("//") &&
        !value.startsWith("/assets/") &&
        !routes.has(value.split(/[?#]/)[0])
      )
        errors.add(`${file}: missing route ${value}`);
    }
    if (ts.isStringLiteral(node) && node.text.startsWith("/assets/"))
      asset(node.text, file);
    ts.forEachChild(node, visit);
  }
  visit(tree);
}
for (const file of assets.filter((file) => file.endsWith(".css"))) {
  const content = fs.readFileSync(file, "utf8");
  for (const [, url] of content.matchAll(
    /url\(\s*['"]?([^)'"\s]+)['"]?\s*\)/g,
  )) {
    if (/^(?:https?:|data:|#)/.test(url)) continue;
    const target = path.resolve(path.dirname(file), url.split(/[?#]/)[0]);
    if (
      !exactAssets.has(
        "/" + path.relative("public", target).split(path.sep).join("/"),
      )
    )
      errors.add(`${file}: missing or incorrectly cased CSS asset ${url}`);
  }
}
const packageJSON = fs.readFileSync("package.json", "utf8");
if (/tailwind/i.test(packageJSON)) errors.add("Tailwind dependency remains");
if (errors.size) {
  console.error([...errors].join("\n"));
  process.exit(1);
}
console.log(
  `Verified ${routes.size} native routes, ${assets.length} assets, clean local links, no HTML files and no Tailwind dependencies.`,
);
