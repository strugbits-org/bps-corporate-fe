import { portfolioData } from "../../common/constats/portfolioData";
import React, { useEffect, useState } from "react";
import DelayedLink from "../../common/DelayedLink";
import { Link } from "react-router-dom";

const ExploreWorkSection = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [allstudiofilteredItems, setAllstudiofilteredItems] = useState(
    portfolioData.AllStudioItems
  );
  const [allmarketfilteredItems, setAllmarketfilteredItems] = useState(
    portfolioData.AllMarketsitems
  );

  const allstudiomenuitems = [
    ...new Set(portfolioData.AllStudioItems.map((data) => data.categories)),
  ];
  const allmarketmenuitems = [
    ...new Set(portfolioData.AllMarketsitems.map((data) => data.categories)),
  ];

  const handleAllStudioFilter = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      setSelectedFilters(
        selectedFilters.filter((el) => el !== selectedCategory)
      );
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };
  const handleAllMarketFilter = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      setSelectedFilters(
        selectedFilters.filter((el) => el !== selectedCategory)
      );
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };
  useEffect(() => {
    document.querySelector(".updateWatchedTrigger").click();
    const filterAllStudioItems = () => {
      if (selectedFilters.length > 0) {
        let tempItems = portfolioData.AllStudioItems.filter((item) =>
          selectedFilters.includes(item.categories)
        );
        setAllstudiofilteredItems(tempItems);
      } else {
        setAllstudiofilteredItems(portfolioData.AllStudioItems);
      }
    };
    const filterAllMarketItems = () => {
      if (selectedFilters.length > 0) {
        let tempItems = portfolioData.AllMarketsitems.filter((item) =>
          selectedFilters.includes(item.categories)
        );
        setAllmarketfilteredItems(tempItems);
      } else {
        setAllmarketfilteredItems(portfolioData.AllMarketsitems);
      }
    };
    filterAllStudioItems();
    filterAllMarketItems();
  }, [selectedFilters]);

  useEffect(() => {
    document.querySelector(".updateWatchedTrigger").click();
  }, [allstudiofilteredItems, allmarketfilteredItems]);

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
              <div class="portfolio-tags">
                <button
                  class="btn-tag-mobile no-desktop"
                  data-set-tag="portfolio"
                >
                  <span>All Studios</span>
                  <i class="icon-arrow-down"></i>
                </button>
                <div class="list-dropdown" data-get-tag="portfolio">
                  <div class="container-wrapper-list">
                    <div class="wrapper-list">
                      <ul class="list-portfolio-tags list-dropdown-tags">
                        <li>
                          <button
                            onClick={() =>
                              setAllstudiofilteredItems(
                                portfolioData.AllStudioItems
                              )
                            }
                            className={`portfolio-btn-tag ${
                              selectedFilters.length === 0 ? "active" : ""
                            }`}
                          >
                            <span>All Studios</span>
                          </button>
                        </li>
                        {allstudiomenuitems.map((categories, idx) => (
                          <li>
                            <Link
                              onClick={() => handleAllStudioFilter(categories)}
                              className={`portfolio-btn-tag ${
                                selectedFilters?.includes(categories)
                                  ? "active"
                                  : ""
                              }`}
                              key={`filters-${idx}`}
                            >
                              {categories}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="market-tags">
                <button class="btn-tag-mobile no-desktop" data-set-tag="market">
                  <span>All Markets</span>
                  <i class="icon-arrow-down"></i>
                </button>
                <div class="list-dropdown" data-get-tag="market">
                  <div class="container-wrapper-list">
                    <div class="wrapper-list">
                      <ul class="list-market-tags list-dropdown-tags">
                        <li>
                          <button
                            onClick={() =>
                              setAllmarketfilteredItems(
                                portfolioData.AllMarketsitems
                              )
                            }
                            className={`portfolio-btn-tag ${
                              selectedFilters.length === 0 ? "active" : ""
                            }`}
                          >
                            <span>All Markets</span>
                          </button>
                        </li>
                        {allmarketmenuitems.map((categories, idx) => (
                          <li>
                            <Link
                              onClick={() => handleAllMarketFilter(categories)}
                              className={`portfolio-btn-tag ${
                                selectedFilters?.includes(categories)
                                  ? "active"
                                  : ""
                              }`}
                              key={`filters-${idx}`}
                            >
                              {categories}
                            </Link>
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
              {allstudiofilteredItems.map((data) => {
                return (
                  <li key={data.id} className="grid-item">
                    <DelayedLink
                      to={`/portfolio-post/${data.id}`}
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
                            src={data.img}
                            data-preload
                            className="media"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="container-text">
                        <ul className="list-tags-small">
                          <>
                            {data.tags.map((tag, index) => (
                              <React.Fragment key={index}>
                                {index < 3 && (
                                  <li
                                    className={`tag-small ${
                                      index === 0 ? "active" : ""
                                    }`}
                                  >
                                    <span>{tag.tag}</span>
                                  </li>
                                )}
                              </React.Fragment>
                            ))}
                            {data.tags.length > 3 ? (
                              <li className="tag-small">
                                <span>+{data.tags.length - 3} studios</span>
                              </li>
                            ) : null}
                          </>
                        </ul>

                        <h2 className="title-portfolio">{data.title}</h2>
                      </div>
                    </DelayedLink>
                  </li>
                );
              })}
              {allmarketfilteredItems.map((data, index) => {
                return (
                  <li key={index} className="grid-item">
                    <DelayedLink
                      to={`/portfolio-post/${data.id}`}
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
                            src={data.img}
                            data-preload
                            className="media"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="container-text">
                        <ul className="list-tags-small">
                          {data.tags.map((tag, index) => (
                            <React.Fragment key={index}>
                              {index < 3 && (
                                <li
                                  className={`tag-small ${
                                    index === 0 ? "active" : ""
                                  }`}
                                >
                                  <span>{tag.tag}</span>
                                </li>
                              )}
                            </React.Fragment>
                          ))}
                          {data.tags.length > 3 ? (
                            <li className="tag-small">
                              <span>+{data.tags.length - 3} studios</span>
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
