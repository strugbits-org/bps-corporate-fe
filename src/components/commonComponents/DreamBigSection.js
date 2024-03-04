import { OAuthStrategy, createClient } from "@wix/sdk";
import React, { useEffect, useState } from "react";
import { collections, items } from "@wix/data";
import getFullImageURL from "../../common/common_functions/imageURL";

const DreamBigSection = () => {
  const [dataItems, setDataItems] = useState([]);

  const firstItem = dataItems[0]; // Assuming you want values from the first item
  const btntext = firstItem ? firstItem.data.buttonText  : "";
  const pragraph1  = firstItem ? firstItem.data.pragraph1 : "";
  const pragraph2  = firstItem ? firstItem.data.pragraph2 : "";
  const desktopImg  = firstItem ? firstItem.data.desktopBackgroundImage : "";
  const mobileImg  = firstItem ? firstItem.data.mobileBackgroundImage  : "";
  useEffect(() => {
    async function fetchDataItems() {
      const wixClient = createClient({
        modules: { collections, items },
        auth: OAuthStrategy({
          clientId: "04038da0-732b-471d-babe-4e90ad785740",
        }),
      });

      let options = {
        dataCollectionId: "DreamBigSection",
      };

      const { items: fetchedItems } = await wixClient.items
        .queryDataItems(options)
        .eq("title", "dreambig")
        .find();

      setDataItems(fetchedItems);
      // trigger animation on data load
      setTimeout(() => {
        document.querySelector(".updateWatchedTrigger").click();
        document.querySelector(".triggerSplitWordAnimation").click();

      }, 1000);
    }

    fetchDataItems();
   
  }, []);

  return (
    <section className="section-dream-big">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 offset-lg-4 column-1">
            <div className="container-img no-phone">
              <img src={getFullImageURL(desktopImg)} data-preload className="media" alt="" />
            </div>
            <div className="container-img no-desktop no-tablet">
              <img src={getFullImageURL(mobileImg)}  data-preload className="media" alt="" />
            </div>
            <div
              data-parallax
              data-trigger=".section-dream-big"
              data-translate-y-from="30vh"
              data-end="center center"
              className="content"
            >
              <btn-modal-open
                group="modal-contact"
                class="btn-blue"
                data-cursor-style="off"
              >
                <span>{btntext}</span>
                <i className="icon-arrow-right-2"></i>
              </btn-modal-open>
              <p
                className="fs--20 flex-center fs-phone-16 fw-500 font-2 blue-1 text-center pos-relative z-5 mt-30 text"
                data-parallax
                data-trigger=".section-dream-big"
                data-translate-y-from="30vh"
                data-end="center center"
              >
                {pragraph1} <br />
                {pragraph2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamBigSection;
