import DelayedLink from "../../common/DelayedLink";
import React, { useEffect, useState } from "react";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { collections, items } from "@wix/data";
import getFullImageURL from "../../common/common_functions/imageURL";

const IntroSection = () => {
  const [dataItems, setDataItems] = useState([]);

  const firstItem = dataItems[0];
  const title1 = firstItem ? firstItem.data.title1 : "";
  const title2 = firstItem ? firstItem.data.title2 : "";
  const buttonText = firstItem ? firstItem.data.buttontext : "";
  const image = firstItem ? firstItem.data.image : "";
  const subtitle = firstItem ? firstItem.data.subtitle : "";
  const paragraph1 = firstItem ? firstItem.data.paragraph1 : "";
  const paragraph2 = firstItem ? firstItem.data.paragraph2 : "";

  useEffect(() => {
    async function fetchDataItems() {
      const wixClient = createClient({
        modules: { collections, items },
        auth: OAuthStrategy({
          clientId: "04038da0-732b-471d-babe-4e90ad785740",
        }),
      });

      let options = {
        dataCollectionId: "AboutUsTopSection",
      };

      const { items: fetchedItems } = await wixClient.items
        .queryDataItems(options)
        .eq("title", "aboutustop")
        .find();

      setDataItems(fetchedItems);
    }

    fetchDataItems();
  }, []);

  const properties = [
    {
      translateY: "-2.5rem",
      rotateTo: "-10deg",
      translateYfrom: "30vh",
      dataEnd: "center center",
      dataTrigger: "parent",
    },
    {
      translateY: "5rem",
    },

    {
      translateY: "-15rem",
      rotateFrom: "30deg",
      translateYfrom: "20vh",
      dataEnd: "center center",
      dataTrigger: "parent",
    },
    {
      translateY: "10rem",
      translateX: "-5rem",
      rotateTo: "10deg",
      rotateFrom: "30deg",
      dataEnd: "center center",
    },
  ];

  return (
    <>
      <section className="about-intro">
        <div data-sticky data-trigger="parent" className="z-3">
          <div
            className="container-img"
            data-parallax-top
            data-scale-from="1"
            data-end="bottom bottom"
            data-trigger=".about-intro"
            data-scale="0.4402"
            data-translate-y="5vh"
          >
            <img
              src={getFullImageURL(image)}
              data-preload
              className="media"
              data-parallax-top
              data-scale-from="1.3"
              data-end="95% bottom"
              data-trigger=".about-intro"
              alt=""
            />
          </div>
        </div>

        <div className="wrapper-content z-2 content-1">
          <h2
            className="title-we-are"
            data-parallax
            data-trigger=".about-intro"
            data-start="60% center"
            data-translate-y="20vh"
          >
            {title1}
          </h2>
        </div>
        <div className="wrapper-content z-4 content-2">
          <h2
            className="title-blue-print"
            data-parallax
            data-trigger=".about-intro"
            data-start="60% center"
            data-translate-y="20vh"
          >
            {title2}
          </h2>
        </div>

        <div className="wrapper-content z-4 content-3">
          <DelayedLink
            to="/"
            className="btn-border-blue"
            attributes={{
              "data-cursor-style": "off",
              "data-parallax": "",
              "data-trigger": ".about-intro",
              "data-translate-y-from": "20vh",
              "data-translate-y": "5vh",
              "data-end": "95% center",
              "data-start": "60% center",
            }}
          >
            <span>{buttonText}</span>
            <i className="icon-arrow-right-2"></i>
          </DelayedLink>
        </div>
      </section>
      <section className="about-events pt-30">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <div className="wrapper-text text-center">
                <h3
                  className="fs--25"
                  data-parallax
                  data-translate-y-from="20vh"
                  data-end="center center"
                  data-trigger="parent"
                >
                  {subtitle}
                </h3>
                <div
                  className="container-text font-2 fs--16 lh-1375 mt-15"
                  data-parallax
                  data-translate-y-from="30vh"
                  data-end="center center"
                  data-trigger="parent"
                >
                  <p>{paragraph1}</p>
                  <p className="mt-20">{paragraph2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-our-boards">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <ul className="list-boards">
                {dataItems.map((data, index) => {
                  const {
                    translateY,
                    rotateTo,
                    translateYfrom,
                    dataEnd,
                    dataTrigger,
                    translateX,
                    rotateFrom,
                  } = properties[index] || {};
                
                  return (
                    <li
                      key={index}
                      data-parallax
                      data-translate-y={translateY || ""}
                      data-rotate-to={rotateTo || ""}
                      data-translate-y-from={translateYfrom || ""}
                      data-end={dataEnd || ""}
                      data-trigger={dataTrigger || ""}
                      data-translate-x={translateX || ""}
                      data-rotate-from={rotateFrom || ""}
                    >
                      <div className="content">
                        <h2 className="title">{data.data.cardtitle}</h2>
                        <p className="text">{data.data.cardDescription}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroSection;
