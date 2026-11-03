import LoaderWrapper from "@/components/sections/LoaderWrapper";
import SearchInput from "@/components/sections/SearchInput";
import Overlay from "@/components/sections/Overlay";
import ProgressWrap from "@/components/sections/ProgressWrap";
import HeaderThree from "@/components/sections/HeaderThree";
import ContactBreadcrumb from "@/components/sections/ContactBreadcrumb";
import ContactContact from "@/components/sections/ContactContact";
import CalculatorCounter from "@/components/sections/CalculatorCounter";
import CalculatorBrand from "@/components/sections/CalculatorBrand";
import AboutCta from "@/components/sections/AboutCta";
import AboutFooter from "@/components/sections/AboutFooter";
import MobileMenu from "@/components/sections/MobileMenu";
import PageEffects from "@/components/PageEffects";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Get In Touch | AutoVault" };
export default function ContactPage() {
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

          <ContactBreadcrumb />

          <ContactContact />

          <div className="rts-contact-area2 rts-section-gapBottom">
            <div className="container">
              <div className="inner">
                <div className="contact-wrapper">
                  <div className="icon">
                    <img src="/assets/images/contact/01.svg" alt="" />
                  </div>

                  <h5 className="title">{"Location"}</h5>

                  <ul>
                    <li>
                      {"71-75 Shelton Street, London, Greater "}
                      <br />
                      {" London, United Kingdom, WC2H 9JQ"}
                    </li>
                  </ul>
                </div>

                <div className="contact-wrapper">
                  <div className="icon">
                    <img src="/assets/images/contact/02.svg" alt="" />
                  </div>

                  <h5 className="title">{"Email"}</h5>

                  <ul>
                    <li>
                      <a href="mailto:autovault@gmail.com">
                        {"autovault@gmail.com"}
                      </a>
                    </li>

                    <li>
                      <a href="mailto:autovaultbusiness@gmail.com">
                        {"autovaultbusiness@gmail.com"}
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="contact-wrapper">
                  <div className="icon">
                    <img src="/assets/images/contact/03.svg" alt="" />
                  </div>

                  <h5 className="title">{"Phone"}</h5>

                  <ul>
                    <li>
                      <a href="tel:+12134521505">{"+1-213-452-1505"}</a>
                    </li>

                    <li>
                      <a href="tel:+15677891559">{"+1-567-789-1559"}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <CalculatorCounter />

          <CalculatorBrand />

          <AboutCta />
        </div>
      </div>

      <AboutFooter />

      <MobileMenu />
    </div>
  );
}
