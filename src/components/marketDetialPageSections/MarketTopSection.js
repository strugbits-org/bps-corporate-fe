import React from 'react'
import video from "../../utilis/images/lib/video.mp4#t=0.01"
import img8 from "../../utilis/images/lib/08_desktop.jpg"

const MarketTopSection = () => {
  return (
    <>
     <section className="market-post-intro">
        <div
          className="container-fluid pos-relative z-5"
          data-parallax-top
          data-translate-y="20rem"
        >
          <div className="row">
            <div className="col-lg-4 offset-lg-4 column-1 white-1">
              <div className="container-text text-center">
                <h1
                  className="fs--90 fs-phone-60 split-chars"
                  data-aos="d:loop"
                >
                  Wedding
                </h1>
                <p
                  className="fs--40 fs-tablet-40 text text-center mt-20"
                  data-aos="fadeInUp .8s ease-out-cubic .5s, d:loop"
                >
                  We have a big soft spot for milestone events because they are
                  so personal.
                </p>
                <btn-modal-open
                  group="modal-contact"
                  class="btn-blue mt-lg-20 mt-tablet-65 mt-phone-40"
                  data-aos="fadeInUp .8s ease-out-cubic .6s, d:loop"
                  data-cursor-style="off"
                >
                  <span>Let's Craft Magic Together</span>
                  <i className="icon-arrow-right-2"></i>
                </btn-modal-open>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-img bg-blue-2"
          data-parallax-top
          data-translate-y="20rem"
          data-scale="1.2"
        >
          <img
            src={img8}
            data-preload
            className="media"
            alt=""
            data-aos="scaleOut 1.2s ease-out-cubic 0s, d:loop"
          />
        </div>
      </section>

      <section className="market-post-video">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 offset-lg-4 column-1">
              <div className="container-img" data-aos="d:loop">
                <video
                  data-src={video}
                  src={video}
                  data-preload
                  className="player-video media"
                  muted
                  loop
                  playsinline
                ></video>
              </div>
            </div>
            <div className="col-lg-6 col-md-9 offset-lg-3 column-2 mx-tablet-auto mt-md-35 mt-mobile-50">
              <h2
                className="fs--40 fs-tablet-40 fs-phone-30 blue-3 text-center"
                data-aos="fadeInUp .8s ease-out-cubic .1s, d:loop, trigger:.column-2"
              >
                It's always an honor to be a trusted partner for these cherished
                moments, and that is why we put love into every detail to
                deliver the most beautiful expression of your dream celebration.
              </h2>

              <div
                className="container-text fs-16 font-2 text-center white-1 mt-lg-20 mt-mobile-40"
                data-aos="fadeInUp .8s ease-out-cubic .3s, d:loop, trigger:.column-2"
              >
                <p>We put love into every wedding design detail.</p>
                <p>
                  Weddings are a personal and memorable occasion. We make it our
                  duty to bring special touches and provide you with seamless
                  execution for a worry-free day.
                </p>
                <p>
                  With 23 years of wedding setup and installation in over 500
                  unique venues, including hotels, wineries, and backyards, no
                  venue is too big or too small. Let us take care of putting
                  your rental furnishings in place; you pop the champagne!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MarketTopSection