import Link from "next/link";
export default function CalculatorBreadcrumbAreaWrapper() {
  return (
    <div className="breadcrumb-area-wrapper">
      <h1 className="title">{"Car Loan Calculator"}</h1>

      <div className="nav-bread-crumb">
        <Link prefetch={false} href="/">
          {"Home"}
        </Link>

        <a href="#" className="current">
          {"Calculator"}
        </a>
      </div>
    </div>
  );
}
