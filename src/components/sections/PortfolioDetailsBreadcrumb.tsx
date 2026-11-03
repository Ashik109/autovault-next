import type { DetailRecord } from "@/data/details";
import PortfolioDetailsBreadcrumbAreaWrapper from "@/components/sections/PortfolioDetailsBreadcrumbAreaWrapper";
export default function PortfolioDetailsBreadcrumb({
  record,
}: {
  record: DetailRecord;
}) {
  return (
    <div className="rts-breadcrumb-area portfolio details jarallax">
      <div className="container">
        <PortfolioDetailsBreadcrumbAreaWrapper record={record} />
      </div>
    </div>
  );
}
