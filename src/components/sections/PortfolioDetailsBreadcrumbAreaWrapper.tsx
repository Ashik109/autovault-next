import type { DetailRecord } from "@/data/details";
import Link from "next/link";
export default function PortfolioDetailsBreadcrumbAreaWrapper({
  record,
}: {
  record: DetailRecord;
}) {
  return (
    <div className="breadcrumb-area-wrapper">
      <div className="left">
        <h1 className="title">{record.title}</h1>

        <ul className="feature-area">
          <li>
            <img src="/assets/images/portfolio/feature-icon/05.svg" alt="" />
            {record.mileage}
          </li>

          <li>
            <img src="/assets/images/portfolio/feature-icon/06.svg" alt="" />
            {record.fuel}
          </li>

          <li>
            <img src="/assets/images/portfolio/feature-icon/07.svg" alt="" />
            {record.transmission}
          </li>

          <li>
            <img src="/assets/images/portfolio/feature-icon/08.svg" alt="" />
            {record.seats}
          </li>
        </ul>
      </div>

      <div className="nav-bread-crumb">
        <Link prefetch={false} href="/">
          {"Home"}
        </Link>

        <a href="#" className="current">
          {"Cars"}
        </a>
      </div>
    </div>
  );
}
