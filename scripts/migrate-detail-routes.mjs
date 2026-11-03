import fs from "node:fs";
import path from "node:path";
import { parseDocument } from "htmlparser2";
import { textContent } from "domutils";
import ts from "typescript";
import prettier from "prettier";

const clean = (text) => text.replace(/\s+/g, " ").trim();
const slugify = (text) =>
  text
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
const walk = (node, fn) => {
  fn(node);
  for (const child of node.children || []) walk(child, fn);
};
const findAll = (node, predicate) => {
  const result = [];
  walk(node, (child) => {
    if (predicate(child)) result.push(child);
  });
  return result;
};
const bases = {
  car: "portfolio-details",
  blog: "blog-details",
  dealer: "car-dealer-details",
  product: "shop-details",
};
const canonicalBases = {
  car: "car",
  blog: "blog",
  dealer: "dealer",
  product: "product",
};
const kindFor = (href) =>
  /blog-details/.test(href)
    ? "blog"
    : /car-dealer-details/.test(href)
      ? "dealer"
      : /shop-details|single-product/.test(href)
        ? "product"
        : /portfolio-details/.test(href)
          ? "car"
          : undefined;
const cardPattern =
  /\b(?:project-wrapper\d*|feature-wrapper|blog-wrapper|dealer-wrapper)\b/;
const q = JSON.stringify;
async function write(filename, content) {
  fs.mkdirSync(path.dirname(filename), { recursive: true });
  fs.writeFileSync(
    filename,
    filename.endsWith(".tsx")
      ? await prettier.format(content, { parser: "typescript" })
      : content,
  );
}

