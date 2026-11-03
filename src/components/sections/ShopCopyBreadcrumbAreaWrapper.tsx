import Link from "next/link";
export default function ShopCopyBreadcrumbAreaWrapper() {
  return (
    <div className="breadcrumb-area-wrapper">
      <h1 className="title">{"Shop"}</h1>

      <div className="nav-bread-crumb">
        <Link prefetch={false} href="/">
          {"Home"}
        </Link>

        <a href="#" className="current">
          {"Shop"}
        </a>
      </div>
    </div>
  );
}
