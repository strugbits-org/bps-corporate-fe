import { DreamData } from "../../common/constats/aboutData";
import { Link } from "react-router-dom";

const OurDream = () => {
  return (
    <section className="about-dream-team pt-lg-195">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <h2 className="fs--80 text-center split-words" data-aos="d:loop">
              The Dream Team
            </h2>
          </div>
          <div className="col-lg-12 mt-lg-70 mt-mobile-40">
            <ul className="list-dream-team grid-lg-25 grid-tablet-50">
              <div className="line-wrapper" data-aos="d:loop">
                {DreamData.map((data, index) => {
                  return (
                    <li key={index} className="grid-item">
                      <div className="wrapper-profile">
                        <div className="container-img">
                          <img
                            src={data.img}
                            data-preload
                            className="media"
                            alt=""
                          />
                        </div>
                        <div className="container-text">
                          <h3 className="name split-words">{data.heading}</h3>
                          <p className="occupation split-words">
                            {data.pragh}
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
            <Link
              to="/"
              className="btn-blue btn-border-blue"
              data-aos="fadeInUp .8s ease-out-cubic 0s, d:loop, trigger:.btn-trigger"
              data-cursor-style="off"
            >
              <span>Get in touch with us</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDream;
