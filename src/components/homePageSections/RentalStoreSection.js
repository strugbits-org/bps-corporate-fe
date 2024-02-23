import DelayedLink from "../../common/DelayedLink";
import { rentalData, rentalCards } from "../../common/constats";

const RentalStoreSection = () => {
  let transition = -35;
  return (
    <section className="home-rental-store pt-lg-145 pt-tablet-105 pt-phone-145 pb-lg-120 pb-tablet-100 pb-phone-145">
      <div
        className="bg"
        data-parallax
        data-translate-y-from="50vh"
        data-end="top 40%"
        data-parallax-no-phone
        data-parallax-no-tablet
        data-trigger=".home-rental-store"
      ></div>

      <div className="container-fluid pos-relative z-5">
        <div className="row">
          <div
            className="col-lg-6 offset-lg-3 column-1"
            data-parallax
            data-translate-y-from="30rem"
            data-parallax-no-phone
            data-parallax-no-tablet
            data-opacity-from="0"
            data-start="top 55%"
            data-end="top 20%"
            data-trigger=".home-rental-store"
          >
            <h2 className="fs--100 text-center white-1">{rentalData.title}</h2>
            <p className="fs--50 fs-phone-18 white-1 paragraph mt-lg-15 mt-tablet-30 mt-phone-10">
              {rentalData.p1}
              <span>
                <img
                  src={rentalData.img1}
                  data-preload
                  alt=""
                  className="img-1 media"
                />
              </span>
              {rentalData.p2}
              <span>
                <img
                  src={rentalData.img4}
                  data-preload
                  alt=""
                  className="img-2 media"
                />
              </span>
              {rentalData.p3}
              <span>
                <img
                  src={rentalData.img2}
                  data-preload
                  alt=""
                  className="img-3 media"
                />
              </span>
              {rentalData.p4}
              <span>
                <img
                  src={rentalData.img3}
                  data-preload
                  alt=""
                  className="img-4 media"
                />
              </span>
              {rentalData.p5}
            </p>
          </div>

          <div className="col-lg-12 column-2 mt-lg-140 mt-mobile-40">
            <ul className="list-rental-store">
              {rentalCards.map((data, index) => {
                const translateYFrom = `${transition - (15 * index)}rem`;
                return (
                  <li
                    key={index}
                    data-parallax
                    data-translate-y-from = {translateYFrom}
                    data-parallax-no-phone
                    data-parallax-no-tablet
                    data-start='top 85%'
                    data-end='20% 40%'
                    data-trigger=".home-rental-store"
                  >
                    <DelayedLink to="/" className="link" 
                    attributes={{
                      "data-cursor-style":"view"
                    }}
                    >
                      <div className="container-img">
                        <img
                          src={data.img}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                      {data.new && (
                        <div className="tag-new no-mobile">
                          <span>{data.tag}</span>
                        </div>
                      )}
                    </DelayedLink>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="col-lg-4 offset-lg-4 flex-center mt-lg-95 mt-tablet-100 mt-phone-40 column-trigger">
            <div
              className="container-btn"
              data-aos="fadeInUp .8s ease-out-cubic 0s, d:loop, trigger:.column-trigger"
            >
              <btn-modal-open
                group="modal-contact"
                class="btn-blue"
                data-cursor-style="off"
              >
                <span>{rentalData.btntext}</span>
                <i className="icon-arrow-right-2"></i>
              </btn-modal-open>
            </div>
          </div>
        </div>
      </div>

      {/* <li>
        <Link to="/" className="link" data-cursor-style="view">
          <div className="container-img">
            <img src={img99} data-preload className="media" alt="" />
          </div>
        </Link>
      </li> */}
    </section>
  );
};

export default RentalStoreSection;
