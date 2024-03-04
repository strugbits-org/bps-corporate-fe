import React from "react";
import DreamBigSection from "../commonComponents/DreamBigSection";
import getFullImageURL from "../../common/common_functions/imageURL";

const AboutBottomSection = ({dataItems}) => {
  const firstItem = dataItems[0]; 
  const trendingtitle = firstItem ? firstItem.data.trendingtitle: "";
  const trendingtitle1 = firstItem ? firstItem.data.trendingtitle1  : "";
  const trendingBackground = firstItem ? getFullImageURL(firstItem.data.trendingBackground)  : "";
  return (
    <>
      <section className="about-check-out">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="container-box">
                <h2 className="fs--60 lh-100 white-1 title">
                  <span className="line-1 d-block">{trendingtitle}</span>
                  <span className="line-2 d-block">{trendingtitle1}</span>
                </h2>
                <div className="container-img">
                  <img
                    src={trendingBackground}
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

      <DreamBigSection />
    </>
  );
};

export default AboutBottomSection;
