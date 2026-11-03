import type { DetailRecord } from "@/data/details";
import CarDealerDetailsBreadcrumbAreaWrapper from "@/components/sections/CarDealerDetailsBreadcrumbAreaWrapper";
export default function CarDealerDetailsBreadcrumb({
  record,
}: {
  record: DetailRecord;
}) {
  return (
    <div className="rts-breadcrumb-area portfolio-details2 jarallax pt--0">
      <div className="container">
        <CarDealerDetailsBreadcrumbAreaWrapper record={record} />

        <div className="brand-image-area">
          <img src={record.image} alt={record.title} />
        </div>
      </div>
    </div>
  );
}
