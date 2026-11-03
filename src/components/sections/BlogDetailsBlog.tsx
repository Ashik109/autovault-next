import Link from "next/link";
export default function BlogDetailsBlog() {
  return (
    <div className="rts-blog-area inner">
      <h3 className="mb--40 text-center">{"Related listings"}</h3>

      <div className="row g-5">
        <div className="col-lg-6">
          <div className="blog-wrapper">
            <div className="image-area">
              <Link prefetch={false} href="/blog-details">
                <img src="/assets/images/blog/01.webp" alt="" />
              </Link>
            </div>

            <div className="content">
              <p className="blog-meta">{"Dealership events"}</p>

              <h6>
                <Link prefetch={false} href="/blog-details">
                  {
                    "Seasonal Car Care Tips to Keep Your Vehicle Running Smoothly"
                  }
                </Link>
              </h6>

              <div className="author-date">
                <div className="person">
                  <img src="/assets/images/blog/author-01.svg" alt="" />
                  {" Jack Alexander "}
                </div>

                <div className="date">{"March 26, 2024"}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="blog-wrapper">
            <div className="image-area">
              <Link prefetch={false} href="/blog-details">
                <img src="/assets/images/blog/02.webp" alt="" />
              </Link>
            </div>

            <div className="content">
              <p className="blog-meta">{"March 26, 2024"}</p>

              <h6>
                <Link prefetch={false} href="/blog-details">
                  {"How Regular Maintenance Can Save You Thousands in Repairs"}
                </Link>
              </h6>

              <div className="author-date">
                <div className="person">
                  <img src="/assets/images/blog/author-02.svg" alt="" />
                  {" Jack Alexander "}
                </div>

                <div className="date">{"March 26, 2024"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
