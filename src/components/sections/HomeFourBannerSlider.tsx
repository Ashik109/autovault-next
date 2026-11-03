import Link from "next/link";
import TemplateForm from "@/components/TemplateForm";
export default function HomeFourBannerSlider() {
  return (
    <section className="rts-banner-slider-area">
      <div className="swiper bannerSlider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="rts-banner-wrapper bg bg-one">
              <div className="container">
                <div className="banner-inner">
                  <h2 className="section-title cw">
                    {"Shop for Quality "}
                    <br />
                    {" Car Parts"}
                  </h2>

                  <div className="button-area">
                    <Link
                      prefetch={false}
                      href="/contact"
                      className="rts-btn btn-primary radius-big"
                    >
                      {"Get Started Now"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="rts-banner-wrapper bg bg-three">
              <div className="container">
                <div className="banner-inner">
                  <h2 className="section-title cw">
                    {"Shop for Quality "}
                    <br />
                    {" Car Parts"}
                  </h2>

                  <div className="button-area">
                    <Link
                      prefetch={false}
                      href="/contact"
                      className="rts-btn btn-primary radius-big"
                    >
                      {"Get Started Now"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="rts-banner-wrapper bg bg-four">
              <div className="container">
                <div className="banner-inner">
                  <h2 className="section-title cw">
                    {"Shop for Quality "}
                    <br />
                    {" Car Parts"}
                  </h2>

                  <div className="button-area">
                    <Link
                      prefetch={false}
                      href="/contact"
                      className="rts-btn btn-primary radius-big"
                    >
                      {"Get Started Now"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="swiper-btn-area">
          <div className="swiper-btn swiper-button-prev">
            <img src="/assets/images/banner/arrow-left.svg" alt="" />
          </div>

          <div className="swiper-btn swiper-button-next">
            <img src="/assets/images/banner/arrow-right.svg" alt="" />
          </div>
        </div>
      </div>

      <div
        className="select-area-down"
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-duration="1000"
      >
        <TemplateForm acceptCharset="utf-8" context="/home-four">
          <select
            name="my_select"
            className="mySelect"
            defaultValue="2"
            aria-label="my_select"
          >
            <option value="2">{"Car Make"}</option>

            <option value="10">{"Mazda"}</option>

            <option value="1">{"Citroen"}</option>

            <option value="13">{"Honda"}</option>

            <option value="14">{"Mitsubishi"}</option>

            <option value="15">{"Peugeot"}</option>
          </select>
        </TemplateForm>

        <TemplateForm
          className="select-2"
          acceptCharset="utf-8"
          context="/home-four"
        >
          <select
            name="my_select2"
            className="my_select2"
            defaultValue="2"
            aria-label="my_select2"
          >
            <option value="2">{"Car Model"}</option>

            <option value="10">{"155"}</option>

            <option value="1">{"151"}</option>

            <option value="13">{"150"}</option>

            <option value="14">{"152"}</option>

            <option value="15">{"156"}</option>
          </select>
        </TemplateForm>

        <TemplateForm
          className="select-2"
          acceptCharset="utf-8"
          context="/home-four"
        >
          <select
            name="my_select2"
            className="my_select2"
            defaultValue="2"
            aria-label="my_select2"
          >
            <option value="2">{"Price"}</option>

            <option value="10">{"22,000$"}</option>

            <option value="1">{"27,000$"}</option>

            <option value="13">{"30,000$"}</option>

            <option value="14">{"32,000$"}</option>

            <option value="15">{"38,000$"}</option>
          </select>
        </TemplateForm>

        <button type="submit" className="rts-btn radius-big icon btn-primary">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.69 10.69L13 13M12.3333 6.68575C12.3333 9.826 9.796 12.3715 6.667 12.3715C3.53725 12.3715 1 9.826 1 6.6865C1 3.54475 3.53725 1 6.66625 1C9.796 1 12.3333 3.5455 12.3333 6.68575Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          {" Search "}
        </button>
      </div>
    </section>
  );
}
