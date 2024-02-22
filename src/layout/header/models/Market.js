import React from "react";
import { Link } from "react-router-dom";
import { modelData } from "../../../common/constats/marketData";
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
        {modelData.map((data, index) => {
          return (
            <li key={index} className="list-item">
              <Link
                to="/market-post"
                className="market-link project-link"
                data-cursor-style="view"
                data-menu-close
              >
                <div className="container-img bg-blue" data-cursor-style="view">
                  <img src={data.img} data-preload className="media" alt="" />
                </div>
                <div className="container-text">
                  <h3 className="title-project split-words">{data.title}</h3>
                  <ul className="list-tags">
                    {Object.values(data.tags).map((tag, index) => (
                      <li key={index}>
                        <span>{tag}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Market;
