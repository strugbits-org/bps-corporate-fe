import React, { useEffect } from "react";
import getFullImageURL from "../../common/common_functions/imageURL";
import { useDispatch, useSelector } from "react-redux";
import { fetchOurFamilySection } from "../../redux/reducers/aboutusData";
import { DefaultButton } from "../commonComponents/DefaultButton";

const OurFamily = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.aboutus.OurFamilyData);
  const { sectionDetails } = useSelector((state) => state.aboutus);

  useEffect(() => {
    dispatch(fetchOurFamilySection());
  }, [dispatch]);

  return (
    <section className="about-meet-the-rest-of-the-family pt-lg-245 pt-mobile-205">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-phone-8 offset-lg-3 mx-phone-auto">
            <h2
              className="fs--80 blue-1 text-center split-words"
              data-aos="d:loop"
            >
              {sectionDetails.restOfTheFamilyTitle}
            </h2>
          </div>
          <div className="col-lg-12 mt-lg-80 mt-mobile-40">
            <ul className="list-family">
              {data.map((data, index) => {
                return (
                  <li key={index} className="list-item item-01">
                    <div className="content">
                      <div className="container-img logo-img">
                        <img
                          src={getFullImageURL(data.data.logo)}
                          data-preload
                          className="media"
                          data-aos="scaleOut
                                .8s ease-out-cubic .2s, d:loop"
                          alt=""
                        />
                      </div>
                      <div
                        className="container-img bg-img"
                        data-aos="scaleOut .8s ease-out-cubic 0s, d:loop"
                      >
                        <img
                          src={getFullImageURL(data.data.image)}
                          data-preload
                          className="media"
                          data-parallax
                          data-scale-from="1.2"
                          alt=""
                        />
                      </div>
                      <div className="container-text">
                        <p>{data.data.paragraph1}</p>
                        <p>{data.data.paragraph2}</p>
                        <p>{data.data.paragraph3}</p>
                      </div>
                      <div className="container-btn">
                        <DefaultButton
                          customClasses={"btn-border-white"}
                          data={{
                            label: data.data.buttonText,
                            action: data.data.buttonAction
                          }}
                          attributes={{
                            "data-cursor-style": "off",
                          }}
                        ></DefaultButton>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurFamily;
