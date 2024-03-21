import React, { useState } from "react";
import DelayedLink from "../../common/DelayedLink";
import { getFullImagePost } from "../../common/common_functions/imageURL";

const PortfolioListing = ({ data, seeMore, applyFilters }) => {

  const [selectedStudios, setSelectedStudios] = useState([]);
  const [selectedMarkets, setSelectedMarkets] = useState([]);

  const [studiosDropdownActive, setSudiosDropdownActive] = useState(false);
  const [marketsDropdownActive, setMarketsDropdownActive] = useState([]);

  const handleStudioFilter = (tag) => {
    setSudiosDropdownActive(false);
    setMarketsDropdownActive(false);
    if (selectedStudios.includes(tag)) {
      const _selectedStudios = selectedStudios.filter((el) => el !== tag);
      setSelectedStudios(_selectedStudios);
      applyFilters({ selectedStudios: _selectedStudios, selectedMarkets });
    } else {
      const _selectedStudios = [...selectedStudios, tag];
      setSelectedStudios(_selectedStudios);
      applyFilters({ selectedStudios: _selectedStudios, selectedMarkets });
    }
  };
  const handleMarketFilter = (category) => {
    setSudiosDropdownActive(false);
    setMarketsDropdownActive(false);
    if (selectedMarkets.includes(category)) {
      const _selectedMarkets = selectedMarkets.filter((el) => el !== category);
      setSelectedMarkets(_selectedMarkets);
      applyFilters({ selectedStudios, selectedMarkets: _selectedMarkets });
    } else {
      const _selectedMarkets = [...selectedMarkets, category];
      setSelectedMarkets(_selectedMarkets);
      applyFilters({ selectedStudios, selectedMarkets: _selectedMarkets });
    }
  };

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
                  onClick={() => { setSudiosDropdownActive(!studiosDropdownActive) }}
                  className={`btn-tag-mobile no-desktop ${studiosDropdownActive ? "active" : ""}`}
                >
                  <span>All Studios</span>
                  <i className="icon-arrow-down"></i>
                </button>
                <div className={`list-dropdown ${studiosDropdownActive ? "active" : ""}`}>
                  <div className="container-wrapper-list">
                    <div className="wrapper-list">
                      <ul className="list-portfolio-tags list-dropdown-tags">
                        <li>
                          <button
                            onClick={() => { setSelectedStudios([]) }}
                            className={`portfolio-btn-tag ${selectedStudios.length === 0 ? "active" : ""
                              }`}>
                            <span>All Studios</span>
                          </button>
                        </li>
                        {data.studios?.map((item, index) => (
                          <li key={index}>
                            <button
                              onClick={() => { handleStudioFilter(item.data._id) }}
                              className={`portfolio-btn-tag ${selectedStudios.includes(item.data._id)
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
                <button
                  onClick={() => { setMarketsDropdownActive(!marketsDropdownActive) }}
                  className={`btn-tag-mobile no-desktop ${marketsDropdownActive ? "active" : ""}`}
                >
                  <span>All Markets</span>
                  <i className="icon-arrow-down"></i>
                </button>
                <div className={`list-dropdown ${marketsDropdownActive ? "active" : ""}`}>
                  <div className="container-wrapper-list">
                    <div className="wrapper-list">
                      <ul className="list-market-tags list-dropdown-tags">
                        <li>
                          <button
                            onClick={() => { setSelectedMarkets([]) }}
                            className={`portfolio-btn-tag ${selectedMarkets.length === 0 ? "active" : ""
                              }`}
                          >
                            <span>All Markets</span>
                          </button>
                        </li>
                        {data.markets?.map((market, index) => (
                          <li key={index}>
                            <button
                              onClick={() => { handleMarketFilter(market._id) }}
                              className={`portfolio-btn-tag ${selectedMarkets.includes(market._id)
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
              {data.items?.map((item) => {
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
                            <li key={index} onClick={() => { handleMarketFilter(market._id) }} className={`tag-small ${selectedMarkets.includes(market._id)
                              ? "active"
                              : ""
                              }`}  >
                              <span>{market.cardname}</span>
                            </li>
                          ))}
                          {item.studios.map((studio, index) => (
                            <React.Fragment key={index}>
                              {index < 2 && (
                                <li onClick={() => { handleStudioFilter(studio._id) }} className={`tag-small ${selectedStudios.includes(studio._id)
                                  ? "active"
                                  : ""
                                  }`} >
                                  <span>{studio.cardName}</span>
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
              {data.items.length === 0 && <h6 style={{ width: "100%" }} className="fs--40 text-center split-words" data-aos="d:loop">No Data found</h6>}
            </ul>
          </div>
          {data.items.length > 0 && data.items.length !== data.totalCount && (
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
