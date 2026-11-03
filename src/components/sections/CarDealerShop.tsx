import { detailPath } from "@/lib/detail-paths";
import Link from "next/link";
import TemplateForm from "@/components/TemplateForm";
export default function CarDealerShop() {
  return (
    <div className="rts-shop-area inner rts-section-gapTop">
      <div className="container">
        <div className="shop-filter-area">
          <p>{"Showing 1-9 of 19 results"}</p>

          <div className="select-area">
            <TemplateForm
              className="select-2"
              acceptCharset="utf-8"
              context="/car-dealer"
            >
              <select
                name="my_select2"
                className="my_select2"
                defaultValue="2"
                aria-label="my_select2"
              >
                <option value="2">{"Sort By Latest"}</option>

                <option value="10">{"Top"}</option>

                <option value="1">{"Price low to high"}</option>

                <option value="13">{"Price high to low"}</option>

                <option value="14">{"Best Matching"}</option>
              </select>
            </TemplateForm>
          </div>
        </div>

        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div className="dealer-wrapper">
              <div className="image-area">
                <Link prefetch={false} href={detailPath("dealer", "car-toys")}>
                  <img src="/assets/images/brand/08.webp" alt="" />
                </Link>
              </div>

              <div className="content-area">
                <h6 className="title ">
                  <Link
                    prefetch={false}
                    href={detailPath("dealer", "car-toys")}
                  >
                    {"Car Toys"}
                  </Link>
                </h6>

                <p>
                  {
                    "Our call center is available for live support Monday to Friday, 8 am - 4 pm PST."
                  }
                </p>

                <div className="button-area">
                  <Link
                    prefetch={false}
                    href={detailPath("dealer", "car-toys")}
                    className="rts-btn btn-primary radius-small"
                  >
                    {" View Details "}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="dealer-wrapper">
              <div className="image-area">
                <Link prefetch={false} href={detailPath("dealer", "club-car")}>
                  <img src="/assets/images/brand/09.webp" alt="" />
                </Link>
              </div>

              <div className="content-area">
                <h6 className="title ">
                  <Link
                    prefetch={false}
                    href={detailPath("dealer", "club-car")}
                  >
                    {"Club Car"}
                  </Link>
                </h6>

                <p>
                  {
                    "Our call center is available for live support Monday to Friday, 8 am - 4 pm PST."
                  }
                </p>

                <div className="button-area">
                  <Link
                    prefetch={false}
                    href={detailPath("dealer", "club-car")}
                    className="rts-btn btn-primary radius-small"
                  >
                    {" View Details "}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="dealer-wrapper">
              <div className="image-area">
                <Link prefetch={false} href={detailPath("dealer", "car-next")}>
                  <img src="/assets/images/brand/10.webp" alt="" />
                </Link>
              </div>

              <div className="content-area">
                <h6 className="title ">
                  <Link
                    prefetch={false}
                    href={detailPath("dealer", "car-next")}
                  >
                    {"Car Next"}
                  </Link>
                </h6>

                <p>
                  {
                    "Our call center is available for live support Monday to Friday, 8 am - 4 pm PST."
                  }
                </p>

                <div className="button-area">
                  <Link
                    prefetch={false}
                    href={detailPath("dealer", "car-next")}
                    className="rts-btn btn-primary radius-small"
                  >
                    {" View Details "}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="dealer-wrapper">
              <div className="image-area">
                <Link
                  prefetch={false}
                  href={detailPath("dealer", "ford-mustang")}
                >
                  <img src="/assets/images/brand/11.webp" alt="" />
                </Link>
              </div>

              <div className="content-area">
                <h6 className="title ">
                  <Link
                    prefetch={false}
                    href={detailPath("dealer", "ford-mustang")}
                  >
                    {"Ford Mustang"}
                  </Link>
                </h6>

                <p>
                  {
                    "Our call center is available for live support Monday to Friday, 8 am - 4 pm PST."
                  }
                </p>

                <div className="button-area">
                  <Link
                    prefetch={false}
                    href={detailPath("dealer", "ford-mustang")}
                    className="rts-btn btn-primary radius-small"
                  >
                    {" View Details "}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="dealer-wrapper">
              <div className="image-area">
                <Link
                  prefetch={false}
                  href={detailPath("dealer", "nissan-car")}
                >
                  <img src="/assets/images/brand/12.webp" alt="" />
                </Link>
              </div>

              <div className="content-area">
                <h6 className="title ">
                  <Link
                    prefetch={false}
                    href={detailPath("dealer", "nissan-car")}
                  >
                    {"Nissan Car"}
                  </Link>
                </h6>

                <p>
                  {
                    "Our call center is available for live support Monday to Friday, 8 am - 4 pm PST."
                  }
                </p>

                <div className="button-area">
                  <Link
                    prefetch={false}
                    href={detailPath("dealer", "nissan-car")}
                    className="rts-btn btn-primary radius-small"
                  >
                    {" View Details "}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="dealer-wrapper">
              <div className="image-area">
                <Link
                  prefetch={false}
                  href={detailPath("dealer", "ticket-car-accor-service")}
                >
                  <img src="/assets/images/brand/13.webp" alt="" />
                </Link>
              </div>

              <div className="content-area">
                <h6 className="title ">
                  <Link
                    prefetch={false}
                    href={detailPath("dealer", "ticket-car-accor-service")}
                  >
                    {"Ticket Car Accor Service"}
                  </Link>
                </h6>

                <p>
                  {
                    "Our call center is available for live support Monday to Friday, 8 am - 4 pm PST."
                  }
                </p>

                <div className="button-area">
                  <Link
                    prefetch={false}
                    href={detailPath("dealer", "ticket-car-accor-service")}
                    className="rts-btn btn-primary radius-small"
                  >
                    {" View Details "}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="dealer-wrapper">
              <div className="image-area">
                <Link
                  prefetch={false}
                  href={detailPath("dealer", "be-car-care-aware")}
                >
                  <img src="/assets/images/brand/14.webp" alt="" />
                </Link>
              </div>

              <div className="content-area">
                <h6 className="title ">
                  <Link
                    prefetch={false}
                    href={detailPath("dealer", "be-car-care-aware")}
                  >
                    {"Be Car Care Aware"}
                  </Link>
                </h6>

                <p>
                  {
                    "Our call center is available for live support Monday to Friday, 8 am - 4 pm PST."
                  }
                </p>

                <div className="button-area">
                  <Link
                    prefetch={false}
                    href={detailPath("dealer", "be-car-care-aware")}
                    className="rts-btn btn-primary radius-small"
                  >
                    {" View Details "}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="dealer-wrapper">
              <div className="image-area">
                <Link
                  prefetch={false}
                  href={detailPath("dealer", "neptuno-car-s-l")}
                >
                  <img src="/assets/images/brand/15.webp" alt="" />
                </Link>
              </div>

              <div className="content-area">
                <h6 className="title ">
                  <Link
                    prefetch={false}
                    href={detailPath("dealer", "neptuno-car-s-l")}
                  >
                    {"Neptuno Car S.L"}
                  </Link>
                </h6>

                <p>
                  {
                    "Our call center is available for live support Monday to Friday, 8 am - 4 pm PST."
                  }
                </p>

                <div className="button-area">
                  <Link
                    prefetch={false}
                    href={detailPath("dealer", "neptuno-car-s-l")}
                    className="rts-btn btn-primary radius-small"
                  >
                    {" View Details "}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="dealer-wrapper">
              <div className="image-area">
                <Link prefetch={false} href={detailPath("dealer", "audi-car")}>
                  <img src="/assets/images/brand/16.webp" alt="" />
                </Link>
              </div>

              <div className="content-area">
                <h6 className="title ">
                  <Link
                    prefetch={false}
                    href={detailPath("dealer", "audi-car")}
                  >
                    {"Audi Car"}
                  </Link>
                </h6>

                <p>
                  {
                    "Our call center is available for live support Monday to Friday, 8 am - 4 pm PST."
                  }
                </p>

                <div className="button-area">
                  <Link
                    prefetch={false}
                    href={detailPath("dealer", "audi-car")}
                    className="rts-btn btn-primary radius-small"
                  >
                    {" View Details "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="#" className="rts-btn load-more-btn btn-border">
          {"Load More"}
        </a>
      </div>
    </div>
  );
}
