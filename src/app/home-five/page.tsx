import LoaderWrapper from "@/components/sections/LoaderWrapper";
import SearchInput from "@/components/sections/SearchInput";
import Overlay from "@/components/sections/Overlay";
import ProgressWrap from "@/components/sections/ProgressWrap";
import HeaderFive from "@/components/sections/HeaderFive";
import HomeFiveBannerSliderArea2 from "@/components/sections/HomeFiveBannerSliderArea2";
import HomeFiveAbout from "@/components/sections/HomeFiveAbout";
import HomeFiveWhyChooseUs3 from "@/components/sections/HomeFiveWhyChooseUs3";
import HomeFiveService from "@/components/sections/HomeFiveService";
import HomeFivePricing from "@/components/sections/HomeFivePricing";
import HomeFiveStatisticsArea2 from "@/components/sections/HomeFiveStatisticsArea2";
import HomeFiveBrand from "@/components/sections/HomeFiveBrand";
import HomeFiveProject from "@/components/sections/HomeFiveProject";
import HomeFiveTestimonials from "@/components/sections/HomeFiveTestimonials";
import HomeFiveTeam from "@/components/sections/HomeFiveTeam";
import HomeFiveContact from "@/components/sections/HomeFiveContact";
import HomeFiveFooter from "@/components/sections/HomeFiveFooter";
import MobileMenu2 from "@/components/sections/MobileMenu2";
import PageEffects from "@/components/PageEffects";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Clean with Our Exclusive Car Wash | AutoVault",
};
export default function HomeFivePage() {
  return (
    <div data-autovault-page>
      <PageEffects bodyClass="" />
      <LoaderWrapper />

      <SearchInput />

      <Overlay />

      <ProgressWrap />

      <div className="rts-wrapper">
        <div className="rts-wrapper-inner">
          <HeaderFive />

          <HomeFiveBannerSliderArea2 />

          <HomeFiveAbout />

          <HomeFiveWhyChooseUs3 />

          <HomeFiveService />

          <HomeFivePricing />

          <HomeFiveStatisticsArea2 />

          <HomeFiveBrand />

          <HomeFiveProject />

          <HomeFiveTestimonials />

          <HomeFiveTeam />

          <HomeFiveContact />
        </div>
      </div>

      <HomeFiveFooter />

      <MobileMenu2 />

      <SearchInput />

      <Overlay />

      <ProgressWrap />
    </div>
  );
}
