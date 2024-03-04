// import { ourprojectSlider } from "../../common/constats/constats";
import DelayedLink from "../../common/DelayedLink";
import React, { useEffect, useState } from "react";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { collections, items } from '@wix/data';
import getFullImageURL from "../../common/common_functions/imageURL";

const OurProjectSection = () => {
  const [dataItems, setDataItems] = useState([]);

  const firstItem = dataItems[0]; 
  const title = firstItem ? firstItem.data.title : "";
  const btntext = firstItem ? firstItem.data.buttonText : "";
  useEffect(() => {
    async function fetchDataItems() {
      const wixClient = createClient({
        modules: { collections, items },
        auth: OAuthStrategy({ clientId: "04038da0-732b-471d-babe-4e90ad785740" }),
      });

      let options = {
        dataCollectionId: "SomeOfOurProjects",
      };

      const { items: fetchedItems } = await wixClient.items
        .queryDataItems(options)
        .eq("title", "Some of our projects")
        .find();
      
      setDataItems(fetchedItems);
    }

    fetchDataItems();
    
  }, []);

  return (
    <section className="home-some-of-our-projects pt-lg-250 pt-mobile-130 pb-135">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h2
              className="fs--80 text-center mb-35 split-words"
              data-aos="d:loop"
            >
              {title}
            </h2>

            <div className="slider-some-of-our-projects slider-content-mobile">
              <div className="swiper-container">
                {/* <!-- Additional required wrapper --> */}
                <div className="swiper-wrapper list-projects slider-mobile font-80">
                  {/* <!-- Slides --> */}
                  {dataItems.map((data, index) => {
                    return (
                      <div key={index} className="swiper-slide list-item">
                        <DelayedLink
                          to="/"
                          className="project-link animation-project-link"
                          attributes={{
                            "data-cursor-style":"view",
                            "data-aos":"d:loop"
                            }}
                        >
                          <div className="container-img bg-blue">
                            <div className="wrapper-img">
                              <img
                                src={getFullImageURL(data.data.image)}
                                data-preload
                                className="media"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="container-text">
                            <h3 className="title-project">{data.data.cardname}</h3>
                            <ul className="list-tags">
                              {Object.values(data.data.tags).map((tag, index) => (
                                <li key={index}>
                                  <span>{tag}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </DelayedLink>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-4 mt-lg-60 mt-mobile-40 flex-center">
            <btn-modal-open
              group="modal-contact"
              class="btn-blue"
              data-cursor-style="off"
            >
              <span>{btntext}</span>
              <i className="icon-arrow-right-2"></i>
            </btn-modal-open>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjectSection;
