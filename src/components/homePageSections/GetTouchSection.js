import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetTouchSection } from "../../redux/reducers/homeData";
import { DefaultButton } from "../commonComponents/DefaultButton";

const GetTouchSection = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.home.getTouchData);

  // const loading = useSelector((state) => state.home.ourProjectLoading);
  // const error = useSelector((state) => state.home.error);

  useEffect(() => {
    dispatch(fetchGetTouchSection());
  }, [dispatch]);


  return (
    <section className="home-solution pt-220 pb-110">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div
              className="container-text fs--40 fs-tablet-40 blue-1 split-words"
              data-aos="d:loop"
            >
              <p>{data.paragraph1}</p>
              <p>{data.paragraph2}</p>
              <p>{data.paragraph3}</p>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-4 flex-center mt-lg-60 mt-mobile-50">
            <DefaultButton
              customClasses={"btn-medium"}
              data={{
                label: data.buttonText,
                action: data.buttonAction
              }}
            ></DefaultButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetTouchSection;
