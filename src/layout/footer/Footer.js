import React from 'react'
import logob from "../../utilis/images/logo/logo-bps-b.svg"
import logop from "../../utilis/images/logo/logo-bps-p.svg"
import logos from "../../utilis/images/logo/logo-bps-s.svg"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer id="footer" data-cursor-style="off">
            <div className="container-fluid">
              <div className="row row-1">
                <div className="col-lg-7 column-1">
                  <div className="container-logo">
                    <div data-parallax data-end="bottom bottom" className="z-3">
                      <img
                        src={logob}
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
                        src={logop}
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
                        src={logos}
                        data-preload
                        className="img-s z-1 media"
                        alt=""
                      />
                    </div>
                  </div>
                  <h2 className="fs--60 fs-mobile-50 title-footer white-1 mt-lg-170 mt-mobile-20">
                    If it's not remarkable, it's invisible.
                  </h2>
                </div>
                <div className="col-lg-5 column-2 pt-lg-65 pt-mobile-50">
                  <div className="wrapper-newsletter-menu">
                    <div className="container-newsletter" data-form-container>
                      <div className="container-text">
                        <h3 className="fs-25 white-1">Newsletter:</h3>
                        <p className="fs--16 fs-phone-15 font-2 white-1 mt-5">
                          Register your email and stay up to date with
                          everything before anyone else.
                        </p>
                      </div>

                      <div className="container-newsletter mt-mobile-25">
                        <form className="form-newsletter">
                          <input
                            type="hidden"
                            name="assunto"
                            value="[newsletter]"
                          />
                          <div className="container-input">
                            <label htmlFor="newsletter-email">
                              Enter your email
                            </label>
                            <input
                              id="newsletter-email"
                              name="email"
                              type="email"
                              required
                            />
                          </div>
                          <div className="container-submit">
                            <button type="submit" className="bt-submit">
                              <span className="submit-text">Send</span>
                            </button>
                          </div>
                        </form>
                        <h3
                          className="feedback-newsletter white-1"
                          data-aos="fadeIn"
                          data-form-success
                        >
                          Success!
                        </h3>
                        <h3
                          className="feedback-newsletter white-1"
                          data-aos="fadeIn"
                          data-form-error
                        >
                          Error, Try again!
                        </h3>
                      </div>
                    </div>

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
                              <Link
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i className="icon-facebook"></i>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i className="icon-instagram"></i>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i className="icon-x"></i>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
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
                      <li>
                        <h3 className="city">Napa Valley</h3>
                        <address>
                          955 Vintage Ave <br />
                          St. Helena, CA 94574
                        </address>
                        <div className="phones">
                          <Link to="tel:">
                            <span>P / 707742.7777</span>
                          </Link>
                          <Link to="tel:">
                            <span>F / 415.822.8844</span>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <h3 className="city">Las Vegas</h3>
                        <address>
                          7900 W Sunset RD <br />
                          Suite 400 <br />
                          Las Vegas, NV 89113
                        </address>
                        <div className="phones">
                          <Link to="tel:">
                            <span>P / 702.757.7987</span>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <h3 className="city">San Francisco</h3>
                        <address>
                          352 Shaw RD <br />
                          S. San Francisco, CA 94080
                        </address>
                        <div className="phones">
                          <Link to="tel:">
                            <span>P / 415.922.9004</span>
                          </Link>
                          <Link to="tel:">
                            <span>F / 415.822.8844</span>
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row row-2 mt-lg-80 mt-mobile-45">
                <div className="col-lg-12 column-1">
                  <p className="fs--14 font-2 white-1">
                    © BLUEPRINT STUDIOS. ALL RIGHTS RESERVED. - If it's not
                    remarkable, it's invisible is a trademark of blueprint
                    studios.
                  </p>
                </div>
              </div>
            </div>
          </footer>
  )
}

export default Footer