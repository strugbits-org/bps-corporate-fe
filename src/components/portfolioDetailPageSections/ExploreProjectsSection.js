import React, { useEffect } from "react";
import DelayedLink from "../../common/DelayedLink";
import { useDispatch, useSelector } from "react-redux";
import { fetchPortfolio } from "../../redux/reducers/portfolioData";
import getFullImageURL from "../../common/common_functions/imageURL";

const ExploreProjectsSection = ({ data }) => {
  const dispatch = useDispatch();
  const portfolioCollection = useSelector(
    (state) => state.portfolio.portfolioData
  );

  const marketTags = data?.markets[0]?.marketTags;
  const categories = data?.markets?.map((item) => item.cardname);
  useEffect(() => {
    dispatch(fetchPortfolio());
  }, [dispatch]);

  return (
    <section className="portfolio-post-explore-projects pt-lg-310 pt-tablet-100 pt-phone-160 pb-lg-190 pb-mobile-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h2
              className="fs--60 text-center mb-lg-45 mb-tablet-35 mb-phone-40 split-words"
              data-aos="d:loop"
            >
              Explore other projects
            </h2>

            <div className="slider-content-mobile">
              <div className="swiper-container">
                <div className="swiper-wrapper list-portfolio list-slider-mobile grid-lg-25">
                  {portfolioCollection?.slice(0, 4).map((data, index) => (
                    <div key={index} className="swiper-slide grid-item">
                      <DelayedLink
                        to="/portfolio-post"
                        className="link-portfolio link-portfolio-animation"
                        attributes={{
                          "data-aos": "d:loop",
                        }}
                      >
                        <div
                          className="container-img bg-blue"
                          data-cursor-style="view"
                        >
                          <div className="wrapper-img">
                            <img
                              src={getFullImageURL(
                                data?.portfolioRef.coverImage.imageInfo
                              )}
                              data-preload
                              className="media"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="container-text">
                          <ul className="list-tags-small">
                            {marketTags?.map((tag, index) => (
                              <li
                                className={
                                  "tag-small" +
                                  (tag === categories[0] ? " active" : "")
                                }
                              >
                                <span>{tag}</span>
                              </li>
                            ))}
                            {marketTags?.length > 3 ? (
                              <li className="tag-small">
                                <span>+{marketTags?.length - 3} studios</span>
                              </li>
                            ) : null}
                          </ul>
                          <h2 className="title-portfolio">
                            {data?.portfolioRef.title}
                          </h2>
                        </div>
                      </DelayedLink>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-2 offset-lg-5 flex-center mt-lg-60 mt-mobile-40"
            data-aos="fadeIn .8s ease-in-out .2s, d:loop"
          >
            <DelayedLink
              to="/"
              className="btn-border-blue"
              attributes={{
                "data-cursor-style": "off",
              }}
            >
              <span>See more</span>
            </DelayedLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreProjectsSection;
