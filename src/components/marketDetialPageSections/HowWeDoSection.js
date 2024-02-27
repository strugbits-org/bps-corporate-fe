import { howWeDoSection } from "../../common/constats/marketData";

const HowWeDoSection = () => {
  return (
    <section className="market-post-how-we-do-it pt-lg-270 pt-tablet-100 pt-phone-150">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 column-1">
            <h2 className="fs--60 text-center split-chars" data-aos="d:loop">
              How we do it
            </h2>
            <ul className="list-how-we-do-it mt-lg-50 mt-mobile-40">
              {howWeDoSection.map((data, index) => {
                return (
                  <li key={index}>
                    <div className="list-column-img">
                      <div className="container-img" data-aos="d:loop">
                        <img
                          src={data.img}
                          data-preload
                          className="media"
                          alt=""
                          data-parallax
                          data-scale-from="1.2"
                        />
                      </div>
                    </div>
                    <div className="list-column-text">
                      <h3
                        className="column-title split-words"
                        data-aos="d:loop"
                      >
                        {data.title}
                      </h3>
                      <p
                        className="column-paragraph"
                        data-aos="fadeInUp .6s ease-out-cubic .3s, d:loop"
                      >
                        {data.desc}
                      </p>
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

export default HowWeDoSection;