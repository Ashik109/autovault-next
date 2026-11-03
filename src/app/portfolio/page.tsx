import LoaderWrapper from "@/components/sections/LoaderWrapper";
import SearchInput from "@/components/sections/SearchInput";
import Overlay from "@/components/sections/Overlay";
import ProgressWrap from "@/components/sections/ProgressWrap";
import HeaderThree from "@/components/sections/HeaderThree";
import Portfolio2Breadcrumb from "@/components/sections/Portfolio2Breadcrumb";
import PortfolioSelect from "@/components/sections/PortfolioSelect";
import PortfolioPortfolio from "@/components/sections/PortfolioPortfolio";
import AboutCta from "@/components/sections/AboutCta";
import AboutFooter from "@/components/sections/AboutFooter";
import MobileMenu from "@/components/sections/MobileMenu";
import PageEffects from "@/components/PageEffects";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Cars | AutoVault" };
export default function PortfolioPage() {
  return (
    <div data-autovault-page>
      <PageEffects bodyClass="" />
      <LoaderWrapper />

      <SearchInput />

      <Overlay />

      <ProgressWrap />

      <div className="rts-wrapper">
        <div className="rts-wrapper-inner">
          <HeaderThree />

          <Portfolio2Breadcrumb />

          <PortfolioSelect />

          <PortfolioPortfolio />

          <AboutCta />
        </div>
      </div>

      <AboutFooter />

      <MobileMenu />
    </div>
  );
}
