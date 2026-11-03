import Link from "next/link";
export default function CarDealerBreadcrumbAreaWrapper() {
  return (
    <div className="breadcrumb-area-wrapper">
      <h1 className="title">{"Dealer List"}</h1>

      <div className="nav-bread-crumb">
        <Link prefetch={false} href="/">
          {"Home"}
        </Link>

        <a href="#" className="current">
          {"Dealer"}
        </a>
      </div>
    </div>
  );
}
