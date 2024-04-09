import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetTouchSection } from "../../redux/reducers/homeData";
import { DefaultButton } from "../commonComponents/DefaultButton";

const GetTouchSection = () => {
  const dispatch = useDispatch();
  const getTouchData = useSelector((state) => state.home.getTouchData);

  // const loading = useSelector((state) => state.home.ourProjectLoading);
  // const error = useSelector((state) => state.home.error);

  const gettouch = getTouchData.map((item) => ({
    p1: item.data.paragraph1,
    p2: item.data.paragraph2,
    p3: item.data.paragraph3,
    button_label: item.data.buttonText,
    button_action: item.data.buttonAction,
  }));

  useEffect(() => {
    dispatch(fetchGetTouchSection());
  }, [dispatch]);


  return (
    <section className="home-solution pt-220 pb-110">
      <div className="container-fluid">
        {gettouch.map((data, id) => {
          return (
            <div key={id} className="row">
              <div className="col-lg-6 offset-lg-3">
                <div
                  className="container-text fs--40 fs-tablet-40 blue-1 split-words"
                  data-aos="d:loop"
                >
                  <p>{data.p1}</p>
                  <p>{data.p2}</p>
                  <p>{data.p3}</p>
                </div>
              </div>
              <div className="col-lg-4 offset-lg-4 flex-center mt-lg-60 mt-mobile-50">
                <DefaultButton
                  customClasses={"btn-medium"}
                  data={{
                    label: data.button_label,
                    action: data.button_action
                  }}
                ></DefaultButton>
                {/* <btn-modal-open
                  group="modal-contact"
                  class="btn-blue btn-medium"
                  data-cursor-style="off"
                >
                  <span>{data.button_label}</span>
                  <i className="icon-arrow-right-2"></i>
                </btn-modal-open> */}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GetTouchSection;
