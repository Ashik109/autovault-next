import LoaderWrapper from "@/components/sections/LoaderWrapper";
import SearchInput from "@/components/sections/SearchInput";
import Overlay from "@/components/sections/Overlay";
import ProgressWrap from "@/components/sections/ProgressWrap";
import HeaderThree from "@/components/sections/HeaderThree";
import PricingBreadcrumb from "@/components/sections/PricingBreadcrumb";
import PricingPricing from "@/components/sections/PricingPricing";
import CalculatorCounter from "@/components/sections/CalculatorCounter";
import CalculatorBrand from "@/components/sections/CalculatorBrand";
import AboutCta from "@/components/sections/AboutCta";
import AboutFooter from "@/components/sections/AboutFooter";
import MobileMenu from "@/components/sections/MobileMenu";
import PageEffects from "@/components/PageEffects";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Pricing | AutoVault" };
export default function PricingPage() {
  return (
    <div data-autovault-page>
      <PageEffects bodyClass="with-sidebar" />
      <LoaderWrapper />

      <SearchInput />

      <Overlay />

      <ProgressWrap />

      <div className="rts-wrapper">
        <div className="rts-wrapper-inner">
          <HeaderThree />

          <PricingBreadcrumb />

          <PricingPricing />

          <CalculatorCounter />

          <CalculatorBrand />

          <AboutCta />
        </div>
      </div>

      <AboutFooter />

      <MobileMenu />
    </div>
  );
}
