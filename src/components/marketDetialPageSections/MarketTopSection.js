import {heroSection} from "../../common/constats/marketData";

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
                  {heroSection.Hero1.title}
                </h1>
                <p
                  className="fs--40 fs-tablet-40 text text-center mt-20"
                  data-aos="fadeInUp .8s ease-out-cubic .5s, d:loop"
                >
                  {heroSection.Hero1.desc}
                </p>
                <btn-modal-open
                  group="modal-contact"
                  class="btn-blue mt-lg-20 mt-tablet-65 mt-phone-40"
                  data-aos="fadeInUp .8s ease-out-cubic .6s, d:loop"
                  data-cursor-style="off"
                >
                  <span>{heroSection.Hero1.btntext}</span>
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
            src={heroSection.Hero1.img}
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
                  data-src={heroSection.Hero2.video}
                  src={heroSection.Hero2.video}
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
                {heroSection.Hero2.desc1}
              </h2>

              <div
                className="container-text fs-16 font-2 text-center white-1 mt-lg-20 mt-mobile-40"
                data-aos="fadeInUp .8s ease-out-cubic .3s, d:loop, trigger:.column-2"
              >
                <p>{heroSection.Hero2.p1}</p>
                <p>
                  {heroSection.Hero2.p2}
                </p>
                <p>
                  {heroSection.Hero2.p3}
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