import { ourFamily } from "../../common/constats/aboutData";
import { Link } from "react-router-dom";

const OurFamily = () => {
  return (
    <section className="about-meet-the-rest-of-the-family pt-lg-245 pt-mobile-205">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-phone-8 offset-lg-3 mx-phone-auto">
            <h2
              className="fs--80 blue-1 text-center split-words"
              data-aos="d:loop"
            >
              {ourFamily.title}
            </h2>
          </div>
          <div className="col-lg-12 mt-lg-80 mt-mobile-40">
            <ul className="list-family">
              {ourFamily.Cards.map((data, index) => {
                return (
                  <li key={index} className="list-item item-01">
                    <div className="content">
                      <div className="container-img logo-img">
                        <img
                          src={data.img1}
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
                          src={data.img2}
                          data-preload
                          className="media"
                          data-parallax
                          data-scale-from="1.2"
                          alt=""
                        />
                      </div>
                      <div className="container-text">
                        <p>{data.p1}</p>
                        <p>{data.p2}</p>
                        <p>{data.p3}</p>
                      </div>
                      <div className="container-btn">
                        <Link
                          to="/"
                          className="btn-border-white"
                          data-cursor-style="off"
                        >
                          <span>{data.btntext}</span>
                        </Link>
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
