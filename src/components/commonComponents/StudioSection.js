import { OAuthStrategy, createClient } from "@wix/sdk";
import React, { useEffect, useState } from "react";
import { collections, items } from "@wix/data";

const getFullImageURL = (imageSRC) => {

  
  if (imageSRC && imageSRC.startsWith("wix:image://v1/")) {
    const wixImageURL = "https://static.wixstatic.com/media/";
    const wixLocalURL = imageSRC.replace("wix:image://v1/", "").split("/")[0];
    return wixImageURL + wixLocalURL;
  } else {
    return imageSRC;
  }
};

const StudioSection = () => {
  const [dataItems, setDataItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const firstItem = dataItems[0]; // Assuming you want values from the first item
  const title = firstItem ? firstItem.data.title : "";
  const desc = firstItem ? firstItem.data.description : "";

  useEffect(() => {
    async function fetchDataItems() {
      const wixClient = createClient({
        modules: { collections, items },
        auth: OAuthStrategy({
          clientId: "04038da0-732b-471d-babe-4e90ad785740",
        }),
      });

      let options = {
        dataCollectionId: "StudiosSection",
      };

      const { items: fetchedItems } = await wixClient.items
        .queryDataItems(options)
        .eq("title", "Studios")
        .find();

      setDataItems(fetchedItems);
      //trigger animation on data load
      setTimeout(() => {
        document.querySelector(".triggerSplitWordAnimation").click();
        document.querySelector(".updateWatchedTrigger").click();
      }, 3000);
    }

    fetchDataItems();
  }, []);

  return (
    <section className="section-studios">
      <div className="container-fluid">
        <div className="row row-1">
          <div className="col-lg-2 col-md-6">
            <h2
              className="fs--90 fs-tablet-40 blue-1 split-chars"
              data-aos="d:loop"
            >
              {title}
            </h2>
          </div>
          <div className="col-lg-5 col-md-6 offset-lg-5 column-2">
            <p
              className="fs--40 fs-mobile-18 text"
              data-aos="fadeIn .6s ease-in-out .4s, d:loop"
            >
              {desc}
            </p>
          </div>
        </div>

        <div className="row mt-lg-95 mt-tablet-45 mt-phone-40">
          <div className="col-lg-12">
            <ul className="accordion-list-studios" data-aos="d:loop">
              {dataItems.map((data, index) => {
              
                return (
                  <li key={index} 
                  className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => handleClick(index)}>
                    <div className="accordion-header">
                      <h3
                        className="accordion-title split-words"
                        data-aos="d:loop"
                      >
                        {data.data.cardName}
                      </h3>
                    </div>
                    <div className="accordion-content">
                      <div className="container-img bg-blue">
                        <img
                          src={getFullImageURL(data.data.image)}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                      <p className="accordion-text">
                        {data.data.cardDescription}
                      </p>
                    </div>
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

export default StudioSection;
