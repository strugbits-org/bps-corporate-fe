import React from "react";
import SocialSection from "../components/commonComponents/SocialSection";
import { Link } from "react-router-dom";


const Blog = () => {
  return (
    <>
    <section className="blog-intro pt-lg-145 pt-tablet-115 pt-phone-120 pb-lg-150 pb-tablet-100 pb-phone-155">
      <div className="container-fluid">
        <div className="row row-1">
          <div className="col-12 column-1">
            <h1
              className="fs--60 text-center mb-lg-45 mb-mobile-40 split-words"
              data-aos="d:loop"
            >
              Read our blog posts
            </h1>
            <div
              className="blog-tags dropdown-tags"
              data-aos="fadeIn .8s ease-in-out .2s, d:loop"
            >
              <button className="btn-tag-mobile no-desktop" data-set-tag="blog">
                <span>All Categories</span>
                <i className="icon-arrow-down"></i>
              </button>
              <div className="list-dropdown" data-set-tag="blog">
                <div className="container-wrapper-list">
                  <div className="wrapper-list">
                    <ul className="list-blog-tags list-dropdown-tags">
                      <li>
                        <Link to="/blog" className="blog-btn-tag active">
                          <span>All Studios</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog" className="blog-btn-tag">
                          <span>Event Design and Production</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog" className="blog-btn-tag">
                          <span>Creative Services Agency</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog" className="blog-btn-tag">
                          <span>Floral Design</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog" className="blog-btn-tag">
                          <span>Custom Fabrication</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog" className="blog-btn-tag">
                          <span>Printing Services</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-2 mt-lg-60 mt-tablet-40 mt-phone-35">
          <div className="col-lg-12 column-1">
            <ul className="list-blog grid-lg-25 grid-tablet-50">
              <li className="grid-item" data-aos="d:loop">
                <Link
                  to="/blog-post"
                  className="link-blog link-blog-animation"
                  data-aos="d:loop"
                >
                  <div
                    className="container-img bg-blue"
                    data-cursor-style="view"
                  >
                    <div className="wrapper-img">
                      <img
                        src="images/lib/08_desktop.jpg"
                        data-preload
                        className="media"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="container-text">
                    <div className="container-author-post-info">
                      <div className="author">
                        <span className="author-name">Lily Yeung</span>
                      </div>
                      <div className="date">
                        <span>Sep 30</span>
                      </div>
                    </div>
                    <h2 className="title-blog">
                      A Taste Explosion: Event Design Extravaganza at Boa
                      Restaurant
                    </h2>
                    <p className="text-blog">
                      Beverly Hills, renowned for its luxury and panache,
                      witnessed an unforgettable evening that melded culinary
                      wonders with unmatched event Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                    </p>
                    <ul className="list-tags-small">
                      <li className="tag-small active">
                        <span>Corporate</span>
                      </li>
                      <li className="tag-small">
                        <span>Event Design and Production</span>
                      </li>
                      <li className="tag-small">
                        <span>Creative Services Agency</span>
                      </li>
                      <li className="tag-small">
                        <span>+ 3 studios</span>
                      </li>
                    </ul>
                  </div>
                </Link>
              </li>
              <li className="grid-item" data-aos="d:loop">
                <Link
                  to="/blog-post"
                  className="link-blog link-blog-animation"
                  data-aos="d:loop"
                >
                  <div
                    className="container-img bg-blue"
                    data-cursor-style="view"
                  >
                    <div className="wrapper-img">
                      <img
                        src="images/lib/08_desktop.jpg"
                        data-preload
                        className="media"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="container-text">
                    <div className="container-author-post-info">
                      <div className="author">
                        <span className="author-name">Lily Yeung</span>
                      </div>
                      <div className="date">
                        <span>Sep 30</span>
                      </div>
                    </div>
                    <h2 className="title-blog">
                      A Taste Explosion: Event Design Extravaganza at Boa
                      Restaurant
                    </h2>
                    <p className="text-blog">
                      Beverly Hills, renowned for its luxury and panache,
                      witnessed an unforgettable evening that melded culinary
                      wonders with unmatched event Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                    </p>
                    <ul className="list-tags-small">
                      <li className="tag-small active">
                        <span>Corporate</span>
                      </li>
                      <li className="tag-small">
                        <span>Event Design and Production</span>
                      </li>
                      <li className="tag-small">
                        <span>Creative Services Agency</span>
                      </li>
                      <li className="tag-small">
                        <span>+ 3 studios</span>
                      </li>
                    </ul>
                  </div>
                </Link>
              </li>
              <li className="grid-item" data-aos="d:loop">
                <Link
                  to="/blog-post"
                  className="link-blog link-blog-animation"
                  data-aos="d:loop"
                >
                  <div
                    className="container-img bg-blue"
                    data-cursor-style="view"
                  >
                    <div className="wrapper-img">
                      <img
                        src="images/lib/08_desktop.jpg"
                        data-preload
                        className="media"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="container-text">
                    <div className="container-author-post-info">
                      <div className="author">
                        <span className="author-name">Lily Yeung</span>
                      </div>
                      <div className="date">
                        <span>Sep 30</span>
                      </div>
                    </div>
                    <h2 className="title-blog">
                      A Taste Explosion: Event Design Extravaganza at Boa
                      Restaurant
                    </h2>
                    <p className="text-blog">
                      Beverly Hills, renowned for its luxury and panache,
                      witnessed an unforgettable evening that melded culinary
                      wonders with unmatched event Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                    </p>
                    <ul className="list-tags-small">
                      <li className="tag-small active">
                        <span>Corporate</span>
                      </li>
                      <li className="tag-small">
                        <span>Event Design and Production</span>
                      </li>
                      <li className="tag-small">
                        <span>Creative Services Agency</span>
                      </li>
                      <li className="tag-small">
                        <span>+ 3 studios</span>
                      </li>
                    </ul>
                  </div>
                </Link>
              </li>
              <li className="grid-item" data-aos="d:loop">
                <Link
                  to="/blog-post"
                  className="link-blog link-blog-animation"
                  data-aos="d:loop"
                >
                  <div
                    className="container-img bg-blue"
                    data-cursor-style="view"
                  >
                    <div className="wrapper-img">
                      <img
                        src="images/lib/08_desktop.jpg"
                        data-preload
                        className="media"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="container-text">
                    <div className="container-author-post-info">
                      <div className="author">
                        <span className="author-name">Lily Yeung</span>
                      </div>
                      <div className="date">
                        <span>Sep 30</span>
                      </div>
                    </div>
                    <h2 className="title-blog">
                      A Taste Explosion: Event Design Extravaganza at Boa
                      Restaurant
                    </h2>
                    <p className="text-blog">
                      Beverly Hills, renowned for its luxury and panache,
                      witnessed an unforgettable evening that melded culinary
                      wonders with unmatched event Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                    </p>
                    <ul className="list-tags-small">
                      <li className="tag-small active">
                        <span>Corporate</span>
                      </li>
                      <li className="tag-small">
                        <span>Event Design and Production</span>
                      </li>
                      <li className="tag-small">
                        <span>Creative Services Agency</span>
                      </li>
                      <li className="tag-small">
                        <span>+ 3 studios</span>
                      </li>
                    </ul>
                  </div>
                </Link>
              </li>
              <li className="grid-item" data-aos="d:loop">
                <Link
                  to="/blog-post"
                  className="link-blog link-blog-animation"
                  data-aos="d:loop"
                >
                  <div
                    className="container-img bg-blue"
                    data-cursor-style="view"
                  >
                    <div className="wrapper-img">
                      <img
                        src="images/lib/08_desktop.jpg"
                        data-preload
                        className="media"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="container-text">
                    <div className="container-author-post-info">
                      <div className="author">
                        <span className="author-name">Lily Yeung</span>
                      </div>
                      <div className="date">
                        <span>Sep 30</span>
                      </div>
                    </div>
                    <h2 className="title-blog">
                      A Taste Explosion: Event Design Extravaganza at Boa
                      Restaurant
                    </h2>
                    <p className="text-blog">
                      Beverly Hills, renowned for its luxury and panache,
                      witnessed an unforgettable evening that melded culinary
                      wonders with unmatched event Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                    </p>
                    <ul className="list-tags-small">
                      <li className="tag-small active">
                        <span>Corporate</span>
                      </li>
                      <li className="tag-small">
                        <span>Event Design and Production</span>
                      </li>
                      <li className="tag-small">
                        <span>Creative Services Agency</span>
                      </li>
                      <li className="tag-small">
                        <span>+ 3 studios</span>
                      </li>
                    </ul>
                  </div>
                </Link>
              </li>
              <li className="grid-item" data-aos="d:loop">
                <Link
                  to="/blog-post"
                  className="link-blog link-blog-animation"
                  data-aos="d:loop"
                >
                  <div
                    className="container-img bg-blue"
                    data-cursor-style="view"
                  >
                    <div className="wrapper-img">
                      <img
                        src="images/lib/08_desktop.jpg"
                        data-preload
                        className="media"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="container-text">
                    <div className="container-author-post-info">
                      <div className="author">
                        <span className="author-name">Lily Yeung</span>
                      </div>
                      <div className="date">
                        <span>Sep 30</span>
                      </div>
                    </div>
                    <h2 className="title-blog">
                      A Taste Explosion: Event Design Extravaganza at Boa
                      Restaurant
                    </h2>
                    <p className="text-blog">
                      Beverly Hills, renowned for its luxury and panache,
                      witnessed an unforgettable evening that melded culinary
                      wonders with unmatched event Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                    </p>
                    <ul className="list-tags-small">
                      <li className="tag-small active">
                        <span>Corporate</span>
                      </li>
                      <li className="tag-small">
                        <span>Event Design and Production</span>
                      </li>
                      <li className="tag-small">
                        <span>Creative Services Agency</span>
                      </li>
                      <li className="tag-small">
                        <span>+ 3 studios</span>
                      </li>
                    </ul>
                  </div>
                </Link>
              </li>
              <li className="grid-item" data-aos="d:loop">
                <Link
                  to="/blog-post"
                  className="link-blog link-blog-animation"
                  data-aos="d:loop"
                >
                  <div
                    className="container-img bg-blue"
                    data-cursor-style="view"
                  >
                    <div className="wrapper-img">
                      <img
                        src="images/lib/08_desktop.jpg"
                        data-preload
                        className="media"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="container-text">
                    <div className="container-author-post-info">
                      <div className="author">
                        <span className="author-name">Lily Yeung</span>
                      </div>
                      <div className="date">
                        <span>Sep 30</span>
                      </div>
                    </div>
                    <h2 className="title-blog">
                      A Taste Explosion: Event Design Extravaganza at Boa
                      Restaurant
                    </h2>
                    <p className="text-blog">
                      Beverly Hills, renowned for its luxury and panache,
                      witnessed an unforgettable evening that melded culinary
                      wonders with unmatched event Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                    </p>
                    <ul className="list-tags-small">
                      <li className="tag-small active">
                        <span>Corporate</span>
                      </li>
                      <li className="tag-small">
                        <span>Event Design and Production</span>
                      </li>
                      <li className="tag-small">
                        <span>Creative Services Agency</span>
                      </li>
                      <li className="tag-small">
                        <span>+ 3 studios</span>
                      </li>
                    </ul>
                  </div>
                </Link>
              </li>
              <li className="grid-item" data-aos="d:loop">
                <Link
                  to="/blog-post"
                  className="link-blog link-blog-animation"
                  data-aos="d:loop"
                >
                  <div
                    className="container-img bg-blue"
                    data-cursor-style="view"
                  >
                    <div className="wrapper-img">
                      <img
                        src="images/lib/08_desktop.jpg"
                        data-preload
                        className="media"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="container-text">
                    <div className="container-author-post-info">
                      <div className="author">
                        <span className="author-name">Lily Yeung</span>
                      </div>
                      <div className="date">
                        <span>Sep 30</span>
                      </div>
                    </div>
                    <h2 className="title-blog">
                      A Taste Explosion: Event Design Extravaganza at Boa
                      Restaurant
                    </h2>
                    <p className="text-blog">
                      Beverly Hills, renowned for its luxury and panache,
                      witnessed an unforgettable evening that melded culinary
                      wonders with unmatched event Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                    </p>
                    <ul className="list-tags-small">
                      <li className="tag-small active">
                        <span>Corporate</span>
                      </li>
                      <li className="tag-small">
                        <span>Event Design and Production</span>
                      </li>
                      <li className="tag-small">
                        <span>Creative Services Agency</span>
                      </li>
                      <li className="tag-small">
                        <span>+ 3 studios</span>
                      </li>
                    </ul>
                  </div>
                </Link>
              </li>
              <li className="grid-item" data-aos="d:loop">
                <Link
                  to="/blog-post"
                  className="link-blog link-blog-animation"
                  data-aos="d:loop"
                >
                  <div
                    className="container-img bg-blue"
                    data-cursor-style="view"
                  >
                    <div className="wrapper-img">
                      <img
                        src="images/lib/08_desktop.jpg"
                        data-preload
                        className="media"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="container-text">
                    <div className="container-author-post-info">
                      <div className="author">
                        <span className="author-name">Lily Yeung</span>
                      </div>
                      <div className="date">
                        <span>Sep 30</span>
                      </div>
                    </div>
                    <h2 className="title-blog">
                      A Taste Explosion: Event Design Extravaganza at Boa
                      Restaurant
                    </h2>
                    <p className="text-blog">
                      Beverly Hills, renowned for its luxury and panache,
                      witnessed an unforgettable evening that melded culinary
                      wonders with unmatched event Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                    </p>
                    <ul className="list-tags-small">
                      <li className="tag-small active">
                        <span>Corporate</span>
                      </li>
                      <li className="tag-small">
                        <span>Event Design and Production</span>
                      </li>
                      <li className="tag-small">
                        <span>Creative Services Agency</span>
                      </li>
                      <li className="tag-small">
                        <span>+ 3 studios</span>
                      </li>
                    </ul>
                  </div>
                </Link>
              </li>
              <li className="grid-item" data-aos="d:loop">
                <Link
                  to="/blog-post"
                  className="link-blog link-blog-animation"
                  data-aos="d:loop"
                >
                  <div
                    className="container-img bg-blue"
                    data-cursor-style="view"
                  >
                    <div className="wrapper-img">
                      <img
                        src="images/lib/08_desktop.jpg"
                        data-preload
                        className="media"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="container-text">
                    <div className="container-author-post-info">
                      <div className="author">
                        <span className="author-name">Lily Yeung</span>
                      </div>
                      <div className="date">
                        <span>Sep 30</span>
                      </div>
                    </div>
                    <h2 className="title-blog">
                      A Taste Explosion: Event Design Extravaganza at Boa
                      Restaurant
                    </h2>
                    <p className="text-blog">
                      Beverly Hills, renowned for its luxury and panache,
                      witnessed an unforgettable evening that melded culinary
                      wonders with unmatched event Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                    </p>
                    <ul className="list-tags-small">
                      <li className="tag-small active">
                        <span>Corporate</span>
                      </li>
                      <li className="tag-small">
                        <span>Event Design and Production</span>
                      </li>
                      <li className="tag-small">
                        <span>Creative Services Agency</span>
                      </li>
                      <li className="tag-small">
                        <span>+ 3 studios</span>
                      </li>
                    </ul>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 offset-lg-5 flex-center mt-lg-70 mt-tablet-60 mt-phone-85">
            <a href="/" className="btn-border-blue" data-cursor-style="off">
              <span>See all</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    <SocialSection/>
    </>
    
  );
};

export default Blog;
