import ContactForm from "../common/ContactForm";
import React, { useEffect } from "react";
import getFullVideoURL from "../common/common_functions/videoURL";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactUs } from "../redux/reducers/contatusData";
import ContactDetails from "../components/commonComponents/ContactDetails";

const ContactUs = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.contactus.contactusData);
  // const loading = useSelector((state) => state.contactusData.contactusLoading);
  // const error = useSelector((state) => state.contactusData.error);

  const firstItem = data[0];
  const title = firstItem ? firstItem.data.title : "";
  const description1 = firstItem ? firstItem.data.description1 : "";
  const description2 = firstItem ? firstItem.data.description2 : "";
  const copyrightText = firstItem ? firstItem.data.copyrightText : "";
  const bottomDescription = firstItem ? firstItem.data.bottomDescription : "";
  const backgroundVideo = firstItem
    ? getFullVideoURL(firstItem.data.backgroundVideo)
    : "";

  useEffect(() => {
    dispatch(fetchContactUs());
  }, [dispatch]);

  return (
    <>
      <section className="contact-intro" data-aos="d:loop">
        <div className="container-fluid pos-relative z-5">
          <div className="row">
            <div className="col-lg-5 offset-lg-6 column-1">
              <h1
                className="fs--165 title-contact white-1 split-chars"
                data-aos="d:loop"
              >
                {title}
              </h1>
              <div className="container-text fs--25 lh-140 fs-tablet-18 white-1 mt-15">
                <p data-aos="fadeInUp .8s ease-out-cubic .8s, d:loop">
                  {description1}
                </p>
                <p
                  className="mt-lg-35 mt-mobile-15"
                  data-aos="fadeInUp .8s ease-out-cubic .9s, d:loop"
                >
                  {description2}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-img bg-img">
          <video
            data-src={backgroundVideo}
            src={backgroundVideo}
            data-preload
            autoPlay
            loop
            data-parallax-top
            data-translate-y="30rem"
            className="media"
            muted
            playsInline
          ></video>
        </div>
      </section>
      <section
        className="contact-footer bg-blue-1 pt-lg-85 pt-mobile-55 pb-lg-padding pb-tablet-15 pb-phone-padding-fluid"
        data-cursor-style="off"
        data-aos="d:loop, trigger:.contact-intro"
      >
        <div className="container-fluid">
          <div className="row contact-info">
            {/* contact form start.. */}
            <ContactForm />
            {/* contact form end.. */}

            {/* contactDetails here */}
            <ContactDetails />
          </div>

          <div className="row mt-135 no-mobile">
            <div className="col-lg-6">
              <p className="fs--14 font-2 white-1">{copyrightText}</p>
            </div>
            <div className="col-lg-6 flex-end">
              <p className="fs--14 font-2 white-1">{bottomDescription}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
