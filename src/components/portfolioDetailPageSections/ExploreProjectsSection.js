import React, { useEffect } from "react";
import DelayedLink from "../../common/DelayedLink";
import { useDispatch, useSelector } from "react-redux";
import { fetchPortfolio } from "../../redux/reducers/portfolioData";

const ExploreProjectsSection = ({data}) => {
  const dispatch = useDispatch();
  const portfolioCollection = useSelector((state) => state.portfolio.portfolioData).data;
  // const index = portfolioData.findIndex(item => item._id === data._id);
  // console.log("portfolioData", portfolioData);
  const portfolioData = portfolioCollection.slice(0,4);


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
                {/* <!-- Additional required wrapper --> */}
                <div className="swiper-wrapper list-portfolio list-slider-mobile grid-lg-25">
                  {/* <!-- Slides --> */}
                  {portfolioData.map((data, index) => (
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
                              src={data.image}
                              data-preload
                              className="media"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="container-text">
                          <ul className="list-tags-small">
                            <li className={"tag-small active"} >
                              <span>{data.marketCategory}</span>
                            </li>
                            {data.studioTags.map((tag, index) => (
                              <React.Fragment key={index}>
                                {index < 2 && (
                                  <li className={"tag-small"}>
                                    <span>{tag}</span>
                                  </li>
                                )}
                              </React.Fragment>
                            ))}
                            {data.studioTags.length > 2 ? (
                              <li className="tag-small">
                                <span>+{data.studioTags.length - 2} studios</span>
                              </li>
                            ) : null}
                          </ul>
                          <h2 className="title-portfolio">
                            {data.title}
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
            <DelayedLink to="/" className="btn-border-blue"
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