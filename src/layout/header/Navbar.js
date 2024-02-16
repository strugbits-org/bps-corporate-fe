import Services from "./models/Services";
import Market from "./models/Market";
import { Link } from "react-router-dom";
import ContactForm from "./models/ContactForm";

const Navbar = () => {
  return (
    <>
      <div className="cursor-wrapper" id="wrapper-cursor">
        <div>
          <span className="view text-wrapper">
            <span>view</span>
          </span>
        </div>
      </div>

      <header id="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 column-header">
              <div className="wrapper-header-mobile no-desktop">
                <Link
                  to="/"
                  className="logo"
                  data-pjax
                  aria-label="Blueprint"
                  data-menu-close
                >
                  <span>Blueprint</span>
                  <i className="icon-logo"></i>
                </Link>

                  <button id="bt-menu" aria-label="Menu" data-search-remove>
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 55 38.5"
                      style={{ enableBackground: "new 0 0 55 38.5" }}
                      xmlSpace="preserve"
                    >
                      <style>{`.st0 { fill: #0f41fa; }`}</style>
                      <g id="bt-menu-bars">
                        <rect
                          id="bottombar"
                          y="32.5"
                          className="st0"
                          width="55"
                          height="6"
                        />
                        <rect
                          id="middlebar"
                          y="16.4"
                          className="st0"
                          width="55"
                          height="6"
                        />
                        <rect
                          id="topbar"
                          className="st0"
                          width="55"
                          height="6"
                        />
                      </g>
                    </svg>
                  </button>
              </div>

              {/*  navbar start */}
              <nav className="menu" data-cursor-style="default">
                <div className="menu--wrapper">
                  <ul className="menu--list fs--header">
                    <li className="no-desktop">
                      <Link to="/" className="header-link" data-menu-close>
                        <span data-letter="Home">Home</span>
                      </Link>
                    </li>
                    <li>
                      <button
                        className="header-link btn-submenu"
                        data-set-submenu="services"
                      >
                        <span data-letter="Services">Services</span>
                        <i className="icon-arrow-down"></i>
                      </button>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="header-link"
                        data-menu-close
                        data-pg-active="pg-rental-store"
                      >
                        <span data-letter="Rental Store">Rental Store</span>
                      </Link>
                    </li>
                    <li>
                      <button
                        className="header-link btn-submenu"
                        data-set-submenu="market"
                      >
                        <span data-letter="Market">Market</span>
                        <i className="icon-arrow-down"></i>
                      </button>
                    </li>
                    <li>
                      <Link
                        to="/portfolio"
                        className="header-link"
                        data-menu-close
                        data-pg-active="pg-portfolio"
                      >
                        <span data-letter="Portfolio">Portfolio</span>
                      </Link>
                    </li>

                    <li className="no-mobile">
                      <Link
                        to="/"
                        className="logo"
                        data-pjax
                        aria-label="Blueprint"
                        data-menu-close
                      >
                        <span>Blueprint</span>
                        <i className="icon-logo"></i>
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/about"
                        className="header-link"
                        data-menu-close
                        data-pg-active="pg-about"
                      >
                        <span data-letter="About">About</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        className="header-link"
                        data-menu-close
                        data-pg-active="pg-blog"
                      >
                        <span data-letter="Blog">Blog</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className="header-link"
                        data-menu-close
                        data-pg-active="pg-contact"
                      >
                        <span data-letter="Contact">Contact</span>
                      </Link>
                    </li>
                    <li>
                      <button
                        className="header-link link-search no-mobile"
                        data-set-submenu="search"
                        data-search-remove
                      >
                        <i className="icon-search"></i>
                        <span data-letter="Search">Search</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </nav>
              {/* navbar end */}

              {/* services model component start */}
              <div
                className="submenu-services submenu"
                data-get-submenu="services"
              >
                <Services />
              </div>
              {/* services model component end */}

              {/* market model component start */}
              <div className="submenu-market submenu" data-get-submenu="market">
                <Market />
              </div>
              {/* market model component end */}

              {/* search model component start */}
              <section className="menu-search" data-get-submenu="search">
                {/* <Search /> */}
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <div className="wrapper-search">
                        <div className="container-form">
                          <form
                            className="form-search header-search"
                            data-search-form
                          >
                            <div className="container-input input-header">
                              <label
                                htmlFor="search"
                                className="split-chars"
                                data-aos="d:loop"
                              >
                                type here
                              </label>
                              <input
                                type="search"
                                className="search"
                                name="por"
                                required
                              />
                              <div className="container-submit">
                                <button
                                  type="submit"
                                  className="btn-submit"
                                  data-cursor-style="white"
                                  data-aos="fadeIn .6s ease-in-out-cubic 0s, d:loop"
                                >
                                  <span className="no-mobile">Enter</span>
                                  <i className="icon-search no-desktop"></i>
                                  <i className="icon-arrow-right-2 no-mobile"></i>
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>

                        <div className="container-results">
                          <div className="inner-container-results">
                            <button
                              className="btn-close-results"
                              data-search-remove
                            >
                              X
                            </button>

                            <div className="result-all-studios">
                              <div className="container-title-results">
                                <h2
                                  className="title-results split-chars"
                                  data-aos
                                >
                                  All Studios
                                </h2>
                              </div>
                              <ul
                                className="list-result-all-studios grid-lg-16 grid-tablet-33 grid-phone-50"
                                data-aos
                              >
                                <li className="grid-item">
                                  <Link to="/" className="link-studios">
                                    <h3 className="title-all-studios">
                                      <span>Event Design And Prodution</span>
                                    </h3>
                                  </Link>
                                </li>
                                <li className="grid-item">
                                  <Link to="/" className="link-studios">
                                    <h3 className="title-all-studios">
                                      <span>Creative Services Agency</span>
                                    </h3>
                                  </Link>
                                </li>
                                <li className="grid-item">
                                  <Link to="/" className="link-studios">
                                    <h3 className="title-all-studios">
                                      <span>Floral Design</span>
                                    </h3>
                                  </Link>
                                </li>
                                <li className="grid-item">
                                  <Link to="/" className="link-studios">
                                    <h3 className="title-all-studios">
                                      <span>Custom Fabrication</span>
                                    </h3>
                                  </Link>
                                </li>
                                <li className="grid-item">
                                  <Link to="/" className="link-studios">
                                    <h3 className="title-all-studios">
                                      <span>Printing Services</span>
                                    </h3>
                                  </Link>
                                </li>
                                <li className="grid-item">
                                  <Link to="/" className="link-studios">
                                    <h3 className="title-all-studios">
                                      <span>Rentals Studios</span>
                                    </h3>
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="column-results">
                              <div className="result-rental">
                                <div className="container-title-results">
                                  <h2
                                    className="title-results split-chars"
                                    data-aos
                                  >
                                    Rental <span>“Wedding”</span>
                                  </h2>
                                  <Link
                                    to="/"
                                    className="btn-border-blue"
                                    data-aos
                                  >
                                    <span>See more</span>
                                    <i className="icon-arrow-right"></i>
                                  </Link>
                                </div>
                                <div className="slider-content-phone">
                                  <div className="swiper-container">
                                    <div
                                      className="swiper-wrapper list-result-rental list-slider-phone grid-md-33"
                                      data-aos
                                    >
                                      <div className="swiper-slide grid-item">
                                        <div className="rental-product-link">
                                          <Link to="/" className="product-link">
                                            <h3 className="product-name">
                                              Bristol Chair
                                            </h3>

                                            <div className="wrapper-img">
                                              <div className="container-img">
                                                <img
                                                  src="images/chairs/bristol-chair.png"
                                                  data-preload
                                                  className="media"
                                                  alt=""
                                                />
                                              </div>
                                            </div>
                                            <div className="container-bottom">
                                              <div className="view-more">
                                                <span className="view">
                                                  <span>View more</span>
                                                </span>
                                                <i className="icon-arrow-diagonal-right"></i>
                                              </div>
                                              <ul className="list-thumb">
                                                <li>
                                                  <div className="container-img">
                                                    <img
                                                      src="images/chairs/bristol-chair-color-1.png"
                                                      data-preload
                                                      className="media"
                                                      alt=""
                                                    />
                                                  </div>
                                                </li>
                                                <li>
                                                  <div className="container-img">
                                                    <img
                                                      src="images/chairs/bristol-chair-color-2.png"
                                                      data-preload
                                                      className="media"
                                                      alt=""
                                                    />
                                                  </div>
                                                </li>
                                                <li>
                                                  <div className="container-img">
                                                    <img
                                                      src="images/chairs/bristol-chair-color-3.png"
                                                      data-preload
                                                      className="media"
                                                      alt=""
                                                    />
                                                  </div>
                                                </li>
                                                <li>
                                                  <div className="container-img">
                                                    <img
                                                      src="images/chairs/bristol-chair-color-4.png"
                                                      data-preload
                                                      className="media"
                                                      alt=""
                                                    />
                                                  </div>
                                                </li>
                                              </ul>
                                              <div className="colors-number">
                                                <span>+3</span>
                                              </div>
                                            </div>
                                          </Link>
                                        </div>
                                      </div>
                                      <div className="swiper-slide grid-item">
                                        <div className="rental-product-link">
                                          <Link to="/" className="product-link">
                                            <h3 className="product-name">
                                              Bristol Chair
                                            </h3>

                                            <div className="wrapper-img">
                                              <div className="container-img">
                                                <img
                                                  src="images/chairs/bristol-chair.png"
                                                  data-preload
                                                  className="media"
                                                  alt=""
                                                />
                                              </div>
                                            </div>
                                            <div className="container-bottom">
                                              <div className="view-more">
                                                <span className="view">
                                                  <span>View more</span>
                                                </span>
                                                <i className="icon-arrow-diagonal-right"></i>
                                              </div>
                                              <ul className="list-thumb">
                                                <li>
                                                  <div className="container-img">
                                                    <img
                                                      src="images/chairs/bristol-chair-color-1.png"
                                                      data-preload
                                                      className="media"
                                                      alt=""
                                                    />
                                                  </div>
                                                </li>
                                                <li>
                                                  <div className="container-img">
                                                    <img
                                                      src="images/chairs/bristol-chair-color-2.png"
                                                      data-preload
                                                      className="media"
                                                      alt=""
                                                    />
                                                  </div>
                                                </li>
                                                <li>
                                                  <div className="container-img">
                                                    <img
                                                      src="images/chairs/bristol-chair-color-3.png"
                                                      data-preload
                                                      className="media"
                                                      alt=""
                                                    />
                                                  </div>
                                                </li>
                                                <li>
                                                  <div className="container-img">
                                                    <img
                                                      src="images/chairs/bristol-chair-color-4.png"
                                                      data-preload
                                                      className="media"
                                                      alt=""
                                                    />
                                                  </div>
                                                </li>
                                              </ul>
                                              <div className="colors-number">
                                                <span>+3</span>
                                              </div>
                                            </div>
                                          </Link>
                                        </div>
                                      </div>
                                      <div className="swiper-slide grid-item">
                                        <div className="rental-product-link">
                                          <Link to="/" className="product-link">
                                            <h3 className="product-name">
                                              Bristol Chair
                                            </h3>

                                            <div className="wrapper-img">
                                              <div className="container-img">
                                                <img
                                                  src="images/chairs/bristol-chair.png"
                                                  data-preload
                                                  className="media"
                                                  alt=""
                                                />
                                              </div>
                                            </div>
                                            <div className="container-bottom">
                                              <div className="view-more">
                                                <span className="view">
                                                  <span>View more</span>
                                                </span>
                                                <i className="icon-arrow-diagonal-right"></i>
                                              </div>
                                              <ul className="list-thumb">
                                                <li>
                                                  <div className="container-img">
                                                    <img
                                                      src="images/chairs/bristol-chair-color-1.png"
                                                      data-preload
                                                      className="media"
                                                      alt=""
                                                    />
                                                  </div>
                                                </li>
                                                <li>
                                                  <div className="container-img">
                                                    <img
                                                      src="images/chairs/bristol-chair-color-2.png"
                                                      data-preload
                                                      className="media"
                                                      alt=""
                                                    />
                                                  </div>
                                                </li>
                                                <li>
                                                  <div className="container-img">
                                                    <img
                                                      src="images/chairs/bristol-chair-color-3.png"
                                                      data-preload
                                                      className="media"
                                                      alt=""
                                                    />
                                                  </div>
                                                </li>
                                                <li>
                                                  <div className="container-img">
                                                    <img
                                                      src="images/chairs/bristol-chair-color-4.png"
                                                      data-preload
                                                      className="media"
                                                      alt=""
                                                    />
                                                  </div>
                                                </li>
                                              </ul>
                                              <div className="colors-number">
                                                <span>+3</span>
                                              </div>
                                            </div>
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="result-portfolio mt-lg-60 mt-mobile-40">
                                <div className="container-title-results">
                                  <h2
                                    className="title-results split-chars"
                                    data-aos
                                  >
                                    Portfolio <span>“Wedding”</span>
                                  </h2>
                                  <Link
                                    to="/"
                                    className="btn-border-blue"
                                    data-aos
                                  >
                                    <span>See more</span>
                                    <i className="icon-arrow-right"></i>
                                  </Link>
                                </div>
                                <div className="slider-content-phone">
                                  <div className="swiper-container">
                                    <div
                                      className="swiper-wrapper list-result-portfolio list-slider-phone grid-md-20"
                                      data-aos
                                    >
                                      <div className="swiper-slide grid-item">
                                        <a
                                          href="portfolio-post.html"
                                          className="link-portfolio"
                                        >
                                          <div
                                            className="container-img bg-blue"
                                            data-cursor-style="view"
                                          >
                                            <div className="wrapper-img">
                                              <img
                                                src="images/lib/06_desktop.jpg"
                                                data-preload
                                                className="media"
                                                alt=""
                                              />
                                            </div>
                                          </div>
                                          <div className="container-text">
                                            <h2 className="title-portfolio">
                                              F1 Las Vegas Grand Prix
                                            </h2>
                                          </div>
                                        </a>
                                      </div>

                                      <div className="swiper-slide grid-item">
                                        <Link to="/" className="link-portfolio">
                                          <div className="container-img">
                                            <img
                                              src="images/lib/08_desktop.jpg"
                                              data-preload
                                              className="media"
                                              alt=""
                                            />
                                          </div>
                                          <h3 className="title-portfolio">
                                            Brasil Design Awards 2023
                                          </h3>
                                        </Link>
                                      </div>
                                      <div className="swiper-slide grid-item">
                                        <Link to="/" className="link-portfolio">
                                          <div className="container-img">
                                            <img
                                              src="images/lib/08_desktop.jpg"
                                              data-preload
                                              className="media"
                                              alt=""
                                            />
                                          </div>
                                          <h3 className="title-portfolio">
                                            Brasil Design Awards 2023
                                          </h3>
                                        </Link>
                                      </div>
                                      <div className="swiper-slide grid-item">
                                        <Link to="/" className="link-portfolio">
                                          <div className="container-img">
                                            <img
                                              src="images/lib/01_desktop.jpg"
                                              data-preload
                                              className="media"
                                              alt=""
                                            />
                                          </div>
                                          <h3 className="title-portfolio">
                                            Latin American Design Awards 2023
                                          </h3>
                                        </Link>
                                      </div>
                                      <div className="swiper-slide grid-item">
                                        <Link to="/" className="link-portfolio">
                                          <div className="container-img">
                                            <img
                                              src="images/lib/02_desktop.jpg"
                                              data-preload
                                              className="media"
                                              alt=""
                                            />
                                          </div>
                                          <h3 className="title-portfolio">
                                            Wedding
                                          </h3>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="result-our-markets">
                              <div className="container-title-results">
                                <h2
                                  className="title-results split-chars"
                                  data-aos
                                >
                                  Our Markets
                                </h2>
                              </div>
                              <ul
                                className="list-result-our-markets list-projects font-35 grid-md-50"
                                data-aos
                              >
                                <li className="grid-item">
                                  <a
                                    href="market-post.html"
                                    className="market-link project-link"
                                    data-cursor-style="view"
                                    data-menu-close
                                  >
                                    <div
                                      className="container-img bg-blue"
                                      data-cursor-style="view"
                                    >
                                      <img
                                        src="images/lib/06_desktop.jpg"
                                        data-preload
                                        className="media"
                                        alt=""
                                      />
                                    </div>
                                    <div className="container-text">
                                      <h3 className="title-project split-words">
                                        Corporate
                                      </h3>
                                    </div>
                                  </a>
                                </li>
                                <li className="grid-item">
                                  <Link
                                    to="/"
                                    className="market-link project-link link-result-our-markets"
                                  >
                                    <div className="container-img bg-blue">
                                      <div className="wrapper-img">
                                        <img
                                          src="images/lib/06_desktop.jpg"
                                          data-preload
                                          className="media"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="container-text">
                                      <h3 className="title-project">
                                        Corporate
                                      </h3>
                                    </div>
                                  </Link>
                                </li>
                                <li className="grid-item">
                                  <Link
                                    to="/"
                                    className="market-link project-link link-result-our-markets"
                                  >
                                    <div className="container-img bg-blue">
                                      <div className="wrapper-img">
                                        <img
                                          src="images/lib/07_desktop.jpg"
                                          data-preload
                                          className="media"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="container-text">
                                      <h3 className="title-project">
                                        Tradeshows
                                      </h3>
                                    </div>
                                  </Link>
                                </li>
                                <li className="grid-item">
                                  <Link
                                    to="/"
                                    className="market-link project-link link-result-our-markets"
                                  >
                                    <div className="container-img bg-blue">
                                      <div className="wrapper-img">
                                        <img
                                          src="images/lib/01_desktop.jpg"
                                          data-preload
                                          className="media"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="container-text">
                                      <h3 className="title-project">Social</h3>
                                    </div>
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="result-blog">
                              <div className="container-title-results">
                                <h2
                                  className="title-results split-chars"
                                  data-aos
                                >
                                  Blog <span>“Wedding”</span>
                                </h2>
                                <Link
                                  to="/"
                                  className="btn-border-blue"
                                  data-aos
                                >
                                  <span>See more</span>
                                  <i className="icon-arrow-right"></i>
                                </Link>
                              </div>

                              <div className="slider-content-search-blog">
                                <div className="swiper-container">
                                  <div
                                    className="swiper-wrapper list-result-blog list-slider-mobile list-blog grid-lg-20"
                                    data-aos
                                  >
                                    <div className="swiper-slide grid-item">
                                      <a
                                        href="blog-post.html"
                                        className="link-blog"
                                      >
                                        <div
                                          className="container-img bg-blue"
                                          data-cursor-style="view"
                                        >
                                          <div className="wrapper-img">
                                            <img
                                              src="images/lib/08_desktop.jpg"
                                              data-preload
                                              className="media"
                                              alt=""
                                            />
                                          </div>
                                        </div>
                                        <div className="container-text">
                                          <div className="container-author-post-info">
                                            <div className="author">
                                              <span className="author-name">
                                                Lily Yeung
                                              </span>
                                            </div>
                                            <div className="date">
                                              <span>Sep 30</span>
                                            </div>
                                          </div>
                                          <h2 className="title-blog">
                                            A Taste Explosion: Event Design
                                            Extravaganza at Boa Restaurant
                                          </h2>
                                          <p className="text-blog">
                                            Beverly Hills, renowned for its
                                            luxury and panache, witnessed an
                                            unforgettable evening that melded
                                            culinary wonders with unmatched
                                            event Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="swiper-slide grid-item">
                                      <a
                                        href="blog-post.html"
                                        className="link-blog"
                                      >
                                        <div
                                          className="container-img bg-blue"
                                          data-cursor-style="view"
                                        >
                                          <div className="wrapper-img">
                                            <img
                                              src="images/lib/08_desktop.jpg"
                                              data-preload
                                              className="media"
                                              alt=""
                                            />
                                          </div>
                                        </div>
                                        <div className="container-text">
                                          <div className="container-author-post-info">
                                            <div className="author">
                                              <span className="author-name">
                                                Lily Yeung
                                              </span>
                                            </div>
                                            <div className="date">
                                              <span>Sep 30</span>
                                            </div>
                                          </div>
                                          <h2 className="title-blog">
                                            A Taste Explosion: Event Design
                                            Extravaganza at Boa Restaurant
                                          </h2>
                                          <p className="text-blog">
                                            Beverly Hills, renowned for its
                                            luxury and panache, witnessed an
                                            unforgettable evening that melded
                                            culinary wonders with unmatched
                                            event Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="swiper-slide grid-item">
                                      <a
                                        href="blog-post.html"
                                        className="link-blog"
                                      >
                                        <div
                                          className="container-img bg-blue"
                                          data-cursor-style="view"
                                        >
                                          <div className="wrapper-img">
                                            <img
                                              src="images/lib/08_desktop.jpg"
                                              data-preload
                                              className="media"
                                              alt=""
                                            />
                                          </div>
                                        </div>
                                        <div className="container-text">
                                          <div className="container-author-post-info">
                                            <div className="author">
                                              <span className="author-name">
                                                Lily Yeung
                                              </span>
                                            </div>
                                            <div className="date">
                                              <span>Sep 30</span>
                                            </div>
                                          </div>
                                          <h2 className="title-blog">
                                            A Taste Explosion: Event Design
                                            Extravaganza at Boa Restaurant
                                          </h2>
                                          <p className="text-blog">
                                            Beverly Hills, renowned for its
                                            luxury and panache, witnessed an
                                            unforgettable evening that melded
                                            culinary wonders with unmatched
                                            event Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="swiper-slide grid-item">
                                      <a
                                        href="blog-post.html"
                                        className="link-blog"
                                      >
                                        <div
                                          className="container-img bg-blue"
                                          data-cursor-style="view"
                                        >
                                          <div className="wrapper-img">
                                            <img
                                              src="images/lib/08_desktop.jpg"
                                              data-preload
                                              className="media"
                                              alt=""
                                            />
                                          </div>
                                        </div>
                                        <div className="container-text">
                                          <div className="container-author-post-info">
                                            <div className="author">
                                              <span className="author-name">
                                                Lily Yeung
                                              </span>
                                            </div>
                                            <div className="date">
                                              <span>Sep 30</span>
                                            </div>
                                          </div>
                                          <h2 className="title-blog">
                                            A Taste Explosion: Event Design
                                            Extravaganza at Boa Restaurant
                                          </h2>
                                          <p className="text-blog">
                                            Beverly Hills, renowned for its
                                            luxury and panache, witnessed an
                                            unforgettable evening that melded
                                            culinary wonders with unmatched
                                            event Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="swiper-slide grid-item">
                                      <a
                                        href="blog-post.html"
                                        className="link-blog"
                                      >
                                        <div
                                          className="container-img bg-blue"
                                          data-cursor-style="view"
                                        >
                                          <div className="wrapper-img">
                                            <img
                                              src="images/lib/08_desktop.jpg"
                                              data-preload
                                              className="media"
                                              alt=""
                                            />
                                          </div>
                                        </div>
                                        <div className="container-text">
                                          <div className="container-author-post-info">
                                            <div className="author">
                                              <span className="author-name">
                                                Lily Yeung
                                              </span>
                                            </div>
                                            <div className="date">
                                              <span>Sep 30</span>
                                            </div>
                                          </div>
                                          <h2 className="title-blog">
                                            A Taste Explosion: Event Design
                                            Extravaganza at Boa Restaurant
                                          </h2>
                                          <p className="text-blog">
                                            Beverly Hills, renowned for its
                                            luxury and panache, witnessed an
                                            unforgettable evening that melded
                                            culinary wonders with unmatched
                                            event Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="result-order-pages">
                              <div className="container-title-results">
                                <h2
                                  className="title-results split-chars"
                                  data-aos
                                >
                                  Order pages <span>“Wedding”</span>
                                </h2>
                              </div>
                              <ul
                                className="list-order-pages grid-lg-25 grid-md-50"
                                data-aos
                              >
                                <li className="grid-item">
                                  <Link to="/" className="link-order-pages">
                                    <h3 className="title-order-pages">About</h3>
                                    <p className="text-order-pages">
                                      In the heart of the great outdoors, with
                                      nature as our backdrop, Blueprint Studios
                                      embarked on a creative journey - a
                                      photoshoot
                                    </p>
                                  </Link>
                                </li>
                                <li className="grid-item">
                                  <Link to="/" className="link-order-pages">
                                    <h3 className="title-order-pages">
                                      Lorem ipsum dolor
                                    </h3>
                                    <p className="text-order-pages">
                                      Etiam mi felis, commodo eu augue in,
                                      sagittis faucibus nibh. Lorem ipsum dolor
                                      sit amet, consectetur adipiscing elit.
                                      Vestibulum facilisis molestie consequat.
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit. Nunc a ligula fermentum,
                                      posuere turpis in, luctus dui. Vestibulum
                                      ante ipsum primis in faucibus orci luctus
                                      et ultrices posuere cubilia curae; Nullam
                                      efficitur ac urna at vehicula.
                                    </p>
                                  </Link>
                                </li>
                                <li className="grid-item">
                                  <Link to="/" className="link-order-pages">
                                    <h3 className="title-order-pages">
                                      Donec vel sem at enim
                                    </h3>
                                    <p className="text-order-pages">
                                      Curabitur vitae urna rhoncus nunc dictum
                                      ornare. Vestibulum accumsan, arcu tempus
                                      pretium gravida, elit risus elementum
                                      nunc, et mattis nibh justo ac felis. Nam
                                      sit amet odio justo. Pellentesque vitae
                                      dolor at ipsum mollis malesuada. Aliquam
                                      non dolor augue.
                                    </p>
                                  </Link>
                                </li>
                                <li className="grid-item">
                                  <Link to="/" className="link-order-pages">
                                    <h3 className="title-order-pages">
                                      Etiam ultricies nulla
                                    </h3>
                                    <p className="text-order-pages">
                                      Vivamus at ornare nunc. Pellentesque a
                                      sapien libero. Donec vel sem at enim
                                      faucibus rhoncus. Fusce non efficitur
                                      turpis. Orci varius natoque penatibus et
                                      magnis dis parturient montes, nascetur
                                      ridiculus mus. Etiam ultricies nulla
                                      volutpat lorem lobortis, sed sollicitudin
                                      arcu pretium.
                                    </p>
                                  </Link>
                                </li>
                                <li className="grid-item">
                                  <Link to="/" className="link-order-pages">
                                    <h3 className="title-order-pages">
                                      Quisque lacinia nisi
                                    </h3>
                                    <p className="text-order-pages">
                                      Nulla urna turpis, tempus eget molestie
                                      non, vulputate quis nunc. Morbi posuere
                                      nibh purus, eget molestie erat scelerisque
                                      a. Phasellus ut mauris mi.
                                    </p>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* search model component end */}

              {/* contactform model component start */}
              <modal-group name="modal-contact" data-cursor-style="default">
                <modal-container>
                  <modal-item>
                    <ContactForm />
                  </modal-item>
                </modal-container>
              </modal-group>
              {/* contactform model component end */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
