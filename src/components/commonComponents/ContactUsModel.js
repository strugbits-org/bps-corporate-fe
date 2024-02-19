import React from "react";
import ContactForm from "../../common/ContactForm";

const ContactUsModel = () => {
  return (
    <modal-group name="modal-contact" data-cursor-style="default">
      <modal-container>
        <modal-item>
          <section className="section-modal-contact">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-10 offset-lg-1 column-contact">
                  <ContactForm />

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
        </modal-item>
      </modal-container>
    </modal-group>
  );
};

export default ContactUsModel;
