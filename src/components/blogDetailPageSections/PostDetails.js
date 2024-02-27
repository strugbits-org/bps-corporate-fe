import React from "react";
import { useParams } from "react-router-dom";
import ProductCartSlider from "../commonComponents/ProductCartSlider";
import SocialVerticalBar from "./SocialVerticalBar";
import { postes } from "../../common/constats/blogData";
import DelayedLink from "../../common/DelayedLink";

const PostDetails = () => {
  const params = useParams();

  const post = postes.find((post) => post.id === params.id);

  console.log("Post here", post);


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
                    <img src={post.img} data-preload className="media" alt="" />
                  </div>
                  <h2 className="author-name">{post.userName}</h2>
                </div>
                <div className="date">
                  <span>{post.date}</span>
                </div>
              </div>
              <h1
                className="fs--40 fs-mobile-35 lh-140 blog-post-title split-words"
                data-aos="d:loop"
              >
                {post.heading}
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
                    src={post.img}
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
                  <h2>{post.heading}</h2>
                  <p>
                   {post.p}
                  </p>
                  <p>
                    {post.pp}
                  </p>
                  <h2>{post.heading1}</h2>
                  <p>
                    {post.p1}
                  </p>

                  <h2>{post.heading2}</h2>
                  <p>
                    {post.p2}
                  </p>

                  <img src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709040865/utiles/libs/06_desktop_iterkd.jpg" alt="" />

                  <div className="slider-blog-post">
                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709040865/utiles/libs/06_desktop_iterkd.jpg"
                              data-preload
                              className="media"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709040865/utiles/libs/06_desktop_iterkd.jpg"
                              data-preload
                              className="media"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709040915/utiles/libs/08_desktop_s0swwk.jpg"
                              data-preload
                              className="media"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709040850/utiles/libs/04_desktop_rqwz5o.jpg"
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
