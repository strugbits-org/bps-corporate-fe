import React, { useEffect } from "react";
import DelayedLink from "../../common/DelayedLink";
import { useDispatch, useSelector } from "react-redux";
import { getblogPostData } from "../../redux/reducers/blogData";
import { getFullImagePost } from "../../common/common_functions/imageURL";
import formatDate from "../../common/common_functions/dateFormat";

const RecentPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state?.blog?.blogPostData);

  useEffect(() => {
    dispatch(getblogPostData({ pageSize: 4 }));
  }, [dispatch]);

  return (
    <section
      className={`blog-post-recent-posts pt-lg-245 pt-tablet-105 pt-phone-150 pb-lg-150 pb-mobile-100 ${
        posts.length === 0 ? "hidden" : ""
      }`}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 column-1">
            <h2
              className="fs--60 text-center mb-lg-35 mb-tablet-40 mb-phone-100 split-words"
              attributes={{
                "data-aos": "d:loop",
              }}
            >
              Recent posts
            </h2>
            <div className="slider-content-mobile">
              <div className="swiper-container">
                <div className="swiper-wrapper list-blog list-slider-mobile grid-lg-25">
                  {posts?.slice(0, 4).map((data) => {
                    return (
                      <div key={data._id} className="swiper-slide grid-item">
                        <DelayedLink
                           to={`/blog-post/${encodeURIComponent(data.slug)}`}
                          className="link-blog link-blog-animation"
                          attributes={{
                            "data-aos": "d:loop",
                          }}
                        >
                          <div
                            className="container-img bg-blue"
                            data-cursor-style="view"
                          >
                            <div className="wrapper-img">
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
                          </div>
                          <div className="container-text">
                            <div className="container-author-post-info">
                              <div className="author">
                                <span className="author-name">
                                  {data?.author?.nickname}
                                </span>
                              </div>
                              <div className="date">
                                <span>
                                  {formatDate(data?._updatedDate.$date)}
                                </span>
                              </div>
                            </div>
                            <h2 className="title-blog">
                              {data?.blogRef?.title}
                            </h2>
                            <p className="text-blog">
                              {data?.blogRef?.excerpt}
                            </p>
                            <ul
                              style={{ marginTop: 2 }}
                              className="list-tags-small"
                            >
                              {data.markets.map((market, index) => (
                                <li
                                  key={index}
                                  className={`tag-small
                                                    ? "active"
                                                    : ""
                                                    }`}
                                >
                                  <span>{market.cardname}</span>
                                </li>
                              ))}
                              {data.studios.map((studio, index) => (
                                <React.Fragment key={index}>
                                  {index < 2 && (
                                    <li
                                      className={`tag-small 
                                                            ? ${
                                                              index === 0
                                                            } "active"
                                                            : ""
                                                            }`}
                                    >
                                      <span>{studio.cardName}</span>a
                                    </li>
                                  )}
                                </React.Fragment>
                              ))}
                              {data.studios.length > 2 ? (
                                <li className="tag-small">
                                  <span>
                                    +{data.studios.length - 2} studios
                                  </span>
                                </li>
                              ) : null}
                            </ul>
                          </div>
                        </DelayedLink>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 offset-lg-5 flex-center mt-70">
            <DelayedLink
              to="/blog"
              className="btn-border-blue"
              attributes={{
                "data-cursor-style": "off",
              }}
            >
              <span>See all</span>
            </DelayedLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
