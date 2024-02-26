import React, { useEffect, useState } from "react";
import SocialSection from "../components/commonComponents/SocialSection";
import { head, postes } from "../common/constats/blogData";
import DelayedLink from "../common/DelayedLink";
import { Link } from "react-router-dom";

const Blog = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(postes);

  const menuitems = [...new Set(postes.map((data) => data.category))];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      setSelectedFilters(
        selectedFilters.filter((el) => el !== selectedCategory)
      );
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    const filterItems = () => {
      if (selectedFilters.length > 0) {
        let tempItems = postes.filter((item) =>
          selectedFilters.includes(item.category)
        );
        setFilteredItems(tempItems);
      } else {
        setFilteredItems(postes);
      }
    };
    filterItems();
  }, [selectedFilters,]);

  useEffect(() => {
    document.querySelector(".updateWatchedTrigger").click();
  }, [filteredItems]);


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
                {head.title}
              </h1>
              <div
                className="blog-tags dropdown-tags"
                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
              >
                <button
                  className="btn-tag-mobile no-desktop"
                  data-set-tag="blog"
                >
                  <span>{head.name}</span>
                  <i className="icon-arrow-down"></i>
                </button>

                <div className="list-dropdown" data-set-tag="blog">
                  <div className="container-wrapper-list">
                    <div className="wrapper-list">
                      <ul className="list-blog-tags list-dropdown-tags">
                        <li>
                          <Link
                            className={`blog-btn-tag ${
                              selectedFilters.length === 0 ? "active" : ""
                            }`}
                          >
                            <span onClick={() => setFilteredItems(postes)}>
                              All Studios
                            </span>
                          </Link>
                        </li>

                        {menuitems.map((category, idx) => (
                          <li>
                            <Link
                              onClick={() => handleFilterButtonClick(category)}
                              className={`blog-btn-tag ${
                                selectedFilters?.includes(category)
                                  ? "active"
                                  : ""
                              }`}
                              key={`filters-${idx}`}
                            >
                              <span>{category}</span>
                            </Link>
                          </li>
                        ))}
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
                {filteredItems.map((data) => (
                  <li
                    key={`postes-${data.id}`}
                    className="grid-item"
                    data-aos="d:loop"
                  >
                    <DelayedLink
                      to={`/blog-post/${data.id}`}
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
                    </DelayedLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-2 offset-lg-5 flex-center mt-lg-70 mt-tablet-60 mt-phone-85">
              <DelayedLink
                to="/blog-post"
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
      <SocialSection />
    </>
  );
};

export default Blog;
