import React from 'react'

const OurProjectSection = () => {
  return (
    <section className="home-some-of-our-projects pt-lg-250 pt-mobile-130 pb-135">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h2
            className="fs--80 text-center mb-35 split-words"
            data-aos="d:loop"
          >
            Some of our projects
          </h2>

          <div className="slider-some-of-our-projects slider-content-mobile">
            <div className="swiper-container">
              {/* <!-- Additional required wrapper --> */}
              <div className="swiper-wrapper list-projects slider-mobile font-80">
                {/* <!-- Slides --> */}
                <div className="swiper-slide list-item">
                  <a
                    href="index.html"
                    className="project-link animation-project-link"
                    data-cursor-style="view"
                    data-aos="d:loop"
                  >
                    <div className="container-img bg-blue">
                      <div className="wrapper-img">
                        <img
                          src="images/lib/01_desktop.jpg"
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="container-text">
                      <h3 className="title-project">The Netflix Cup</h3>
                      <ul className="list-tags">
                        <li>
                          <span>Convention</span>
                        </li>
                        <li>
                          <span>Corporate</span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide list-item">
                  <a
                    href="index.html"
                    className="project-link animation-project-link"
                    data-cursor-style="view"
                    data-aos="d:loop"
                  >
                    <div className="container-img bg-blue">
                      <div className="wrapper-img">
                        <img
                          src="images/lib/01_desktop.jpg"
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="container-text">
                      <h3 className="title-project">
                        Formula 1 <br className="no-desktop" />
                        Grand Prix Las Vegas
                      </h3>
                      <ul className="list-tags">
                        <li>
                          <span>Convention</span>
                        </li>
                        <li>
                          <span>Corporate</span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide list-item">
                  <a
                    href="index.html"
                    className="project-link animation-project-link"
                    data-cursor-style="view"
                    data-aos="d:loop"
                  >
                    <div className="container-img bg-blue">
                      <div className="wrapper-img">
                        <img
                          src="images/lib/01_desktop.jpg"
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="container-text">
                      <h3 className="title-project">White Wedding</h3>
                      <ul className="list-tags">
                        <li>
                          <span>Personal</span>
                        </li>
                        <li>
                          <span>Wedding</span>
                        </li>
                        <li>
                          <span>Milestone event</span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide list-item">
                  <a
                    href="index.html"
                    className="project-link animation-project-link"
                    data-cursor-style="view"
                    data-aos="d:loop"
                  >
                    <div className="container-img bg-blue">
                      <div className="wrapper-img">
                        <img
                          src="images/lib/01_desktop.jpg"
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="container-text">
                      <h3 className="title-project">Google Workspace</h3>
                      <ul className="list-tags">
                        <li>
                          <span>Convention</span>
                        </li>
                        <li>
                          <span>Corporate</span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 offset-lg-4 mt-lg-60 mt-mobile-40 flex-center">
          <btn-modal-open
            group="modal-contact"
            class="btn-blue"
            data-cursor-style="off"
          >
            <span>Let’s Craft Magic Together</span>
            <i className="icon-arrow-right-2"></i>
          </btn-modal-open>
        </div>
      </div>
    </div>
  </section>
  )
}

export default OurProjectSection;