import LoaderWrapper from "@/components/sections/LoaderWrapper";
import SearchInput from "@/components/sections/SearchInput";
import Overlay from "@/components/sections/Overlay";
import ProgressWrap from "@/components/sections/ProgressWrap";
import HeaderThree from "@/components/sections/HeaderThree";
import SoldCarBreadcrumb from "@/components/sections/SoldCarBreadcrumb";
import SoldCarPortfolio from "@/components/sections/SoldCarPortfolio";
import AboutBrand from "@/components/sections/AboutBrand";
import AboutCta from "@/components/sections/AboutCta";
import AboutFooter from "@/components/sections/AboutFooter";
import MobileMenu from "@/components/sections/MobileMenu";
import PageEffects from "@/components/PageEffects";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Sold | AutoVault" };
export default function SoldCarPage() {
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

          <SoldCarBreadcrumb />

          <SoldCarPortfolio />

          <AboutBrand />

          <AboutCta />
        </div>
      </div>

      <AboutFooter />

      <MobileMenu />
    </div>
  );
}
