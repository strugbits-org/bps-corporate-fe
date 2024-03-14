import React, { useEffect, useState } from "react";
import DelayedLink from "../../common/DelayedLink";
import formatDate from "../../common/common_functions/dateFormat";
import getFullImageURL from "../../common/common_functions/imageURL";
import ProductCartSlider from "../commonComponents/ProductCartSlider";
import SocialVerticalBar from "./SocialVerticalBar";
import ReactPlayer from "react-player";

const PostDetails = ({ data }) => {
  const [singleData, setSingleData] = useState([]);
console.log(data,"wholeee dataaaaa")
  const title = data?.blogRef?.title;
  const date = formatDate(data?.blogRef?.lastPublishedDate?.$date);
  const profileImage = getFullImageURL(data?.author?.profilePhoto);
  const authorName = data?.author?.nickname;

  useEffect(() => {
    const singlePost = async () => {
      let blogData = [];
      if (data?.blogRef?.coverImage) {
        const image = getFullImageURL(data?.blogRef?.coverImage);
        blogData.push({
          type: "cover",
          image: image,
          sq: 0,
        });
      }

      // setting content
      data?.blogRef?.richContent?.nodes?.forEach((item, index) => {
        if (item.type === "PARAGRAPH") {
          // handling paragraphs
          if (item.nodes.length > 0) {
            let finalText = "";
            item.nodes.forEach((node) => {
              if (node.type === "TEXT") {
                if (
                  node.textData.decorations.findIndex(
                    (item) => item === "LINK"
                  ) !== -1
                ) {
                  let link = node.textData.decorations.find(
                    (item) => item.type === "LINK"
                  ).linkData.link.url;
                  finalText += ` <a href="${link}">${node.textData.text}</a>`;
                } else {
                  finalText += node.textData.text;
                }
              }
            });
            blogData.push({
              type: "paragraph",
              text: finalText,
              sq: index + 1,
            });
          } else {
            blogData.push({
              type: "line-break",
              sq: index + 1,
            });
          }
        } else if (item.type === "HEADING") {
          // handling headings
          if (item.nodes.length > 0) {
            let finalText = "";
            let level = item.headingData.level;
            item.nodes.forEach((node) => {
              if (node.type === "TEXT") {
                finalText += node.textData.text;
              }
            });
            blogData.push({
              type: "heading",
              text: finalText,
              level: level,
              sq: index + 1,
            });
          } else {
            blogData.push({
              type: "line-break",
              sq: index + 1,
            });
          }
        } else if (item.type === "line-break") {
          return <br key={index} />;
        } else if (item.type === "VIDEO") {
          // handling videos
          blogData.push({
            type: "video",
            video:
              item.videoData.video.src.url ||
              `https://video.wixstatic.com/${item.videoData.video.src._id}`,
            thumbnail:
              item.videoData.thumbnail.src.url ||
              `https://static.wixstatic.com/${item.videoData.thumbnail.src._id}`,
            sq: index + 1,
          });
        } else if (item.type === "line-break") {
          return <br key={index} />;
        } else if (item.type === "BULLETED_LIST") {
          // handling bulleted list
          if (item.nodes.length > 0) {
            let items = [];
            item.nodes.forEach((node) => {
              if (node.type === "LIST_ITEM" && node.nodes.length > 0) {
                node.nodes.forEach((nestedNode) => {
                  if (nestedNode.type === "PARAGRAPH") {
                    if (nestedNode.nodes.length > 0) {
                      let finalText = "";
                      nestedNode.nodes.forEach((n) => {
                        if (n.type === "TEXT") {
                          finalText += n.textData.text;
                        }
                      });
                      items.push(finalText);
                    } else {
                      items.push("");
                    }
                  }
                });
              }
            });
            blogData.push({
              type: "bulleted-list",
              items: items,
              sq: index + 1,
            });
          }
        }
      });
      setSingleData(blogData);
    };

    singlePost();
  }, [data]);
  console.log(singleData, "data after modifing");

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
                      src={profileImage}
                      data-preload
                      className="media"
                      alt=""
                    />
                  </div>
                  <h2 className="author-name">{authorName}</h2>
                </div>
                <div className="date">
                  <span>{date}</span>
                </div>
              </div>
              <h1
                className="fs--40 fs-mobile-35 lh-140 blog-post-title split-words"
                data-aos="d:loop"
              >
                {title}
              </h1>
            </div>
          </div>
        </div>
        <div className="row row-2 mt-lg-15 mt-tablet-25 mt-phone-45">
          <div className="col-lg-10 offset-lg-1 column-1">
            <div className="blog-post-content pb-lg-180 pb-tablet-60 pb-phone-40">
              {singleData.length > 0 && singleData[0].type === "cover" && (
                <div className="blog-post-thumb" data-aos="d:loop">
                  <div className="container-img">
                    <img
                      src={singleData[0].image}
                      data-preload
                      className="media"
                      alt="cover"
                      data-parallax-top
                      data-translate-y="20%"
                    />
                  </div>
                </div>
              )}

              <div className="blog-post-text mt-lg-60 mt-tablet-40 mt-phone-85">
                <div
                  className="editor"
                  data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                >
                  {singleData.map((item, index) => {
                    if (item.type === "paragraph") {
                      return <p key={index}>{item.text}</p>;
                    } else if (item.type === "heading") {
                      return <h2>{item.text}</h2>;
                    } else if (item.type === "video") {
                      return (
                        <div
                          key={index}
                          style={{
                            padding: "50px",
                          }}
                        >
                          <ReactPlayer
                            url={item.video}
                            width="100%"
                            height="500px"
                            controls
                            light={item.thumbnail}
                            playing
                          />
                        </div>
                      );
                    }
                  })}

                  {/* <img src={coverImage} alt="" /> */}

                  {/* <div className="slider-blog-post">
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
                  </div>  */}
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
              <ProductCartSlider data={data} />
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
