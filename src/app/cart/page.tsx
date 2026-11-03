import ShoppingCart from "@/components/ShoppingCart";
import LoaderWrapper from "@/components/sections/LoaderWrapper";
import SearchInput from "@/components/sections/SearchInput";
import Overlay from "@/components/sections/Overlay";
import ProgressWrap from "@/components/sections/ProgressWrap";
import HeaderThree from "@/components/sections/HeaderThree";
import CartBreadcrumb from "@/components/sections/CartBreadcrumb";
import AboutFooter from "@/components/sections/AboutFooter";
import MobileMenu from "@/components/sections/MobileMenu";
import PageEffects from "@/components/PageEffects";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Cart | AutoVault" };
export default function CartPage() {
  return (
    <div data-autovault-page>
      <PageEffects bodyClass="cart-page" />
      <LoaderWrapper />

      <SearchInput />

      <Overlay />

      <ProgressWrap />

      <div className="rts-wrapper">
        <div className="rts-wrapper-inner">
          <HeaderThree />

          <CartBreadcrumb />

          <main className="ms-main">
            <ShoppingCart />
          </main>
        </div>

        <AboutFooter />

        <MobileMenu />
      </div>
    </div>
  );
}
