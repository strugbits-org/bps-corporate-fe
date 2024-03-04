
import DelayedLink from "../../../common/DelayedLink";
import { OAuthStrategy, createClient } from "@wix/sdk";
import React, { useEffect, useState } from "react";
import { collections, items } from "@wix/data";
import getFullImageURL from "../../../common/common_functions/imageURL";

const Services = () => {
  const [ servicesCollection, setServicesCollection ] = useState([]);
  useEffect(() => {
    async function getServiceCollection() {
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
        const servicesArray = fetchedItems.map((service)=> {
          service.data.image = getFullImageURL(service.data.modalImage);
          return service.data;
        });

      setServicesCollection(servicesArray);
      setTimeout(() => {
        document.querySelector(".updateWatchedTrigger").click();
        document.querySelector(".triggerSplitWordAnimation").click();
      }, 1000);
    }

    getServiceCollection();
  }, []);


    return (
      <div className="wrapper-submenu-services wrapper-submenu">
        <div className="container-title-mobile">
          <h2 className="submenu-title">Services</h2>
          <button className="btn-go-back" data-submenu-close>
            <i className="icon-arrow-left-3"></i>
            <span>Go back</span>
          </button>
        </div>
        <ul className="list-submenu-services list-submenu">
          {servicesCollection.map((service,index) => index < 5 ? (
            <li key={service._id}>
            <DelayedLink
              to={`/services-post/${service.slug}`}
              className="service-link"
              attributes={{ "data-menu-close": "" }}
            >
              <div className="container-img bg-blue">
                <img
                  src={service.image}
                  data-preload
                  className="media"
                  alt=""
                />
              </div>
              <h2 className="service-title split-words">
                {service.cardName}
              </h2>
              <span className="number">{index > 10 ? index + 1 : "0" + (index + 1)}</span>
            </DelayedLink>
          </li>
          ) : null )}

        </ul>
      </div>
    );
  };
export default Services;