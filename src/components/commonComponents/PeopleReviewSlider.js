import React from "react";
import { peoplereviewdata, reviewslider } from "../../common/constats";

const PeopleReviewSLider = () => {
  return (
    <section className="section-heres-what-people-are-saying pt-lg-300 pt-tablet-105 pt-phone-145 pb-lg-130 pb-tablet-100 pb-phone-145 pos-relative">
      <div className="container-fluid pos-relative z-3">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 column-1">
            <h2
              className="fs--80 white-1 title text-center split-words"
              data-aos="d:loop"
            >
              {peoplereviewdata.title}
            </h2>
          </div>
          <div className="col-lg-10 offset-lg-1 mt-lg-120 mt-tablet-100 mt-phone-45">
            <div className="slider-testimony" data-aos="d:loop">
              <div className="swiper-container">
                {/* <!-- Additional required wrapper --> */}
                <div className="swiper-wrapper">
                  {/* <!-- Slides --> */}
                  {reviewslider.map((data, index) => {
                    return (
                      <div key={index} className="swiper-slide">
                        <div className="wrapper-content">
                          <div className="container-img">
                            <img
                              src={data.img}
                              data-preload
                              className="media"
                              alt=""
                            />
                          </div>
                          <div className="container-text">
                            <p className="testimony">{data.pargh}</p>
                            <div className="container-profile">
                              <div className="name">{data.name}</div>
                              <div className="occupation">
                                {data.occupation}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="swiper-button-prev no-mobile">
                <span>{peoplereviewdata.back}</span>
              </div>
              <div className="swiper-button-next no-mobile">
                <span>{peoplereviewdata.next}</span>
              </div>
              <div className="swiper-pagination no-mobile"></div>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-4 mt-lg-45 mt-tablet-90 mt-phone-25 flex-center column-btn">
            <btn-modal-open
              group="modal-contact"
              class="btn-blue"
              data-aos="fadeInUp .8s ease-out-cubic 0s, d:loop, trigger:.column-btn"
              data-cursor-style="off"
            >
              <span>{peoplereviewdata.btntext}</span>
              <i className="icon-arrow-right-2"></i>
            </btn-modal-open>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleReviewSLider;
