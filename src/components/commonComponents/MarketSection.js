import DelayedLink from "../../common/DelayedLink";
import React, { useEffect, useState } from "react";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { collections, items } from "@wix/data";
import getFullImageURL from "../../common/common_functions/imageURL";

const MarketSection = () => {
  let data_delay = 0;

  const [dataItems, setDataItems] = useState([]);

  const firstItem = dataItems[0];
  const title = firstItem ? firstItem.data.title : "";

  useEffect(() => {
    async function fetchDataItems() {
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

      setDataItems(fetchedItems);
    }

    fetchDataItems();
  }, []);

  return (
    <section className="section-markets">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 offset-lg-5">
            <h2
              className="fs--60 fs-phone-40 blue-1 text-center split-chars"
              data-aos="d:loop"
            >
              {title}
            </h2>
          </div>
          <div className="col-12 mt-lg-50 mt-tablet-40 mt-phone-35">
            <ul className="list-markets list-projects font-60 grid-lg-25 grid-tablet-50">
              {dataItems.map((data, index) => {
                data_delay += 50;
                
                return (
                  <li
                    key={index}
                    className="grid-item list-item"
                    data-aos="d:loop"
                    data-delay-desktop={data_delay.toString()}
                  >
                    <DelayedLink
                      to="/market-post"
                      className="market-link project-link"
                      attributes={{
                      "data-cursor-style":"view",
                      "data-menu-close":""
                      }}
                    >
                      <div
                        className="container-img bg-blue"
                        data-cursor-style="view"
                      >
                        <img
                          src={getFullImageURL(data.data.image)}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                      <div className="container-text">
                        <h3 className="title-project split-words">
                          {data.data.cardname}
                        </h3>
                        <ul className="list-tags">
                          {Object.values(data.data.tags).map((tag, index) => (
                            <li key={index}>
                              <span>{tag}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </DelayedLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
