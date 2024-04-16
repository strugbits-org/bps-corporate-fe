import React, { useEffect } from "react";
import getFullImageURL from "../../common/common_functions/imageURL";
import { fetchDreamBigSection } from "../../redux/reducers/homeData";
import { useDispatch, useSelector } from "react-redux";
import { DefaultButton } from "./DefaultButton";

const DreamBigSection = () => {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.home.dreamBigData);

  useEffect(() => {
    dispatch(fetchDreamBigSection());
  }, [dispatch]);

  return (
    <section className="section-dream-big">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 offset-lg-4 column-1">
            <div className="container-img no-phone">
              <img
                src={getFullImageURL(data.desktopBackgroundImage)}
                data-preload
                className="media"
                alt=""
              />
            </div>
            <div className="container-img no-desktop no-tablet">
              <img
                src={getFullImageURL(data.mobileBackgroundImage)}
                data-preload
                className="media"
                alt=""
              />
            </div>
            <div
              data-parallax
              data-trigger=".section-dream-big"
              data-translate-y-from="30vh"
              data-end="center center"
              className="content"
            >
              <DefaultButton
                data={{
                  label: data.buttonText,
                  action: data.buttonAction
                }}
                attributes={{
                  "data-cursor-style": "off",
                }}
              ></DefaultButton>
              <p
                className="fs--20 flex-center fs-phone-16 fw-500 font-2 blue-1 text-center pos-relative z-5 mt-30 text"
                data-parallax
                data-trigger=".section-dream-big"
                data-translate-y-from="30vh"
                data-end="center center"
              >
                {data.paragraph1} <br />
                {data.paragraph2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamBigSection;
