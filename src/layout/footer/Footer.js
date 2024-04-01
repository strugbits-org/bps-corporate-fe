import DelayedLink from "../../common/DelayedLink";
import Newsletter from "../../common/Newsletter";
import React, { useEffect } from "react";
import getFullImageURL from "../../common/common_functions/imageURL";
import { useDispatch, useSelector } from "react-redux";
import { fetchFooterData } from "../../redux/reducers/footerData";

const Footer = () => {
  const EXTERNAL_SITE_URL = "https://www.rentals.blueprintstudios.com";

  const dispatch = useDispatch();
  const footerData = useSelector((state) => state.footer.data.footerData);
  const contactData = useSelector((state) => state.footer.data.contactData);

  useEffect(() => {
    dispatch(fetchFooterData());
  }, [dispatch]);

  const firstItem = footerData[0]?.data; // Assuming you want values from the first item
  const logo1 = firstItem ? firstItem.logo1 : "";
  const logo2 = firstItem ? firstItem.logo2 : "";
  const logo3 = firstItem ? firstItem.logo3 : "";
  const heading = firstItem ? firstItem.heading : "";
  const copyright = firstItem ? firstItem.copyright : "";

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
                    <DelayedLink to={EXTERNAL_SITE_URL} target={"blank"} className="link-footer-menu">
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
                        <DelayedLink to="https://www.facebook.com/blueprintstudiosevents/" target="_blank"
                          attributes={{
                            "rel": "noopener noreferrer"
                          }}>
                          <i className="icon-facebook"></i>
                        </DelayedLink>
                      </li>
                      <li>
                        <DelayedLink to="https://www.instagram.com/blueprintstudiosevents/?hl=en" target="_blank"
                          attributes={{
                            "rel": "noopener noreferrer"
                          }}>
                          <i className="icon-instagram"></i>
                        </DelayedLink>
                      </li>
                      <li>
                        <DelayedLink to="https://twitter.com/bpseventdesign?lang=en" target="_blank"
                          attributes={{
                            "rel": "noopener noreferrer"
                          }}>
                          <i className="icon-x"></i>
                        </DelayedLink>
                      </li>
                      <li>
                        <DelayedLink to="https://www.linkedin.com/company/blueprint-studios/" target="_blank"
                          attributes={{
                            "rel": "noopener noreferrer"
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
                {contactData.map((data, index) => {

                  return (

                    <li key={index}>
                      <h3 className="city">{data.data.city}</h3>
                      <address>
                        {data.data.address1} <br />
                        {data.data.address2} <br />
                        {data.data.address3}
                      </address>
                      <div className="phones">
                        <DelayedLink to={`tel:${data.data.phone1}`}>
                          <span>{data.data.phone1}</span>
                        </DelayedLink>
                        <DelayedLink to={`tel:${data.data.phone2}`}>
                          <span>{data.data.phone2}</span>
                        </DelayedLink>
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
