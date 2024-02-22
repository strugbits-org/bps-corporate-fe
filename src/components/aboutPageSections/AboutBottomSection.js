import DreamBigSection from "../commonComponents/DreamBigSection";
import { bottomSection } from "../../common/constats/aboutData";

const AboutBottomSection = () => {
  return (
    <>
      <section className="about-check-out">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="container-box">
                <h2 className="fs--60 lh-100 white-1 title">
                  <span className="line-1 d-block">{bottomSection.title1}</span>
                  <span className="line-2 d-block">{bottomSection.title2}</span>
                </h2>
                <div className="container-img">
                  <img
                    src={bottomSection.img}
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
