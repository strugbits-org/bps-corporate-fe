import React from "react";
import getFullImageURL from "../../common/common_functions/imageURL";
import { useSelector } from "react-redux";

const AboutBottomSection = () => {
  const { sectionDetails } = useSelector((state) => state.aboutus);
  // const loading = useSelector((state) => state.aboutus.SliderLoading);
  // const error = useSelector((state) => state.aboutus.error);

  return (
    <>
      <section className="about-check-out">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="container-box">
                <h2 className="fs--60 lh-100 white-1 title">
                  <span className="line-1 d-block">{sectionDetails.magazineTitle1}</span>
                  <span className="line-2 d-block">{sectionDetails.magazineTitle2}</span>
                </h2>
                <div className="container-img">
                  <img
                    src={getFullImageURL(sectionDetails.magazineCoverImage)}
                    data-preload
                    className="media"
                    alt=""
                  />
                </div>

                <div className="bg-box"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutBottomSection;
