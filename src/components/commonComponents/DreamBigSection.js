import React, { useEffect } from "react";
import getFullImageURL from "../../common/common_functions/imageURL";
import { fetchDreamBigSection } from "../../redux/reducers/homeData";
import { useDispatch, useSelector } from "react-redux";

const DreamBigSection = () => {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.home.dreamBigData);

  const firstItem = data[0]; // Assuming you want values from the first item
  const btntext = firstItem ? firstItem.data.buttonText : "";
  const pragraph1 = firstItem ? firstItem.data.pragraph1 : "";
  const pragraph2 = firstItem ? firstItem.data.pragraph2 : "";
  const desktopImg = firstItem ? firstItem.data.desktopBackgroundImage : "";
  const mobileImg = firstItem ? firstItem.data.mobileBackgroundImage : "";

  useEffect(() => {
    dispatch(fetchDreamBigSection());
    // trigger animation on data load
    setTimeout(() => {
      document.querySelector(".updateWatchedTrigger").click();
      document.querySelector(".triggerSplitWordAnimation").click();
    }, 1000);
  }, [dispatch]);

  return (
    <section className="section-dream-big">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 offset-lg-4 column-1">
            <div className="container-img no-phone">
              <img
                src={getFullImageURL(desktopImg)}
                data-preload
                className="media"
                alt=""
              />
            </div>
            <div className="container-img no-desktop no-tablet">
              <img
                src={getFullImageURL(mobileImg)}
                data-preload
                className="media"
                alt=""
              />
            </div>
            <div
              data-parallax
              data-trigger=".section-dream-big"
              data-translate-y-from="30vh"
              data-end="center center"
              className="content"
            >
              <btn-modal-open
                group="modal-contact"
                class="btn-blue"
                data-cursor-style="off"
              >
                <span>{btntext}</span>
                <i className="icon-arrow-right-2"></i>
              </btn-modal-open>
              <p
                className="fs--20 flex-center fs-phone-16 fw-500 font-2 blue-1 text-center pos-relative z-5 mt-30 text"
                data-parallax
                data-trigger=".section-dream-big"
                data-translate-y-from="30vh"
                data-end="center center"
              >
                {pragraph1} <br />
                {pragraph2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamBigSection;
