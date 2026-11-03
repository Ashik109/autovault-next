import LoaderWrapper from "@/components/sections/LoaderWrapper";
import SearchInput from "@/components/sections/SearchInput";
import Overlay from "@/components/sections/Overlay";
import ProgressWrap from "@/components/sections/ProgressWrap";
import HeaderTwo from "@/components/sections/HeaderTwo";
import HomeTwoBanner from "@/components/sections/HomeTwoBanner";
import HomeTwoAbout from "@/components/sections/HomeTwoAbout";
import HomeTwoCategoryArea2 from "@/components/sections/HomeTwoCategoryArea2";
import HomeTwoPortfolioArea2 from "@/components/sections/HomeTwoPortfolioArea2";
import CalculatorCounter from "@/components/sections/CalculatorCounter";
import HomeTwoWhyChooseUs2 from "@/components/sections/HomeTwoWhyChooseUs2";
import HomeTwoBrand from "@/components/sections/HomeTwoBrand";
import HomeTwoPopularCar from "@/components/sections/HomeTwoPopularCar";
import HomeTwoTestimonials from "@/components/sections/HomeTwoTestimonials";
import HomeTwoAppDownload from "@/components/sections/HomeTwoAppDownload";
import HomeTwoNewsletter from "@/components/sections/HomeTwoNewsletter";
import HomeTwoFooter from "@/components/sections/HomeTwoFooter";
import MobileMenu from "@/components/sections/MobileMenu";
import PageEffects from "@/components/PageEffects";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Unleash the Road: Discover Your Perfect Cars Ride Today | AutoVault",
};
export default function HomeTwoPage() {
  return (
    <div data-autovault-page>
      <PageEffects bodyClass="home-two" />
      <LoaderWrapper />

      <SearchInput />

      <Overlay />

      <ProgressWrap />

      <div className="rts-wrapper">
        <div className="rts-wrapper-inner">
          <HeaderTwo />

          <HomeTwoBanner />

          <HomeTwoAbout />

          <HomeTwoCategoryArea2 />

          <HomeTwoPortfolioArea2 />

          <CalculatorCounter />

          <HomeTwoWhyChooseUs2 />

          <HomeTwoBrand />

          <HomeTwoPopularCar />

          <HomeTwoTestimonials />

          <HomeTwoAppDownload />

          <HomeTwoNewsletter />
        </div>
      </div>

      <HomeTwoFooter />

      <MobileMenu />
    </div>
  );
}
