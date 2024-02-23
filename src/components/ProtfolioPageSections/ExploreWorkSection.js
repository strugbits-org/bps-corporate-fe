import {
  OurCardData,
  // portfolioData,
  categoriesData,
} from "../../common/constats/portfolioData";
import React, { useEffect, useState } from "react";
import DelayedLink from "../../common/DelayedLink";
const ExploreWorkSection = () => {
  const dataTag = [
    { name: "portfolio", cssClass: "list-portfolio-tags" },
    { name: "market", cssClass: "list-market-tags" },
  ];

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(OurCardData);

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      setSelectedFilters(
        selectedFilters.filter((el) => el !== selectedCategory)
      );
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    const filterItems = () => {
      if (selectedFilters.length > 0) {
        let tempItems = OurCardData.filter((item) =>
          selectedFilters.includes(item.category)
        );
        setFilteredItems(tempItems);
      } else {
        setFilteredItems(OurCardData);
      }
    };
    filterItems();
    console.log(selectedFilters, "");
  }, [selectedFilters]);

  useEffect(() => {
    console.log("filteredItems changed:", filteredItems);
  }, [filteredItems]);

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
              {categoriesData.categories.map((data, index) => {
                const { name, cssClass } = dataTag[index] || {};
                return (
                  <div
                    key={index}
                    className={
                      index % 2 !== 0 ? "market-tags" : "portfolio-tags"
                    }
                  >
                    <button
                      className="btn-tag-mobile no-desktop"
                      data-set-tag={name || ""}
                    >
                      <span>{data.name}</span>
                      <i className="icon-arrow-down"></i>
                    </button>
                    <div className="list-dropdown" data-get-tag={name || ""}>
                      <div className="container-wrapper-list">
                        <div className="wrapper-list">
                          <ul className={`${cssClass} list-dropdown-tags`}>
                            
                            {data.tags.map((category, idx) => (
                              <li
                                onClick={() =>
                                  handleFilterButtonClick(category)
                                }
                                className={`portfolio-btn-tag  ${
                                  selectedFilters?.includes(category)
                                    ? "active"
                                    : ""
                                }`}
                                key={`filters-${idx}`}
                              >
                                {category.tag}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              
            </div>
          </div>
        </div>
        <div className="row row-2">
          <div className="col-lg-12 column-1">
            <ul className="list-portfolio grid-lg-25 grid-tablet-50">
              {filteredItems.map((data, index) => {
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
                          {Object.values(data.tags).map((tag, index) => (
                            <React.Fragment key={index}>
                              {index < 3 ? (
                                <li
                                  className={`tag-small ${
                                    index === 0 ? "active" : ""
                                  }`}
                                >
                                  <span>{tag}</span>
                                </li>
                              ) : null}
                            </React.Fragment>
                          ))}
                          {Object.values(data.tags).length > 3 ? (
                            <li className="tag-small">
                              <span>
                                +{Object.values(data.tags).length - 3} studios
                              </span>
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
