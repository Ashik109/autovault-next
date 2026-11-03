import { Suspense, type ReactNode } from "react";
import LoaderWrapper from "@/components/sections/LoaderWrapper";
import SearchInput from "@/components/sections/SearchInput";
import Overlay from "@/components/sections/Overlay";
import ProgressWrap from "@/components/sections/ProgressWrap";
import HeaderThree from "@/components/sections/HeaderThree";
import AboutCta from "@/components/sections/AboutCta";
import AboutFooter from "@/components/sections/AboutFooter";
import MobileMenu from "@/components/sections/MobileMenu";

function DetailSkeleton() {
  return (
    <section
      className="detail-skeleton rts-section-gap"
      aria-busy="true"
      aria-label="Loading details"
    >
      <div className="container">
        <div className="detail-skeleton-title" />
        <div className="detail-skeleton-grid">
          <div className="detail-skeleton-image" />
          <div className="detail-skeleton-info">
            <div />
            <div />
            <div />
          </div>
        </div>
        <p role="status">Loading details…</p>
      </div>
    </section>
  );
}

// This shell is independent of params, so every slug can share its prefetch.
export default function DetailShell({ children }: { children: ReactNode }) {
  return (
    <div data-autovault-page>
      <LoaderWrapper />
      <SearchInput />
      <Overlay />
      <ProgressWrap />
      <div className="rts-wrapper">
        <div className="rts-wrapper-inner">
          <HeaderThree />
          <Suspense fallback={<DetailSkeleton />}>{children}</Suspense>
          <AboutCta />
        </div>
      </div>
      <AboutFooter />
      <MobileMenu />
    </div>
  );
}
