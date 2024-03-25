import { useNavigate } from "react-router-dom";
import { getFullImagePost } from "../../common/common_functions/imageURL";
import DelayedLink from "../../common/DelayedLink";
import { pageLoadStart } from "../../utilis/animationsTriggers";

const SliderBanner = ({ data, type }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    pageLoadStart();
    setTimeout(() => {
      navigate(path)
    }, 900);
  }
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
                  <DelayedLink>
                    <div
                      onClick={() => handleNavigate(`/portfolio-post/${data?.portfolioRef?.slug}`) }
                      className="container-img"
                    >
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
                        {data?.markets.map((data, index) => (
                          <li key={index}>
                            <span>{data?.cardname}</span>
                          </li>
                        ))}
                      </ul>
                      {type && (
                        <div className="container-btn-top">
                          <div
                            className="btn-border-white btn-top mt-30"
                            data-cursor-style="off"
                            onClick={() => handleNavigate("/contact")}
                          >
                            <span>Get in touch with us</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="container-title">
                      <h3 className="title split-words">
                        Every project is unique, <br />
                        each event its own.
                      </h3>

                      <div className="container-btn-bottom">
                        {type ? (
                          <div
                            className="btn-blue btn-bottom"
                            data-cursor-style="off"
                            onClick={() => handleNavigate("/portfolio")}
                          >
                            <span>We create dreams</span>
                            <i className="icon-arrow-right"></i>
                          </div>
                        ) : (
                          <div
                            className="btn-border-white btn-bottom btn-about"
                            data-cursor-style="off"
                            onClick={() => handleNavigate("/portfolio")}
                          >
                            <span>Check out our portfolio</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </DelayedLink>
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
