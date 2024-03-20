import React, { useEffect, useMemo, useState } from "react";
import DelayedLink from "../../../common/DelayedLink";
import { productSlider } from "../../../common/constats/blogData";
import { fetchStudioSection } from "../../../redux/reducers/homeData";
import { useDispatch, useSelector } from "react-redux";
import { getMarketCollection } from "../../../redux/reducers/marketData";
import getFullImageURL, { getFullImagePost } from "../../../common/common_functions/imageURL";
import { listBlogs, listPortfolios } from "../../../utilis/queryCollections";
import formatDate from "../../../common/common_functions/dateFormat";
import debounce from "lodash/debounce";

const Search = () => {
  const dispatch = useDispatch();
  const studios = useSelector((state) => state.home.studioData);
  const markets = useSelector((state) => state.market.marketModel);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudios, setSelectedStudios] = useState([]);
  const [selectedMarkets, setSelectedMarkets] = useState([]);

  const [blogCollection, setBlogCollection] = useState([]);
  const [portfolioCollection, setPortfolioCollection] = useState([]);
  const [productSliderData, setProductSliderData] = useState([]);

  const [resultStudios, setResultStudios] = useState([]);
  const [resultMarkets, setResultMarkets] = useState([]);

  const [searchActive, setSearchActive] = useState(false);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    dispatch(fetchStudioSection(false));
    dispatch(getMarketCollection());
  }, [dispatch]);

  useEffect(() => {
    const portfolioStudios = portfolioCollection.flatMap(item => item.studios.map(studio => studio._id));
    const blogStudios = blogCollection.flatMap(item => item.studios.map(studio => studio._id));
    const portfolioMarkets = portfolioCollection.flatMap(item => item.markets.map(market => market._id));
    const blogMarkets = blogCollection.flatMap(item => item.markets.map(market => market._id));

    setResultStudios([...new Set([...portfolioStudios, ...blogStudios])]);
    setResultMarkets([...new Set([...portfolioMarkets, ...blogMarkets])]);
  }, [portfolioCollection, blogCollection]);



  const filteredProductData = useMemo(() => {
    return productSlider.filter(
      (item) =>
        item.name && item.name.toLowerCase().includes(searchTerm)
    );
  }, [searchTerm]);

  const handleStudioFilter = (tag) => {
    if (selectedStudios.includes(tag)) {
      setSelectedStudios(selectedStudios.filter((el) => el !== tag));
    } else {
      setSelectedStudios([...selectedStudios, tag]);
    }
  };
  const handleMarketFilter = (category) => {
    if (selectedMarkets.includes(category)) {
      setSelectedMarkets(selectedMarkets.filter((el) => el !== category));
    } else {
      setSelectedMarkets([...selectedMarkets, category]);
    }
  };


  const searchCollections = async () => {
    try {
      setProductSliderData(filteredProductData);

      const options = {
        pageSize: 10,
        searchTerm: searchTerm,
        studios: selectedStudios,
        markets: selectedMarkets,
        disableLoader: true
      };

      const portfolio = await listPortfolios(options);
      setPortfolioCollection(portfolio.items.map((item) => item.data));

      const blog = await listBlogs(options);
      setBlogCollection(blog.items.map((item) => item.data));
      // setSearching(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (searchActive) {
      // setSearching(true);
      const delayedSearch = debounce(searchCollections, 1000);
      delayedSearch();
      return () => delayedSearch.cancel();
    }
  }, [selectedStudios, selectedMarkets, searchActive, searchTerm]);




  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
  };

  const handleSubmit = async (e) => {
    if (searchActive) {
      searchCollections();
    } else {
      setSearchActive(true);
    }
    e.preventDefault();
  };


  return (
    <section className="menu-search" data-get-submenu="search">
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

              <div className={`container-results ${searching ? "searching" : ""}`}>
                <div className="inner-container-results" data-cursor-style="default">
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
                      data-cursor-style="default"
                    >
                      {studios?.map((item, index) => {
                        return (
                          <li key={index} className="grid-item">
                            <div onClick={() => { handleStudioFilter(item.data._id) }}
                              className={`link-studios ${selectedStudios.includes(item.data._id) ? "active" : ""} ${resultStudios.includes(item.data._id) ? "" : "disabled"}`}>
                              <h3 className="title-all-studios">
                                <span>{item.data.cardName}</span>
                              </h3>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="column-results custom-css">

                    <div className="result-rental">
                      <div className="container-title-results">
                        <h2 className="title-results split-chars" data-aos>
                          Rental <span>{`"${searchTerm}"`}</span>
                        </h2>
                        <DelayedLink
                          to="https://www.rentals.blueprintstudios.com/"
                          target="blank"
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
                            data-cursor-style="default"
                          >
                            {productSliderData.map((data, index) => {
                              return (
                                <div
                                  key={index}
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
                            {productSliderData.length === 0 && <h6 style={{ width: "100%" }} className="ml-4 mt-3-cs fs--20">No matches found for "{searchTerm}"</h6>}
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
                            data-cursor-style="default"
                          >
                            {portfolioCollection?.map((data) => {
                              return (
                                <div
                                  key={data._id}
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
                                          src={getFullImagePost(data.portfolioRef.coverImage.imageInfo)}
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
                            {portfolioCollection.length === 0 && <h6 style={{ width: "100%" }} className="ml-4 mt-3-cs fs--20">No matches found for "{searchTerm}"</h6>}
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
                      data-cursor-style="default"
                    >
                      {markets?.map((item, index) => {
                        return (
                          <li key={index} className="grid-item">
                            <div
                              onClick={() => { handleMarketFilter(item._id) }}
                              className={`market-link project-link ${selectedMarkets.includes(item._id) ? "active" : ""} ${resultMarkets.includes(item._id) ? "" : "disabled"}`}
                              data-cursor-style="default"
                              data-menu-close
                            >
                              <div
                                className="container-img bg-blue"
                                data-cursor-style="default"
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
                            </div>
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
                        to="/blog"
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
                          {blogCollection?.map((blog) => {
                            return (
                              <div
                                key={blog.blogId}
                                className="swiper-slide grid-item"
                              >
                                <DelayedLink
                                  to={`/blog-post/${blog.slug}`}
                                  className="link-blog"
                                >
                                  <div
                                    className="container-img bg-blue"
                                    data-cursor-style="view"
                                  >
                                    <div className="wrapper-img">
                                      {blog.blogRef.coverImage &&
                                        <img
                                          src={getFullImageURL(blog.blogRef.coverImage) + "/v1/fit/w_1000,h_1000,al_c,q_75,usm_0.66_1.00_0.01,enc_auto/compress.webp"}
                                          data-preload
                                          className="media"
                                          alt=""
                                        />}

                                    </div>
                                  </div>
                                  <div className="container-text">
                                    <div className="container-author-post-info">
                                      <div className="author">
                                        <span className="author-name">
                                          {blog.author.nickname}
                                        </span>
                                      </div>
                                      <div className="date">
                                        <span>{formatDate(blog.blogRef.lastPublishedDate.$date)}</span>
                                      </div>
                                    </div>
                                    <h2 className="title-blog">{blog.blogRef.title}</h2>
                                    <p className="text-blog">{blog.blogRef.excerpt}</p>
                                  </div>
                                </DelayedLink>
                              </div>
                            );
                          })}
                          {blogCollection.length === 0 && <h6 style={{ width: "100%" }} className="ml-4 mt-3-cs fs--20">No matches found for "{searchTerm}"</h6>}
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
    </section>
  );
};

export default Search;