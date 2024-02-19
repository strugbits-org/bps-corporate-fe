import React from 'react'
import { Link } from 'react-router-dom'
import img6 from "../../utilis/images/lib/06_desktop.jpg"

const ExplorePortfolio = () => {
  return (
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
                              src={img6}
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
                              src={img6}
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
                              src={img6}
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
                              src={img6}
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
  )
}

export default ExplorePortfolio