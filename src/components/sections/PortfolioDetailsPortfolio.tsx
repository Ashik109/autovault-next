import type { DetailRecord } from "@/data/details";
import { detailPath } from "@/lib/detail-paths";
import Link from "next/link";
import TemplateForm from "@/components/TemplateForm";
import CarDealerDetailsVideo from "@/components/sections/CarDealerDetailsVideo";
export default function PortfolioDetailsPortfolio({
  record,
}: {
  record: DetailRecord;
}) {
  return (
    <div className="rts-portfolio-area inner rts-section-gapNew">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-8">
            <div className="portfolio-details-area">
              <div className="portfolio-slider-area vertical details mb--40">
                <div className="swiper rts-heroSlider2">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="image">
                        <img
                          src={record.gallery[0 % record.gallery.length]}
                          alt={record.title}
                        />
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="image">
                        <img
                          src={record.gallery[1 % record.gallery.length]}
                          alt={record.title}
                        />
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="image">
                        <img
                          src={record.gallery[2 % record.gallery.length]}
                          alt={record.title}
                        />
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="image">
                        <img
                          src={record.gallery[3 % record.gallery.length]}
                          alt={record.title}
                        />
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="image">
                        <img
                          src={record.gallery[4 % record.gallery.length]}
                          alt={record.title}
                        />
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="image">
                        <img
                          src={record.gallery[5 % record.gallery.length]}
                          alt={record.title}
                        />
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="image">
                        <img
                          src={record.gallery[0 % record.gallery.length]}
                          alt={record.title}
                        />
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="image">
                        <img
                          src={record.gallery[1 % record.gallery.length]}
                          alt={record.title}
                        />
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="image">
                        <img
                          src={record.gallery[2 % record.gallery.length]}
                          alt={record.title}
                        />
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="image">
                        <img
                          src={record.gallery[3 % record.gallery.length]}
                          alt={record.title}
                        />
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="image">
                        <img
                          src={record.gallery[4 % record.gallery.length]}
                          alt={record.title}
                        />
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="image">
                        <img
                          src={record.gallery[5 % record.gallery.length]}
                          alt={record.title}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pagination-area mt_md--30 mt_sm--30">
                  <div className="swiper SlideThumb2">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="single-thumb">
                          <div className="thumbnail">
                            <img
                              src={record.gallery[0 % record.gallery.length]}
                              alt={record.title}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="single-thumb">
                          <div className="thumbnail">
                            <img
                              src={record.gallery[1 % record.gallery.length]}
                              alt={record.title}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="single-thumb">
                          <div className="thumbnail">
                            <img
                              src={record.gallery[2 % record.gallery.length]}
                              alt={record.title}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="single-thumb">
                          <div className="thumbnail">
                            <img
                              src={record.gallery[3 % record.gallery.length]}
                              alt={record.title}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="single-thumb">
                          <div className="thumbnail">
                            <img
                              src={record.gallery[4 % record.gallery.length]}
                              alt={record.title}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="single-thumb">
                          <div className="thumbnail">
                            <img
                              src={record.gallery[5 % record.gallery.length]}
                              alt={record.title}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="single-thumb">
                          <div className="thumbnail">
                            <img
                              src={record.gallery[0 % record.gallery.length]}
                              alt={record.title}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="single-thumb">
                          <div className="thumbnail">
                            <img
                              src={record.gallery[1 % record.gallery.length]}
                              alt={record.title}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="single-thumb">
                          <div className="thumbnail">
                            <img
                              src={record.gallery[2 % record.gallery.length]}
                              alt={record.title}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="single-thumb">
                          <div className="thumbnail">
                            <img
                              src={record.gallery[3 % record.gallery.length]}
                              alt={record.title}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="single-thumb">
                          <div className="thumbnail">
                            <img
                              src={record.gallery[4 % record.gallery.length]}
                              alt={record.title}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="single-thumb">
                          <div className="thumbnail">
                            <img
                              src={record.gallery[5 % record.gallery.length]}
                              alt={record.title}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="thumb-controls">
                    <button className="thumb-prev" aria-label="Open control">
                      <i className="fa-solid fa-chevron-up"></i>
                    </button>

                    <button className="thumb-next" aria-label="Open control">
                      <i className="fa-solid fa-chevron-down"></i>
                    </button>
                  </div>
                </div>
              </div>

              <h2 className="mb--30">{"Car Description"}</h2>

              <p className="mb--30">
                {record.description +
                  " " +
                  "A car is a motorized vehicle designed primarily for the transportation of passengers, typically seating between one to eight people. It consists of a metal or composite body structure mounted on a set of wheels, usually four, and is powered by an internal combustion engine, an electric motor, or a hybrid system that combines both. The car’s it is main components include the engine, transmission, drivetrain, suspension, and braking system, all of which work together to provide motion and control."}
              </p>

              <p>
                {
                  "Cars come in a variety of body styles and sizes, such as sedans, SUVs, hatchbacks, coupes, convertibles, and for pickup trucks, each serving different needs and preferences."
                }
              </p>

              <h2 className="mb--30">{"Car Features"}</h2>

              <ul className="feature-list mb--40">
                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  {" Engine Type "}
                </li>

                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  {" Horsepower "}
                </li>

                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  {" Automatic Climate Control "}
                </li>

                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  {" Touchscreen Display "}
                </li>

                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  {" Navigation System "}
                </li>

                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  {" Fog Lights "}
                </li>

                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  {" Start-Stop Technology "}
                </li>

                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  {" Automatic Headlights "}
                </li>

                <li>
                  <i className="fa-regular fa-circle-check"></i>
                  {" Navigation System "}
                </li>
              </ul>

              <h2 className="mb--30">{"Key Specs"}</h2>

              <ul className="specs-list mb--40">
                <li>
                  <span className="number">{"1"}</span>

                  <div className="text">
                    <h6>{"Car Transmission"}</h6>

                    <p>{"Fuel type"}</p>
                  </div>
                </li>

                <li>
                  <span className="number">{"2"}</span>

                  <div className="text">
                    <h6>{"15 hrs"}</h6>

                    <p>{"Level Two Charging"}</p>
                  </div>
                </li>

                <li>
                  <span className="number">{"3"}</span>

                  <div className="text">
                    <h6>{"100 kWh"}</h6>

                    <p>{"Battery Capacity"}</p>
                  </div>
                </li>

                <li>
                  <span className="number">{"4"}</span>

                  <div className="text">
                    <h6>{"30 mins"}</h6>

                    <p>{"Dc Fast Changing"}</p>
                  </div>
                </li>

                <li>
                  <span className="number">{"5"}</span>

                  <div className="text">
                    <h6>{"Battery"}</h6>

                    <p>{"96 month/150000 miles"}</p>
                  </div>
                </li>

                <li>
                  <span className="number">{"6"}</span>

                  <div className="text">
                    <h6>{"Powertrain"}</h6>

                    <p>{"96 month/unlimited"}</p>
                  </div>
                </li>
              </ul>

              <h2 className="mb--30">{"Video"}</h2>

              <CarDealerDetailsVideo />

              <h2 className="mb--30">{"Car Engine "}</h2>

              <ul className="feature-list2 mb--30">
                <li>
                  <i className="fa-regular fa-circle-check"></i>

                  <div className="text">
                    <p>{" Displacement "}</p>

                    <p>{" 3L "}</p>
                  </div>
                </li>

                <li>
                  <i className="fa-regular fa-circle-check"></i>

                  <div className="text">
                    <p>{" Torque "}</p>

                    <p>{" 350 lb.-ft "}</p>
                  </div>
                </li>

                <li>
                  <i className="fa-regular fa-circle-check"></i>

                  <div className="text">
                    <p>{" Horespower "}</p>

                    <p>{" 210 kW / 286 hp "}</p>
                  </div>
                </li>

                <li>
                  <i className="fa-regular fa-circle-check"></i>

                  <div className="text">
                    <p>{" Number of cylinders "}</p>

                    <p>{" 4 "}</p>
                  </div>
                </li>

                <li>
                  <i className="fa-regular fa-circle-check"></i>

                  <div className="text">
                    <p>{" Engine Layout "}</p>

                    <p>{" First-Engine "}</p>
                  </div>
                </li>

                <li>
                  <i className="fa-regular fa-circle-check"></i>

                  <div className="text">
                    <p>{" Engine Configurations "}</p>

                    <p>{" V Engine (V6, V8) "}</p>
                  </div>
                </li>
              </ul>

              <TemplateForm
                className="message-form mb--100"
                context="/portfolio-details"
              >
                <h2>{"Send Message"}</h2>

                <div className="form-inner">
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="Name"
                      placeholder="Your Name"
                      required={true}
                      aria-label="Your Name"
                    />

                    <input
                      type="email"
                      name="Email"
                      placeholder="Your Email*"
                      required={true}
                      aria-label="Your Email*"
                    />

                    <input
                      type="text"
                      name="Phone"
                      placeholder="Phone"
                      required={true}
                      aria-label="Phone"
                    />
                  </div>

                  <textarea
                    name="message"
                    id="message"
                    placeholder="Type a message*"
                    aria-label="Type a message*"
                  ></textarea>

                  <div className="form-bottom">
                    <label className="checkbox-label">
                      <input type="checkbox" aria-label="Enter a value" />

                      <span>
                        {"I accept The "}
                        <a href="#">{"Privacy Policy"}</a>
                      </span>
                    </label>

                    <button
                      className="rts-btn btn-primary radius-small"
                      type="submit"
                    >
                      <img src="/assets/images/portfolio/send.svg" alt="" />
                      {"Submit Message"}
                    </button>
                  </div>
                </div>
              </TemplateForm>

              <div className="related-project">
                <h3 className="mb--40 text-center">{"Related listings"}</h3>

                <div className="row g-5">
                  <div className="col-lg-6">
                    <div className="project-wrapper2">
                      <div className="image-area">
                        <Link
                          prefetch={false}
                          href={detailPath("car", "thunderbolt-car")}
                        >
                          <img src="/assets/images/portfolio/04.webp" alt="" />
                        </Link>

                        <span className="tag">{"Stocks"}</span>

                        <a href="/wishlist" className="wishlist">
                          <i className="fa-regular fa-heart"></i>
                        </a>

                        <a
                          href="/assets/images/portfolio/04.webp"
                          className="gallery-image"
                        >
                          <img src="/assets/images/icon/image.svg" alt="" />
                          {" 7 "}
                        </a>
                      </div>

                      <span className="price">{"14,000$"}</span>

                      <div className="content-area">
                        <h6 className="title ">
                          <Link
                            prefetch={false}
                            href={detailPath("car", "thunderbolt-car")}
                          >
                            {"Thunderbolt Car"}
                          </Link>
                        </h6>

                        <ul className="feature-area">
                          <li>
                            <img
                              src="/assets/images/portfolio/feature-icon/01.svg"
                              alt=""
                            />
                            {" 100 Miles "}
                          </li>

                          <li>
                            <img
                              src="/assets/images/portfolio/feature-icon/02.svg"
                              alt=""
                            />
                            {" Petrol "}
                          </li>

                          <li>
                            <img
                              src="/assets/images/portfolio/feature-icon/03.svg"
                              alt=""
                            />
                            {" Autometic "}
                          </li>
                        </ul>

                        <div className="button-area">
                          <p className="">{"$400"}</p>

                          <Link
                            prefetch={false}
                            href={detailPath("car", "thunderbolt-car")}
                            className="rts-btn btn-primary radius-small"
                          >
                            {"View Details"}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="project-wrapper2">
                      <div className="image-area">
                        <Link
                          prefetch={false}
                          href={detailPath("car", "mercedes-benz-e-class")}
                        >
                          <img src="/assets/images/portfolio/05.webp" alt="" />
                        </Link>

                        <span className="tag">{"New"}</span>

                        <a href="/wishlist" className="wishlist">
                          <i className="fa-regular fa-heart"></i>
                        </a>

                        <a
                          href="/assets/images/portfolio/05.webp"
                          className="gallery-image"
                        >
                          <img src="/assets/images/icon/image.svg" alt="" />
                          {" 5 "}
                        </a>
                      </div>

                      <span className="price">{"14,000$"}</span>

                      <div className="content-area">
                        <h6 className="title ">
                          <Link
                            prefetch={false}
                            href={detailPath("car", "mercedes-benz-e-class")}
                          >
                            {"Mercedes-Benz E-Class"}
                          </Link>
                        </h6>

                        <ul className="feature-area">
                          <li>
                            <img
                              src="/assets/images/portfolio/feature-icon/01.svg"
                              alt=""
                            />
                            {" 100 Miles "}
                          </li>

                          <li>
                            <img
                              src="/assets/images/portfolio/feature-icon/02.svg"
                              alt=""
                            />
                            {" Petrol "}
                          </li>

                          <li>
                            <img
                              src="/assets/images/portfolio/feature-icon/03.svg"
                              alt=""
                            />
                            {" Autometic "}
                          </li>
                        </ul>

                        <div className="button-area">
                          <p className="">{"$400"}</p>

                          <Link
                            prefetch={false}
                            href={detailPath("car", "mercedes-benz-e-class")}
                            className="rts-btn btn-primary radius-small"
                          >
                            {"View Details"}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="sticky-top">
              <div className="left-side-bar">
                <div className="price-area side-box">
                  <h5>{record.priceLabel}</h5>

                  <ul className="price-meta">
                    <li>
                      <img src="/assets/images/portfolio/calender.svg" alt="" />
                      {" Feb 23, 2025"}
                    </li>

                    <li>
                      <img src="/assets/images/portfolio/view.svg" alt="" />
                      {" View"}
                    </li>

                    <li>
                      <img src="/assets/images/portfolio/heart.svg" alt="" />
                      {" Favourite"}
                    </li>
                  </ul>

                  <div className="price-btn">
                    <a href="#" className="rts-btn btn-primary radius-small">
                      {"Call For Final Price"}
                    </a>
                  </div>
                </div>

                <div className="overview side-box">
                  <h2>{"Car Overview"}</h2>

                  <ul className="feature-list2">
                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/09.svg"
                        alt=""
                      />

                      <div className="text">
                        <p>{" Car Type "}</p>

                        <p>{record.make}</p>
                      </div>
                    </li>

                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/10.svg"
                        alt=""
                      />

                      <div className="text">
                        <p>{" Mileage "}</p>

                        <p>{record.mileage}</p>
                      </div>
                    </li>

                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/11.svg"
                        alt=""
                      />

                      <div className="text">
                        <p>{" Fuel Type "}</p>

                        <p>{record.fuel}</p>
                      </div>
                    </li>

                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/12.svg"
                        alt=""
                      />

                      <div className="text">
                        <p>{" Transmission "}</p>

                        <p>{record.transmission}</p>
                      </div>
                    </li>

                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/13.svg"
                        alt=""
                      />

                      <div className="text">
                        <p>{record.seats}</p>

                        <p>{" 5 Person "}</p>
                      </div>
                    </li>

                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/14.svg"
                        alt=""
                      />

                      <div className="text">
                        <p>{" Drive Type "}</p>

                        <p>{" Race Car Drivers "}</p>
                      </div>
                    </li>

                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/15.svg"
                        alt=""
                      />

                      <div className="text">
                        <p>{" Engine "}</p>

                        <p>{" Mazda RX-7 "}</p>
                      </div>
                    </li>

                    <li>
                      <img
                        src="/assets/images/portfolio/feature-icon/16.svg"
                        alt=""
                      />

                      <div className="text">
                        <p>{" Color "}</p>

                        <p>{" Red Color "}</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="map-area side-box">
                  <h2>{"Location"}</h2>

                  <div className="contact-map-area-fluid">
                    <iframe
                      className="contact-map"
                      height="250"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14602.288851207937!2d90.47855065!3d23.798243149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1663151706353!5m2!1sen!2sbd"
                      style={{ border: "0" }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="AutoVault location"
                    ></iframe>
                  </div>
                </div>

                <div className="contact side-box">
                  <h2>{"Contacts"}</h2>

                  <div className="contact-inner">
                    <div className="author-img">
                      <img src="/assets/images/portfolio/author.webp" alt="" />
                    </div>

                    <h5>{"Jonathon Doe"}</h5>

                    <p>{"Car Dealer"}</p>

                    <div className="contact-button-area">
                      <a href="#" className="rts-btn radius-small whatsapp">
                        <img
                          src="/assets/images/portfolio/whatsapp.svg"
                          alt=""
                        />
                        {" +14844578513"}
                      </a>

                      <a
                        href="#"
                        className="rts-btn radius-small btn-primary phone"
                      >
                        <img src="/assets/images/portfolio/phone.svg" alt="" />
                        {" +18143511443"}
                      </a>

                      <a href="#" className="rts-btn radius-small telegram">
                        <img src="/assets/images/portfolio/send.svg" alt="" />
                        {" Send Message"}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="social-area side-box">
                  <h2>{"Share"}</h2>

                  <ul>
                    <li>
                      <i className="fa-brands fa-facebook-f"></i>
                    </li>

                    <li>
                      <i className="fa-brands fa-twitter"></i>
                    </li>

                    <li>
                      <i className="fa-brands fa-instagram"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
