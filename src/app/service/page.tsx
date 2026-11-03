import LoaderWrapper from "@/components/sections/LoaderWrapper";
import SearchInput from "@/components/sections/SearchInput";
import Overlay from "@/components/sections/Overlay";
import ProgressWrap from "@/components/sections/ProgressWrap";
import HeaderThree from "@/components/sections/HeaderThree";
import ServiceBreadcrumb from "@/components/sections/ServiceBreadcrumb";
import ServiceService from "@/components/sections/ServiceService";
import ServiceWhyChooseUs4 from "@/components/sections/ServiceWhyChooseUs4";
import ServiceService2 from "@/components/sections/ServiceService2";
import HomeSixWorkingProcess from "@/components/sections/HomeSixWorkingProcess";
import AboutBrand from "@/components/sections/AboutBrand";
import AboutCta from "@/components/sections/AboutCta";
import AboutFooter from "@/components/sections/AboutFooter";
import MobileMenu from "@/components/sections/MobileMenu";
import PageEffects from "@/components/PageEffects";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Service | AutoVault" };
export default function ServicePage() {
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

          <ServiceBreadcrumb />

          <ServiceService />

          <ServiceWhyChooseUs4 />

          <ServiceService2 />

          <HomeSixWorkingProcess />

          <AboutBrand />

          <AboutCta />
        </div>
      </div>

      <AboutFooter />

      <MobileMenu />
    </div>
  );
}
