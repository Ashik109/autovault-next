import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { parseDocument } from "htmlparser2";
import { getOuterHTML, textContent } from "domutils";
import prettier from "prettier";
import ts from "typescript";

// Run only when intentionally regenerating the editable TSX sections.
// The application never reads the source template at runtime.
const source = path.resolve(process.argv[2] || "../autovault");
const root = process.cwd();
function assetFiles(directory) {
  return fs
    .readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) =>
      entry.isDirectory()
        ? assetFiles(path.join(directory, entry.name))
        : [path.join(directory, entry.name)],
    );
}
const assetPaths = new Map(
  assetFiles(path.join(source, "assets")).map((filename) => {
    const relative = path.relative(source, filename).split(path.sep).join("/");
    return [relative.toLowerCase(), relative];
  }),
);
const files = fs
  .readdirSync(source)
  .filter((file) => file.endsWith(".html"))
  .sort();
const routeFor = (file) =>
  file === "index.html"
    ? "/"
    : "/" +
      file
        .replace(/\.html$/, "")
        .replace(/^index-/, "home-")
        .replaceAll(" ", "-");
const routes = Object.fromEntries(files.map((file) => [file, routeFor(file)]));
const aliases = {
  "portfolio-two.html": "/portfolio-2",
  "portfolio-three.html": "/portfolio-3",
  "single-product.html": "/shop-details",
  "service-details.html": "/service",
  "wishlist.html": "/wishlist",
};
const find = (node, name) =>
  node.name === name
    ? node
    : (node.children || []).map((child) => find(child, name)).find(Boolean);
const all = (node, name) => [
  ...(node.name === name ? [node] : []),
  ...(node.children || []).flatMap((child) => all(child, name)),
];
const pascal = (str) =>
  str
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .replace(/(?:^|\s)(\w)/g, (_, c) => c.toUpperCase())
    .replaceAll(" ", "");
