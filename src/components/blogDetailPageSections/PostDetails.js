import {  useParams } from "react-router-dom";
import ProductCartSlider from "../commonComponents/ProductCartSlider";
import SocialVerticalBar from "./SocialVerticalBar";
import img1 from "../../utilis/images/lib/06_desktop.jpg"
import img2 from "../../utilis/images/lib/02_desktop.jpg"
import img8 from "../../utilis/images/lib/08_desktop.jpg"
import img4 from "../../utilis/images/lib/04_desktop.jpg"
// import {postes} from "../../common/constats/blogData";
import DelayedLink from "../../common/DelayedLink";

const PostDetails = () => {

  const params = useParams();
  console.log(params.id,"product id");

  return (
    <section className="blog-post-intro pt-lg-150 pt-mobile-125">
      <div className="container-fluid">
        <div className="row row-1">
          <div className="col-lg-5 offset-lg-3 column-1">
            <div className="wrapper-text">
              <div
                className="container-author-post-info"
                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
              >
                <div className="author">
                  <div className="container-img">
                    <img
                      src={img1}
                      data-preload
                      className="media"
                      alt=""
                    />
                  </div>
                  <h2 className="author-name">Lily Yeung</h2>
                </div>
                <div className="date">
                  <span>Sep 30</span>
                </div>
              </div>
              <h1
                className="fs--40 fs-mobile-35 lh-140 blog-post-title split-words"
                data-aos="d:loop"
              >
                A Medieval Fairytale Come to Life: Blueprint Studios' Event at
                Castello di Amorosa
              </h1>
            </div>
          </div>
        </div>
        <div className="row row-2 mt-lg-15 mt-tablet-25 mt-phone-45">
          <div className="col-lg-10 offset-lg-1 column-1">
            <div className="blog-post-content pb-lg-180 pb-tablet-60 pb-phone-40">
              <div className="blog-post-thumb" data-aos="d:loop">
                <div className="container-img">
                  <img
                    src={img1}
                    data-preload
                    className="media"
                    alt=""
                    data-parallax-top
                    data-translate-y="20%"
                  />
                </div>
              </div>
              <div className="blog-post-text mt-lg-60 mt-tablet-40 mt-phone-85">
                <div
                  className="editor"
                  data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                >
                  <h2>Introduction</h2>
                  <p>
                    A historical backdrop, medieval tournament, wine cellar
                    feast, and a starlit dessert soirée; it might sound like a
                    scene from a fairytale, but it was the reality crafted by
                    Blueprint Studios at Castello di Amorosa in Napa Valley.
                  </p>
                  <p>
                    When it comes to creating one-of-a-kind experiences,
                    Blueprint Studios knows how to conjure magic. This event was
                    no exception. From jousting knights to a candlelit dinner in
                    a wine cellar, followed by a dessert reception under the
                    stars, this event was a transportive experience right out of
                    the pages of a storybook.
                  </p>
                  <h2>The Setting</h2>
                  <p>
                    Castello di Amorosa, a Tuscan-style castle and winery
                    located in Napa Valley, was the perfect setting for this
                    enchanting event. The castle, a 121,000-square-foot fortress
                    set upon a sprawling 171 acres, complete with a drawbridge,
                    moat, chapel, and even a torture chamber, served as the
                    idyllic backdrop for a medieval-themed celebration.
                  </p>

                  <h2>The Reception</h2>
                  <p>
                    The event kicked off with a reception like no other. Guests
                    were greeted at the castle gates with goblets of wine before
                    entering a medieval world of wonder. As the sun set over the
                    Napa Valley, the courtyard was alive with the sights and
                    sounds of a medieval tournament. Knights in shining armor
                    jousting, sword-fighting demonstrations, and falconry
                    displays entertained guests as they mingled and sipped on
                    the finest wines from the Castello's collection.
                  </p>

                  <img src={img1} alt="" />

                  <div className="slider-blog-post">
                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src={img1}
                              data-preload
                              className="media"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src={img2}
                              data-preload
                              className="media"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src={img8}
                              data-preload
                              className="media"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src={img4}
                              data-preload
                              className="media"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-button-prev">
                      <i className="icon-arrow-left-3"></i>
                    </div>
                    <div className="swiper-button-next">
                      <i className="icon-arrow-right-3"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-post-tags mt-lg-140 mt-tablet-40 mt-phone-115">
                <h3
                  className="fs--22 mb-lg-25 mb-tablet-40 mb-phone-25 split-words"
                  data-aos="d:loop"
                >
                  Tags
                </h3>
                <ul className="list-post-tags" data-aos="d:loop">
                  <li>
                    <DelayedLink to="/" className="btn-tag">
                      <span>Custom fabrication</span>
                    </DelayedLink>
                  </li>
                  <li>
                    <DelayedLink to="/" className="btn-tag">
                      <span>Event design & Production</span>
                    </DelayedLink>
                  </li>
                  <li>
                    <DelayedLink to="/" className="btn-tag">
                      <span>Printing</span>
                    </DelayedLink>
                  </li>
                  <li>
                    <DelayedLink to="/" className="btn-tag">
                      <span>Venues</span>
                    </DelayedLink>
                  </li>
                </ul>
              </div>
            </div>

            {/* Product Cart Slider start */}
            <div className="container-slider-produtcts mt-lg-padding-fluid mt-tablet-100 mt-phone-105">
              <h2 className="slider-title">
                Products featured in this blog entry:
              </h2>
              <ProductCartSlider />
            </div>
            {/* Product Cart Slider end */}
          </div>
          {/* social vertical bar start */}
          <SocialVerticalBar />
          {/* social vertical bar end */}
        </div>
      </div>
    </section>
  );
};

export default PostDetails;
