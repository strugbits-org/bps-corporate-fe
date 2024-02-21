import React from 'react'
import { Link } from 'react-router-dom'
import googleimg from "../../utilis/images/about/google-workspace.jpg"
import slide_2_image from "../../utilis/images/lib/06_desktop.jpg"
const SliderBanner = () => {
  return (
    <section className="section-slider-banner">
    <div className="slider-banner banner-about" data-aos="d:loop">
      <div className="swiper-container" data-play-toggle>
        {/* <!-- Additional required wrapper --> */}
        <div className="swiper-wrapper">
          {/* <!-- Slides --> */}
          <div className="swiper-slide">
            <Link to="">
              <div className="container-img">
                <img
                  src={googleimg}
                  data-preload
                  className="media"
                  data-parallax
                  data-scale-from="1.3"
                  alt=''
                />
              </div>

              <div className="container-project">
                <h4 className="project split-words">Google Workspace</h4>
                <ul className="list-tags">
                  <li><span>Personal</span></li>
                  <li><span>Wedding</span></li>
                  <li><span>Milestone event</span></li>
                </ul>
              </div>

              <div className="container-title">
                <h3 className="title split-words">
                  Every project is unique, <br />
                  each event its own.
                </h3>

                <div className="container-btn-bottom">
                  <div
                    className="btn-border-white btn-bottom btn-about"
                    data-cursor-style="off"
                  >
                    <span>Check out our portfolio</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="swiper-slide">
            <Link to="">
              <div className="container-img">
                <img
                  src={slide_2_image}
                  data-preload
                  className="media"
                  data-parallax
                  data-scale-from="1.3"
                  alt=''
                />
              </div>
              <div className="container-project">
                <h4 className="project split-words">White Wedding</h4>
                <ul className="list-tags">
                  <li><span>Personal</span></li>
                  <li><span>Wedding</span></li>
                  <li><span>Milestone event</span></li>
                </ul>
              </div>

              <div className="container-title">
                <h3 className="title split-words">
                  Every project is unique, <br />
                  each event its own.
                </h3>
                <div className="container-btn-bottom">
                  <div
                    className="btn-border-white btn-bottom btn-about"
                    data-cursor-style="off"
                  >
                    <span>Check out our portfolio</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="swiper-slide">
            <Link to="">
              <div className="container-img">
                <img
                  src={googleimg}
                  data-preload
                  className="media"
                  data-parallax
                  data-scale-from="1.3"
                  alt=''
                />
              </div>

              <div className="container-project">
                <h4 className="project split-words">Google Workspace</h4>
                <ul className="list-tags">
                  <li><span>Personal</span></li>
                  <li><span>Wedding</span></li>
                  <li><span>Milestone event</span></li>
                </ul>
              </div>

              <div className="container-title">
                <h3 className="title split-words">
                  Every project is unique, <br />
                  each event its own.
                </h3>

                <div className="container-btn-bottom">
                  <div
                    className="btn-border-white btn-bottom btn-about"
                    data-cursor-style="off"
                  >
                    <span>Check out our portfolio</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  </section>
  )
}

export default SliderBanner