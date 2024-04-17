import React, { useEffect } from "react";
import { generateImageURL } from "../../common/common_functions/imageURL";
import { fetchPeopleReviewSlider } from "../../redux/reducers/homeData";
import { useDispatch, useSelector } from "react-redux";
import { DefaultButton } from "./DefaultButton";

const PeopleReviewSLider = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.home.peopleReviewData);
  const {homeSectionDetails} = useSelector((state) => state.home);

  // const loading = useSelector((state) => state.home.peopleReviewLoading);
  // const error = useSelector((state) => state.home.error);

  useEffect(() => {
    dispatch(fetchPeopleReviewSlider());
  }, [dispatch]);

  return (
   
    <section  className={`section-heres-what-people-are-saying pt-lg-300 pt-tablet-105 pt-phone-145 pb-lg-130 pb-tablet-100 pb-phone-145 pos-relative ${data.length === 0 ? "hidden" : ""}`}>
      <div className="container-fluid pos-relative z-3">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 column-1">
            <h2
              className="fs--80 white-1 title text-center split-words"
              data-aos="d:loop"
            >
              {homeSectionDetails.reviewsTitle}
            </h2>
          </div>
          <div className="col-lg-10 offset-lg-1 mt-lg-120 mt-tablet-100 mt-phone-45">
            <div className="slider-testimony" data-aos="d:loop">
              <div className="swiper-container">
                {/* <!-- Additional required wrapper --> */}
                <div className="swiper-wrapper">
                  {/* <!-- Slides --> */}
                  {data.map((data, index) => {
                    return (
                      <div key={index} className="swiper-slide">
                        <div className="wrapper-content">
                          <div className="container-img">
                            <img
                              src={generateImageURL({ wix_url: data?.data?.image, q: "95" })}
                              data-preload
                              className="media"
                              alt=""
                            />
                          </div>
                          <div className="container-text">
                            <p className="testimony">{data.data.description}</p>
                            <div className="container-profile">
                              <div className="name">{data.data.name}</div>
                              <div className="occupation">
                                {data.data.occupation}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="swiper-button-prev no-mobile">
                <span>Back</span>
              </div>
              <div className="swiper-button-next no-mobile">
                <span>Next</span>
              </div>
              <div className="swiper-pagination no-mobile"></div>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-4 mt-lg-45 mt-tablet-90 mt-phone-25 flex-center column-btn">
            <DefaultButton
              data={{
                label: homeSectionDetails.reviewsButtonLabel,
                action: homeSectionDetails.reviewsButtonAction
              }}
            ></DefaultButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleReviewSLider;
