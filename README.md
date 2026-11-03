# AutoVault Next.js

AutoVault's complete car dealership template converted to Next.js App Router, TypeScript, Bootstrap and ordinary CSS. Tailwind is not installed.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. On Windows PowerShell, use `npm.cmd` if script execution policy blocks `npm`.

## Project structure

- `src/app/`: explicit native routes for every source page; `/` and `/home-one` share the first homepage.
- `src/components/sections/`: editable TSX sections, with identical headers, footers and sections shared between pages.
- `src/components/`: client interactions, forms, calculator, cart, order summary and saved cars.
- `src/lib/`: slider settings, loan calculation, cart and saved-car stores.
- `public/assets/`: original images, videos, fonts, Bootstrap/plugin styles and SCSS source.
- `src/data/routes.json`: source-page route inventory.

The application does not read, parse, embed or serve the original HTML files at runtime. Page content is real JSX. Internal page navigation uses Next.js links and clean URLs. The original main.js and PHP form actions are not shipped. jQuery 3 is loaded for the Nice Select plugin. No `.html` files are kept in the source or public assets. Next.js creates its normal prerendered build output under `.next/`.

## Routes

The eight homepage designs are `/`, `/home-two`, `/home-three`, `/home-four`, `/home-five`, `/home-six`, `/home-seven` and `/home-eight`. `/home-one` is an alias for `/`.

Other pages include `/about`, `/service`, `/pricing`, `/faq`, `/team`, `/contact`, `/calculator`, `/car-dealer`, `/car-dealer-details`, `/portfolio`, `/portfolio-2`, `/portfolio-3`, `/portfolio-details`, `/portfolio-details-2`, `/sold-car`, `/blog`, `/blog-2`, `/blog-details`, `/shop`, `/shop-2`, `/shop-3`, `/shop-copy`, `/shop-details`, `/cart`, `/checkout`, `/account` and `/wishlist`.

Broken source-template links to `portfolio-two`, `portfolio-three`, `single-product` and `service-details` now point to the corresponding existing Next.js pages. The source's wishlist placeholder has a working saved-cars page.

## Interactions and backend scope

Sliders, synchronized galleries, media popups, mobile navigation, search, tabs, accordions, price-range controls, counters and scroll controls initialize on client navigation and clean up when leaving a page. Nice Select uses the original dropdown styling, supports keyboard access and keeps the underlying form fields synchronized. Jarallax restores desktop background parallax; mobile and reduced-motion layouts keep static backgrounds. Both plugins initialize within the active route and are destroyed on navigation. The loan calculator includes a loan term, zero-interest handling and down-payment validation.

Cart quantities, removals and saved cars persist in browser storage. Checkout totals use the same cart. The initial cart contains the source template's sample products.

The HTML source did not include working authentication, mail delivery, newsletter delivery or payment services. These forms validate input and clearly state that the service is not connected; they do not claim to have submitted messages, created accounts, taken payments or placed orders. Connect real backend services before using those features in production. Cart/saved-car storage is local to the browser.

## Verification

```bash
npm run lint
npm run verify:project
npm run build
npm run test:e2e
```

Browser tests require Playwright Chromium (`npx playwright install chromium`) and use the production build on port 3100. They cover every route and local link, missing images/assets, hydration/runtime errors, client navigation, tabs, accordion, mobile menu, gallery, saved cars, search, range controls, calculator, persistent cart totals and contact-form behavior.

`scripts/convert-template.mjs` records the one-time conversion process. To intentionally regenerate sections from the original sibling project, run `node scripts/convert-template.mjs ../autovault`. This overwrites generated routes/sections; back up later customizations first. It is not used by development, production or builds.
