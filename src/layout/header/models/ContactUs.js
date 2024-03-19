import React from "react";
import ContactForm from "../../../common/ContactForm";
import ContactDetails from "../../../components/commonComponents/ContactDetails";

const ContactUs = () => {
  return (
    <section className="section-modal-contact">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 column-contact">
            <div className="row contact-info">
              {/* // contact form start */}
              <ContactForm />
              {/* // contact form end */}

              {/* contactDetails here */}
              <ContactDetails />
            </div>

            <btn-modal-close data-cursor-style="default">
              <i className="icon-close"></i>
              <i className="icon-arrow-left"></i>
              <span className="text-go-back no-desktop">Go back</span>
              <span className="text-hide">close</span>
            </btn-modal-close>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
