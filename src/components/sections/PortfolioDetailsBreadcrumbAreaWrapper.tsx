import Link from "next/link";
export default function PortfolioDetailsBreadcrumbAreaWrapper() {
  return (
    <div className="breadcrumb-area-wrapper">
      <div className="left">
        <h1 className="title">{"Mercedes-Benz E-Class"}</h1>

        <ul className="feature-area">
          <li>
            <img src="/assets/images/portfolio/feature-icon/05.svg" alt="" />
            {" 100 Miles "}
          </li>

          <li>
            <img src="/assets/images/portfolio/feature-icon/06.svg" alt="" />
            {" Petrol "}
          </li>

          <li>
            <img src="/assets/images/portfolio/feature-icon/07.svg" alt="" />
            {" Autometic "}
          </li>

          <li>
            <img src="/assets/images/portfolio/feature-icon/08.svg" alt="" />
            {" Person "}
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
