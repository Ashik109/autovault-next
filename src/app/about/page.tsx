import LoaderWrapper from "@/components/sections/LoaderWrapper";
import SearchInput from "@/components/sections/SearchInput";
import Overlay from "@/components/sections/Overlay";
import ProgressWrap from "@/components/sections/ProgressWrap";
import HeaderThree from "@/components/sections/HeaderThree";
import AboutBreadcrumb from "@/components/sections/AboutBreadcrumb";
import AboutAbout from "@/components/sections/AboutAbout";
import AboutCounterAreaTwo from "@/components/sections/AboutCounterAreaTwo";
import AboutTestimonials from "@/components/sections/AboutTestimonials";
import AboutTeam from "@/components/sections/AboutTeam";
import AboutBrand from "@/components/sections/AboutBrand";
import AboutCta from "@/components/sections/AboutCta";
import AboutFooter from "@/components/sections/AboutFooter";
import MobileMenu from "@/components/sections/MobileMenu";
import PageEffects from "@/components/PageEffects";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "About | AutoVault" };
export default function AboutPage() {
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

          <AboutBreadcrumb />

          <AboutAbout />

          <AboutCounterAreaTwo />

          <AboutTestimonials />

          <AboutTeam />

          <AboutBrand />

          <AboutCta />
        </div>
      </div>

      <AboutFooter />

      <MobileMenu />
    </div>
  );
}
