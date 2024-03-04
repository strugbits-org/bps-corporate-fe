import DelayedLink from "../../common/DelayedLink";
import { OAuthStrategy, createClient } from "@wix/sdk";
import React, { useEffect, useState } from "react";
import { collections, items } from "@wix/data";
import getFullImageURL from "../../common/common_functions/imageURL";

const OurDream = () => {
  const [dataItems, setDataItems] = useState([]);
  const firstItem = dataItems[0];
  const title = firstItem ? firstItem.data.title : "";
  const buttontext = firstItem ? firstItem.data.buttontext : "";
  useEffect(() => {
    async function fetchDataItems() {
      const wixClient = createClient({
        modules: { collections, items },
        auth: OAuthStrategy({
          clientId: "04038da0-732b-471d-babe-4e90ad785740",
        }),
      });

      let options = {
        dataCollectionId: "AboutusDreamTeamSection",
      };

      const { items: fetchedItems } = await wixClient.items
        .queryDataItems(options)
        .eq("title", "The Dream Team")
        .find();

      setDataItems(fetchedItems);
      //trigger animation on data load
      setTimeout(() => {
        document.querySelector(".updateWatchedTrigger").click();
        document.querySelector(".triggerSplitWordAnimation").click();
      }, 1000);
    }

    fetchDataItems();
  }, []);

  return (
    <section className="about-dream-team pt-lg-195">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <h2 className="fs--80 text-center split-words" data-aos="d:loop">
              {title}
            </h2>
          </div>
          <div className="col-lg-12 mt-lg-70 mt-mobile-40">
            <ul className="list-dream-team grid-lg-25 grid-tablet-50">
              <div className="line-wrapper" data-aos="d:loop">
                {dataItems.map((data, index) => {
                  return (
                    <li key={index} className="grid-item">
                      <div className="wrapper-profile">
                        <div className="container-img">
                          <img
                            src={getFullImageURL(data.data.image)}
                            data-preload
                            className="media"
                            alt=""
                          />
                        </div>
                        <div className="container-text">
                          <h3 className="name split-words">{data.data.name}</h3>
                          <p className="occupation split-words">
                            {data.data.designation}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </div>
            </ul>
          </div>
          <div className="col-lg-4 offset-lg-4 flex-center mt-lg-60 mt-mobile-40 btn-trigger">
            <DelayedLink
              to="/"
              className="btn-blue btn-border-blue"
              attributes={{
                "data-aos":
                  "fadeInUp .8s ease-out-cubic 0s, d:loop, trigger:.btn-trigger",
                "data-cursor-style": "off",
              }}
            >
              <span>{buttontext}</span>
            </DelayedLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDream;
