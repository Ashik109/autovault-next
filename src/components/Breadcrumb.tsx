import Link from "next/link";

export default function Breadcrumb({
  title,
  className = "rts-breadcrumb-area portfolio jarallax",
}: {
  title: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-area-wrapper">
              <h1 className="title">{title}</h1>
              <div className="nav-bread-crumb">
                <Link href="/">Home</Link>
                <span className="current">{title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
