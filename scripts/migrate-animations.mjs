import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import ts from "typescript";
import prettier from "prettier";

const animations = {
  fadeIn: "fade",
  fadeInUp: "fade-up",
  fadeInLeft: "fade-right",
  fadeInRight: "fade-left",
  slideInLeft: "slide-right",
  slideInRight: "slide-left",
  zoomIn: "zoom-in",
  scaleIn: "zoom-in",
  scaleOut: "zoom-out",
  "move-right": "move-right",
};
const milliseconds = (value) =>
  String(
    Math.round(
      (Number.parseFloat(value) * (value.endsWith("ms") ? 1 : 1000)) / 50,
    ) * 50,
  );

export async function migrateAnimations(root = process.cwd()) {
  let count = 0;
  async function visitDirectory(directory) {
    for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
      const filename = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        await visitDirectory(filename);
        continue;
      }
      if (!filename.endsWith(".tsx")) continue;
      const original = await fs.readFile(filename, "utf8");
      let source = original.replace(
        /\n[ \t]*\n(?=[ \t]+data-aos(?:-[\w]+)?=)/g,
        "\n",
      );
      const tree = ts.createSourceFile(
        filename,
        source,
        ts.ScriptTarget.Latest,
        true,
        ts.ScriptKind.TSX,
      );
      const edits = [];
      function visit(node) {
        if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
          const attributes = node.attributes.properties.filter(
            ts.isJsxAttribute,
          );
          const get = (name) =>
            attributes.find((attr) => attr.name.getText(tree) === name);
          const classes = get("className");
          const tokens =
            classes && ts.isStringLiteral(classes.initializer)
              ? classes.initializer.text.split(/\s+/)
              : [];
          if (tokens.includes("wow") || get("data-sal")) {
            const animationClass = tokens.find((token) => animations[token]);
            const animation = animationClass
              ? animations[animationClass]
              : "fade-up";
            if (tokens.includes("wow")) {
              const remaining = tokens.filter(
                (token) =>
                  token !== "wow" &&
                  (!animations[token] || token === "move-right"),
              );
              edits.push({
                start: classes.getStart(tree),
                end: classes.end,
                text: `className=${JSON.stringify(remaining.join(" "))}`,
              });
            }
            const newAttributes = [`data-aos=${JSON.stringify(animation)}`];
            for (const [old, next] of [
              ["data-wow-delay", "data-aos-delay"],
              ["data-wow-duration", "data-aos-duration"],
              ["data-sal-delay", "data-aos-delay"],
              ["data-sal-duration", "data-aos-duration"],
            ]) {
              const attribute = get(old);
              if (!attribute) continue;
              const value = attribute.initializer.text;
              newAttributes.push(
                `${next}=${JSON.stringify(old.startsWith("data-wow") ? milliseconds(value) : value)}`,
              );
              edits.push({
                start: attribute.getStart(tree),
                end: attribute.end,
                text: "",
              });
            }
            const sal = get("data-sal");
            if (sal)
              edits.push({ start: sal.getStart(tree), end: sal.end, text: "" });
            edits.push({
              start: node.attributes.end,
              end: node.attributes.end,
              text: " " + newAttributes.join(" "),
            });
            count++;
          }
        }
        ts.forEachChild(node, visit);
      }
      visit(tree);
      if (!edits.length && source === original) continue;
      for (const edit of edits.sort((a, b) => b.start - a.start))
        source =
          source.slice(0, edit.start) + edit.text + source.slice(edit.end);
      source = source.replace(
        /\n[ \t]*\n(?=[ \t]+data-aos(?:-[\w]+)?=)/g,
        "\n",
      );
      await fs.writeFile(
        filename,
        await prettier.format(source, { parser: "typescript" }),
      );
    }
  }
  await visitDirectory(path.join(root, "src"));
  console.log(`Migrated ${count} reveal elements to AOS.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href)
  await migrateAnimations();
