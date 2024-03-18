import { Link } from "react-router-dom";
import DelayedLink from "../../common/DelayedLink";
import {
  socialData,
  instafeeds,
} from "../../common/constats/constats";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getblogPostData } from "../../redux/reducers/blogData";
import { getFullImagePost } from "../../common/common_functions/imageURL";

const SocialSection = () => {
  const dispatch = useDispatch();
  const postes = useSelector((state) => state.blog.blogPostData);

  useEffect(() => {
    dispatch(getblogPostData());
  }, [dispatch]);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.type = "text/javascript";
    script.dataset.pinBuild = "doBuild";
    script.src = "//assets.pinterest.com/js/pinit.js";
    document.body.appendChild(script);
    if (window.doBuild) window.doBuild();
  }, []); // only run once
  console.log(postes, "socila data");
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
              {socialData.title}
            </h2>
            <h3
              className="fs--16 fs-tablet-20 fs-phone-18 blue-1 text-center mt-10"
              data-aos="fadeIn .8s ease-in-out .2s, d:loop"
            >
              {socialData.subtitle}
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
                    <h3>{socialData.blogtitle}</h3>
                  </div>

                  <ul className="list-blog-lets-get-social">
                    {postes?.slice(0, 3).map((data) => {
                      return (
                        <li key={data._id}>
                          <DelayedLink to="/blog-post" className="link-blog">
                            <div
                              className="container-img"
                              data-cursor-style="view"
                            >
                              <img
                                src={
                                  getFullImagePost(data?.blogRef?.coverImage) +
                                  "/v1/fit/w_1000,h_1000,al_c,q_75,usm_0.66_1.00_0.01,enc_auto/compress.webp"
                                }
                                data-preload
                                className="media"
                                alt=""
                              />
                            </div>
                            <div className="container-text">
                              <h4 className="blog-title"> {data?.blogRef?.title}</h4>
                              <p className="blog-text">{data?.blogRef?.excerpt}</p>
                            </div>
                          </DelayedLink>
                        </li>
                      );
                    })}
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
                    <h3>{socialData.instatitle}</h3>
                  </div>
                  <ul className="list-instagram">
                    {instafeeds.map((data, index) => {
                      return (
                        <li key={index}>
                          <DelayedLink
                            to="/"
                            target="_blank"
                            attributes={{
                              rel: "noopener noreferrer",
                            }}
                          >
                            <div className="container-img">
                              <img
                                src={data.image}
                                data-preload
                                className="media"
                                alt=""
                              />
                            </div>
                          </DelayedLink>
                        </li>
                      );
                    })}
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
                <div className="content">
                  <div className="social-media-title">
                    <i className="icon-pinterest"></i>
                    <h3>{socialData.title}</h3>
                  </div>
                  <ul className="list-instagram">
                    <Link
                      data-pin-do="embedUser"
                      data-pin-scale-height="400"
                      data-pin-scale-width="1200"
                      data-pin-min-weight="100%"
                      data-pin-max-weight="100%"
                      to="https://ro.pinterest.com/blueprintst"
                    ></Link>
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
