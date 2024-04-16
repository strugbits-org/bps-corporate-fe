import React, { useEffect } from "react";
import getFullImageURL from "../../common/common_functions/imageURL";
import { fetchOurDreamSection } from "../../redux/reducers/aboutusData";
import { useDispatch, useSelector } from "react-redux";
import { DefaultButton } from "../commonComponents/DefaultButton";

const OurDream = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.aboutus.OurDreamData);
  const { sectionDetails } = useSelector((state) => state.aboutus);

  // const loading = useSelector((state) => state.aboutus.OurDreamLoading);
  // const error = useSelector((state) => state.aboutus.error);

  useEffect(() => {
    dispatch(fetchOurDreamSection());
  }, [dispatch]);

  return (
    <section className="about-dream-team pt-lg-195">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <h2 className="fs--80 text-center split-words" data-aos="d:loop">
              {sectionDetails.dreamTeamTitle}
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
          <DefaultButton
            customClasses={"btn-border-blue"}
            showArrow={false}
            data={{
              label: sectionDetails.dreamTeamButtonText,
              action: sectionDetails.dreamTeamButtonAction
            }}
            attributes={{
              "data-aos":
                  "fadeInUp .8s ease-out-cubic 0s, d:loop, trigger:.btn-trigger",
                "data-cursor-style": "off",
            }}
          ></DefaultButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDream;
