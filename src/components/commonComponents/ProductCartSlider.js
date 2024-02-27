import React from "react";
import { productSlider } from "../../common/constats/blogData";
import DelayedLink from "../../common/DelayedLink";

const ProductCartSlider = () => {
  return (
    <div className="slider-featured-products" data-aos="d:loop">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {productSlider.map((data, index) => {
            return (
              <div key={index} className="swiper-slide">
                <div className="rental-product-link">
                  <button className="btn-bookmark">
                    <i className="icon-bookmark"></i>
                    <i className="icon-bookmark-full"></i>
                  </button>

                  <DelayedLink to="/" className="product-link">
                    <h3 className="product-name">{data.name}</h3>

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
                        {Object.values(data.list).map((list, index) => (
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
                        ))}
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