export async function migrateDetails(source) {
  const catalog = { car: {}, blog: {}, dealer: {}, product: {} };
  function add(kind, title, image, price = 0, description = "", raw = "") {
    const slug = slugify(title);
    if (!slug) return;
    const previous = catalog[kind][slug];
    if (previous) {
      if (image && !previous.gallery.includes(image))
        previous.gallery.push(image);
      return previous;
    }
    const record = {
      kind,
      slug,
      title,
      image,
      gallery: [image],
      price,
      priceLabel: price
        ? new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
          }).format(price)
        : "Contact for price",
      description:
        description || [title, clean(raw)].filter(Boolean).join(". "),
      make:
        title.match(
          /Mercedes[- ]Benz|BMW|Mazda|Honda|Toyota|Ford|Audi|Hyundai|Chevrolet|Tesla|Volkswagen|Mitsubishi/i,
        )?.[0] || title.split(" ")[0],
      mileage: raw.match(/[\d,.]+\s*(?:Miles|km)\b/i)?.[0] || "100 Miles",
      fuel:
        raw.match(/\b(?:Petrol|Diesel|Electric|Hybrid)\b/i)?.[0] || "Petrol",
      transmission:
        raw.match(/\b(?:Automatic|Autometic|Manual)\b/i)?.[0] || "Automatic",
      seats: raw.match(/\d+\s*(?:seats|persons?)\b/i)?.[0] || "Person",
      location: "280 Augusta Avenue, M5T 2L9 Toronto, Canada",
      date:
        raw.match(
          /(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{1,2},?\s+20\d{2}/i,
        )?.[0] || "Feb 23, 2025",
      author: "AutoVault",
    };
    if (!description)
      record.description =
        kind === "car"
          ? `${title}. ${record.mileage}, ${record.fuel}, ${record.transmission}.`
          : title;
    if (kind === "blog") {
      record.author = "Jack Alexander";
      if (
        !raw.match(
          /(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{1,2},?\s+20\d{2}/i,
        )
      )
        record.date = "March 26, 2024";
    }
    catalog[kind][slug] = record;
    return record;
  }
  // Retain the product detail demo and the existing cart's sample products.
  add(
    "product",
    "Power Steering Pump",
    "/assets/images/portfolio/36.webp",
    599,
    "Power Steering Pump. Automotive parts and equipment from AutoVault.",
  );
  const cart = JSON.parse(fs.readFileSync("src/data/cart.json", "utf8"));
  for (const item of cart) add("product", item.title, item.image, item.price);
  const priority = [
    "portfolio.html",
    "shop.html",
    "car-dealer.html",
    "blog.html",
  ];
  const files = [
    ...priority,
    ...fs
      .readdirSync(source)
      .filter((file) => file.endsWith(".html") && !priority.includes(file))
      .sort(),
  ];
  const assetNames = new Map();
  function indexAssets(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const filename = path.join(dir, entry.name);
      if (entry.isDirectory()) indexAssets(filename);
      else {
        const url =
          "/" + path.relative(source, filename).split(path.sep).join("/");
        assetNames.set(url.toLowerCase(), url);
      }
    }
  }
  indexAssets(path.join(source, "assets"));
  for (const file of files) {
    const document = parseDocument(
      fs.readFileSync(path.join(source, file), "utf8"),
    );
    const cards = findAll(
      document,
      (node) =>
        cardPattern.test(node.attribs?.class || "") ||
        (node.name === "li" &&
          /\bblog-list\b/.test(node.parent?.attribs?.class || "")),
    );
    for (const card of cards) {
      const heading = findAll(card, (node) =>
        /^h[1-6]$/.test(node.name || ""),
      ).find(
        (node) =>
          findAll(
            node,
            (child) => child.name === "a" && kindFor(child.attribs.href || ""),
          ).length,
      );
      if (!heading) continue;
      const anchor = findAll(
        heading,
        (node) => node.name === "a" && kindFor(node.attribs.href || ""),
      )[0];
      const kind = /\bproject-wrapper4\b/.test(card.attribs.class || "")
        ? "product"
        : kindFor(anchor.attribs.href);
      const title = clean(textContent(heading));
      const imageNode = findAll(
        card,
        (node) =>
          node.name === "img" && !/\/icon\//.test(node.attribs.src || ""),
      )[0];
      if (!imageNode) continue;
      const imagePath = "/" + imageNode.attribs.src.replace(/^\.\//, "");
      const image = assetNames.get(imagePath.toLowerCase()) || imagePath;
      const priceNode = findAll(card, (node) =>
        /\bprice\b/.test(node.attribs?.class || ""),
      )[0];
      const price = priceNode
        ? Number(textContent(priceNode).replace(/[^\d.]/g, "")) || 0
        : 0;
      const description = findAll(
        card,
        (node) => node.name === "p" && /desc/.test(node.attribs?.class || ""),
      )[0];
      add(
        kind,
        title,
        image,
        price,
        description ? clean(textContent(description)) : "",
        textContent(card),
      );
    }
  }
  const defaults = {
    car: "mercedes-benz-e-class",
    blog: "seasonal-car-care-tips-to-keep-your-vehicle-running-smoothly",
    dealer: "car-toys",
    product: "power-steering-pump",
  };
  for (const kind of Object.keys(defaults))
    if (!catalog[kind][defaults[kind]])
      throw new Error(`Missing default ${kind}: ${defaults[kind]}`);
  await write(
    "src/data/detail-catalog.json",
    JSON.stringify(catalog, null, 2) + "\n",
  );
  await write(
    "src/data/detail-defaults.json",
    JSON.stringify(defaults, null, 2) + "\n",
  );
  const inventory = JSON.parse(fs.readFileSync("src/data/routes.json", "utf8"));
  for (const entry of inventory) {
    const kind = kindFor(entry.route);
    if (kind) {
      entry.route =
        "/" +
        (entry.route === "/portfolio-details-2"
          ? "car-two"
          : canonicalBases[kind]) +
        "/" +
        defaults[kind];
      entry.title = catalog[kind][defaults[kind]].title;
    }
  }
  await write(
    "src/data/routes.json",
    JSON.stringify(inventory, null, 2) + "\n",
  );

  const dir = "src/components/sections";
  const filesTSX = fs.readdirSync(dir).filter((file) => file.endsWith(".tsx"));
  const modules = new Map(
    filesTSX.map((file) => {
      const content = fs.readFileSync(path.join(dir, file), "utf8");
      return [
        file.slice(0, -4),
        {
          file: path.join(dir, file),
          content,
          tree: ts.createSourceFile(
            file,
            content,
            ts.ScriptTarget.Latest,
            true,
            ts.ScriptKind.TSX,
          ),
          edits: [],
          dynamic: false,
        },
      ];
    }),
  );
  const jsxTag = (node) =>
    node.openingElement?.tagName?.getText() || node.tagName?.getText();
  const opening = (node) => node.openingElement || node;
  const attr = (node, name) =>
    opening(node).attributes?.properties.find(
      (prop) => ts.isJsxAttribute(prop) && prop.name.getText() === name,
    );
  const attrValue = (node, name) => {
    const value = attr(node, name)?.initializer;
    return value && ts.isStringLiteral(value) ? value.text : "";
  };
  function jsxText(node) {
    if (ts.isJsxText(node)) return node.text;
    if (
      ts.isJsxExpression(node) &&
      node.expression &&
      ts.isStringLiteral(node.expression)
    )
      return node.expression.text;
    return (node.children || []).map(jsxText).join(" ");
  }
  function descendants(node, predicate) {
    const result = [];
    function visit(current) {
      if (predicate(current)) result.push(current);
      ts.forEachChild(current, visit);
    }
    visit(node);
    return result;
  }
  function cardFor(node) {
    for (let parent = node.parent; parent; parent = parent.parent)
      if (
        ts.isJsxElement(parent) &&
        (cardPattern.test(attrValue(parent, "className")) ||
          (jsxTag(parent) === "li" &&
            descendants(
              parent,
              (n) => ts.isJsxElement(n) && /^h[1-6]$/.test(jsxTag(n)),
            ).length &&
            descendants(
              parent,
              (n) => ts.isJsxSelfClosingElement(n) && jsxTag(n) === "img",
            ).length))
      )
        return parent;
  }
  function recordForCard(card, fallbackKind) {
    const kind = /\bproject-wrapper4\b/.test(attrValue(card, "className"))
      ? "product"
      : fallbackKind;
    const heading = descendants(
      card,
      (node) => ts.isJsxElement(node) && /^h[1-6]$/.test(jsxTag(node)),
    )[0];
    return [
      kind,
      heading ? catalog[kind][slugify(clean(jsxText(heading)))] : undefined,
    ];
  }
  const edit = (section, node, value) =>
    section.edits.push({
      start: node.getStart(section.tree),
      end: node.end,
      value,
    });
  // Rewrite every card's image/title/button to its own record; menu demo links use defaults.
  for (const section of modules.values()) {
    function visit(node) {
      if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
        const href = attr(node, "href");
        const url =
          href?.initializer && ts.isStringLiteral(href.initializer)
            ? href.initializer.text
            : "";
        const kind = kindFor(url);
        if (
          url === "#" &&
          attrValue(node, "className") === "current" &&
          /Details(?:2)?Breadcrumb/.test(section.file)
        ) {
          const listing = section.file.includes("CarDealerDetails")
            ? "/car-dealer"
            : section.file.includes("PortfolioDetails2")
              ? "/portfolio-2"
              : "/portfolio";
          edit(section, href.initializer, q(listing));
          if (node.tagName.getText() === "a") {
            edit(section, node.tagName, "Link");
            if (ts.isJsxElement(node.parent))
              edit(section, node.parent.closingElement.tagName, "Link");
          }
        }
        if (
          kind &&
          Object.values(bases)
            .concat("portfolio-details-2")
            .some((base) => url === "/" + base)
        ) {
          const card = cardFor(node);
          const [actualKind, record] = card
            ? recordForCard(card, kind)
            : [kind, undefined];
          const alternate =
            actualKind === "car" && url === "/portfolio-details-2";
          edit(
            section,
            href.initializer,
            `{detailPath(${q(actualKind)}, ${q(record?.slug || defaults[actualKind])}${alternate ? ", true" : ""})}`,
          );
          section.linkHelper = true;
        }
      }
      ts.forEachChild(node, visit);
    }
    visit(section.tree);
  }
  const templates = [
    {
      base: "portfolio-details",
      kind: "car",
      prefix: "PortfolioDetails",
      exclude: "PortfolioDetails2",
    },
    { base: "portfolio-details-2", kind: "car", prefix: "PortfolioDetails2" },
    { base: "blog-details", kind: "blog", prefix: "BlogDetails" },
    { base: "car-dealer-details", kind: "dealer", prefix: "CarDealerDetails" },
    { base: "shop-details", kind: "product", prefix: "ShopDetails" },
  ];
  for (const template of templates) {
    const group = [...modules].filter(
      ([name]) =>
        name.startsWith(template.prefix) &&
        !(template.exclude && name.startsWith(template.exclude)),
    );
    for (const [, section] of group) {
      let paragraphDone = false;
      const gallery = new Map();
      function visit(node) {
        const card = cardFor(node);
        if (
          !card &&
          ts.isJsxElement(node) &&
          (jsxTag(node) === "h1" ||
            (template.kind === "product" &&
              /ms-single-product_title/.test(attrValue(node, "className"))))
        ) {
          section.edits.push({
            start: node.openingElement.end,
            end: node.closingElement.getStart(section.tree),
            value: "{record.title}",
          });
          section.dynamic = true;
          return;
        }
        if (
          ts.isJsxExpression(node) &&
          node.expression &&
          ts.isStringLiteral(node.expression) &&
          !card
        ) {
          const text = clean(node.expression.text);
          const parent = node.parent;
          const tag = ts.isJsxElement(parent) ? jsxTag(parent) : "";
          const cls = ts.isJsxElement(parent)
            ? attrValue(parent, "className")
            : "";
          let field;
          if (
            tag === "h1" ||
            (template.kind === "product" && /ms-single-product_title/.test(cls))
          )
            field = "record.title";
          else if (
            template.kind === "product" &&
            text === "Power Steering Pump"
          )
            field = "record.title";
          else if (template.kind === "product" && text === "599")
            field = 'record.price.toLocaleString("en-US")';
          else if (template.kind === "car" && text === "$1200,00")
            field = "record.priceLabel";
          else if (
            template.kind === "car" &&
            /^(100 Miles|Petrol|Autometic|Automatic|Person|Mercedes - Benz)$/.test(
              text,
            )
          )
            field =
              "record." +
              {
                "100 Miles": "mileage",
                Petrol: "fuel",
                Autometic: "transmission",
                Automatic: "transmission",
                Person: "seats",
                "Mercedes - Benz": "make",
              }[text];
          else if (
            template.kind === "blog" &&
            /^(Feb 23, 2025|February 23, 2025|March 26, 2024)$/.test(text)
          )
            field = "record.date";
          else if (template.kind === "blog" && text === "Jack Alexander")
            field = "record.author";
          else if (!paragraphDone && tag === "p" && text.length > 180) {
            field = 'record.description + " " + ' + q(text);
            paragraphDone = true;
          }
          if (field) {
            edit(section, node, `{${field}}`);
            section.dynamic = true;
          }
        }
        if (
          ts.isJsxSelfClosingElement(node) &&
          jsxTag(node) === "img" &&
          !card
        ) {
          const src = attr(node, "src");
          const url = attrValue(node, "src");
          const isGallery =
            (template.kind === "car" &&
              /\/portfolio\/3[0-5]\.webp$/.test(url)) ||
            (template.kind === "product" &&
              /\/portfolio\/3[6-8]\.webp$/.test(url));
          const isBlogImage =
            template.kind === "blog" &&
            url === "/assets/images/portfolio/24.webp";
          const isDealerLogo =
            template.kind === "dealer" &&
            section.file.endsWith("CarDealerDetailsBreadcrumb.tsx") &&
            !/\/icon\//.test(url);
          if (isGallery || isBlogImage || isDealerLogo) {
            if (!gallery.has(url)) gallery.set(url, gallery.size);
            edit(
              section,
              src.initializer,
              isGallery
                ? `{record.gallery[${gallery.get(url)} % record.gallery.length]}`
                : "{record.image}",
            );
            const alt = attr(node, "alt");
            if (alt?.initializer)
              edit(section, alt.initializer, "{record.title}");
            section.dynamic = true;
          }
        }
        ts.forEachChild(node, visit);
      }
      visit(section.tree);
    }
    // Propagate record props through section and breadcrumb component boundaries.
    let changed = true;
    while (changed) {
      changed = false;
      for (const [, section] of group)
        if (
          !section.dynamic &&
          descendants(
            section.tree,
            (node) =>
              (ts.isJsxSelfClosingElement(node) ||
                ts.isJsxOpeningElement(node)) &&
              modules.get(jsxTag(node))?.dynamic,
          ).length
        ) {
          section.dynamic = true;
          changed = true;
        }
    }
  }
  for (const [name, section] of modules) {
    if (section.linkHelper)
      section.edits.push({
        start: 0,
        end: 0,
        value: 'import { detailPath } from "@/lib/detail-paths";\n',
      });
    if (section.dynamic) {
      const fn = descendants(
        section.tree,
        (node) => ts.isFunctionDeclaration(node) && node.name?.text === name,
      )[0];
      const begin = fn.name.end;
      const end = fn.body.getStart(section.tree);
      section.edits.push({
        start: begin,
        end,
        value: "({ record }: { record: DetailRecord }) ",
      });
      section.edits.push({
        start: 0,
        end: 0,
        value: 'import type { DetailRecord } from "@/data/details";\n',
      });
      for (const node of descendants(
        section.tree,
        (node) =>
          ts.isJsxSelfClosingElement(node) &&
          modules.get(jsxTag(node))?.dynamic,
      )) {
        section.edits.push({
          start: node.tagName.end,
          end: node.tagName.end,
          value: " record={record}",
        });
      }
    }
    let content = section.content;
    for (const item of section.edits.sort((a, b) => b.start - a.start))
      content =
        content.slice(0, item.start) + item.value + content.slice(item.end);
    if (section.edits.length) await write(section.file, content);
  }
  for (const template of templates) {
    const alternate = template.base === "portfolio-details-2";
    const canonicalBase = alternate ? "car-two" : canonicalBases[template.kind];
    const filename = `src/app/${template.base}/page.tsx`;
    let content = fs.readFileSync(filename, "utf8");
    content = content.replace(
      /export const metadata: Metadata = \{[\s\S]*?\};/,
      "",
    );
    content = content.replace(
      'import type { Metadata } from "next";',
      'import type { Metadata } from "next";\nimport { notFound } from "next/navigation";\nimport { getDetail, getDetails } from "@/data/details";',
    );
    content = content.replace(
      /export default function (\w+)\(\) \{/,
      `type Props = { params: Promise<{ slug: string }> };\nexport function generateStaticParams() { return getDetails(${q(template.kind)}).map(({slug}) => ({slug})); }\nexport async function generateMetadata({params}: Props): Promise<Metadata> { const {slug} = await params; const record = getDetail(${q(template.kind)}, slug); if (!record) notFound(); return {title: record.title + " | AutoVault", description: record.description, alternates: {canonical: ${q("/" + canonicalBase + "/")} + record.slug}}; }\nexport default async function $1({params}: Props) { const {slug} = await params; const record = getDetail(${q(template.kind)}, slug); if (!record) notFound();`,
    );
    for (const [name, section] of modules)
      if (section.dynamic)
        content = content.replaceAll(
          `<${name} />`,
          `<${name} record={record} />`,
        );
    content = content.replace(
      "<div data-autovault-page>",
      "<div data-autovault-page data-detail-kind={record.kind} data-detail-slug={record.slug}>",
    );
    await write(`src/app/${canonicalBase}/[slug]/page.tsx`, content);
    await write(
      `src/app/${template.base}/[slug]/page.tsx`,
      `import { notFound, permanentRedirect } from "next/navigation";\nimport { getDetail, getDetails } from "@/data/details";\nimport { detailPath } from "@/lib/detail-paths";\ntype Props = {params: Promise<{slug:string}>};\nexport function generateStaticParams(){return getDetails(${q(template.kind)}).map(({slug})=>({slug}));}\nexport default async function Page({params}:Props){ const {slug}=await params; if(!getDetail(${q(template.kind)},slug))notFound(); permanentRedirect(detailPath(${q(template.kind)},slug,${alternate})); }`,
    );
    await write(
      filename,
      `import { permanentRedirect } from "next/navigation";\nexport default function Page(){permanentRedirect(${q("/" + canonicalBase + "/" + defaults[template.kind])});}`,
    );
    if (canonicalBase !== "blog")
      await write(
        `src/app/${canonicalBase}/page.tsx`,
        `import { redirect } from "next/navigation";\nexport default function Page(){redirect(${q({ car: "/portfolio", "car-two": "/portfolio-2", dealer: "/car-dealer", product: "/shop" }[canonicalBase])});}`,
      );
  }
  console.log(
    "Slug catalogs:",
    Object.fromEntries(
      Object.entries(catalog).map(([kind, records]) => [
        kind,
        Object.keys(records).length,
      ]),
    ),
  );
}
