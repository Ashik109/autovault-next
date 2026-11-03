import Link from "next/link";
export default function CarDealerDetailsBreadcrumbAreaWrapper() {
  return (
    <div className="breadcrumb-area-wrapper">
      <div className="left">
        <div className="nav-bread-crumb mb--25">
          <Link prefetch={false} href="/">
            {"Home"}
          </Link>

          <a href="#" className="current">
            {"Dealar"}
          </a>
        </div>

        <h1 className="title">{"Car Toys"}</h1>

        <ul className="feature-area dealer">
          <li>
            <img src="/assets/images/portfolio/feature-icon/17.svg" alt="" />

            <a href="tel:+12505550199">{" +12505550199 "}</a>
          </li>

          <li>
            <img src="/assets/images/portfolio/feature-icon/18.svg" alt="" />

            <a href="mailto:autovault@gmail.com">{"Autovault@gmail.com"}</a>
          </li>

          <li>
            <img src="/assets/images/portfolio/feature-icon/19.svg" alt="" />
            {" M5T 2L9 Toronto, Canada "}
          </li>
        </ul>
      </div>
    </div>
  );
}
