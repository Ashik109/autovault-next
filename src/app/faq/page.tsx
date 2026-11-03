import LoaderWrapper from "@/components/sections/LoaderWrapper";
import SearchInput from "@/components/sections/SearchInput";
import Overlay from "@/components/sections/Overlay";
import ProgressWrap from "@/components/sections/ProgressWrap";
import HeaderThree from "@/components/sections/HeaderThree";
import FaqBreadcrumb from "@/components/sections/FaqBreadcrumb";
import FaqFaq from "@/components/sections/FaqFaq";
import FaqBrand from "@/components/sections/FaqBrand";
import FaqVideo from "@/components/sections/FaqVideo";
import AboutCta from "@/components/sections/AboutCta";
import AboutFooter from "@/components/sections/AboutFooter";
import MobileMenu from "@/components/sections/MobileMenu";
import PageEffects from "@/components/PageEffects";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Faq | AutoVault" };
export default function FaqPage() {
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

          <FaqBreadcrumb />

          <FaqFaq />

          <FaqBrand />

          <FaqVideo />

          <AboutCta />
        </div>
      </div>

      <AboutFooter />

      <MobileMenu />
    </div>
  );
}
