import Link from "next/link";
export default function Blog2BreadcrumbAreaWrapper() {
  return (
    <div className="breadcrumb-area-wrapper">
      <h1 className="title">{"Blog"}</h1>

      <div className="nav-bread-crumb">
        <Link prefetch={false} href="/">
          {"Home"}
        </Link>

        <a href="#" className="current">
          {"Blog"}
        </a>
      </div>
    </div>
  );
}
