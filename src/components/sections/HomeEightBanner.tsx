import TemplateForm from "@/components/TemplateForm";
export default function HomeEightBanner() {
  return (
    <section className="rts-banner-area video-banner">
      <div className="rts-hero__video">
        <video
          loop={true}
          muted={true}
          autoPlay={true}
          src="/assets/images/portfolio/video-01.webm"
          className="appl1-hdvd-xx"
          playsInline={true}
        ></video>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-area-one bg_image position-relative">
              <div className="banner-content-area">
                <div
                  className="pre-title wow fadeInUp"
                  data-wow-delay=".2s"
                  data-wow-duration="1s"
                >
                  <span>{"Shop With Confidence – Quality Vehicles"}</span>
                </div>

                <h1
                  className="title wow fadeInUp"
                  data-wow-delay=".4s"
                  data-wow-duration="1s"
                >
                  {"Discover Our Best Deals On New And Used "}
                  <span>{"Cars"}</span>
                </h1>

                <div
                  className="select-area-down wow fadeInUp"
                  data-wow-delay=".8s"
                  data-wow-duration="1s"
                >
                  <TemplateForm acceptCharset="utf-8" context="/home-eight">
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
                    context="/home-eight"
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
                    context="/home-eight"
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
                    className="rts-btn radius-big icon btn-primary"
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
      </div>
    </section>
  );
}
