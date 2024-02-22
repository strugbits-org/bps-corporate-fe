import React from "react";
import { Link } from "react-router-dom";

import {OurCardData } from "../../common/constats/portfolioData";

const ExploreProjectsSection = () => {
  return (
    <section className="portfolio-post-explore-projects pt-lg-310 pt-tablet-100 pt-phone-160 pb-lg-190 pb-mobile-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h2
              className="fs--60 text-center mb-lg-45 mb-tablet-35 mb-phone-40 split-words"
              data-aos="d:loop"
            >
              Explore other projects
            </h2>

            <div className="slider-content-mobile">
              <div className="swiper-container">
                {/* <!-- Additional required wrapper --> */}
                <div className="swiper-wrapper list-portfolio list-slider-mobile grid-lg-25">
                  {/* <!-- Slides --> */}
                  {OurCardData.slice(0, 4).map((data, index) => (
                    <div key={index} className="swiper-slide grid-item">
                      <Link
                        to="/portfolio-post"
                        className="link-portfolio link-portfolio-animation"
                        data-aos="d:loop"
                      >
                        <div
                          className="container-img bg-blue"
                          data-cursor-style="view"
                        >
                          <div className="wrapper-img">
                            <img
                              src={data.img}
                              data-preload
                              className="media"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="container-text">
                          <ul className="list-tags-small">
                            {Object.values(data.tags).map((tag, index) => (
                              <React.Fragment key={index}>
                                {index < 3 ? (
                                  <li
                                    className={`tag-small ${
                                      index === 0 ? "active" : ""
                                    }`}
                                  >
                                    <span>{tag}</span>
                                  </li>
                                ) : null}
                              </React.Fragment>
                            ))}
                            {Object.values(data.tags).length > 3 ? (
                              <li className="tag-small">
                                <span>
                                  +{Object.values(data.tags).length - 3} studios
                                </span>
                              </li>
                            ) : null}
                          </ul>
                          <h2 className="title-portfolio">
                            F1 Las Vegas Grand Prix
                          </h2>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-2 offset-lg-5 flex-center mt-lg-60 mt-mobile-40"
            data-aos="fadeIn .8s ease-in-out .2s, d:loop"
          >
            <Link to="/" className="btn-border-blue" data-cursor-style="off">
              <span>See more</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreProjectsSection;
