import React from "react";
import DelayedLink from "../../common/DelayedLink";
import getFullImageURL from "../../common/common_functions/imageURL";

const ProductCartSlider = ({data}) => {
  const EXTERNAL_SITE_URL = "https://www.rentals.blueprintstudios.com";
  return (
    <div className="slider-featured-products" data-aos="d:loop">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {data?.storeProducts.map((item, index) => {
            return (
              <div key={index} className="swiper-slide">
                <div className="rental-product-link">
                  {/* <button className="btn-bookmark">
                    <i className="icon-bookmark"></i>
                    <i className="icon-bookmark-full"></i>
                  </button> */}

                  <DelayedLink to={EXTERNAL_SITE_URL + item.productPageUrl} target={"blank"} className="product-link">
                    <h3 className="product-name">{item.name}</h3>

                    <div className="wrapper-img">
                      <div className="container-img">
                        <img
                          src={getFullImageURL(item.mainMedia)}
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
                            {item.productOptions.Color.choices.map((option, index) => (
                              <React.Fragment key={index}>
                                {index < 4 && (
                                  <li key={index}>
                                  <div className="container-img">
                                    <img
                                      src={getFullImageURL(option.mainMedia ? option.mainMedia : item.mainMedia )}
                                      data-preload
                                      className="media"
                                      alt=""
                                    />
                                  </div>
                                </li>
                                )}
                              </React.Fragment>
                            ))}
                            {item.productOptions.Color.choices.length > 4 ? (
                              <div className="colors-number">
                                <span>+{item.productOptions.Color.choices.length - 4}</span>
                              </div>
                            ) : null}
                      </ul>
                    </div>
                  </DelayedLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="swiper-button-prev no-mobile">
        <i className="icon-arrow-left-3"></i>
      </div>
      <div className="swiper-button-next no-mobile">
        <i className="icon-arrow-right-3"></i>
      </div>
    </div>
  );
};

export default ProductCartSlider;