import LoaderWrapper from "@/components/sections/LoaderWrapper";
import SearchInput from "@/components/sections/SearchInput";
import Overlay from "@/components/sections/Overlay";
import ProgressWrap from "@/components/sections/ProgressWrap";
import HeaderThree2 from "@/components/sections/HeaderThree2";
import ShopCopyBreadcrumb from "@/components/sections/ShopCopyBreadcrumb";
import ShopCopyShop from "@/components/sections/ShopCopyShop";
import AboutCta from "@/components/sections/AboutCta";
import ShopCopyFooter from "@/components/sections/ShopCopyFooter";
import MobileMenu from "@/components/sections/MobileMenu";
import PageEffects from "@/components/PageEffects";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Shop | AutoVault" };
export default function ShopCopyPage() {
  return (
    <div data-autovault-page>
      <PageEffects bodyClass="" />
      <LoaderWrapper />

      <SearchInput />

      <Overlay />

      <ProgressWrap />

      <div className="rts-wrapper">
        <div className="rts-wrapper-inner">
          <HeaderThree2 />

          <ShopCopyBreadcrumb />

          <ShopCopyShop />

          <AboutCta />
        </div>
      </div>

      <ShopCopyFooter />

      <MobileMenu />
    </div>
  );
}
