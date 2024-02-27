import React, { useMemo, useState } from "react";
import { OurCardData } from "../../../common/constats/portfolioData";
import { postes } from "../../../common/constats/blogData";
import { modelData } from "../../../common/constats/marketData";
import { studioCard } from "../../../common/constats/constats";
import DelayedLink from "../../../common/DelayedLink";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [portfolioData, setPortfolioData] = useState([]);
  const [blogData, setBlogData] = useState([]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value.trim().toLowerCase());
  };

  const filteredPortfolioData = useMemo(() => {
    return OurCardData.filter(
      (item) =>
        item.categories && item.categories.toLowerCase().includes(searchTerm)
    );
  }, [searchTerm]);

  const filteredBlogData = useMemo(() => {
    return postes.filter(
      (item) =>
        item.category && item.category.toLowerCase().includes(searchTerm)
    );
  }, [searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPortfolioData(filteredPortfolioData);
    setBlogData(filteredBlogData);
  };

console.log(portfolioData);
console.log(blogData);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="wrapper-search">
            <div className="container-form">
              <form
                className="form-search header-search"
                data-search-form
                onSubmit={handleSubmit}
              >
                <div className="container-input input-header">
                  <label

                    className="split-chars"
                    data-aos="d:loop"
                  >
                    Type here
                  </label>
                  <input
                    type="search"
                    className="search"
                    name="por"
                    value={searchTerm}
                    onChange={handleInputChange}
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
                    {studioCard.map((data, index) => {
                      return (
                        <li key={index} className="grid-item">
                          <DelayedLink to="/" className="link-studios">
                            <h3 className="title-all-studios">
                              <span>{data.name}</span>
                            </h3>
                          </DelayedLink>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="column-results">
                  <div className="result-rental">
                    <div className="container-title-results">
                      <h2 className="title-results split-chars" data-aos>
                        Rental <span>“Wedding”</span>
                      </h2>
                      <DelayedLink to="/" className="btn-border-blue"
                        attributes={{
                          "data-aos": "",
                        }}
                        >
                        <span>See more</span>
                        <i className="icon-arrow-right"></i>
                      </DelayedLink>
                    </div>
                    <div className="slider-content-phone">
                      <div className="swiper-container">
                        <div
                          className="swiper-wrapper list-result-rental list-slider-phone grid-md-33"
                          data-aos
                        >
                          <div className="swiper-slide grid-item">
                            <div className="rental-product-link">
                              <DelayedLink to="/" className="product-link">
                                <h3 className="product-name">Bristol Chair</h3>

                                <div className="wrapper-img">
                                  <div className="container-img">
                                    <img
                                      src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709040727/utiles/chairs/bristol-chair_mxxqtk.png"
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
                                          src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709040729/utiles/chairs/bristol-chair-color-1_rx40rw.png"
                                          data-preload
                                          className="media"
                                          alt=""
                                        />
                                      </div>
                                    </li>
                                    <li>
                                      <div className="container-img">
                                        <img
                                          src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709040731/utiles/chairs/bristol-chair-color-2_dyucnr.png"
                                          data-preload
                                          className="media"
                                          alt=""
                                        />
                                      </div>
                                    </li>
                                    <li>
                                      <div className="container-img">
                                        <img
                                          src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709040733/utiles/chairs/bristol-chair-color-3_grxcwi.png"
                                          data-preload
                                          className="media"
                                          alt=""
                                        />
                                      </div>
                                    </li>
                                    <li>
                                      <div className="container-img">
                                        <img
                                          src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709040707/utiles/chairs/bristol-chair-color-4_ybuhhl.png"
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
                              </DelayedLink>
                            </div>
                          </div>
                          <div className="swiper-slide grid-item">
                            <div className="rental-product-link">
                              <DelayedLink to="/" className="product-link">
                                <h3 className="product-name">Bristol Chair</h3>

                                <div className="wrapper-img">
                                  <div className="container-img">
                                    <img
                                      src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709040727/utiles/chairs/bristol-chair_mxxqtk.png"
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
                                          src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709040729/utiles/chairs/bristol-chair-color-1_rx40rw.png"
                                          data-preload
                                          className="media"
                                          alt=""
                                        />
                                      </div>
                                    </li>
                                    <li>
                                      <div className="container-img">
                                        <img
                                          src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709040731/utiles/chairs/bristol-chair-color-2_dyucnr.png"
                                          data-preload
                                          className="media"
                                          alt=""
                                        />
                                      </div>
                                    </li>
                                    <li>
                                      <div className="container-img">
                                        <img
                                          src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709040733/utiles/chairs/bristol-chair-color-3_grxcwi.png"
                                          data-preload
                                          className="media"
                                          alt=""
                                        />
                                      </div>
                                    </li>
                                    <li>
                                      <div className="container-img">
                                        <img
                                          src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709040707/utiles/chairs/bristol-chair-color-4_ybuhhl.png"
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
                              </DelayedLink>
                            </div>
                          </div>
                          <div className="swiper-slide grid-item">
                            <div className="rental-product-link">
                              <DelayedLink to="/" className="product-link">
                                <h3 className="product-name">Bristol Chair</h3>

                                <div className="wrapper-img">
                                  <div className="container-img">
                                    <img
                                      src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709040727/utiles/chairs/bristol-chair_mxxqtk.png"
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
                                          src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709040729/utiles/chairs/bristol-chair-color-1_rx40rw.png"
                                          data-preload
                                          className="media"
                                          alt=""
                                        />
                                      </div>
                                    </li>
                                    <li>
                                      <div className="container-img">
                                        <img
                                          src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709040731/utiles/chairs/bristol-chair-color-2_dyucnr.png"
                                          data-preload
                                          className="media"
                                          alt=""
                                        />
                                      </div>
                                    </li>
                                    <li>
                                      <div className="container-img">
                                        <img
                                          src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709040733/utiles/chairs/bristol-chair-color-3_grxcwi.png"
                                          data-preload
                                          className="media"
                                          alt=""
                                        />
                                      </div>
                                    </li>
                                    <li>
                                      <div className="container-img">
                                        <img
                                          src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709040707/utiles/chairs/bristol-chair-color-4_ybuhhl.png"
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
                              </DelayedLink>
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
                      <DelayedLink to="/" className="btn-border-blue" attributes={{
                          "data-aos": "",
                        }}>
                        <span>See more</span>
                        <i className="icon-arrow-right"></i>
                      </DelayedLink>
                    </div>
                    <div className="slider-content-phone">
                      <div className="swiper-container">
                        <div
                          className="swiper-wrapper list-result-portfolio list-slider-phone grid-md-20"
                          data-aos
                        >
                          <div className="swiper-slide grid-item">
                            <DelayedLink
                              to="/portfolio-post"
                              className="link-portfolio"
                            >
                              <div
                                className="container-img bg-blue"
                                data-cursor-style="view"
                              >
                                <div className="wrapper-img">
                                  <img
                                    src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709040865/utiles/libs/06_desktop_iterkd.jpg"
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
                            </DelayedLink>
                          </div>
                          <div className="swiper-slide grid-item">
                            <DelayedLink to="/" className="link-portfolio">
                              <div className="container-img">
                                <img
                                  src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709040915/utiles/libs/08_desktop_s0swwk.jpg"
                                  data-preload
                                  className="media"
                                  alt=""
                                />
                              </div>
                              <h3 className="title-portfolio">
                                Brasil Design Awards 2023
                              </h3>
                            </DelayedLink>
                          </div>
                          <div className="swiper-slide grid-item">
                            <DelayedLink to="/" className="link-portfolio">
                              <div className="container-img">
                                <img
                                  src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709040915/utiles/libs/08_desktop_s0swwk.jpg"
                                  data-preload
                                  className="media"
                                  alt=""
                                />
                              </div>
                              <h3 className="title-portfolio">
                                Brasil Design Awards 2023
                              </h3>
                            </DelayedLink>
                          </div>
                          <div className="swiper-slide grid-item">
                            <DelayedLink to="/" className="link-portfolio">
                              <div className="container-img">
                                <img
                                  src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709040910/utiles/libs/01_desktop_nv6kjl.jpg"
                                  data-preload
                                  className="media"
                                  alt=""
                                />
                              </div>
                              <h3 className="title-portfolio">
                                Latin American Design Awards 2023
                              </h3>
                            </DelayedLink>
                          </div>
                          <div className="swiper-slide grid-item">
                            <DelayedLink to="/" className="link-portfolio">
                              <div className="container-img">
                                <img
                                  src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709040834/utiles/libs/02_desktop_brfodn.jpg"
                                  data-preload
                                  className="media"
                                  alt=""
                                />
                              </div>
                              <h3 className="title-portfolio">Wedding</h3>
                            </DelayedLink>
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
                    {modelData.map((data, index) => {
                      return (
                        <li key={index} className="grid-item">
                          <DelayedLink
                            to="/market-post"
                            className="market-link project-link"
                            attributes={{
                              "data-cursor-style": "view",
                              "data-menu-close": "",
                            }}
                          >
                            <div
                              className="container-img bg-blue"
                              data-cursor-style="view"
                            >
                              <img
                                src={data.img}
                                data-preload
                                className="media"
                                alt=""
                              />
                            </div>
                            <div className="container-text">
                              <h3 className="title-project split-words">
                                {data.title}
                              </h3>
                            </div>
                          </DelayedLink>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="result-blog">
                  <div className="container-title-results">
                    <h2 className="title-results split-chars" data-aos>
                      Blog <span>“Wedding”</span>
                    </h2>
                    <DelayedLink to="/" className="btn-border-blue" 
                    attributes={{
                      "data-aos": "",
                    }}>
                      <span>See more</span>
                      <i className="icon-arrow-right"></i>
                    </DelayedLink>
                  </div>

                  <div className="slider-content-search-blog">
                    <div className="swiper-container">
                      <div
                        className="swiper-wrapper list-result-blog list-slider-mobile list-blog grid-lg-20"
                        data-aos
                      >
                        <div className="swiper-slide grid-item">
                          <DelayedLink to="/blog-post" className="link-blog">
                            <div
                              className="container-img bg-blue"
                              data-cursor-style="view"
                            >
                              <div className="wrapper-img">
                                <img
                                  src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709040915/utiles/libs/08_desktop_s0swwk.jpg"
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
                          </DelayedLink>
                        </div>
                        <div className="swiper-slide grid-item">
                          <DelayedLink to="/blog-post" className="link-blog">
                            <div
                              className="container-img bg-blue"
                              data-cursor-style="view"
                            >
                              <div className="wrapper-img">
                                <img
                                  src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709040915/utiles/libs/08_desktop_s0swwk.jpg"
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
                          </DelayedLink>
                        </div>
                        <div className="swiper-slide grid-item">
                          <DelayedLink to="/blog-post" className="link-blog">
                            <div
                              className="container-img bg-blue"
                              data-cursor-style="view"
                            >
                              <div className="wrapper-img">
                                <img
                                  src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709040915/utiles/libs/08_desktop_s0swwk.jpg"
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
                          </DelayedLink>
                        </div>
                        <div className="swiper-slide grid-item">
                          <a href="blog-post.html" className="link-blog">
                            <div
                              className="container-img bg-blue"
                              data-cursor-style="view"
                            >
                              <div className="wrapper-img">
                                <img
                                  src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709040915/utiles/libs/08_desktop_s0swwk.jpg"
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
                          <DelayedLink to="/blog-post" className="link-blog">
                            <div
                              className="container-img bg-blue"
                              data-cursor-style="view"
                            >
                              <div className="wrapper-img">
                                <img
                                  src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709040915/utiles/libs/08_desktop_s0swwk.jpg"
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
                          </DelayedLink>
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
                      <DelayedLink to="/" className="link-order-pages">
                        <h3 className="title-order-pages">About</h3>
                        <p className="text-order-pages">
                          In the heart of the great outdoors, with nature as our
                          backdrop, Blueprint Studios embarked on a creative
                          journey - a photoshoot
                        </p>
                      </DelayedLink>
                    </li>
                    <li className="grid-item">
                      <DelayedLink to="/" className="link-order-pages">
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
                      </DelayedLink>
                    </li>
                    <li className="grid-item">
                      <DelayedLink to="/" className="link-order-pages">
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
                      </DelayedLink>
                    </li>
                    <li className="grid-item">
                      <DelayedLink to="/" className="link-order-pages">
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
                      </DelayedLink>
                    </li>
                    <li className="grid-item">
                      <DelayedLink to="/" className="link-order-pages">
                        <h3 className="title-order-pages">
                          Quisque lacinia nisi
                        </h3>
                        <p className="text-order-pages">
                          Nulla urna turpis, tempus eget molestie non, vulputate
                          quis nunc. Morbi posuere nibh purus, eget molestie
                          erat scelerisque a. Phasellus ut mauris mi.
                        </p>
                      </DelayedLink>
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