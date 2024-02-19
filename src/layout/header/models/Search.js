import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../utilis/images/chairs/bristol-chair.png";
import imgC1 from "../../../utilis/images/chairs/bristol-chair-color-1.png"
import imgC2 from "../../../utilis/images/chairs/bristol-chair-color-2.png"
import imgC3 from "../../../utilis/images/chairs/bristol-chair-color-3.png"
import imgC4 from "../../../utilis/images/chairs/bristol-chair-color-4.png" 
import imgd6 from "../../../utilis/images/lib/06_desktop.jpg"
import imgd8 from "../../../utilis/images/lib/08_desktop.jpg"
import imgd7 from "../../../utilis/images/lib/07_desktop.jpg"
import imgd1 from "../../../utilis/images/lib/01_desktop.jpg"
import imgd2 from "../../../utilis/images/lib/02_desktop.jpg"
const Search = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="wrapper-search">
            <div className="container-form">
              <form className="form-search header-search" data-search-form>
                <div className="container-input input-header">
                  <label
                    htmlFor="search"
                    className="split-chars"
                    data-aos="d:loop"
                  >
                    type here
                  </label>
                  <input type="search" className="search" name="por" required />
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
                <button className="btn-close-results" data-search-remove>
                  X
                </button>
                <div className="result-all-studios">
                  <div className="container-title-results">
                    <h2 className="title-results split-chars" data-aos>
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
                      <h2 className="title-results split-chars" data-aos>
                        Rental <span>“Wedding”</span>
                      </h2>
                      <Link to="/" className="btn-border-blue" data-aos>
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
                                <h3 className="product-name">Bristol Chair</h3>

                                <div className="wrapper-img">
                                  <div className="container-img">
                                    <img
                                      src={img1}
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
                                          src={imgC1}
                                          data-preload
                                          className="media"
                                          alt=""
                                        />
                                      </div>
                                    </li>
                                    <li>
                                      <div className="container-img">
                                        <img
                                          src={imgC2}
                                          data-preload
                                          className="media"
                                          alt=""
                                        />
                                      </div>
                                    </li>
                                    <li>
                                      <div className="container-img">
                                        <img
                                          src={imgC3}
                                          data-preload
                                          className="media"
                                          alt=""
                                        />
                                      </div>
                                    </li>
                                    <li>
                                      <div className="container-img">
                                        <img
                                          src={imgC4}
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
                                <h3 className="product-name">Bristol Chair</h3>

                                <div className="wrapper-img">
                                  <div className="container-img">
                                    <img
                                      src={img1}
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
                                          src={imgC1}
                                          data-preload
                                          className="media"
                                          alt=""
                                        />
                                      </div>
                                    </li>
                                    <li>
                                      <div className="container-img">
                                        <img
                                          src={imgC2}
                                          data-preload
                                          className="media"
                                          alt=""
                                        />
                                      </div>
                                    </li>
                                    <li>
                                      <div className="container-img">
                                        <img
                                          src={imgC3}
                                          data-preload
                                          className="media"
                                          alt=""
                                        />
                                      </div>
                                    </li>
                                    <li>
                                      <div className="container-img">
                                        <img
                                          src={imgC4}
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
                                <h3 className="product-name">Bristol Chair</h3>

                                <div className="wrapper-img">
                                  <div className="container-img">
                                    <img
                                      src={img1}
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
                                          src={imgC1}
                                          data-preload
                                          className="media"
                                          alt=""
                                        />
                                      </div>
                                    </li>
                                    <li>
                                      <div className="container-img">
                                        <img
                                          src={imgC2}
                                          data-preload
                                          className="media"
                                          alt=""
                                        />
                                      </div>
                                    </li>
                                    <li>
                                      <div className="container-img">
                                        <img
                                          src={imgC3}
                                          data-preload
                                          className="media"
                                          alt=""
                                        />
                                      </div>
                                    </li>
                                    <li>
                                      <div className="container-img">
                                        <img
                                          src={imgC4}
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
                      <h2 className="title-results split-chars" data-aos>
                        Portfolio <span>“Wedding”</span>
                      </h2>
                      <Link to="/" className="btn-border-blue" data-aos>
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
                            <Link
                              to="/portfolio-post"
                              className="link-portfolio"
                            >
                              <div
                                className="container-img bg-blue"
                                data-cursor-style="view"
                              >
                                <div className="wrapper-img">
                                  <img
                                    src={imgd6}
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
                            </Link>
                          </div>

                          <div className="swiper-slide grid-item">
                            <Link to="/" className="link-portfolio">
                              <div className="container-img">
                                <img
                                  src={imgd8}
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
                                  src={imgd8}
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
                                  src={imgd1}
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
                                  src={imgd2}
                                  data-preload
                                  className="media"
                                  alt=""
                                />
                              </div>
                              <h3 className="title-portfolio">Wedding</h3>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="result-our-markets">
                  <div className="container-title-results">
                    <h2 className="title-results split-chars" data-aos>
                      Our Markets
                    </h2>
                  </div>
                  <ul
                    className="list-result-our-markets list-projects font-35 grid-md-50"
                    data-aos
                  >
                    <li className="grid-item">
                      <Link
                        to="/market-post"
                        className="market-link project-link"
                        data-cursor-style="view"
                        data-menu-close
                      >
                        <div
                          className="container-img bg-blue"
                          data-cursor-style="view"
                        >
                          <img
                            src={imgd6}
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
                              src={imgd6}
                              data-preload
                              className="media"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="container-text">
                          <h3 className="title-project">Corporate</h3>
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
                              src={imgd7}
                              data-preload
                              className="media"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="container-text">
                          <h3 className="title-project">Tradeshows</h3>
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
                              src={imgd1}
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
                    <h2 className="title-results split-chars" data-aos>
                      Blog <span>“Wedding”</span>
                    </h2>
                    <Link to="/" className="btn-border-blue" data-aos>
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
                          <Link to="/blog-post" className="link-blog">
                            <div
                              className="container-img bg-blue"
                              data-cursor-style="view"
                            >
                              <div className="wrapper-img">
                                <img
                                  src={imgd8}
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
                                A Taste Explosion: Event Design Extravaganza at
                                Boa Restaurant
                              </h2>
                              <p className="text-blog">
                                Beverly Hills, renowned for its luxury and
                                panache, witnessed an unforgettable evening that
                                melded culinary wonders with unmatched event
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                              </p>
                            </div>
                          </Link>
                        </div>
                        <div className="swiper-slide grid-item">
                          <Link to="/blog-post" className="link-blog">
                            <div
                              className="container-img bg-blue"
                              data-cursor-style="view"
                            >
                              <div className="wrapper-img">
                                <img
                                  src={imgd8}
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
                                A Taste Explosion: Event Design Extravaganza at
                                Boa Restaurant
                              </h2>
                              <p className="text-blog">
                                Beverly Hills, renowned for its luxury and
                                panache, witnessed an unforgettable evening that
                                melded culinary wonders with unmatched event
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                              </p>
                            </div>
                          </Link>
                        </div>
                        <div className="swiper-slide grid-item">
                          <Link to="/blog-post" className="link-blog">
                            <div
                              className="container-img bg-blue"
                              data-cursor-style="view"
                            >
                              <div className="wrapper-img">
                                <img
                                  src={imgd8}
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
                                A Taste Explosion: Event Design Extravaganza at
                                Boa Restaurant
                              </h2>
                              <p className="text-blog">
                                Beverly Hills, renowned for its luxury and
                                panache, witnessed an unforgettable evening that
                                melded culinary wonders with unmatched event
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                              </p>
                            </div>
                          </Link>
                        </div>
                        <div className="swiper-slide grid-item">
                          <a href="blog-post.html" className="link-blog">
                            <div
                              className="container-img bg-blue"
                              data-cursor-style="view"
                            >
                              <div className="wrapper-img">
                                <img
                                  src={imgd8}
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
                                A Taste Explosion: Event Design Extravaganza at
                                Boa Restaurant
                              </h2>
                              <p className="text-blog">
                                Beverly Hills, renowned for its luxury and
                                panache, witnessed an unforgettable evening that
                                melded culinary wonders with unmatched event
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="swiper-slide grid-item">
                          <Link to="/blog-post" className="link-blog">
                            <div
                              className="container-img bg-blue"
                              data-cursor-style="view"
                            >
                              <div className="wrapper-img">
                                <img
                                  src={imgd8}
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
                                A Taste Explosion: Event Design Extravaganza at
                                Boa Restaurant
                              </h2>
                              <p className="text-blog">
                                Beverly Hills, renowned for its luxury and
                                panache, witnessed an unforgettable evening that
                                melded culinary wonders with unmatched event
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="result-order-pages">
                  <div className="container-title-results">
                    <h2 className="title-results split-chars" data-aos>
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
                          In the heart of the great outdoors, with nature as our
                          backdrop, Blueprint Studios embarked on a creative
                          journey - a photoshoot
                        </p>
                      </Link>
                    </li>
                    <li className="grid-item">
                      <Link to="/" className="link-order-pages">
                        <h3 className="title-order-pages">Lorem ipsum dolor</h3>
                        <p className="text-order-pages">
                          Etiam mi felis, commodo eu augue in, sagittis faucibus
                          nibh. Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Vestibulum facilisis molestie
                          consequat. Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Nunc a ligula fermentum, posuere
                          turpis in, luctus dui. Vestibulum ante ipsum primis in
                          faucibus orci luctus et ultrices posuere cubilia
                          curae; Nullam efficitur ac urna at vehicula.
                        </p>
                      </Link>
                    </li>
                    <li className="grid-item">
                      <Link to="/" className="link-order-pages">
                        <h3 className="title-order-pages">
                          Donec vel sem at enim
                        </h3>
                        <p className="text-order-pages">
                          Curabitur vitae urna rhoncus nunc dictum ornare.
                          Vestibulum accumsan, arcu tempus pretium gravida, elit
                          risus elementum nunc, et mattis nibh justo ac felis.
                          Nam sit amet odio justo. Pellentesque vitae dolor at
                          ipsum mollis malesuada. Aliquam non dolor augue.
                        </p>
                      </Link>
                    </li>
                    <li className="grid-item">
                      <Link to="/" className="link-order-pages">
                        <h3 className="title-order-pages">
                          Etiam ultricies nulla
                        </h3>
                        <p className="text-order-pages">
                          Vivamus at ornare nunc. Pellentesque a sapien libero.
                          Donec vel sem at enim faucibus rhoncus. Fusce non
                          efficitur turpis. Orci varius natoque penatibus et
                          magnis dis parturient montes, nascetur ridiculus mus.
                          Etiam ultricies nulla volutpat lorem lobortis, sed
                          sollicitudin arcu pretium.
                        </p>
                      </Link>
                    </li>
                    <li className="grid-item">
                      <Link to="/" className="link-order-pages">
                        <h3 className="title-order-pages">
                          Quisque lacinia nisi
                        </h3>
                        <p className="text-order-pages">
                          Nulla urna turpis, tempus eget molestie non, vulputate
                          quis nunc. Morbi posuere nibh purus, eget molestie
                          erat scelerisque a. Phasellus ut mauris mi.
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
  );
};

export default Search;
