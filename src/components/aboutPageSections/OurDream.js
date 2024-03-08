import DelayedLink from "../../common/DelayedLink";
import React, { useEffect } from "react";
import getFullImageURL from "../../common/common_functions/imageURL";
import { fetchOurDreamSection } from "../../redux/reducers/aboutusData";
import { useDispatch, useSelector } from "react-redux";

const OurDream = ({handleCollectionLoaded}) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.aboutus.OurDreamData);
  // const loading = useSelector((state) => state.aboutus.OurDreamLoading);
  // const error = useSelector((state) => state.aboutus.error);

  const firstItem = data[0];
  const title = firstItem ? firstItem.data.title : "";
  const buttontext = firstItem ? firstItem.data.buttontext : "";

  useEffect(() => {
    dispatch(fetchOurDreamSection());
    //trigger animation on data load
    setTimeout(() => {
      document.querySelector(".updateWatchedTrigger").click();
      document.querySelector(".triggerSplitWordAnimation").click();
    }, 1000);
  }, [dispatch]);

  useEffect(() => {
    if (data.length > 0 && handleCollectionLoaded) {
      handleCollectionLoaded();
    }
  }, [data]);

  return (
    <section className="about-dream-team pt-lg-195">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <h2 className="fs--80 text-center split-words" data-aos="d:loop">
              {title}
            </h2>
          </div>
          <div className="col-lg-12 mt-lg-70 mt-mobile-40">
            <ul className="list-dream-team grid-lg-25 grid-tablet-50">
              <div className="line-wrapper" data-aos="d:loop">
                {data.map((data, index) => {
                  return (
                    <li key={index} className="grid-item">
                      <div className="wrapper-profile">
                        <div className="container-img">
                          <img
                            src={getFullImageURL(data.data.image)}
                            data-preload
                            className="media"
                            alt=""
                          />
                        </div>
                        <div className="container-text">
                          <h3 className="name split-words">{data.data.name}</h3>
                          <p className="occupation split-words">
                            {data.data.designation}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </div>
            </ul>
          </div>
          <div className="col-lg-4 offset-lg-4 flex-center mt-lg-60 mt-mobile-40 btn-trigger">
            <DelayedLink
              to="/"
              className="btn-blue btn-border-blue"
              attributes={{
                "data-aos":
                  "fadeInUp .8s ease-out-cubic 0s, d:loop, trigger:.btn-trigger",
                "data-cursor-style": "off",
              }}
            >
              <span>{buttontext}</span>
            </DelayedLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDream;
