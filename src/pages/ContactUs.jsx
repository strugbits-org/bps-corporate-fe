import React from "react";
import ContactForm from "../common/ContactForm";
import { pageData } from "../common/constats/contactusData";

const ContactUs = () => {
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
                {pageData.title}
              </h1>
              <div className="container-text fs--25 lh-140 fs-tablet-18 white-1 mt-15">
                <p data-aos="fadeInUp .8s ease-out-cubic .8s, d:loop">
                  {pageData.desc1}
                </p>
                <p
                  className="mt-lg-35 mt-mobile-15"
                  data-aos="fadeInUp .8s ease-out-cubic .9s, d:loop"
                >
                  {pageData.desc2}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-img bg-img">
          <video
            data-src={pageData.video}
            src={pageData.video}
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
          {/* contact form here.. */}
          <ContactForm />
          {/* contact form here.. */}
          <div className="row mt-135 no-mobile">
            <div className="col-lg-6">
              <p className="fs--14 font-2 white-1">{pageData.copyright}</p>
            </div>
            <div className="col-lg-6 flex-end">
              <p className="fs--14 font-2 white-1">{pageData.enddesc}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
