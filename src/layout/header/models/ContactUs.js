import React, { useEffect } from "react";
import ContactForm from "../../../common/ContactForm";
import ContactDetails from "../../../components/commonComponents/ContactDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactUs } from "../../../redux/reducers/contatusData";

const ContactUs = () => {
  const dispatch = useDispatch();
  const contactusData = useSelector((state) => state.contactus.contactusData)[0];
  useEffect(() => {
    dispatch(fetchContactUs(false));
  }, [dispatch]);
  return (
    <section className="section-modal-contact">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 column-contact">
            <div className="row contact-info">
              {/* // contact form start */}
              <ContactForm title={contactusData?.data.formTitle} />
              {/* // contact form end */}

              {/* contactDetails here */}
              <ContactDetails contactusData={contactusData} />
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
