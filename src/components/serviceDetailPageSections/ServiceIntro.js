import React from "react";
import img2 from "../../utilis/images/lib/02_desktop.jpg"
import img6 from "../../utilis/images/lib/06_desktop.jpg"
const ServiceIntro = () => {
  return (
    <>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  laoreet ullamcorper massa, quis suscipit mi pharetra euismod.
                  Pellentesque aliquam felis vitae arcu volutpat condimentum.
                </p>

                <btn-modal-open
                  group="modal-contact"
                  class="btn-blue mt-lg-50 mt-tablet-60 mt-phone-55"
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
          className="container-img bg-img"
          data-parallax-top
          data-translate-y="20rem"
          data-scale="1.2"
        >
          <img
            src={img2}
            data-preload
            className="media"
            alt=""
            data-aos="scaleOut 1.2s ease-out-cubic 0s, d:loop"
          />
        </div>
      </section>
      <section className="services-post-description pt-lg-210 pt-tablet-105 pt-phone-200">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <h2 className="fs--60 text-center split-words" data-aos="d:loop">
                Floral Design Services
              </h2>
            </div>
            <div className="col-12 mt-40">
              <ul
                className="list-services grid-lg-25 grid-md-50"
                data-aos="d:loop"
              >
                <li className="grid-item">
                  <div className="content">
                    <div className="container-img">
                      <img
                        src={img6}
                        data-preload
                        className="media"
                        alt=""
                      />
                    </div>
                    <div className="container-text">
                      <h3 className="service-name split-words">
                        Floral Design
                      </h3>
                      <p className="service-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque neque ipsum, volutpat quis convallis sed,
                        lacinia sit amet tortor. Duis maximus eros mauris, ut
                        sollicitudin arcu convallis ac. Donec eleifend ligula
                        erat, nec condimentum dolor rhoncus nec. Pellentesque
                        rutrum eros mi, id efficitur ante malesuada eu. In a
                        fringilla diam. Ut nunc orci, aliquet quis condimentum
                        eget, malesuada vel nulla. Vestibulum a dolor turpis.
                        Pellentesque ut lorem auctor, scelerisque enim luctus,
                        eleifend sem. Aenean eu leo ut nulla facilisis
                        pellentesque non ac magna. Morbi nec molestie turpis.
                        Fusce eros turpis, euismod in enim vel, mollis lobortis
                        nisl. Vivamus velit est, dictum ut leo ultricies,
                        malesuada bibendum ex.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="grid-item">
                  <div className="content">
                    <div className="container-img">
                      <img
                        src={img6}
                        data-preload
                        className="media"
                        alt=""
                      />
                    </div>
                    <div className="container-text">
                      <h3 className="service-name split-words">
                        Floral Production
                      </h3>
                      <p className="service-description">
                        Vestibulum a dolor turpis. Pellentesque ut lorem auctor,
                        scelerisque enim luctus, eleifend sem. Aenean eu leo ut
                        nulla facilisis pellentesque non ac magna. Morbi nec
                        molestie turpis. Fusce eros turpis, euismod in enim vel,
                        mollis lobortis nisl. Vivamus velit est, dictum ut leo
                        ultricies, malesuada bibendum ex.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="grid-item">
                  <div className="content">
                    <div className="container-img">
                      <img
                        src={img6}
                        data-preload
                        className="media"
                        alt=""
                      />
                    </div>
                    <div className="container-text">
                      <h3 className="service-name split-words">
                        Hardware Fulfillment
                      </h3>
                      <p className="service-description">
                        Pellentesque neque ipsum, volutpat quis convallis sed,
                        lacinia sit amet tortor. Duis maximus eros mauris, ut
                        sollicitudin arcu convallis ac. Donec eleifend ligula
                        erat, nec condimentum dolor rhoncus nec. Pellentesque
                        rutrum eros mi, id efficitur ante malesuada eu. In a
                        fringilla diam. Ut nunc orci, aliquet quis condimentum
                        eget, malesuada vel nulla. Vestibulum a dolor turpis.
                        Pellentesque ut lorem auctor, scelerisque enim luctus,
                        eleifend sem.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="grid-item">
                  <div className="content">
                    <div className="container-img">
                      <img
                        src={img6}
                        data-preload
                        className="media"
                        alt=""
                      />
                    </div>
                    <div className="container-text">
                      <h3 className="service-name split-words">
                        On-site Installation and Removal
                      </h3>
                      <p className="service-description">
                        Pellentesque rutrum eros mi, id efficitur ante malesuada
                        eu. In a fringilla diam. Ut nunc orci, aliquet quis
                        condimentum eget, malesuada vel nulla. Vestibulum a
                        dolor turpis. Pellentesque ut lorem auctor, scelerisque
                        enim luctus, eleifend sem. Aenean eu leo ut nulla
                        facilisis pellentesque non ac magna. Morbi nec molestie
                        turpis. Fusce eros turpis, euismod in enim vel, mollis
                        lobortis nisl. Vivamus velit est, dictum ut leo
                        ultricies, malesuada bibendum ex.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceIntro;
