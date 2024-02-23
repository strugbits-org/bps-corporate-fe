import React from 'react'
import { Link } from 'react-router-dom'
import {postes} from "../../common/constats/blogData"

const RecentPosts = () => {
  return (

    <section className="blog-post-recent-posts pt-lg-245 pt-tablet-105 pt-phone-150 pb-lg-150 pb-mobile-100">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 column-1">
          <h2
            className="fs--60 text-center mb-lg-35 mb-tablet-40 mb-phone-100 split-words"
            data-aos="d:loop"
          >
            Recent posts
          </h2>
          <div className="slider-content-mobile">
            <div className="swiper-container">
              <div className="swiper-wrapper list-blog list-slider-mobile grid-lg-25">
                {postes.slice(0,4).map((data) => {
                  return <div key={data.id} className="swiper-slide grid-item">
                  <Link
                      to={`/blog`}
                      className="link-blog link-blog-animation"
                      data-aos="d:loop"
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
                            <span className="author-name">{data.userName}</span>
                          </div>
                          <div className="date">
                            <span>{data.date}</span>
                          </div>
                        </div>
                        <h2 className="title-blog">{data.heading}</h2>
                        <p className="text-blog">{data.p}</p>
                        <ul className="list-tags-small">
                          {Object.values(data.tags).map((tag, index) => (
                            <React.Fragment key={index}>
                              {index < 3 ? (
                                <li
                                  className={`tag-small ${
                                    data.category?.includes(tag) ? "active" : ""
                                  }`}
                                >
                                  <span>{tag}</span>
                                </li>
                              ) : null}
                            </React.Fragment>
                          ))}
                          {Object.values(data.tags).length > 3 ? (
                            <li className="tag-small">
                              <span>
                                +{Object.values(data.tags).length - 3} studios
                              </span>
                            </li>
                          ) : null}
                        </ul>
                      </div>
                    </Link>
                </div>
                })}
                
               
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 offset-lg-5 flex-center mt-70">
          <Link to="/" className="btn-border-blue" data-cursor-style="off">
            <span>See all</span>
          </Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default RecentPosts