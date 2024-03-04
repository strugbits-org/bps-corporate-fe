import { Link } from "react-router-dom";
import { OAuthStrategy, createClient } from "@wix/sdk";
import React, { useEffect, useState } from "react";
import { collections, items } from "@wix/data";
import getFullImageURL from "../../common/common_functions/imageURL";
const SliderBanner = () => {
  const [dataItems, setDataItems] = useState([]);
  useEffect(() => {
    async function fetchDataItems() {
      const wixClient = createClient({
        modules: { collections, items },
        auth: OAuthStrategy({
          clientId: "04038da0-732b-471d-babe-4e90ad785740",
        }),
      });
      let options = {
        dataCollectionId: "AboutUsSlider",
      };
      const { items: fetchedItems } = await wixClient.items
        .queryDataItems(options)
        .eq("title", "AboutUsSlider")
        .find();
      setDataItems(fetchedItems);
    }
    fetchDataItems();
    //trigger animation on data load
    // setTimeout(() => {
    //   document.querySelector(".updateWatchedTrigger").click();
    //   document.querySelector(".triggerSplitWordAnimation").click();
    // }, 1000);
  }, []);
  console.log(dataItems,"slider data here")
  return (
    <section className="section-slider-banner">
      <div className="slider-banner banner-about" data-aos="d:loop">
        <div className="swiper-container" data-play-toggle>
          {/* <!-- Additional required wrapper --> */}
          <div className="swiper-wrapper">
            {/* <!-- Slides --> */}
            {dataItems.map((data, index) => {
              return (
                <div key={index} className="swiper-slide">
                  <Link to="/">
                    <div className="container-img">
                      <img
                        src={getFullImageURL(data.data.image)}
                        data-preload
                        className="media"
                        data-parallax
                        data-scale-from="1.3"
                        alt=""
                      />
                    </div>
                    <div className="container-project">
                      <h4 className="project split-words">{data.data.sliderTitle}</h4>
                      <ul className="list-tags">
                         {data.data.arraystring.map((data, index) => {
                              return  <li key={index}>
                              <span>{data}</span>
                            </li>
                        })}
                      </ul>
                    </div>
                    <div className="container-title">
                      <h3 className="title split-words">
                        {data.data.subtitle} <br />
                        {data.data.subtitle1}
                      </h3>
                      <div className="container-btn-bottom">
                        <div
                          className="btn-border-white btn-bottom btn-about"
                          data-cursor-style="off"
                        >
                          <span>{data.data.buttonText}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};
export default SliderBanner;