import React, { useEffect, useState } from "react";
import DelayedLink from "../../common/DelayedLink";
import { useDispatch, useSelector } from "react-redux";
import { fetchPortfolio } from "../../redux/reducers/portfolioData";
import { handleCollectionLoaded } from "../../utilis/loadAnimations";

const ExploreWorkSection = () => {
  
  const dispatch = useDispatch();
  // const loading = useSelector((state) => state.market.marketModelLoading);
  // const error = useSelector((state) => state.market.error);

  const portfolioCollection = useSelector((state) => state.portfolio.portfolioData.data);
  const {marketCategories, studioTags} = useSelector((state) => state.portfolio.portfolioData);
  const [selectedStudio, setSelectedStudio] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [filteredPortfolioCollection, setFilteredPortfolioCollection] = useState(portfolioCollection);

  useEffect(() => {
    dispatch(fetchPortfolio());
  }, [dispatch]);

  useEffect(()=>{
    setFilteredPortfolioCollection(portfolioCollection);
  },[portfolioCollection]);

  const handleStudioFilter = (tag) => {
    if (selectedStudio.includes(tag)) {
      setSelectedStudio(
        selectedStudio.filter((el) => el !== tag)
      );
    } else {
      setSelectedStudio([...selectedStudio, tag]);
    }
  };
  const handleMarketFilter = (category) => {
    if (selectedCategory.includes(category)) {
      setSelectedCategory(
        selectedCategory.filter((el) => el !== category)
      );
    } else {
      setSelectedCategory([...selectedCategory, category]);
    }
  };

  useEffect(() => {
    const filteredProjects = portfolioCollection.filter(item => {
      return (
        (selectedCategory.length === 0 || selectedCategory.includes(item.marketCategory)) &&
        (selectedStudio.length === 0 || selectedStudio.some(r=> item.studioTags.includes(r)))
      );
    });
    setFilteredPortfolioCollection(filteredProjects);
  
    setTimeout(() => {
      document.querySelector(".updateWatchedTrigger").click();
    }, 400);
  }, [selectedStudio, selectedCategory, portfolioCollection]);

  useEffect(() => {
    if (portfolioCollection.length > 0 && handleCollectionLoaded) {
      handleCollectionLoaded();
    }
  }, [portfolioCollection]);

  return (
    filteredPortfolioCollection && 
    <section className="portfolio-intro pt-lg-145 pt-mobile-105">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mb-lg-60 mb-tablet-40 mb-phone-35">
            <h1 className="fs--60 text-center split-words" data-aos="d:loop">
              Explore our work
            </h1>

            <div
              className="container-list-tags mt-lg-55 mt-tablet-40 mt-phone-30"
              data-aos="fadeIn .8s ease-in-out .2s, d:loop"
            >
              <div className="portfolio-tags">
                <button
                  className="btn-tag-mobile no-desktop"
                  data-set-tag="portfolio"
                >
                  <span>All Studios</span>
                  <i className="icon-arrow-down"></i>
                </button>
                <div className="list-dropdown" data-get-tag="portfolio">
                  <div className="container-wrapper-list">
                    <div className="wrapper-list">
                      <ul className="list-portfolio-tags list-dropdown-tags">
                        <li>
                          <button
                              onClick={() => {setFilteredPortfolioCollection(portfolioCollection); setSelectedStudio([])}}
                              className={`portfolio-btn-tag ${
                                selectedStudio.length === 0 ? "active" : ""
                              }`}>
                            <span>All Studios</span>
                          </button>
                        </li>
                        {studioTags.map((tag, index) => (
                          <li key={index}>
                            <button
                             onClick={()=>{handleStudioFilter(tag)}}
                              className={`portfolio-btn-tag ${
                                selectedStudio.includes(tag)
                                  ? "active"
                                  : ""
                              }`}
                             key={`studio-${index}`}>
                              {tag}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="market-tags">
                <button className="btn-tag-mobile no-desktop" data-set-tag="market">
                  <span>All Markets</span>
                  <i className="icon-arrow-down"></i>
                </button>
                <div className="list-dropdown" data-get-tag="market">
                  <div className="container-wrapper-list">
                    <div className="wrapper-list">
                      <ul className="list-market-tags list-dropdown-tags">
                        <li>
                          <button
                              onClick={() => {setFilteredPortfolioCollection(portfolioCollection); setSelectedCategory([])}}
                              className={`portfolio-btn-tag ${
                                selectedCategory.length === 0 ? "active" : ""
                              }`}
                              >
                            <span>All Markets</span>
                          </button>
                        </li>
                        {marketCategories.map((category, index) => (
                          <li key={index}>
                            <button
                             onClick={()=>{handleMarketFilter(category)}}
                              className={`portfolio-btn-tag ${
                                selectedCategory.includes(category)
                                  ? "active"
                                  : ""
                              }`}
                              key={`category-${index}`}
                            >
                              {category}
                            </button>
                          </li>
                        ))}

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          {
            filteredPortfolioCollection.length === 0 && (
              "No Data"
            )
          }
        <div className="row row-2">
          <div className="col-lg-12 column-1">
            <ul className="list-portfolio grid-lg-25 grid-tablet-50">
              {filteredPortfolioCollection.map((data) => {
                return (
                  <li key={data._id} className="grid-item">
                    <DelayedLink
                      to={`/portfolio-post/${data.slug}`}
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
                        <h2 className="title-portfolio">{data.title}</h2>
                      </div>
                    </DelayedLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            className="col-lg-2 offset-lg-5 flex-center mt-lg-60 mt-mobile-40"
            data-aos="fadeIn .8s ease-in-out .2s, d:loop"
          >
            <button className="btn-border-blue" data-cursor-style="off">
              <span>See more</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreWorkSection;
