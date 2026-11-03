import Link from "next/link";
import TemplateForm from "@/components/TemplateForm";
export default function HomeTwoBanner() {
  return (
    <section className="rts-banner-area two bg_image_two jarallax">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="banner-area-two">
              <div className="banner-content-area">
                <h1
                  className="title"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                >
                  {" Unleash the Road: Discover Your Perfect "}
                  <span>{"Cars"}</span>
                  {" Ride Today"}
                </h1>

                <h2
                  className="price"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="1000"
                >
                  <span className="currency">{"$"}</span>
                  {"122 "}
                  <span className="period">{"/ Month"}</span>
                </h2>

                <Link
                  prefetch={false}
                  href="/about"
                  className="rts-btn radius-small btn-primary"
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-duration="1000"
                >
                  {"Learn More"}
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div
              className="banner-right-side-two"
              data-aos="fade-left"
              data-aos-delay="800"
              data-aos-duration="1000"
            >
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="new-car-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#new-car"
                    type="button"
                    role="tab"
                    aria-controls="new-car"
                    aria-selected="true"
                  >
                    {"New Car"}
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="used-car-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#used-car"
                    type="button"
                    role="tab"
                    aria-controls="used-car"
                    aria-selected="false"
                  >
                    {"Used Car"}
                  </button>
                </li>
              </ul>

              <div
                className="tab-pane fade show active"
                id="new-car"
                role="tabpanel"
                aria-labelledby="new-car-tab"
              >
                <div className="select-area-down">
                  <TemplateForm acceptCharset="utf-8" context="/home-two">
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
                    context="/home-two"
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
                    context="/home-two"
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

                  <TemplateForm
                    className="select-2"
                    acceptCharset="utf-8"
                    context="/home-two"
                  >
                    <select
                      name="my_select2"
                      className="my_select2"
                      defaultValue="2"
                      aria-label="my_select2"
                    >
                      <option value="2">{"Location"}</option>

                      <option value="10">{"USA"}</option>

                      <option value="1">{"UK"}</option>

                      <option value="13">{"Canada"}</option>

                      <option value="14">{"Australia"}</option>

                      <option value="15">{"China"}</option>
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

              <div
                className="tab-pane fade"
                id="used-car"
                role="tabpanel"
                aria-labelledby="used-car-tab"
              >
                <div className="select-area-down">
                  <TemplateForm acceptCharset="utf-8" context="/home-two">
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
                    context="/home-two"
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
                    context="/home-two"
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

                  <TemplateForm
                    className="select-2"
                    acceptCharset="utf-8"
                    context="/home-two"
                  >
                    <select
                      name="my_select2"
                      className="my_select2"
                      defaultValue="2"
                      aria-label="my_select2"
                    >
                      <option value="2">{"Location"}</option>

                      <option value="10">{"USA"}</option>

                      <option value="1">{"UK"}</option>

                      <option value="13">{"Canada"}</option>

                      <option value="14">{"Australia"}</option>

                      <option value="15">{"China"}</option>
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
      </div>
    </section>
  );
}
