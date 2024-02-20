import { Link } from "react-router-dom";
import { footerData, address } from "../../common/constats";
import Newsletter from "../../common/Newsletter";
const Footer = () => {
  return (
    <footer id="footer" data-cursor-style="off">
      <div className="container-fluid">
        <div className="row row-1">
          <div className="col-lg-7 column-1">
            <div className="container-logo">
              <div data-parallax data-end="bottom bottom" className="z-3">
                <img
                  src={footerData.logob}
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
                  src={footerData.logop}
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
                  src={footerData.logos}
                  data-preload
                  className="img-s z-1 media"
                  alt=""
                />
              </div>
            </div>
            <h2 className="fs--60 fs-mobile-50 title-footer white-1 mt-lg-170 mt-mobile-20">
              {footerData.title}
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
                    <Link to="/" className="link-footer-menu">
                      <span>Rental Store</span>
                    </Link>
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
                    <Link to="/portfolio" className="link-footer-menu">
                      <span>Portfolio</span>
                    </Link>
                  </li>
                  <li className="list-item">
                    <Link to="/about" className="link-footer-menu">
                      <span>About</span>
                    </Link>
                  </li>
                  <li className="list-item">
                    <Link to="/blog" className="link-footer-menu">
                      <span>Blog</span>
                    </Link>
                  </li>
                  <li className="list-item">
                    <Link to="/contact" className="link-footer-menu">
                      <span>Contact</span>
                    </Link>
                  </li>
                  <li className="list-item">
                    <Link to="/" className="link-footer-menu">
                      <span>FAQ</span>
                    </Link>
                  </li>
                  <li className="list-item">
                    <Link to="/" className="link-footer-menu">
                      <span>Terms of use</span>
                    </Link>
                  </li>
                  <li className="list-item">
                    <Link to="/" className="link-footer-menu">
                      <span>Privacy policy</span>
                    </Link>
                  </li>
                  <li className="list-item item-social-media">
                    <ul className="list-social-media">
                      <li>
                        <Link to="/" target="_blank" rel="noopener noreferrer">
                          <i className="icon-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/" target="_blank" rel="noopener noreferrer">
                          <i className="icon-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/" target="_blank" rel="noopener noreferrer">
                          <i className="icon-x"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/" target="_blank" rel="noopener noreferrer">
                          <i className="icon-linkedin"></i>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className="container-address mt-lg-145 mt-phone-115">
              <ul className="list-address">
                {address.map((data, index) => {
                  return (
                    <li key={index}>
                      <h3 className="city">{data.city}</h3>
                      <address>
                        {data.address1} <br />
                        {data.address2} <br />
                        {data.address3}
                      </address>
                      <div className="phones">
                        {Object.values(data.contact).map((phone, index) => (
                          <Link key={index} to="tel:">
                            <span>{phone}</span>
                          </Link>
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
            <p className="fs--14 font-2 white-1">{footerData.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
