import React, { useEffect, useMemo, useState } from "react";
import { postes } from "../../../common/constats/blogData";
import DelayedLink from "../../../common/DelayedLink";
import { productSlider } from "../../../common/constats/blogData";
import { fetchPortfolio } from "../../../redux/reducers/portfolioData";
import { fetchStudioSection } from "../../../redux/reducers/homeData";
import { useDispatch, useSelector } from "react-redux";
import { getMarketCollection } from "../../../redux/reducers/marketData";
import getFullImageURL from "../../../common/common_functions/imageURL";

const Search = () => {
  const dispatch = useDispatch();
  const portfolioCollection = useSelector((state) => state.portfolio.portfolioData);
  const studioData = useSelector((state) => state.home.studioData);
  const marketData = useSelector((state) => state.market.marketModel);

  useEffect(() => {
    dispatch(fetchPortfolio(false));
    dispatch(fetchStudioSection(false));
    dispatch(getMarketCollection());
  }, [dispatch]);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [portfolioData, setPortfolioData] = useState([]);
  const [blogData, setBlogData] = useState([]);
  const [productSliderData, setProductSliderData] = useState([]);
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value.trim().toLowerCase());
  };

  const filteredPortfolioData = useMemo(() => {
    // return portfolioCollection.filter(
    //   (item) =>
    //  ( item.title && item.title.toLowerCase().includes(searchTerm)) ||
    //   (item.description && item.description.toLowerCase().includes(searchTerm)) ||
    //   (item.studioTags && (item.studioTags + "").toLowerCase().includes(searchTerm)) ||
    //   (item.marketCategory && item.marketCategory.toLowerCase().includes(searchTerm))
    // );
    return portfolioCollection;
  }, [searchTerm, portfolioCollection]);

  const filteredBlogData = useMemo(() => {
    return postes.filter(
      (item) =>
        item.category && item.category.toLowerCase().includes(searchTerm)
    );
  }, [searchTerm]);

  const filteredProductData = useMemo(() => {
    return productSlider.filter(
      (item) =>
        item.name && item.name.toLowerCase().includes(searchTerm)
    );
  }, [searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPortfolioData(filteredPortfolioData);
    setBlogData(filteredBlogData);
    setProductSliderData(filteredProductData);
  };

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
                  <label className="split-chars" data-aos="d:loop">
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
                    {studioData.map((item, index) => {
                      return (
                        <li key={index} className="grid-item">
                          <DelayedLink to={item.data.slug} className="link-studios">
                            <h3 className="title-all-studios">
                              <span>{item.data.cardName}</span>
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
                        Rental <span>{`"${searchTerm}"`}</span>
                      </h2>
                      <DelayedLink
                        to="/"
                        className="btn-border-blue"
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
                          {productSliderData.map((data) => {
                            return (
                              <div
                                key={data.id}
                                className="swiper-slide grid-item"
                              >
                                <div className="rental-product-link">
                                  <DelayedLink to="/" className="product-link">
                                    <h3 className="product-name">
                                      {data.name}
                                    </h3>

                                    <div className="wrapper-img">
                                      <div className="container-img">
                                        <img
                                          src={data.img1}
                                          data-preload
                                          className="media"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="container-bottom">
                                      <div className="view-more">
                                        <span className="view">
                                          <span>{data.btntext}</span>
                                        </span>
                                        <i className="icon-arrow-diagonal-right"></i>
                                      </div>
                                      <ul className="list-thumb">
                                        {Object.values(data.list).map(
                                          (list, index) => (
                                            <li key={index}>
                                              <div className="container-img">
                                                <img
                                                  src={list}
                                                  data-preload
                                                  className="media"
                                                  alt=""
                                                />
                                              </div>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                      <div className="colors-number">
                                        <span>+3</span>
                                      </div>
                                    </div>
                                  </DelayedLink>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="result-portfolio mt-lg-60 mt-mobile-40">
                    <div className="container-title-results">
                      <h2 className="title-results split-chars" data-aos>
                        Portfolio <span>{`"${searchTerm}"`}</span>
                      </h2>
                      <DelayedLink
                        to={`/portfolio`}
                        className="btn-border-blue"
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
                          className="swiper-wrapper list-result-portfolio list-slider-phone grid-md-20"
                          data-aos
                        >
                          {portfolioData.map((data) => {
                            return (
                              <div
                                key={data.id}
                                className="swiper-slide grid-item"
                              >
                                <DelayedLink
                                  to={`/portfolio-post/${data.slug}`}
                                  className="link-portfolio"
                                >
                                  <div
                                    className="container-img bg-blue"
                                    data-cursor-style="view"
                                  >
                                    <div className="wrapper-img">
                                      <img
                                        src={getFullImageURL(data.portfolioRef.coverImage.imageInfo)}
                                        data-preload
                                        className="media"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="container-text">
                                    <h2 className="title-portfolio">
                                      {data.portfolioRef.title}
                                    </h2>
                                  </div>
                                </DelayedLink>
                              </div>
                            );
                          })}
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
                    {marketData.map((item, index) => {
                      return (
                        <li key={index} className="grid-item">
                          <DelayedLink
                            to={item.slug}
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
                                src={item.image}
                                data-preload
                                className="media"
                                alt=""
                              />
                            </div>
                            <div className="container-text">
                              <h3 className="title-project split-words">
                                {item.cardname}
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
                      Blog <span>{`"${searchTerm}"`}</span>
                    </h2>
                    <DelayedLink
                      to="/"
                      className="btn-border-blue"
                      attributes={{
                        "data-aos": "",
                      }}
                    >
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
                        {blogData.map((data) => {
                          return (
                            <div
                              key={data.id}
                              className="swiper-slide grid-item"
                            >
                              <DelayedLink
                                to="/blog-post"
                                className="link-blog"
                              >
                                <div
                                  className="container-img bg-blue"
                                  data-cursor-style="view"
                                >
                                  <div className="wrapper-img">
                                    <img
                                      src={data.img}
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
                                        {data.userName}
                                      </span>
                                    </div>
                                    <div className="date">
                                      <span>{data.date}</span>
                                    </div>
                                  </div>
                                  <h2 className="title-blog">{data.heading}</h2>
                                  <p className="text-blog">{data.p}</p>
                                </div>
                              </DelayedLink>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="result-order-pages">
                  <div className="container-title-results">
                    <h2 className="title-results split-chars" data-aos>
                      Order pages <span>{`"${searchTerm}"`}</span>
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