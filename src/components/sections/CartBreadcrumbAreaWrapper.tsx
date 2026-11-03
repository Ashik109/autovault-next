import Link from "next/link";
export default function CartBreadcrumbAreaWrapper() {
  return (
    <div className="breadcrumb-area-wrapper">
      <h1 className="title">{"Cart"}</h1>

      <div className="nav-bread-crumb">
        <Link prefetch={false} href="/">
          {"Home"}
        </Link>

        <a href="#" className="current">
          {"Cart"}
        </a>
      </div>
    </div>
  );
}
