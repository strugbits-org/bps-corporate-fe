import React from 'react'
import { Link } from 'react-router-dom'

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
                <div className="swiper-slide grid-item">
                  <a
                    href="portfolio-post.html"
                    className="link-portfolio link-portfolio-animation"
                    data-aos="d:loop"
                  >
                    <div
                      className="container-img bg-blue"
                      data-cursor-style="view"
                    >
                      <div className="wrapper-img">
                        <img
                          src="images/lib/06_desktop.jpg"
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="container-text">
                      <ul className="list-tags-small">
                        <li className="tag-small active">
                          <span>Corporate</span>
                        </li>
                        <li className="tag-small">
                          <span>Event Design and Production</span>
                        </li>
                        <li className="tag-small">
                          <span>Creative Services Agency</span>
                        </li>
                        <li className="tag-small">
                          <span>+ 3 studios</span>
                        </li>
                      </ul>
                      <h2 className="title-portfolio">
                        F1 Las Vegas Grand Prix
                      </h2>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide grid-item">
                  <a
                    href="portfolio-post.html"
                    className="link-portfolio link-portfolio-animation"
                    data-aos="d:loop"
                  >
                    <div
                      className="container-img bg-blue"
                      data-cursor-style="view"
                    >
                      <div className="wrapper-img">
                        <img
                          src="images/lib/02_desktop.jpg"
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </div>
                    <ul className="list-tags-small">
                      <li className="tag-small active">
                        <span>Tradeshow</span>
                      </li>
                      <li className="tag-small">
                        <span>Creative Services Agency</span>
                      </li>
                      <li className="tag-small">
                        <span>Floral design</span>
                      </li>
                    </ul>
                    <h2 className="title-portfolio">
                      F1 Las Vegas Grand Prix
                    </h2>
                  </a>
                </div>
                <div className="swiper-slide grid-item">
                  <a
                    href="portfolio-post.html"
                    className="link-portfolio link-portfolio-animation"
                    data-aos="d:loop"
                  >
                    <div
                      className="container-img bg-blue"
                      data-cursor-style="view"
                    >
                      <div className="wrapper-img">
                        <img
                          src="images/lib/01_desktop.jpg"
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </div>
                    <ul className="list-tags-small">
                      <li className="tag-small active">
                        <span>Corporate</span>
                      </li>
                      <li className="tag-small">
                        <span>Event Design and Production</span>
                      </li>
                      <li className="tag-small">
                        <span>Creative Services Agency</span>
                      </li>
                      <li className="tag-small">
                        <span>+ 3 studios</span>
                      </li>
                    </ul>
                    <h2 className="title-portfolio">
                      F1 Las Vegas Grand Prix
                    </h2>
                  </a>
                </div>
                <div className="swiper-slide grid-item">
                  <a
                    href="portfolio-post.html"
                    className="link-portfolio link-portfolio-animation"
                    data-aos="d:loop"
                  >
                    <div
                      className="container-img bg-blue"
                      data-cursor-style="view"
                    >
                      <div className="wrapper-img">
                        <img
                          src="images/lib/08_desktop.jpg"
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </div>
                    <ul className="list-tags-small">
                      <li className="tag-small active">
                        <span>Tradeshow</span>
                      </li>
                      <li className="tag-small">
                        <span>Creative Services Agency</span>
                      </li>
                      <li className="tag-small">
                        <span>Floral design</span>
                      </li>
                    </ul>
                    <h2 className="title-portfolio">
                      F1 Las Vegas Grand Prix
                    </h2>
                  </a>
                </div>
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
  )
}

export default ExploreProjectsSection