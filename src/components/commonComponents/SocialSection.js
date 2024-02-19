import React from "react";
import { Link } from "react-router-dom";
import img6 from "../../utilis/images/lib/06_desktop.jpg"
import img7 from "../../utilis/images/lib/07_desktop.jpg"
import img8 from "../../utilis/images/lib/08_desktop.jpg"
import img4 from "../../utilis/images/lib/04_desktop.jpg"
import img3 from "../../utilis/images/lib/03_desktop.jpg"
import img2 from "../../utilis/images/lib/02_desktop.jpg"
import img1 from "../../utilis/images/lib/01_desktop.jpg"
const SocialSection = () => {
  return (
    <section className="section-lets-get-social z-5 pt-lg-195 pt-tablet-105 pt-phone-155 pb-lg-130 pb-tablet-105 pb-phone-140 mt-lg-240">
      <div
        className="bg"
        data-parallax
        data-translate-y-from="50vh"
        data-parallax-no-phone
        data-parallax-no-tablet
        data-end="center 80%"
        data-phone-end="top top"
        data-trigger="parent"
      ></div>
      <div className="container-fluid pos-relative z-5">
        <div className="row">
          <div className="col-lg-3 mx-auto">
            <h2
              className="fs--60 blue-1 text-center split-words"
              data-aos="d:loop"
            >
              Let's get social
            </h2>
            <h3
              className="fs--16 fs-tablet-20 fs-phone-18 blue-1 text-center mt-10"
              data-aos="fadeIn .8s ease-in-out .2s, d:loop"
            >
              Connect, create, celebrate: /BlueprintVibes
            </h3>
          </div>
          <div className="col-lg-12 column-2">
            <ul className="list-social mt-lg-60 mt-tablet-100 mt-phone-40">
              {/* Blog fetured feed start */}
              <li
                data-parallax
                data-translate-y-from="-30%"
                data-parallax-no-phone
                data-parallax-no-tablet
                data-end="center 80%"
                data-phone-end="top top"
                data-trigger="parent"
              >
                <div className="content blog-content">
                  <div className="social-media-title">
                    <i className="icon-blog"></i>
                    <h3>From our blog</h3>
                  </div>

                  <ul className="list-blog-lets-get-social">
                    <li>
                      <Link to="/blog-post" className="link-blog">
                        <div className="container-img" data-cursor-style="view">
                          <img
                            src={img1}
                            data-preload
                            className="media"
                            alt=""
                          />
                        </div>
                        <div className="container-text">
                          <h4 className="blog-title">
                            A Picturesque Day with Blueprint Studios: Showcasing
                            Our New Wooden Furniture Collection
                          </h4>
                          <p className="blog-text">
                            In the heart of the great outdoors, with nature as
                            our backdrop, Blueprint Studios embarked on a
                            creative journey
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-post" className="link-blog">
                        <div className="container-img" data-cursor-style="view">
                          <img
                            src={img6}
                            data-preload
                            className="media"
                            alt=""
                          />
                        </div>
                        <div className="container-text">
                          <h4 className="blog-title">
                            A Toast to Tradition: An Autumn Affair at Darioush
                            Winery
                          </h4>
                          <p className="blog-text">
                            As the golden hues of early fall descend upon the
                            picturesque landscapes of Napa, there's no venue
                            that encapsulates the region's beauty
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="blog-post" className="link-blog">
                        <div className="container-img" data-cursor-style="view">
                          <img
                            src={img1}
                            data-preload
                            className="media"
                            alt=""
                          />
                        </div>
                        <div className="container-text">
                          <h4 className="blog-title">
                            A Taste Explosion: Event Design Extravaganza at Boa
                            Restaurant Beverly Hills
                          </h4>
                          <p className="blog-text">
                            Beverly Hills, renowned for its luxury and panache,
                            witnessed an unforgettable evening that melded
                            culinary wonders with unmatched event
                          </p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              {/* Blog fetured feed end */}

              {/* Insta fetured feed start */}
              <li
                data-parallax
                data-translate-y-from="-60%"
                data-parallax-no-phone
                data-parallax-no-tablet
                data-end="center 80%"
                data-phone-end="top top"
                data-trigger="parent"
              >
                <div className="content">
                  <div className="social-media-title">
                    <i className="icon-instagram"></i>
                    <h3>Stay connected Feed</h3>
                  </div>
                  <ul className="list-instagram">
                    <li>
                      <Link to="/" target="_blank" rel="noopener noreferrer">
                        <div className="container-img">
                          <img
                            src={img1}
                            data-preload
                            className="media"
                            alt=""
                          />
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" target="_blank" rel="noopener noreferrer">
                        <div className="container-img">
                          <img
                            src={img4}
                            data-preload
                            className="media"
                            alt=""
                          />
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" target="_blank" rel="noopener noreferrer">
                        <div className="container-img">
                          <img
                            src={img2}
                            data-preload
                            className="media"
                            alt=""
                          />
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" target="_blank" rel="noopener noreferrer">
                        <div className="container-img">
                          <img
                            src={img1}
                            data-preload
                            className="media"
                            alt=""
                          />
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" target="_blank" rel="noopener noreferrer">
                        <div className="container-img">
                          <img
                            src={img8}
                            data-preload
                            className="media"
                            alt=""
                          />
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" target="_blank" rel="noopener noreferrer">
                        <div className="container-img">
                          <img
                            src={img1}
                            data-preload
                            className="media"
                            alt=""
                          />
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" target="_blank" rel="noopener noreferrer">
                        <div className="container-img">
                          <img
                            src={img7}
                            data-preload
                            className="media"
                            alt=""
                          />
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" target="_blank" rel="noopener noreferrer">
                        <div className="container-img">
                          <img
                            src={img3}
                            data-preload
                            className="media"
                            alt=""
                          />
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" target="_blank" rel="noopener noreferrer">
                        <div className="container-img">
                          <img
                            src={img4}
                            data-preload
                            className="media"
                            alt=""
                          />
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              {/* Insta fetured feed end */}

              {/* Pinterest Feeds start */}
              <li
                data-parallax
                data-translate-y-from="-80%"
                data-parallax-no-phone
                data-parallax-no-tablet
                data-end="center 80%"
                data-phone-end="top top"
                data-trigger="parent"
              >
                <div className="content blog-content">
                  <div className="social-media-title">
                    <i className="icon-pinterest"></i>
                    <h3>Stay connected Feed</h3>
                  </div>

                  <ul className="list-blog-lets-get-social">
                    <li>
                      <Link to="/blog-post" className="link-blog">
                        <div className="container-text">
                          <h4
                            className=""
                            style={{
                              fontStyle: "bold",
                              fontSize: "16px",
                              color: "darkgray",
                            }}
                          >
                            <i className="icon-instagram"></i>
                            <span>
                              Blueprint Studios - Event Design and Produc...
                            </span>
                          </h4>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <ul className="list-instagram">
                        <li>
                          <Link
                            to="/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="container-img">
                              <img
                                src={img1}
                                data-preload
                                className="media"
                                alt=""
                              />
                            </div>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="container-img">
                              <img
                                src={img8}
                                data-preload
                                className="media"
                                alt=""
                              />
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="container-img">
                              <img
                                src={img1}
                                data-preload
                                className="media"
                                alt=""
                              />
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="container-img">
                              <img
                                src={img7}
                                data-preload
                                className="media"
                                alt=""
                              />
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="container-img">
                              <img
                                src={img3}
                                data-preload
                                className="media"
                                alt=""
                              />
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="container-img">
                              <img
                                src={img4}
                                data-preload
                                className="media"
                                alt=""
                              />
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/blog-post" className="link-blog">
                        <div className="container-text">
                          <h4 className="p-card">
                            <span>Sign up</span>
                            <i
                              className="icon-instagram"
                              style={{ color: "red" }}
                            ></i>
                          </h4>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              {/* Pinterest Feeds end */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
