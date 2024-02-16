import React from 'react'

const RentalStoreSection = () => {
  return (
    <section className="home-rental-store pt-lg-145 pt-tablet-105 pt-phone-145 pb-lg-120 pb-tablet-100 pb-phone-145">
    <div
      className="bg"
      data-parallax
      data-translate-y-from="50vh"
      data-end="top 40%"
      data-parallax-no-phone
      data-parallax-no-tablet
      data-trigger=".home-rental-store"
    ></div>

    <div className="container-fluid pos-relative z-5">
      <div className="row">
        <div
          className="col-lg-6 offset-lg-3 column-1"
          data-parallax
          data-translate-y-from="30rem"
          data-parallax-no-phone
          data-parallax-no-tablet
          data-opacity-from="0"
          data-start="top 55%"
          data-end="top 20%"
          data-trigger=".home-rental-store"
        >
          <h2 className="fs--100 text-center white-1">Rental Store</h2>
          <p className="fs--50 fs-phone-18 white-1 paragraph mt-lg-15 mt-tablet-30 mt-phone-10">
            Over 300,000 rental
            <span>
              <img
                src="images/home/section-rental-store-chair-1.png"
                data-preload
                alt=""
                className="img-1 media"
              />
            </span>
            products with diverse
            <span>
              <img
                src="images/home/section-rental-store-table-1.png"
                data-preload
                alt=""
                className="img-2 media"
              />
            </span>
            collections of specialty furnishings, props
            <span>
              <img
                src="images/home/section-rental-store-chair-2.png"
                data-preload
                alt=""
                className="img-3 media"
              />
            </span>
            and accessories, provide us the range to support various
            large-scale events
            <span>
              <img
                src="images/home/section-rental-store-chair-3.png"
                data-preload
                alt=""
                className="img-4 media"
              />
            </span>
            concurrently.
          </p>
        </div>

        <div className="col-lg-12 column-2 mt-lg-140 mt-mobile-40">
          <ul className="list-rental-store">
            <li
              data-parallax
              data-translate-y-from="-35rem"
              data-start="top 85%"
              data-parallax-no-phone
              data-parallax-no-tablet
              data-end="20% 40%"
              data-trigger=".home-rental-store"
            >
              <a
                href="index.html"
                className="link"
                data-cursor-style="view"
              >
                <div className="container-img">
                  <img
                    src="images/lib/06_desktop.jpg"
                    data-preload
                    className="media"
                    alt=""
                  />
                </div>
                <div className="tag-new no-mobile">
                  <span>New</span>
                </div>
              </a>
            </li>
            <li
              data-parallax
              data-translate-y-from="-50rem"
              data-start="top 85%"
              data-parallax-no-phone
              data-parallax-no-tablet
              data-end="20% 40%"
              data-trigger=".home-rental-store"
            >
              <a
                href="index.html"
                className="link"
                data-cursor-style="view"
              >
                <div className="container-img">
                  <img
                    src="images/lib/02_desktop.jpg"
                    data-preload
                    className="media"
                    alt=""
                  />
                </div>
              </a>
            </li>
            <li
              data-parallax
              data-translate-y-from="-65rem"
              data-start="top 85%"
              data-parallax-no-phone
              data-parallax-no-tablet
              data-end="20% 40%"
              data-trigger=".home-rental-store"
            >
              <a
                href="index.html"
                className="link"
                data-cursor-style="view"
              >
                <div className="container-img">
                  <img
                    src="images/lib/08_desktop.jpg"
                    data-preload
                    className="media"
                    alt=""
                  />
                </div>
              </a>
            </li>
            <li>
              <a
                href="index.html"
                className="link"
                data-cursor-style="view"
              >
                <div className="container-img">
                  <img
                    src="images/lib/09_desktop.jpg"
                    data-preload
                    className="media"
                    alt=""
                  />
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div className="col-lg-4 offset-lg-4 flex-center mt-lg-95 mt-tablet-100 mt-phone-40 column-trigger">
          <div
            className="container-btn"
            data-aos="fadeInUp .8s ease-out-cubic 0s, d:loop, trigger:.column-trigger"
          >
            <btn-modal-open
              group="modal-contact"
              class="btn-blue"
              data-cursor-style="off"
            >
              <span>Get In Touch With Us</span>
              <i className="icon-arrow-right-2"></i>
            </btn-modal-open>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default RentalStoreSection