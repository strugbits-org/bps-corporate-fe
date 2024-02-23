import React from "react";
import img6 from "../../../utilis/images/lib/06_desktop.jpg"
import DelayedLink from "../../../common/DelayedLink";
const Market = () => {
  return (
    <div className="wrapper-submenu-market wrapper-submenu">
                  <div className="container-title-mobile">
                    <h2 className="submenu-title">Markets</h2>
                    <button className="btn-go-back" data-submenu-close>
                      <i className="icon-arrow-left-3"></i>
                      <span>Go back</span>
                    </button>
                  </div>
                  <ul className="list-submenu-market list-submenu list-projects font-submenu">
                    <li className="list-item">
                      <DelayedLink
                        to="/market-post"
                        className="market-link project-link"
                        attributes={{"data-menu-close":"","data-cursor-style":"view"}}
                      >
                        <div
                          className="container-img bg-blue"
                          data-cursor-style="view"
                        >
                          <img
                            src={img6}
                            data-preload
                            className="media"
                            alt=""
                          />
                        </div>
                        <div className="container-text">
                          <h3 className="title-project split-words">
                            Corporate
                          </h3>
                          <ul className="list-tags">
                            <li>
                              <span>Personal</span>
                            </li>
                            <li>
                              <span>Wedding</span>
                            </li>
                            <li>
                              <span>Milestone event</span>
                            </li>
                          </ul>
                        </div>
                      </DelayedLink>
                    </li>
                    <li className="list-item">
                      <DelayedLink
                        to="/market-post"
                        className="market-link project-link"
                        attributes={{"data-menu-close":"","data-cursor-style":"view"}}
                      >
                        <div
                          className="container-img bg-blue"
                          data-cursor-style="view"
                        >
                          <img
                            src={img6}
                            data-preload
                            className="media"
                            alt=""
                          />
                        </div>
                        <div className="container-text">
                          <h3 className="title-project split-words">
                            Corporate
                          </h3>
                          <ul className="list-tags">
                            <li>
                              <span>Personal</span>
                            </li>
                            <li>
                              <span>Wedding</span>
                            </li>
                            <li>
                              <span>Milestone event</span>
                            </li>
                          </ul>
                        </div>
                      </DelayedLink>
                    </li>
                    <li className="list-item">
                      <DelayedLink
                        to="/market-post"
                        className="market-link project-link"
                        attributes={{"data-menu-close":"","data-cursor-style":"view"}}
                      >
                        <div
                          className="container-img bg-blue"
                          data-cursor-style="view"
                        >
                          <img
                            src={img6}
                            data-preload
                            className="media"
                            alt=""
                          />
                        </div>
                        <div className="container-text">
                          <h3 className="title-project split-words">
                            Corporate
                          </h3>
                          <ul className="list-tags">
                            <li>
                              <span>Personal</span>
                            </li>
                            <li>
                              <span>Wedding</span>
                            </li>
                            <li>
                              <span>Milestone event</span>
                            </li>
                          </ul>
                        </div>
                      </DelayedLink>
                    </li>
                    <li className="list-item">
                      <DelayedLink
                        to="/market-post"
                        className="market-link project-link"
                        attributes={{"data-menu-close":"","data-cursor-style":"view"}}
                      >
                        <div
                          className="container-img bg-blue"
                          data-cursor-style="view"
                        >
                          <img
                            src={img6}
                            data-preload
                            className="media"
                            alt=""
                          />
                        </div>
                        <div className="container-text">
                          <h3 className="title-project split-words">
                            Corporate
                          </h3>
                          <ul className="list-tags">
                            <li>
                              <span>Personal</span>
                            </li>
                            <li>
                              <span>Wedding</span>
                            </li>
                            <li>
                              <span>Milestone event</span>
                            </li>
                          </ul>
                        </div>
                      </DelayedLink>
                    </li>
                  </ul>
                </div>
  );
};

export default Market;
