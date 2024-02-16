import React from "react";
import { Link } from "react-router-dom";
import MarketTopSection from "../../components/marketDetialPageSections/MarketTopSection";

const MarketPost = () => {
  return (
    <>
      <MarketTopSection />

      <section className="market-post-how-we-do-it pt-lg-270 pt-tablet-100 pt-phone-150">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 column-1">
              <h2 className="fs--60 text-center split-chars" data-aos="d:loop">
                How we do it
              </h2>
              <ul className="list-how-we-do-it mt-lg-50 mt-mobile-40">
                <li>
                  <div className="list-column-img">
                    <div className="container-img" data-aos="d:loop">
                      <img
                        src="images/lib/06_desktop.jpg"
                        data-preload
                        className="media"
                        alt=""
                        data-parallax
                        data-scale-from="1.2"
                      />
                    </div>
                  </div>
                  <div className="list-column-text">
                    <h3 className="column-title split-words" data-aos="d:loop">
                      Meaningful milestones
                    </h3>
                    <p
                      className="column-paragraph"
                      data-aos="fadeInUp .6s ease-out-cubic .3s, d:loop"
                    >
                      We have a big soft spot for milestone events because they
                      are so personal. From weddings and anniversaries to
                      birthdays, bar mitzvahs, and retirement parties, these
                      occasions touch the heart and soul. It’s always an honor
                      to be a trusted partner for these cherished moments and
                      why we put love into every detail to deliver the most
                      beautiful expression of your dream celebration.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="list-column-img">
                    <div className="container-img" data-aos="d:loop">
                      <img
                        src="images/lib/06_desktop.jpg"
                        data-preload
                        className="media"
                        alt=""
                        data-parallax
                        data-scale-from="1.2"
                      />
                    </div>
                  </div>
                  <div className="list-column-text">
                    <h3 className="column-title split-words" data-aos="d:loop">
                      A work of art
                    </h3>
                    <p
                      className="column-paragraph"
                      data-aos="fadeInUp .6s ease-out-cubic .3s, d:loop"
                    >
                      A spotlight is put on social events when it comes to
                      creativity and design. This is most certainly where
                      Blueprint Studios shines. We are constantly pushing the
                      boundaries of artistic expression. From our carefully
                      curated, luxury rental collection, and attention-grabbing
                      graphic designs to our show-stopping custom fabrications,
                      lighting, and florals, our social events are a feast for
                      the senses. Our mission is simple: to deliver exceptional
                      event designs that create a memorable experience for each
                      and every guest.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="list-column-img">
                    <div className="container-img" data-aos="d:loop">
                      <img
                        src="images/lib/06_desktop.jpg"
                        data-preload
                        className="media"
                        alt=""
                        data-parallax
                        data-scale-from="1.2"
                      />
                    </div>
                  </div>
                  <div className="list-column-text">
                    <h3 className="column-title split-words" data-aos="d:loop">
                      We support you.
                    </h3>
                    <p
                      className="column-paragraph"
                      data-aos="fadeInUp .6s ease-out-cubic .3s, d:loop"
                    >
                      We reject the “business as usual” approach and work
                      tirelessly to deliver a seamless and successful event
                      experience. To ensure your event is executed to the
                      highest possible standards, one of our experienced
                      Creative Account Directors assembles a specialized,
                      in-house team to support your specific goals and
                      objectives. From start to finish, this is our commitment
                      to you.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="list-column-img">
                    <div className="container-img" data-aos="d:loop">
                      <img
                        src="images/lib/06_desktop.jpg"
                        data-preload
                        className="media"
                        alt=""
                        data-parallax
                        data-scale-from="1.2"
                      />
                    </div>
                  </div>
                  <div className="list-column-text">
                    <h3 className="column-title split-words" data-aos="d:loop">
                      Location, location, location.
                    </h3>
                    <p
                      className="column-paragraph"
                      data-aos="fadeInUp .6s ease-out-cubic .3s, d:loop"
                    >
                      A spotlight is put on social events when it comes to
                      creativity and design. This is most certainly where
                      Blueprint Studios shines. We are constantly pushing the
                      boundaries of artistic expression. From our carefully
                      curated, luxury rental collection, and attention-grabbing
                      graphic designs to our show-stopping custom fabrications,
                      lighting, and florals, our social events are a feast for
                      the senses. Our mission is simple: to deliver exceptional
                      event designs that create a memorable experience for each
                      and every guest.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="market-post-explore-portfolio overflow-hidden pt-lg-270 pb-lg-220 py-tablet-100 pt-phone-145 pb-phone-190">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <h2 className="fs--60 text-center split-chars" data-aos="d:loop">
                Explore our portfolio
              </h2>
            </div>
            <div className="col-lg-12 mt-40">
              <div className="slider-content-mobile">
                <div className="swiper-container">
                  {/* <!-- Additional required wrapper --> */}
                  <div
                    className="swiper-wrapper list-explore-portfolio list-slider-mobile grid-lg-25"
                    data-aos="d:loop"
                  >
                    {/* <!-- Slides --> */}
                    <div className="swiper-slide grid-item">
                      <Link to="/portfolio-post" className="link">
                        <div className="img-wrapper">
                          <div
                            className="container-img"
                            data-cursor-style="view"
                          >
                            <img
                              src="images/lib/06_desktop.jpg"
                              data-preload
                              className="media"
                              alt=""
                            />
                          </div>
                        </div>
                        <h3 className="title-portfolio split-words">
                          Wedding A + B
                        </h3>
                      </Link>
                    </div>
                    <div className="swiper-slide grid-item">
                      <Link to="/portfolio-post" className="link">
                        <div className="img-wrapper">
                          <div
                            className="container-img"
                            data-cursor-style="view"
                          >
                            <img
                              src="images/lib/06_desktop.jpg"
                              data-preload
                              className="media"
                              alt=""
                            />
                          </div>
                        </div>
                        <h3 className="title-portfolio split-words">
                          Wedding A + B
                        </h3>
                      </Link>
                    </div>
                    <div className="swiper-slide grid-item">
                      <Link to="/portfolio-post" className="link">
                        <div className="img-wrapper">
                          <div
                            className="container-img"
                            data-cursor-style="view"
                          >
                            <img
                              src="images/lib/06_desktop.jpg"
                              data-preload
                              className="media"
                              alt=""
                            />
                          </div>
                        </div>
                        <h3 className="title-portfolio split-words">
                          Wedding A + B
                        </h3>
                      </Link>
                    </div>
                    <div className="swiper-slide grid-item">
                      <Link to="/portfolio-post" className="link">
                        <div className="img-wrapper">
                          <div
                            className="container-img"
                            data-cursor-style="view"
                          >
                            <img
                              src="images/lib/06_desktop.jpg"
                              data-preload
                              className="media"
                              alt=""
                            />
                          </div>
                        </div>
                        <h3 className="title-portfolio split-words">
                          Wedding A + B
                        </h3>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-5 flex-center mt-50 column-btn">
              <Link
                to="/portfolio"
                className="btn-border-blue"
                data-aos="fadeInUp .8s ease-out-cubic 0s, d:loop, trigger:.column-btn"
                data-cursor-style="off"
              >
                <span>See more</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketPost;
