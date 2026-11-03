import type { Metadata } from "next";
import "swiper/css/bundle";
import "jarallax/dist/jarallax.css";
import "lenis/dist/lenis.css";
import "aos/dist/aos.css";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutoVault | Car Dealership",
  description:
    "Find your next car with AutoVault. Explore vehicles, compare options, meet our dealers and discover automotive services.",
  icons: { icon: "/assets/images/fav.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="stylesheet" href="/assets/css/plugins/plugins.css" />
        <link
          rel="stylesheet"
          href="/assets/css/plugins/magnifying-popup.css"
        />
        <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/fonts/rt-icon.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body className="loaded">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
