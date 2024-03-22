import { Link } from "react-router-dom";
import { getFullImagePost } from "../../common/common_functions/imageURL";

const SliderBanner = ({ data, type }) => {
  return (
    <section className="section-slider-banner">
      <div className="slider-banner banner-about" data-aos="d:loop">
        <div className="swiper-container" data-play-toggle>
          {/* <!-- Additional required wrapper --> */}
          <div className="swiper-wrapper">
            {/* <!-- Slides --> */}
            {data?.map((data, index) => {
              return (
                <div key={index} className="swiper-slide">
                  <Link to="/">
                    <div className="container-img">
                      <img
                        src={getFullImagePost(
                          data?.portfolioRef?.coverImage?.imageInfo
                        )}
                        data-preload
                        className="media"
                        data-parallax
                        data-scale-from="1.3"
                        alt=""
                      />
                    </div>
                    <div className="container-project">
                      <h4 className="project split-words">
                        {data?.portfolioRef?.title}
                      </h4>
                      <ul className="list-tags">
                        {data?.markets.map((data, index) => {
                          return (
                            <li key={index}>
                              <span>{data?.cardname}</span>
                            </li>
                          );
                        })}
                      </ul>
                      {type ?  <div class="container-btn-top">
                          <div
                            class="btn-border-white btn-top mt-30"
                            data-cursor-style="off"
                          >
                            {/* <span>{data?.data?.subtitleButtion}</span> */}
                            <span>Get in touch with us</span>
                          </div>
                        </div> : ""}
                      {/* {data?.data?.subtitleButtion && (
                        <div class="container-btn-top">
                          <div
                            class="btn-border-white btn-top mt-30"
                            data-cursor-style="off"
                          >
                            <span>{data?.data?.subtitleButtion}</span>
                          </div>
                        </div>
                      )} */}
                    </div>
                    <div className="container-title">
                      <h3 className="title split-words">
                        {/* {data?.data?.subtitle} <br />
                        {data?.data?.subtitle1} */}
                        Every project is unique, <br />
                        each event its own.
                      </h3>
                      {/* {data?.data?.buttonText && ( */}
                      <div className="container-btn-bottom">
                        <div
                          className="btn-border-white btn-bottom btn-about"
                          data-cursor-style="off"
                        >
                          <span>Check out our portfolio</span>
                        </div>
                      </div>
                      {/* )} */}
                      {/* {data?.data?.subtitle1Button && (
                        <div class="container-btn-bottom">
                          <div
                            class="btn-blue btn-bottom"
                            data-cursor-style="off"
                          >
                            <span>{data?.data?.subtitle1Button}</span>
                            <i class="icon-arrow-right"></i>
                          </div>
                        </div>
                      )} */}
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
