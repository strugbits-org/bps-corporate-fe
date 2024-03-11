import DelayedLink from '../../common/DelayedLink'

const ExplorePortfolio = ({data}) => {
  return (
    data && data.length > 0 &&
    <section className="market-post-explore-portfolio overflow-hidden pt-lg-270 pb-lg-220 py-tablet-100 pt-phone-145 pb-phone-190">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <h2 className="fs--60 text-center split-chars" data-aos="d:loop">
              Explore our portfolio
            </h2>
          </div>
          <div className="col-lg-12 mt-40">
            <div className="slider-content-mobile">
              <div className="swiper-container">
                {/* <!-- Additional required wrapper --> */}
                <div
                  className="swiper-wrapper list-explore-portfolio list-slider-mobile grid-lg-25"
                  data-aos="d:loop"
                >
                  {/* <!-- Slides --> */}
                  {data.map((item, index) => {
                    return (
                      <div key={index} className="swiper-slide grid-item">
                        <DelayedLink to="/portfolio-post" className="link">
                          <div className="img-wrapper">
                            <div
                              className="container-img"
                              data-cursor-style="view"
                            >
                              <img
                                src={item.image}
                                data-preload
                                className="media"
                                alt=""
                              />
                            </div>
                          </div>
                          <h3 className="title-portfolio split-words">
                            {item.title}
                          </h3>
                        </DelayedLink>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 offset-lg-5 flex-center mt-50 column-btn">
            <DelayedLink
                to="/portfolio"
                className="btn-border-blue"
                attributes={{
                  "data-aos":"fadeInUp .8s ease-out-cubic 0s, d:loop, trigger:.column-btn",
                  "data-cursor-style":"off",
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

export default ExplorePortfolio