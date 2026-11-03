import Link from "next/link";
export default function PortfolioDetails2BreadcrumbAreaWrapper() {
  return (
    <div className="breadcrumb-area-wrapper">
      <div className="left">
        <div className="nav-bread-crumb">
          <Link prefetch={false} href="/">
            {"Home"}
          </Link>

          <a href="#" className="current">
            {"Cars"}
          </a>
        </div>

        <h1 className="title">{"Mercedes-Benz E-Class"}</h1>

        <ul className="feature-area">
          <li>
            <img src="/assets/images/portfolio/feature-icon/10.svg" alt="" />
            {" 100 Miles "}
          </li>

          <li>
            <img src="/assets/images/portfolio/feature-icon/11.svg" alt="" />
            {" Petrol "}
          </li>

          <li>
            <img src="/assets/images/portfolio/feature-icon/12.svg" alt="" />
            {" Autometic "}
          </li>

          <li>
            <img src="/assets/images/portfolio/feature-icon/13.svg" alt="" />
            {" Person "}
          </li>
        </ul>
      </div>

      <div className="price-area">
        <h5>{"$1200,00"}</h5>

        <ul className="price-meta">
          <li>
            <img src="/assets/images/portfolio/calender.svg" alt="" />
            {" Feb 23, 2025"}
          </li>

          <li>
            <img src="/assets/images/portfolio/view.svg" alt="" />
            {" View"}
          </li>

          <li>
            <img src="/assets/images/portfolio/heart.svg" alt="" />
            {" Favourite"}
          </li>
        </ul>
      </div>
    </div>
  );
}
