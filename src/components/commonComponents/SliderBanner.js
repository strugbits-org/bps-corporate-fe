import React from "react";
import { Link } from "react-router-dom";
import { Slider } from "../../common/constats/constats";
const SliderBanner = () => {
  return (
    <section className="section-slider-banner">
      <div className="slider-banner banner-about" data-aos="d:loop">
        <div className="swiper-container" data-play-toggle>
          {/* <!-- Additional required wrapper --> */}
          <div className="swiper-wrapper">
            {/* <!-- Slides --> */}
            {Slider.map((data, index) => {
              return (
                <div key={index} className="swiper-slide">
                  <Link to="/">
                    <div className="container-img">
                      <img
                        src={data.img}
                        data-preload
                        className="media"
                        data-parallax
                        data-scale-from="1.3"
                        alt=""
                      />
                    </div>

                    <div className="container-project">
                      <h4 className="project split-words">{data.title}</h4>
                      <ul className="list-tags">
                        {Object.values(data.tags).map((tag, index) => (
                          <li key={index}>
                            <span>{tag}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="container-title">
                      <h3 className="title split-words">
                        {data.desc1} <br />
                        {data.desc2}
                      </h3>

                      <div className="container-btn-bottom">
                        <div
                          className="btn-border-white btn-bottom btn-about"
                          data-cursor-style="off"
                        >
                          <span>{data.btntext}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default SliderBanner;
