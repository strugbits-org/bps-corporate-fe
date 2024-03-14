import React, { useEffect, useState } from "react";
import DelayedLink from "../../common/DelayedLink";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudioSection } from "../../redux/reducers/homeData";
import { getMarketCollection } from "../../redux/reducers/marketData";
import { getFullImagePost } from "../../common/common_functions/imageURL";

const PortfolioListing = ({ data, totalCount, seeMore }) => {

  const dispatch = useDispatch();
  const studios = useSelector((state) => state.home.studioData);
  const markets = useSelector((state) => state.market.marketModel);

  // const loading = useSelector((state) => state.market.marketModelLoading);
  // const error = useSelector((state) => state.market.error);

  const [selectedStudio, setSelectedStudio] = useState([]);
  const [selectedMarkets, setSelectedMarkets] = useState([]);
  const [filteredPortfolioCollection, setFilteredPortfolioCollection] = useState(data);

  useEffect(() => {
    dispatch(fetchStudioSection());
    dispatch(getMarketCollection());
  }, [dispatch]);


  useEffect(() => {
    setFilteredPortfolioCollection(data);
  }, [data]);

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
    if (selectedMarkets.includes(category)) {
      setSelectedMarkets(
        selectedMarkets.filter((el) => el !== category)
      );
    } else {
      setSelectedMarkets([...selectedMarkets, category]);
    }
  };

  useEffect(() => {
    const filteredProjects = data.filter(item => {
      const studiosLabels = item.studios.map((item) => item.cardName)
      const marketLabels = item.markets.map((item) => item.cardname)
      return (
        (selectedMarkets.length === 0 || selectedMarkets.some(r => marketLabels.includes(r))) &&
        (selectedStudio.length === 0 || selectedStudio.some(r => studiosLabels.includes(r)))
      );
    });
    setFilteredPortfolioCollection(filteredProjects);
    setTimeout(() => {
      document.querySelector(".updateWatchedTrigger").click();
    }, 400);
  }, [selectedStudio, selectedMarkets, data]);

  return (
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
                            onClick={() => { setFilteredPortfolioCollection(data); setSelectedStudio([]) }}
                            className={`portfolio-btn-tag ${selectedStudio.length === 0 ? "active" : ""
                              }`}>
                            <span>All Studios</span>
                          </button>
                        </li>
                        {studios?.map((item, index) => (
                          <li key={index}>
                            <button
                              onClick={() => { handleStudioFilter(item.data.cardName) }}
                              className={`portfolio-btn-tag ${selectedStudio.includes(item.data.cardName)
                                ? "active"
                                : ""
                                }`}>
                              {item.data.cardName}
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
                            onClick={() => { setFilteredPortfolioCollection(data); setSelectedMarkets([]) }}
                            className={`portfolio-btn-tag ${selectedMarkets.length === 0 ? "active" : ""
                              }`}
                          >
                            <span>All Markets</span>
                          </button>
                        </li>
                        {markets?.map((market, index) => (
                          <li key={index}>
                            <button
                              onClick={() => { handleMarketFilter(market.cardname) }}
                              className={`portfolio-btn-tag ${selectedMarkets.includes(market.cardname)
                                ? "active"
                                : ""
                                }`}
                              key={`category-${index}`}
                            >
                              {market.cardname}
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
        <div className="row row-2">
          <div className="col-lg-12 column-1">
            <ul className="list-portfolio grid-lg-25 grid-tablet-50">
              {filteredPortfolioCollection?.map((item) => {
                return (
                  <li key={item._id} className="grid-item">
                    <DelayedLink
                      to={`/portfolio-post/${item.slug}`}
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
                            src={getFullImagePost(item.portfolioRef.coverImage.imageInfo)}
                            data-preload
                            className="media"
                            alt=""
                          />
                        </div>
                      </div>
                    </DelayedLink>
                    <div className="link-portfolio">
                      <div className="container-text">
                        <ul className="list-tags-small">
                          {item.markets.map((market, index) => (
                            <li key={index} onClick={() => { handleMarketFilter(market.cardname) }} className={`tag-small ${selectedMarkets.includes(market.cardname)
                              ? "active"
                              : ""
                              }`}  >
                              <span>{market.cardname}</span>
                            </li>
                          ))}
                          {item.studios.map((studio, index) => (
                            <React.Fragment key={index}>
                              {index < 2 && (
                                <li onClick={() => { handleStudioFilter(studio.cardName) }} className={`tag-small ${selectedStudio.includes(studio.cardName)
                                  ? "active"
                                  : ""
                                  }`} >
                                  <span>{studio.cardName}</span>a
                                </li>
                              )}
                            </React.Fragment>
                          ))}
                          {item.studios.length > 2 ? (
                            <li className="tag-small">
                              <span>+{item.studios.length - 2} studios</span>
                            </li>
                          ) : null}
                        </ul>
                        <h2 className="title-portfolio">{item.portfolioRef.title}</h2>
                      </div>
                    </div>
                  </li>
                );
              })}
              {filteredPortfolioCollection.length === 0 && <h6 style={{ width: "100%" }} className="fs--40 text-center split-words" data-aos="d:loop">No Data found</h6>}
            </ul>
          </div>
          {filteredPortfolioCollection.length !== totalCount && (
            <div className="col-lg-2 offset-lg-5 flex-center mt-lg-60 mt-mobile-40" data-aos="fadeIn .8s ease-in-out .2s, d:loop">
              <button onClick={seeMore} className="btn-border-blue" data-cursor-style="off">
                <span>See more</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioListing;
