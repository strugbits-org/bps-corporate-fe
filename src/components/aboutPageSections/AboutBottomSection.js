import React from "react";
import DreamBigSection from "../commonComponents/DreamBigSection";
import image from "../../utilis/images/about/magazine.jpg"
const AboutBottomSection = () => {
  return (
    <>
      <section className="about-check-out">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="container-box">
                <h2 className="fs--60 lh-100 white-1 title">
                  <span className="line-1 d-block">Check out our latest</span>
                  <span className="line-2 d-block">Trends magazine</span>
                </h2>
                <div className="container-img">
                  <img
                    src={image}
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
