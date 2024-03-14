import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import getFullImageURL from "../../common/common_functions/imageURL";
import { useDispatch, useSelector } from "react-redux";
import { fetchSliderSection } from "../../redux/reducers/aboutusData";

const SliderBanner = () => {
  const disptach = useDispatch();
  const data = useSelector((state) => state.aboutus.SliderData);
  // const loading = useSelector((state) => state.aboutus.SliderLoading);
  // const error = useSelector((state) => state.aboutus.error);

  useEffect(() => {
   disptach(fetchSliderSection());
  }, [disptach]);

  return (
    <section className="section-slider-banner">
      <div className="slider-banner banner-about" data-aos="d:loop">
        <div className="swiper-container" data-play-toggle>
          {/* <!-- Additional required wrapper --> */}
          <div className="swiper-wrapper">
            {/* <!-- Slides --> */}
            {data.map((data, index) => {
              return (
                <div key={index} className="swiper-slide">
                  <Link to="/">
                    <div className="container-img">
                      <img
                        src={getFullImageURL(data.data.image)}
                        data-preload
                        className="media"
                        data-parallax
                        data-scale-from="1.3"
                        alt=""
                      />
                    </div>
                    <div className="container-project">
                      <h4 className="project split-words">{data.data.sliderTitle}</h4>
                      <ul className="list-tags">
                         {data.data.arraystring.map((data, index) => {
                              return  <li key={index}>
                              <span>{data}</span>
                            </li>
                        })}
                      </ul>
                    </div>
                    <div className="container-title">
                      <h3 className="title split-words">
                        {data.data.subtitle} <br />
                        {data.data.subtitle1}
                      </h3>
                      <div className="container-btn-bottom">
                        <div
                          className="btn-border-white btn-bottom btn-about"
                          data-cursor-style="off"
                        >
                          <span>{data.data.buttonText}</span>
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