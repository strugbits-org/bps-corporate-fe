import React from "react";
import img1 from "../../utilis/images/chairs/bristol-chair.png"
import img2 from "../../utilis/images/chairs/bristol-chair-color-1.png"
import img3 from "../../utilis/images/chairs/bristol-chair-color-2.png"
import img33 from "../../utilis/images/chairs/bristol-chair-color-3.png"
import img4 from "../../utilis/images/chairs/bristol-chair-color-4.png"
import img5 from "../../utilis/images/chairs/manette-pillow.png"
import imgm from "../../utilis/images/chairs/marais-chair.png"
import imgm1 from "../../utilis/images/chairs/marais-chair-color-1.png"
import imgm2 from "../../utilis/images/chairs/marais-chair-color-2.png"
import imgm3 from "../../utilis/images/chairs/marais-chair-color-3.png"
import imgm4 from "../../utilis/images/chairs/marais-chair-color-4.png" 
import DelayedLink from "../../common/DelayedLink";

const ProductCartSlider = () => {
  return (
    <div className="slider-featured-products" data-aos="d:loop">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="rental-product-link">
              <button className="btn-bookmark">
                <i className="icon-bookmark"></i>
                <i className="icon-bookmark-full"></i>
              </button>

              <DelayedLink to="/" className="product-link">
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
                          src={img2}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="container-img">
                        <img
                          src={img3}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="container-img">
                        <img
                          src={img33}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="container-img">
                        <img
                          src={img4}
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

          <div className="swiper-slide">
            <div className="rental-product-link">
              <button className="btn-bookmark">
                <i className="icon-bookmark"></i>
                <i className="icon-bookmark-full"></i>
              </button>

              <DelayedLink to="/" className="product-link">
                <h3 className="product-name">Manette Pillow</h3>

                <div className="wrapper-img">
                  <div className="container-img">
                    <img
                      src={img5}
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
                          src={img2}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="container-img">
                        <img
                          src={img3}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="container-img">
                        <img
                          src={img33}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="container-img">
                        <img
                          src={img4}
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

          <div className="swiper-slide">
            <div className="rental-product-link">
              <button className="btn-bookmark">
                <i className="icon-bookmark"></i>
                <i className="icon-bookmark-full"></i>
              </button>

              <DelayedLink to="/" className="product-link">
                <h3 className="product-name">Marais Chair</h3>

                <div className="wrapper-img">
                  <div className="container-img">
                    <img
                      src={imgm}
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
                          src={imgm1}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="container-img">
                        <img
                          src={imgm2}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="container-img">
                        <img
                          src={imgm3}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="container-img">
                        <img
                          src={imgm4}
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
          <div className="swiper-slide">
            <div className="rental-product-link">
              <button className="btn-bookmark">
                <i className="icon-bookmark"></i>
                <i className="icon-bookmark-full"></i>
              </button>

              <DelayedLink to="/" className="product-link">
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
                          src={img2}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="container-img">
                        <img
                          src={img3}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="container-img">
                        <img
                          src={img33}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="container-img">
                        <img
                          src={img4}
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

          <div className="swiper-slide">
            <div className="rental-product-link">
              <button className="btn-bookmark">
                <i className="icon-bookmark"></i>
                <i className="icon-bookmark-full"></i>
              </button>

              <DelayedLink to="/" className="product-link">
                <h3 className="product-name">Manette Pillow</h3>

                <div className="wrapper-img">
                  <div className="container-img">
                    <img
                      src={img5}
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
                          src={img2}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="container-img">
                        <img
                          src={img3}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="container-img">
                        <img
                          src={img33}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="container-img">
                        <img
                          src={img4}
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

          <div className="swiper-slide">
            <div className="rental-product-link">
              <button className="btn-bookmark">
                <i className="icon-bookmark"></i>
                <i className="icon-bookmark-full"></i>
              </button>

              <DelayedLink to="/" className="product-link">
                <h3 className="product-name">Marais Chair</h3>

                <div className="wrapper-img">
                  <div className="container-img">
                    <img
                      src={imgm}
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
                          src={imgm1}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="container-img">
                        <img
                          src={imgm2}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="container-img">
                        <img
                          src={imgm3}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="container-img">
                        <img
                          src={imgm4}
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
          <div className="swiper-slide">
            <div className="rental-product-link">
              <button className="btn-bookmark">
                <i className="icon-bookmark"></i>
                <i className="icon-bookmark-full"></i>
              </button>

              <DelayedLink to="/" className="product-link">
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
                          src={img2}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="container-img">
                        <img
                          src={img3}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="container-img">
                        <img
                          src={img33}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="container-img">
                        <img
                          src={img4}
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

          <div className="swiper-slide">
            <div className="rental-product-link">
              <button className="btn-bookmark">
                <i className="icon-bookmark"></i>
                <i className="icon-bookmark-full"></i>
              </button>

              <DelayedLink to="/" className="product-link">
                <h3 className="product-name">Manette Pillow</h3>

                <div className="wrapper-img">
                  <div className="container-img">
                    <img
                      src={img5}
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
                          src={img2}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="container-img">
                        <img
                          src={img3}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="container-img">
                        <img
                          src={img33}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="container-img">
                        <img
                          src={img4}
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

          <div className="swiper-slide">
            <div className="rental-product-link">
              <button className="btn-bookmark">
                <i className="icon-bookmark"></i>
                <i className="icon-bookmark-full"></i>
              </button>

              <DelayedLink to="/" className="product-link">
                <h3 className="product-name">Marais Chair</h3>

                <div className="wrapper-img">
                  <div className="container-img">
                    <img
                      src={imgm}
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
                          src={imgm1}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="container-img">
                        <img
                          src={imgm2}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="container-img">
                        <img
                          src={imgm3}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </li>
                    <li>
                      <div className="container-img">
                        <img
                          src={imgm4}
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
