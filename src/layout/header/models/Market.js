import React, { useEffect, useState } from "react";
import DelayedLink from "../../../common/DelayedLink";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { collections, items } from "@wix/data";
import getFullImageURL from "../../../common/common_functions/imageURL";

const Market = () => {
  
  const [marketsCollection, setMarketsCollection] = useState([]);

  useEffect(() => {
    async function getMarketsCollection() {
      const wixClient = createClient({
        modules: { collections, items },
        auth: OAuthStrategy({
          clientId: "04038da0-732b-471d-babe-4e90ad785740",
        }),
      });

      let options = {
        dataCollectionId: "MarketSection",
      };

      const { items: fetchedItems } = await wixClient.items
        .queryDataItems(options)
        .eq("title", "Markets")
        .find();

        const marketsArray = fetchedItems.map((item)=> {
          item.data.image = getFullImageURL(item.data.image);
          return item.data;
        });
        setMarketsCollection(marketsArray);
    }

    getMarketsCollection();
  }, []);
  
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
        {marketsCollection.map((item) => {
          return (
            <li key={item._id} className="list-item">
              <DelayedLink
                to={`/market-post/${item.slug}`}
                className="market-link project-link"
                attributes={{
                  "data-menu-close": "",
                  "data-cursor-style": "view",
                }}
              >
                <div className="container-img bg-blue" data-cursor-style="view">
                  <img src={item.image} data-preload className="media" alt={item.cardname} />
                </div>
                <div className="container-text">
                  <h3 className="title-project split-words">{item.cardname}</h3>
                  <ul className="list-tags">
                    {item.marketTags.map((tag,index) => (
                      <li key={index}>
                        <span>{tag}</span>
                      </li>
                    ))};
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