const q = JSON.stringify;
const components = new Map();
const componentNames = new Set();
const manifest = [];
const propNames = {
  class: "className",
  for: "htmlFor",
  tabindex: "tabIndex",
  colspan: "colSpan",
  rowspan: "rowSpan",
  allowfullscreen: "allowFullScreen",
  referrerpolicy: "referrerPolicy",
  "accept-charset": "acceptCharset",
  enctype: "encType",
  novalidate: "noValidate",
  autoplay: "autoPlay",
  "fill-rule": "fillRule",
  "clip-rule": "clipRule",
  "clip-path": "clipPath",
  "stroke-width": "strokeWidth",
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  "xmlns:xlink": "xmlnsXlink",
  "xlink:href": "xlinkHref",
  readonly: "readOnly",
  maxlength: "maxLength",
  autocomplete: "autoComplete",
};
const bools = new Set([
  "required",
  "disabled",
  "multiple",
  "muted",
  "loop",
  "autoplay",
  "allowfullscreen",
  "novalidate",
  "readonly",
  "controls",
]);
const voids = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);
const normalizeURL = (url) => {
  if (/^javascript:/i.test(url)) return "#";
  if (/^(?:\.\/)?assets\//.test(url))
    return normalizeURL("/" + url.replace(/^\.\//, ""));
  if (url.startsWith("/assets/")) {
    const [, filename, suffix] = url.match(/^([^?#]+)(.*)$/);
    return (
      "/" +
      (assetPaths.get(filename.slice(1).toLowerCase()) || filename.slice(1)) +
      suffix
    );
  }
  if (url.startsWith("call-to:")) return url.replace("call-to:", "tel:");
  if (url.startsWith("mail-to:")) return url.replace("mail-to:", "mailto:");
  const match = url.match(/^([^?#]+\.html)(.*)$/);
  if (match) {
    const route = routes[match[1]] || aliases[match[1]];
    if (!route) throw Error(`Unmapped template link: ${url}`);
    return route + match[2];
  }
  return url;
};
const styleObject = (value) =>
  Object.fromEntries(
    value
      .split(";")
      .map((entry) => {
        const colon = entry.indexOf(":");
        if (colon < 0) return null;
        const key = entry.slice(0, colon).trim();
        const val = entry
          .slice(colon + 1)
          .trim()
          .replace(/\s*!important$/, "")
          .replace(/url\(['"]?(assets\/[^)'"\s]+)['"]?\)/g, "url(/$1)");
        return [
          key.startsWith("--")
            ? key
            : key.replace(/-([a-z])/g, (_, c) => c.toUpperCase()),
          val,
        ];
      })
      .filter(Boolean),
  );

const isSection = (node) =>
  ["header", "footer", "section"].includes(node.name) ||
  (node.name === "div" &&
    (/loader-wrapper|search-input-area|progress-wrap|breadcrumb-area|\brts-[\w-]+-area\b|\bms-shop|\bms-cart|\bms-checkout/.test(
      node.attribs.class || "",
    ) ||
      ["side-bar", "anywhere-home"].includes(node.attribs.id)));
const sectionName = (node) => {
  if (node.attribs.id === "side-bar") return "MobileMenu";
  if (node.attribs.id === "anywhere-home") return "Overlay";
  if (["header", "footer"].includes(node.name)) return pascal(node.name);
  const cls =
    (node.attribs.class || "")
      .split(" ")
      .find(
        (name) =>
          name.startsWith("rts-") ||
          name.includes("breadcrumb") ||
          name.includes("loader") ||
          name.includes("search-input") ||
          name.includes("progress-wrap"),
      ) || node.name;
  return pascal(cls.replace(/^rts-/, "").replace(/-area$/, ""));
};

function render(node, context, sectionRoot = false) {
  if (node.type === "comment" || node.type === "directive") return "";
  if (node.type === "text") {
    const value = node.data.replace(/\s+/g, " ");
    return value.trim() ? `{${q(value)}}` : "";
  }
  if (!node.name) return "";
  if (node.name === "script")
    return /getFullYear/.test(textContent(node)) ? "<CopyrightYear />" : "";
  if (node.name === "noscript") return "";
  if (
    context.route === "/wishlist" &&
    /\brts-breadcrumb-area\b/.test(node.attribs.class || "")
  )
    return '<Breadcrumb title="Saved Cars" />';
  if (/\brts-calculator-area\b/.test(node.attribs.class || ""))
    return "<LoanCalculator />";
  if (
    context.route === "/cart" &&
    /\bms-page-content\b/.test(node.attribs.class || "")
  )
    return "<ShoppingCart />";
  if (
    node.name === "table" &&
    /woocommerce-checkout-review-order-table/.test(node.attribs.class || "")
  )
    return "<OrderSummary />";
  if (
    context.route === "/wishlist" &&
    /\brts-portfolio-area\b/.test(node.attribs.class || "")
  )
    return "<SavedCars />";
  if (
    context.route === "/wishlist" &&
    /\brts-select-area\b/.test(node.attribs.class || "")
  )
    return "";
  if (node.name === "div" && /\bquantity-edit\b/.test(node.attribs.class || ""))
    return `<QuantityInput initialValue={${Number(all(node, "input")[0]?.attribs.value) || 1}} />`;
  if (!sectionRoot && isSection(node)) {
    const key = crypto
      .createHash("sha256")
      .update(getOuterHTML(node).replace(/\s+/g, " "))
      .digest("hex")
      .slice(0, 10);
    if (!components.has(key)) {
      const section = sectionName(node);
      const layout = ["header", "footer"].includes(node.name);
      const utility = [
        "Overlay",
        "MobileMenu",
        "LoaderWrapper",
        "SearchInput",
        "ProgressWrap",
      ].includes(section);
      const base = layout
        ? pascal(node.attribs.class?.split(" ")[0] || node.name)
        : utility
          ? section
          : pascal(
              context.route === "/" ? "home-one" : context.route.slice(1),
            ) + section;
      let name = base;
      let suffix = 2;
      while (componentNames.has(name)) name = base + suffix++;
      componentNames.add(name);
      const ctx = { route: context.route, imports: new Set() };
      components.set(key, { name, code: "", ctx });
      const code = render(node, ctx, true);
      components.set(key, { name, code, ctx });
    }
    const name = components.get(key).name;
    context.imports.add(name);
    return `<${name} />`;
  }
  const attrs = { ...node.attribs };
  let tag = node.name;
  if (tag === "a" && attrs.href) {
    attrs.href = normalizeURL(attrs.href);
    if (
      attrs.href.startsWith("/") &&
      !attrs.href.startsWith("//") &&
      !attrs.href.startsWith("/assets/") &&
      !/wishlist|popup-video|popup-youtube|gallery-image/.test(
        attrs.class || "",
      )
    )
      tag = "Link";
    if (attrs.target === "_blank") attrs.rel = "noopener noreferrer";
  }
  if (/^h[1-6]$/.test(tag) && attrs["data-bs-toggle"] === "collapse") {
    tag = "button";
    attrs.type = "button";
    attrs.class = (attrs.class || "")
      .replace(/\bcollapse\b|\bshow\b/g, "")
      .trim();
    attrs["aria-expanded"] = String(!attrs.class.includes("collapsed"));
  }
  if (tag === "form") {
    tag = "TemplateForm";
    attrs.context = context.route;
    delete attrs.action;
    delete attrs.method;
    delete attrs.novalidate;
  }
  if (tag === "select") {
    const options = all(node, "option");
    const selected =
      options.find((option) => Object.hasOwn(option.attribs, "selected")) ||
      options[0];
    if (selected)
      attrs.defaultValue =
        selected.attribs.value ?? textContent(selected).trim();
  }
  if (tag === "option") delete attrs.selected;
  if (tag === "input") {
    if (/password/i.test(attrs.placeholder || "")) attrs.type = "password";
    if (Object.hasOwn(attrs, "value")) {
      attrs.defaultValue = attrs.value;
      delete attrs.value;
    }
    if (Object.hasOwn(attrs, "checked")) {
      attrs.defaultChecked = "";
      delete attrs.checked;
    }
  }
  if (["input", "select", "textarea"].includes(tag) && !attrs["aria-label"])
    attrs["aria-label"] =
      attrs.placeholder ||
      attrs.name ||
      attrs.id ||
      (tag === "select" ? "Choose an option" : "Enter a value");
  if (tag === "iframe" && !attrs.title) attrs.title = "AutoVault location";
  if (tag === "video") attrs.playsInline = "";
  if (tag === "img" && !Object.hasOwn(attrs, "alt")) attrs.alt = "";
  if (tag === "button" && !textContent(node).trim() && !attrs["aria-label"])
    attrs["aria-label"] = /increment|plus/.test(attrs.class || "")
      ? "Increase quantity"
      : /decrement/.test(attrs.class || "")
        ? "Decrease quantity"
        : /search/.test(node.parent?.attribs?.class || "")
          ? "Search inventory"
          : "Open control";
  const props = [];
  if (tag === "Link") props.push("prefetch={false}");
  for (const [key, raw] of Object.entries(attrs)) {
    if (/^on/i.test(key)) continue;
    const name = propNames[key] || key;
    let value = ["src", "href", "poster"].includes(key)
      ? normalizeURL(raw)
      : raw;
    if (key === "style") props.push(`style={${q(styleObject(value))}}`);
    else if (bools.has(key) || ["defaultChecked", "playsInline"].includes(key))
      props.push(`${name}={true}`);
    else if (["tabIndex", "colSpan", "rowSpan", "cols", "rows"].includes(name))
      props.push(`${name}={${Number(value)}}`);
    else props.push(`${name}=${q(value)}`);
  }
  if (voids.has(node.name)) return `<${tag} ${props.join(" ")} />`;
  const children = (node.children || [])
    .map((child) => render(child, context))
    .join("\n");
  return `<${tag} ${props.join(" ")}>${children}</${tag}>`;
}

const importsFor = (context, code) => {
  const lines = [];
  if (code.includes("<Link ")) lines.push('import Link from "next/link";');
  for (const name of [
    "TemplateForm",
    "CopyrightYear",
    "LoanCalculator",
    "ShoppingCart",
    "OrderSummary",
    "SavedCars",
    "QuantityInput",
    "Breadcrumb",
  ])
    if (code.includes(`<${name}`))
      lines.push(`import ${name} from "@/components/${name}";`);
  for (const name of context.imports)
    lines.push(`import ${name} from "@/components/sections/${name}";`);
  return lines.join("\n");
};
async function write(file, code) {
  const target = path.join(root, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(
    target,
    file.endsWith(".tsx")
      ? await prettier.format(code, { parser: "typescript" })
      : code,
  );
}

for (const file of files) {
  const doc = parseDocument(fs.readFileSync(path.join(source, file), "utf8"), {
    lowerCaseAttributeNames: false,
  });
  const body = find(doc, "body");
  const route = routes[file];
  const context = { route, imports: new Set() };
  const content = body.children.map((node) => render(node, context)).join("\n");
  const heading = all(body, "h1")[0] || all(body, "h2")[0];
  const title =
    route === "/"
      ? "Car Dealer One"
      : heading
        ? textContent(heading).trim().replace(/\s+/g, " ")
        : pascal(route.slice(1));
  const name = route === "/" ? "HomeOne" : pascal(route.slice(1));
  const code = `${importsFor(context, content)}\nimport PageEffects from "@/components/PageEffects";\nimport type { Metadata } from "next";\nexport const metadata: Metadata = {title: ${q(title + " | AutoVault")}};\nexport default function ${name}Page(){return <div data-autovault-page><PageEffects bodyClass=${q(body.attribs.class || "")} />${content}</div>}`;
  await write(`src/app${route === "/" ? "" : route}/page.tsx`, code);
  manifest.push({ route, title, bodyClass: body.attribs.class || "" });
}
for (const { name, code, ctx } of components.values())
  await write(
    `src/components/sections/${name}.tsx`,
    `${importsFor(ctx, code)}\nexport default function ${name}(){return (${code});}`,
  );
await write(
  "src/app/home-one/page.tsx",
  'export { default, metadata } from "../page";',
);
await write("src/data/routes.json", JSON.stringify(manifest, null, 2) + "\n");
const wishlistDoc = parseDocument(
  fs.readFileSync(path.join(source, "portfolio.html"), "utf8"),
  { lowerCaseAttributeNames: false },
);
const wishlistContext = { route: "/wishlist", imports: new Set() };
const wishlistContent = find(wishlistDoc, "body")
  .children.map((node) => render(node, wishlistContext))
  .join("\n");
await write(
  "src/app/wishlist/page.tsx",
  `${importsFor(wishlistContext, wishlistContent)}\nimport PageEffects from "@/components/PageEffects";\nexport const metadata = {title: "Saved Cars | AutoVault"};\nexport default function WishlistPage(){return <div data-autovault-page><PageEffects bodyClass="" />${wishlistContent}</div>}`,
);
const cartDoc = parseDocument(
  fs.readFileSync(path.join(source, "cart.html"), "utf8"),
);
const cartItems = all(cartDoc, "tr")
  .filter((node) => /\bcart_item\b/.test(node.attribs.class || ""))
  .map((node, index) => {
    const cell = (name) =>
      all(node, "td").find((td) => td.attribs.class === name);
    return {
      id: `product-${index + 1}`,
      title: textContent(cell("product-name")).trim(),
      price: Number(textContent(cell("product-price")).replace(/[^\d.]/g, "")),
      quantity: Number(all(node, "input")[0]?.attribs.value) || 1,
      image: normalizeURL(all(node, "img")[0].attribs.src),
    };
  });
await write("src/data/cart.json", JSON.stringify(cartItems, null, 2) + "\n");
for (const directory of ["css", "fonts", "images", "scss"])
  fs.cpSync(
    path.join(source, "assets", directory),
    path.join(root, "public/assets", directory),
    {
      recursive: true,
      filter: (filename) => !/\.(?:html?|php|map)$/i.test(filename),
    },
  );
// The supplied template references unused missing fonts and three absent shop images.
// Drop only those font-face declarations and use the supplied matching portfolio photos.
function cleanStyles(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) cleanStyles(filename);
    else if (/\.(?:css|scss)$/.test(entry.name)) {
      const content = fs
        .readFileSync(filename, "utf8")
        .replace(
          /@font-face\s*\{[^}]*fa-(?:thin-100|v4compatibility)[^}]*\}/g,
          "",
        )
        .replace(
          /images\/shop\/shop-0([123])\.jpg/g,
          "images/portfolio/0$1.webp",
        )
        .replace(/\/\*# sourceMappingURL=.*?\*\//g, "")
        .replace(/url\(\s*['"]?([^)'"\s]+)['"]?\s*\)/g, (original, url) => {
          if (/^(https?:|data:|#)/.test(url)) return original;
          const [filenamePart, suffix = ""] = url.split(/(?=[?#])/);
          const resolved = path.resolve(path.dirname(filename), filenamePart);
          const relative = path
            .relative(path.join(root, "public"), resolved)
            .split(path.sep)
            .join("/");
          const canonical = assetPaths.get(relative.toLowerCase());
          return canonical
            ? `url("${path
                .relative(
                  path.dirname(filename),
                  path.join(root, "public", canonical),
                )
                .split(path.sep)
                .join("/")}${suffix}")`
            : original;
        });
      fs.writeFileSync(filename, content);
    }
  }
}
cleanStyles(path.join(root, "public/assets"));
// Preserve the template's slider settings as typed module data, without shipping its jQuery initializer.
const main = fs.readFileSync(path.join(source, "assets/js/main.js"), "utf8");
const tree = ts.createSourceFile(
  "main.js",
  main,
  ts.ScriptTarget.Latest,
  true,
  ts.ScriptKind.JS,
);
const sliders = new Map();
function visit(node) {
  if (
    ts.isNewExpression(node) &&
    node.expression.getText(tree) === "Swiper" &&
    node.arguments?.length === 2
  ) {
    const selector = node.arguments[0];
    const options = node.arguments[1];
    if (ts.isStringLiteral(selector) && ts.isObjectLiteralExpression(options)) {
      const props = options.properties
        .filter((prop) => !["on", "thumbs"].includes(prop.name?.getText(tree)))
        .map((prop) => prop.getText(tree).replaceAll("isMobile", "false"));
      sliders.set(selector.text, `{${props.join(",\n")}}`);
    }
  }
  ts.forEachChild(node, visit);
}
visit(tree);
sliders.set(
  ".rts-imgSliderBig",
  '{ slidesPerView: 1, speed: 1000, effect: "fade" }',
);
sliders.set(
  ".rts-imgSliderSmall",
  '{ slidesPerView: 1, speed: 1000, effect: "fade" }',
);
await write(
  "src/lib/sliders.ts",
  await prettier.format(
    'import type { SwiperOptions } from "swiper/types";\nexport const sliderOptions: Record<string, SwiperOptions> = {' +
      [...sliders]
        .map(([selector, options]) => `${q(selector)}: ${options}`)
        .join(",\n") +
      "};",
    { parser: "typescript" },
  ),
);
console.log(
  `Converted ${files.length} pages into native routes and ${components.size} reusable TSX sections.`,
);
