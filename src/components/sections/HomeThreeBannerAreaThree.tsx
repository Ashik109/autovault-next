import TemplateForm from "@/components/TemplateForm";
export default function HomeThreeBannerAreaThree() {
  return (
    <section className="rts-banner-area-three">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="section-title-area">
              <p
                className="sub-title wow fadeInUp"
                data-wow-delay=".1s"
                data-wow-duration=".8s"
              >
                {"Shop With Confidence – Quality Vehicles"}
              </p>

              <h1 className="section-title wow move-right">
                {"Where Meets the Road: Discover Next "}
                <span>{"Car"}</span>
                {" Today "}
              </h1>
            </div>
          </div>

          <div className="col-lg-5">
            <p className="right-desc">
              {
                " Welcome to Autovault where innovation drives every journey. Discover a range of designed to elevate your driving experience. "
              }
            </p>
          </div>

          <div className="col-lg-12">
            <div className="select-inner">
              <div
                className="select-area-down wow fadeInUp"
                data-wow-delay=".8s"
                data-wow-duration="1s"
              >
                <TemplateForm acceptCharset="utf-8" context="/home-three">
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
                  context="/home-three"
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
                  context="/home-three"
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

                <button
                  type="submit"
                  className="rts-btn radius-small icon btn-primary"
                >
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
            </div>
          </div>
        </div>
      </div>

      <div className="banner-hero">
        <img
          className="wow slideInRight"
          data-wow-delay=".5s"
          data-wow-duration="2s"
          src="/assets/images/portfolio/10.webp"
          width="1555"
          alt=""
        />
      </div>
    </section>
  );
}
