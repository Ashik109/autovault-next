import LoaderWrapper from "@/components/sections/LoaderWrapper";
import SearchInput from "@/components/sections/SearchInput";
import Overlay from "@/components/sections/Overlay";
import ProgressWrap from "@/components/sections/ProgressWrap";
import HeaderOne from "@/components/sections/HeaderOne";
import HomeSevenBanner from "@/components/sections/HomeSevenBanner";
import HomeEightCategory from "@/components/sections/HomeEightCategory";
import HomeEightPortfolio from "@/components/sections/HomeEightPortfolio";
import HomeEightAbout from "@/components/sections/HomeEightAbout";
import HomeEightVideo from "@/components/sections/HomeEightVideo";
import HomeEightBrand from "@/components/sections/HomeEightBrand";
import HomeEightWhyChooseUs from "@/components/sections/HomeEightWhyChooseUs";
import HomeEightFeature from "@/components/sections/HomeEightFeature";
import HomeEightTestimonials from "@/components/sections/HomeEightTestimonials";
import HomeEightBlog from "@/components/sections/HomeEightBlog";
import HomeEightCta from "@/components/sections/HomeEightCta";
import AboutFooter from "@/components/sections/AboutFooter";
import MobileMenu from "@/components/sections/MobileMenu";
import PageEffects from "@/components/PageEffects";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Mazda MX-5 Miata | AutoVault" };
export default function HomeSevenPage() {
  return (
    <div data-autovault-page>
      <PageEffects bodyClass="" />
      <LoaderWrapper />

      <SearchInput />

      <Overlay />

      <ProgressWrap />

      <div className="rts-wrapper">
        <div className="rts-wrapper-inner">
          <HeaderOne />

          <HomeSevenBanner />

          <HomeEightCategory />

          <HomeEightPortfolio />

          <HomeEightAbout />

          <HomeEightVideo />

          <HomeEightBrand />

          <HomeEightWhyChooseUs />

          <HomeEightFeature />

          <HomeEightTestimonials />

          <HomeEightBlog />

          <HomeEightCta />
        </div>
      </div>

      <AboutFooter />

      <MobileMenu />
    </div>
  );
}
