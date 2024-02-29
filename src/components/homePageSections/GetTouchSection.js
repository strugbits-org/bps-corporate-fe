import DelayedLink from "../../common/DelayedLink";
import { OAuthStrategy, createClient } from "@wix/sdk";
import React, { useEffect, useState } from "react";
import { collections, items } from "@wix/data";

const GetTouchSection = () => {
  const [dataItems, setDataItems] = useState([]);
  const gettouch = dataItems.map((item) => ({
    p1: item.data.paragraph1,
    p2: item.data.paragraph2,
    p3: item.data.paragraph3,
    btntext: item.data.buttontext,
  }));
  useEffect(() => {
    async function fetchDataItems() {
      const wixClient = createClient({
        modules: { collections, items },
        auth: OAuthStrategy({
          clientId: "04038da0-732b-471d-babe-4e90ad785740",
        }),
      });

      let options = {
        dataCollectionId: "GetTouchSection",
      };

      const { items: fetchedItems } = await wixClient.items
        .queryDataItems(options)
        .eq("title", "gettouch")
        .find();

      setDataItems(fetchedItems);
      //trigger animation on data load
      setTimeout(() => {
        document.querySelector(".triggerSplitWordAnimation").click();
      }, 1000);
    }

    fetchDataItems();
  }, []);

  return (
    <section className="home-solution pt-220 pb-110">
      <div className="container-fluid">
        {gettouch.map((data, id) => {
          return (
            <div key={id} className="row">
              <div className="col-lg-6 offset-lg-3">
                <div
                  className="container-text fs--40 fs-tablet-40 blue-1 split-words"
                  data-aos="d:loop"
                >
                  <p>{data.p1}</p>
                  <p>{data.p2}</p>
                  <p>{data.p3}</p>
                </div>
              </div>
              <div className="col-lg-4 offset-lg-4 flex-center mt-lg-60 mt-mobile-50">
                <DelayedLink
                  to={"/portfolio"}
                  className="btn-blue btn-medium"
                  attributes={{
                    "data-aos": "fadeIn - .3s, d:loop",
                    "data-cursor-style": "off",
                  }}
                >
                  <span>{data.btntext} </span>
                  <i className="icon-arrow-right-2"></i>
                </DelayedLink>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GetTouchSection;
