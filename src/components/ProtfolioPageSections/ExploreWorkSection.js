import { categoriesData } from "../../common/constats/portfolioData";
import { Link } from "react-router-dom";
import { OurCardData } from "../../common/constats/portfolioData";
import React from "react";

const ExploreWorkSection = () => {
  return (
    <section className="portfolio-intro pt-lg-145 pt-mobile-105">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mb-lg-60 mb-tablet-40 mb-phone-35">
            <h1 className="fs--60 text-center split-words" data-aos="d:loop">
              {categoriesData.title}
            </h1>

            <div
              className="container-list-tags mt-lg-55 mt-tablet-40 mt-phone-30"
              data-aos="fadeIn .8s ease-in-out .2s, d:loop"
            >
              {categoriesData.categories.map((data, index) => {
                return (
                  // market-tags
                  <div key={index} className="portfolio-tags">
                    <button
                      className="btn-tag-mobile no-desktop"
                      data-set-tag="portfolio"
                    >
                      <span>{data.name}</span>
                      <i className="icon-arrow-down"></i>
                    </button>
                    <div className="list-dropdown" data-get-tag="portfolio">
                      <div className="container-wrapper-list">
                        <div className="wrapper-list">
                          <ul className="list-portfolio-tags list-dropdown-tags">
                            {data.tags.map((data, index) => {
                              return (
                                <li key={index}>
                                  <button
                                    className={` ${
                                      index === 0
                                        ? "portfolio-btn-tag active"
                                        : "portfolio-btn-tag"
                                    }`}
                                  >
                                    <span>{data.tag}</span>
                                  </button>
                                </li>
                              );
                            })}
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
        {/* map cards here */}

        <div className="row row-2">
          <div className="col-lg-12 column-1">
            <ul className="list-portfolio grid-lg-25 grid-tablet-50">
              {OurCardData.map((data, index) => {
                return (
                  <li key={index} className="grid-item">
                    <Link
                      to="/portfolio-post"
                      className="link-portfolio link-portfolio-animation"
                      data-aos="d:loop"
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
                    </Link>
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
