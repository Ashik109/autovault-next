import LoaderWrapper from "@/components/sections/LoaderWrapper";
import SearchInput from "@/components/sections/SearchInput";
import Overlay from "@/components/sections/Overlay";
import ProgressWrap from "@/components/sections/ProgressWrap";
import HeaderThree from "@/components/sections/HeaderThree";
import HomeThreeBannerAreaThree from "@/components/sections/HomeThreeBannerAreaThree";
import HomeThreePortfolioArea2 from "@/components/sections/HomeThreePortfolioArea2";
import HomeThreeAboutAreaThree from "@/components/sections/HomeThreeAboutAreaThree";
import HomeThreeBrand from "@/components/sections/HomeThreeBrand";
import HomeThreeStatistics from "@/components/sections/HomeThreeStatistics";
import HomeThreePortfolio from "@/components/sections/HomeThreePortfolio";
import AboutTestimonials from "@/components/sections/AboutTestimonials";
import HomeThreeBlog from "@/components/sections/HomeThreeBlog";
import AboutCta from "@/components/sections/AboutCta";
import HomeThreeFooter from "@/components/sections/HomeThreeFooter";
import MobileMenu from "@/components/sections/MobileMenu";
import PageEffects from "@/components/PageEffects";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Where Meets the Road: Discover Next Car Today | AutoVault",
};
export default function HomeThreePage() {
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

          <HomeThreeBannerAreaThree />

          <HomeThreePortfolioArea2 />

          <HomeThreeAboutAreaThree />

          <HomeThreeBrand />

          <HomeThreeStatistics />

          <HomeThreePortfolio />

          <AboutTestimonials />

          <HomeThreeBlog />

          <AboutCta />
        </div>
      </div>

      <HomeThreeFooter />

      <MobileMenu />
    </div>
  );
}
