import type { DetailRecord } from "@/data/details";
import PortfolioDetails2BreadcrumbAreaWrapper from "@/components/sections/PortfolioDetails2BreadcrumbAreaWrapper";
export default function PortfolioDetails2Breadcrumb({
  record,
}: {
  record: DetailRecord;
}) {
  return (
    <div className="rts-breadcrumb-area portfolio-details2 jarallax">
      <div className="container">
        <PortfolioDetails2BreadcrumbAreaWrapper record={record} />
      </div>
    </div>
  );
}
