import LoaderWrapper from "@/components/sections/LoaderWrapper";
import SearchInput from "@/components/sections/SearchInput";
import Overlay from "@/components/sections/Overlay";
import ProgressWrap from "@/components/sections/ProgressWrap";
import HeaderSix from "@/components/sections/HeaderSix";
import HomeSixBannerSliderArea3 from "@/components/sections/HomeSixBannerSliderArea3";
import HomeSixBrand from "@/components/sections/HomeSixBrand";
import HomeSixWhyChooseUs4 from "@/components/sections/HomeSixWhyChooseUs4";
import HomeSixService from "@/components/sections/HomeSixService";
import HomeSixWorkingProcess from "@/components/sections/HomeSixWorkingProcess";
import HomeSixPortfolio from "@/components/sections/HomeSixPortfolio";
import HomeSixPricing from "@/components/sections/HomeSixPricing";
import HomeSixVideo from "@/components/sections/HomeSixVideo";
import AboutCounterAreaTwo from "@/components/sections/AboutCounterAreaTwo";
import HomeSixAward from "@/components/sections/HomeSixAward";
import HomeSixTestimonials from "@/components/sections/HomeSixTestimonials";
import HomeSixTeam from "@/components/sections/HomeSixTeam";
import HomeSixFaq from "@/components/sections/HomeSixFaq";
import HomeSixFooter from "@/components/sections/HomeSixFooter";
import MobileMenu2 from "@/components/sections/MobileMenu2";
import PageEffects from "@/components/PageEffects";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Fast, Affordable And Expert Auto Car Repair | AutoVault",
};
export default function HomeSixPage() {
  return (
    <div data-autovault-page>
      <PageEffects bodyClass="home-six" />
      <LoaderWrapper />

      <SearchInput />

      <Overlay />

      <ProgressWrap />

      <div className="rts-wrapper">
        <div className="rts-wrapper-inner">
          <HeaderSix />

          <HomeSixBannerSliderArea3 />

          <HomeSixBrand />

          <HomeSixWhyChooseUs4 />

          <HomeSixService />

          <HomeSixWorkingProcess />

          <HomeSixPortfolio />

          <HomeSixPricing />

          <HomeSixVideo />

          <AboutCounterAreaTwo />

          <HomeSixAward />

          <HomeSixTestimonials />

          <HomeSixTeam />

          <HomeSixFaq />
        </div>
      </div>

      <HomeSixFooter />

      <MobileMenu2 />

      <LoaderWrapper />

      <SearchInput />

      <Overlay />

      <ProgressWrap />
    </div>
  );
}
