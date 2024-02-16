import React from 'react'

const ServiceIntro = () => {
  return (
    <section className="services-post-intro">
    <div
      className="container-fluid pos-relative z-5"
      data-parallax-top
      data-translate-y="20rem"
    >
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="container-text text-center">
            <h1
              className="fs--90 fs-phone-60 white-1 split-chars"
              data-aos="d:loop"
            >
              Floral design
            </h1>
            <p
              className="fs--40 fs-tablet-18 white-1 mt-lg-20 mt-mobile-15"
              data-aos="fadeInUp .8s ease-out-cubic .5s, d:loop"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi laoreet ullamcorper massa, quis suscipit mi pharetra
              euismod. Pellentesque aliquam felis vitae arcu volutpat
              condimentum.
            </p>

            <btn-modal-open
              group="modal-contact"
              className="btn-blue mt-lg-50 mt-tablet-60 mt-phone-55"
              data-aos="fadeInUp .8s ease-out-cubic .6s, d:loop"
              data-cursor-style="off"
            >
              <span>Let’s Craft Magic Together</span>
              <i className="icon-arrow-right-2"></i>
            </btn-modal-open>
          </div>
        </div>
      </div>
    </div>
    <div
      className="container-img bg-img"
      data-parallax-top
      data-translate-y="20rem"
      data-scale="1.2"
    >
      <img
        src="images/lib/02_desktop.jpg"
        data-preload
        className="media"
        data-aos="scaleOut 1.2s ease-out-cubic 0s, d:loop"
        alt=''
      />
    </div>
  </section>
  )
}

export default ServiceIntro