import DelayedLink from "../../common/DelayedLink";
import Newsletter from "../../common/Newsletter";
import { OAuthStrategy, createClient } from "@wix/sdk";
import React, { useEffect, useState } from "react";
import { collections, items } from "@wix/data";
import getFullImageURL from "../../common/common_functions/imageURL";

const Footer = () => {
  const [dataItems, setDataItems] = useState([]);
  const [dataContact, setDataContact] = useState([]);
  const firstItem = dataItems[0]; // Assuming you want values from the first item
  const logo1 = firstItem ? firstItem.data.logo1  : "";
  const logo2 = firstItem ? firstItem.data.logo2  : "";
  const logo3 = firstItem ? firstItem.data.logo3  : "";
  const heading = firstItem ? firstItem.data.heading  : "";
  const copyright = firstItem ? firstItem.data.copyright  : "";

  useEffect(() => {
    async function fetchDataItems() {
      const wixClient = createClient({
        modules: { collections, items },
        auth: OAuthStrategy({
          clientId: "04038da0-732b-471d-babe-4e90ad785740",
        }),
      });

      let options = {
        dataCollectionId: "Footer",
      };

      let contactus = {
        dataCollectionId: "ContactDetails",
      }

      const { items: fetchedItems } = await wixClient.items
        .queryDataItems(options)
        .eq("title", "footer")
        .find();

        const { items: fetchedContact } = await wixClient.items
        .queryDataItems(contactus)
        .eq("title", "contact")
        .find();

      setDataItems(fetchedItems);
      setDataContact(fetchedContact);

      // trigger animation on data load
      // setTimeout(() => {
      //   document.querySelector(".updateWatchedTrigger").click();
      //   document.querySelector(".triggerSplitWordAnimation").click();

      // }, 1000);
    }

    fetchDataItems();
   
  }, []);

  return (
    <footer id="footer" data-cursor-style="off">
      <div className="container-fluid">
        <div className="row row-1">
          <div className="col-lg-7 column-1">
            <div className="container-logo">
              <div data-parallax data-end="bottom bottom" className="z-3">
                <img
                src={getFullImageURL(logo1)}            
                  data-preload
                  className="img-b z-3 media"
                  alt=""
                />
              </div>
              <div
                data-parallax
                data-translate-y-from="-15%"
                data-translate-x-from="10%"
                data-start="10% bottom"
                data-end="bottom center"
                className="z-2"
              >
                <img
                  src={getFullImageURL(logo2)}
                  data-preload
                  className="img-p z-2 media"
                  alt=""
                />
              </div>
              <div
                data-parallax
                data-translate-y-from="-30%"
                data-translate-x-from="30%"
                data-start="20% bottom"
                data-end="bottom center"
                className="z-1"
              >
                <img
                  src={getFullImageURL(logo3)}
                  data-preload
                  className="img-s z-1 media"
                  alt=""
                />
              </div>
            </div>
            <h2 className="fs--60 fs-mobile-50 title-footer white-1 mt-lg-170 mt-mobile-20">
              {heading}
            </h2>
          </div>
          <div className="col-lg-5 column-2 pt-lg-65 pt-mobile-50">
            <div className="wrapper-newsletter-menu">
              
              <Newsletter />

              <div className="container-footer-menu mt-lg-165 mt-tablet-55 mt-phone-125">
                <ul className="list-footer-menu">
                  <li className="list-item">
                    <button
                      data-set-submenu="services"
                      className="link-footer-menu"
                    >
                      <span>Services</span>
                    </button>
                  </li>
                  <li className="list-item">
                    <DelayedLink to="/" className="link-footer-menu">
                      <span>Rental Store</span>
                    </DelayedLink>
                  </li>
                  <li className="list-item">
                    <button
                      data-set-submenu="market"
                      className="link-footer-menu"
                    >
                      <span>Market</span>
                    </button>
                  </li>
                  <li className="list-item">
                    <DelayedLink to="/portfolio" className="link-footer-menu">
                      <span>Portfolio</span>
                    </DelayedLink>
                  </li>
                  <li className="list-item">
                    <DelayedLink to="/about" className="link-footer-menu">
                      <span>About</span>
                    </DelayedLink>
                  </li>
                  <li className="list-item">
                    <DelayedLink to="/blog" className="link-footer-menu">
                      <span>Blog</span>
                    </DelayedLink>
                  </li>
                  <li className="list-item">
                    <DelayedLink to="/contact" className="link-footer-menu">
                      <span>Contact</span>
                    </DelayedLink>
                  </li>
                  <li className="list-item">
                    <DelayedLink to="/" className="link-footer-menu">
                      <span>FAQ</span>
                    </DelayedLink>
                  </li>
                  <li className="list-item">
                    <DelayedLink to="/" className="link-footer-menu">
                      <span>Terms of use</span>
                    </DelayedLink>
                  </li>
                  <li className="list-item">
                    <DelayedLink to="/" className="link-footer-menu">
                      <span>Privacy policy</span>
                    </DelayedLink>
                  </li>
                  <li className="list-item item-social-media">
                    <ul className="list-social-media">
                      <li>
                        <DelayedLink to="/" target="_blank"
                        attributes={{
                          "rel":"noopener noreferrer"
                          }}>
                          <i className="icon-facebook"></i>
                        </DelayedLink>
                      </li>
                      <li>
                        <DelayedLink to="/" target="_blank"
                        attributes={{
                          "rel":"noopener noreferrer"
                          }}>
                          <i className="icon-instagram"></i>
                        </DelayedLink>
                      </li>
                      <li>
                        <DelayedLink to="/" target="_blank"
                        attributes={{
                          "rel":"noopener noreferrer"
                          }}>
                          <i className="icon-x"></i>
                        </DelayedLink>
                      </li>
                      <li>
                        <DelayedLink to="/" target="_blank"
                        attributes={{
                          "rel":"noopener noreferrer"
                          }}>
                          <i className="icon-linkedin"></i>
                        </DelayedLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className="container-address mt-lg-145 mt-phone-115">
              <ul className="list-address">
                {dataContact.map((data, index) => {
                
                  return (
                  
                    <li key={index}>
                      <h3 className="city">{data.data.city}</h3>
                      <address>
                        {data.data.address1} <br />
                        {data.data.address2} <br />
                        {data.data.address3}
                      </address>
                      <div className="phones">
                        {Object.values(data.data.phone).map((phone, index) => (
                          <DelayedLink key={index} to="tel:">
                            <span>{phone}</span>
                          </DelayedLink>
                        ))}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="row row-2 mt-lg-80 mt-mobile-45">
          <div className="col-lg-12 column-1">
            <p className="fs--14 font-2 white-1">{copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
