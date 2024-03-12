import React, { useEffect, useState } from "react";
import SocialSection from "../components/commonComponents/SocialSection";
import { head } from "../common/constats/blogData";
import DelayedLink from "../common/DelayedLink";
import { Link } from "react-router-dom";
import { getblogPostData } from "../redux/reducers/blogData";
import { useDispatch, useSelector } from "react-redux";
import getFullImageURL from "../common/common_functions/imageURL";
import formatDate from "../common/common_functions/dateFormat";

const Blog = () => {
  const dispatch = useDispatch();

  const blogPostData = useSelector((state) => state.blog.blogPostData).data;
  const Categories = useSelector((state) => state.blog.blogPostData.Categories);

  // const blogPostLoading = useSelector((state) => state.blog.blogPostLoading);

  const [selectedCategory, setSelectedCategory] = useState([]);
  const [filteredBlogCollection, setFilteredBlogCollection] =
    useState(blogPostData);

  useEffect(() => {
    dispatch(getblogPostData());
  }, [dispatch]);

  useEffect(() => {
    setFilteredBlogCollection(blogPostData);
  }, [blogPostData]);

  const handleFilter = (category) => {
    if (selectedCategory.includes(category)) {
      setSelectedCategory(selectedCategory.filter((el) => el !== category));
    } else {
      setSelectedCategory([...selectedCategory, category]);
    }
  };

  useEffect(() => {
    if (!blogPostData || !selectedCategory) return; // Add this guard clause

    const filteredProjects = blogPostData.filter((item) => {

        return selectedCategory.length === 0 || (item.categories.length !== 0 && selectedCategory.some(r => item.categories.includes(r)));
    });
    setFilteredBlogCollection(filteredProjects);

    setTimeout(() => {
        document.querySelector(".updateWatchedTrigger").click();
    }, 400);
}, [blogPostData, selectedCategory]);

const capitalizeText = (text)=> text.toLowerCase().replace(/\b(\w)/g, x => x.toUpperCase());

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
                              selectedCategory.length === 0 ? "active" : ""
                            }`}
                          >
                            <span
                              onClick={() => {
                                setFilteredBlogCollection(blogPostData);
                                setSelectedCategory([]);
                              }}
                            >
                              All Studios
                            </span>
                          </Link>
                        </li>

                        {Categories?.map((category, idx) => (
                          <li key={idx}>
                            <Link
                              onClick={() => handleFilter(category)}
                              className={`blog-btn-tag ${
                                selectedCategory &&
                                selectedCategory.includes(category)
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
                {filteredBlogCollection?.map((data, index) => {
                  return (
                    <li key={index} className="grid-item" data-aos="d:loop">
                      <DelayedLink
                        // to={`/blog-post/${data.id}`}
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
                              src={getFullImageURL(data.coverImage)}
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
                                {data.author.nickname}
                              </span>
                            </div>
                            <div className="date">
                              <span>{formatDate(data.lastPublishedDate.$date)}</span>
                            </div>
                          </div>
                          <h2 className="title-blog">{data.title}</h2>
                          <p className="text-blog">{data.excerpt}</p>
                          <ul className="list-tags-small">
                           
                            {data.tags.map((tag, index) => (
                                  <React.Fragment key={index}>
                                    {index < 3 ? (
                                      <li
                                        className={`tag-small capitalizeText ${
                                          data.categories?.includes(tag.label)
                                            ? "active"
                                            : ""
                                        }`}
                                      >
                                        <span>{capitalizeText(tag.label)}</span>
                                      </li>
                                    ) : null}
                                  </React.Fragment>
                                ))}
                                {data?.tags.length > 3 ? (
                                  <li className="tag-small">
                                    <span>
                                      +{data.tags.length - 3}{" "}
                                      studios
                                    </span>
                                  </li>
                                ) : null}
                          </ul>
                        </div>
                      </DelayedLink>
                    </li>
                  );
                })}
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
