import LoaderWrapper from "@/components/sections/LoaderWrapper";
import SearchInput from "@/components/sections/SearchInput";
import Overlay from "@/components/sections/Overlay";
import ProgressWrap from "@/components/sections/ProgressWrap";
import HeaderFour from "@/components/sections/HeaderFour";
import HomeFourBannerSlider from "@/components/sections/HomeFourBannerSlider";
import HomeFourCategoryArea2 from "@/components/sections/HomeFourCategoryArea2";
import HomeFourPortfolioArea2 from "@/components/sections/HomeFourPortfolioArea2";
import FaqBrand from "@/components/sections/FaqBrand";
import HomeFourCta from "@/components/sections/HomeFourCta";
import HomeFourWhyChooseUs3 from "@/components/sections/HomeFourWhyChooseUs3";
import HomeFourTestimonials from "@/components/sections/HomeFourTestimonials";
import HomeFourBlog from "@/components/sections/HomeFourBlog";
import HomeFourFaq from "@/components/sections/HomeFourFaq";
import HomeFourCta2 from "@/components/sections/HomeFourCta2";
import HomeFourFooter from "@/components/sections/HomeFourFooter";
import MobileMenu from "@/components/sections/MobileMenu";
import PageEffects from "@/components/PageEffects";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shop for Quality Car Parts | AutoVault",
};
export default function HomeFourPage() {
  return (
    <div data-autovault-page>
      <PageEffects bodyClass="home-four" />
      <LoaderWrapper />

      <SearchInput />

      <Overlay />

      <ProgressWrap />

      <div className="rts-wrapper">
        <div className="rts-wrapper-inner">
          <HeaderFour />

          <HomeFourBannerSlider />

          <HomeFourCategoryArea2 />

          <HomeFourPortfolioArea2 />

          <FaqBrand />

          <HomeFourCta />

          <HomeFourWhyChooseUs3 />

          <HomeFourTestimonials />

          <HomeFourBlog />

          <HomeFourFaq />

          <HomeFourCta2 />
        </div>
      </div>

      <HomeFourFooter />

      <MobileMenu />
    </div>
  );
}
