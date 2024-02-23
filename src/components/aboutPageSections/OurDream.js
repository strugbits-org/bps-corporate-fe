import React from 'react'
import destop1 from "../../utilis/images/lib/06_desktop.jpg"
import destop2 from "../../utilis/images/lib/04_desktop.jpg"
import destop3 from "../../utilis/images/lib/03_desktop.jpg"
import destop0 from "../../utilis/images/lib/01_desktop.jpg"
import destop9 from "../../utilis/images/lib/09_desktop.jpg"
import destop7 from "../../utilis/images/lib/07_desktop.jpg"
import destop8 from "../../utilis/images/lib/02_desktop.jpg"
import destop55 from "../../utilis/images/lib/05_desktop.jpg"
import DelayedLink from '../../common/DelayedLink'
const OurDream = () => {
  return (
    <section className="about-dream-team pt-lg-195">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 offset-lg-4">
          <h2 className="fs--80 text-center split-words" data-aos="d:loop">
            The Dream Team
          </h2>
        </div>
        <div className="col-lg-12 mt-lg-70 mt-mobile-40">
          <ul className="list-dream-team grid-lg-25 grid-tablet-50">
            <div className="line-wrapper" data-aos="d:loop">
              <li className="grid-item">
                <div className="wrapper-profile">
                  <div className="container-img">
                    <img
                      src={destop1}
                      data-preload
                      className="media"
                      alt=''
                    />
                  </div>
                  <div className="container-text">
                    <h3 className="name split-words">Mircea Manea</h3>
                    <p className="occupation split-words">
                      Event Designer & Co-Founder
                    </p>
                  </div>
                </div>
              </li>
              <li className="grid-item">
                <div className="wrapper-profile">
                  <div className="container-img">
                    <img
                      src={destop2}
                      data-preload
                      className="media"
                      alt=''
                    />
                  </div>
                  <div className="container-text">
                    <h3 className="name split-words">Mircea Manea</h3>
                    <p className="occupation split-words">
                      Event Designer & Co-Founder
                    </p>
                  </div>
                </div>
              </li>
              <li className="grid-item">
                <div className="wrapper-profile">
                  <div className="container-img">
                    <img
                      src={destop3}
                      data-preload
                      className="media"
                      alt=''
                    />
                  </div>
                  <div className="container-text">
                    <h3 className="name split-words">Mircea Manea</h3>
                    <p className="occupation split-words">
                      Event Designer & Co-Founder
                    </p>
                  </div>
                </div>
              </li>
              <li className="grid-item">
                <div className="wrapper-profile">
                  <div className="container-img">
                    <img
                      src={destop0}
                      data-preload
                      className="media"
                      alt=''
                    />
                  </div>
                  <div className="container-text">
                    <h3 className="name split-words">Mircea Manea</h3>
                    <p className="occupation split-words">
                      Event Designer & Co-Founder
                    </p>
                  </div>
                </div>
              </li>
            </div>

            <div className="line-wrapper" data-aos="d:loop">
              <li className="grid-item">
                <div className="wrapper-profile">
                  <div className="container-img">
                    <img
                      src={destop9}
                      data-preload
                      className="media"
                      alt=''
                    />
                  </div>
                  <div className="container-text">
                    <h3 className="name split-words">Mircea Manea</h3>
                    <p className="occupation split-words">
                      Event Designer & Co-Founder
                    </p>
                  </div>
                </div>
              </li>
              <li className="grid-item">
                <div className="wrapper-profile">
                  <div className="container-img">
                    <img
                      src={destop7}
                      data-preload
                      className="media"
                      alt=''
                    />
                  </div>
                  <div className="container-text">
                    <h3 className="name split-words">Mircea Manea</h3>
                    <p className="occupation split-words">
                      Event Designer & Co-Founder
                    </p>
                  </div>
                </div>
              </li>
              <li className="grid-item">
                <div className="wrapper-profile">
                  <div className="container-img">
                    <img
                      src={destop8}
                      data-preload
                      className="media"
                      alt=''
                    />
                  </div>
                  <div className="container-text">
                    <h3 className="name split-words">Mircea Manea</h3>
                    <p className="occupation split-words">
                      Event Designer & Co-Founder
                    </p>
                  </div>
                </div>
              </li>
              <li className="grid-item">
                <div className="wrapper-profile">
                  <div className="container-img">
                    <img
                      src={destop55}
                      data-preload
                      className="media"
                      alt=''
                    />
                  </div>
                  <div className="container-text">
                    <h3 className="name split-words">Mircea Manea</h3>
                    <p className="occupation split-words">
                      Event Designer & Co-Founder
                    </p>
                  </div>
                </div>
              </li>
            </div>
          </ul>
        </div>
        <div
          className="col-lg-4 offset-lg-4 flex-center mt-lg-60 mt-mobile-40 btn-trigger"
        >
          <DelayedLink
            to="/"
            className="btn-blue btn-border-blue"
            attributes={{
              "data-aos": "fadeInUp .8s ease-out-cubic 0s, d:loop, trigger:.btn-trigger",
              "data-cursor-style": "off",
            }}
          >
            <span>Get in touch with us</span>
          </DelayedLink>
        </div>
      </div>
    </div>
  </section>
  )
}

export default OurDream;