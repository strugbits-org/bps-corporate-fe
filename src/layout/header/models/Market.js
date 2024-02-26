import React from "react";
import DelayedLink from "../../../common/DelayedLink";
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
        {modelData.map((data) => {
          return (
            <li key={data.id} className="list-item">
              <DelayedLink
                to={`/market-post/${data.id}`}
                className="market-link project-link"
                attributes={{
                  "data-menu-close": "",
                  "data-cursor-style": "view",
                }}
              >
                <div className="container-img bg-blue" data-cursor-style="view">
                  <img src={data.img} data-preload className="media" alt="" />
                </div>
                <div className="container-text">
                  <h3 className="title-project split-words">{data.title}</h3>
                  <ul className="list-tags">
                    {Object.values(data.tags).map((data, id) => {
                      return (
                        <li key={id}>
                          <span>{data}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </DelayedLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Market;
