import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import contactusSchema from "../common/schema/contactusSchema";
import { useDispatch, useSelector } from "react-redux";
// import { submitFormSuccess, submitFormFailure} from "../redux/reducers/contactus";
import { postFormData } from "../redux/reducers/contactus";

const ContactForm = () => {
  const dispatch = useDispatch();
//   const loading = useSelector((state) => state.contact.loading);
//   const error = useSelector((state) => state.contact.error);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactusSchema),
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    dispatch(postFormData(data));
  };

  return (
    <div className="row contact-info">
      <div className="column-1">
        <h2 className="fs--60 title">
          <span>Contact form</span>
          <i className="icon-arrow-down"></i>
        </h2>
        <div
          className="container-contact mt-lg-140 mt-tablet-65"
          data-form-container
        >
          <form className="form-contact" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="assunto" value="[contact]" />
            <div className="container-input col-md-6">
              <label htmlFor="contact-first-name">First name</label>
              <input
                id="contact-first-name"
                name="firstName"
                type="text"
                required
                {...register("firstName")}
              />
            </div>
            <div className="container-input col-md-6">
              <label htmlFor="contact-last-name">Last name</label>
              <input
                id="contact-last-name"
                name="lastName"
                type="text"
                required
                {...register("lastName")}
              />
            </div>
            <div className="container-input col-12">
              <label htmlFor="contact-email">E-mail</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                {...register("email")}
              />
            </div>
            <div className="container-textarea col-12">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                {...register("message")}
              ></textarea>
              
            </div>
            <div className="container-submit col-12">
              <button type="submit" className="bt-submit btn-medium">
                <span className="submit-text">Send</span>
              </button>
            </div>
            {/* Loading indicator */}
          {/* {loading && <span className="loading">Submitting form...</span>} */}
            {/* Error message for overall form */}
            {/* {error && (
              <span className="error">
                Form submission failed. Please check the fields.
              </span>
            )} */}
          </form>

          <h3 data-aos="fadeIn" data-form-error>
            Error, Try again!
          </h3>
          <h3 data-aos="fadeIn" data-form-success>
            Success!
          </h3>
        </div>
      </div>
      <div className="column-2">
        <div className="container-info">
          <div className="container-tel">
            <Link to="tel:">
              <span>SF (415) 922-9004</span>
            </Link>
            <Link href="tel:">
              <span>LV (702) 757-7987</span>
            </Link>
          </div>
          <Link to="mailto:info@blueprintstudios.com">
            <span>info@blueprintstudios.com</span>
          </Link>
        </div>
        <ul className="list-social-media">
          <li>
            <Link to="/" target="_blank" rel="noopener noreferrer">
              <i className="icon-facebook"></i>
            </Link>
          </li>
          <li>
            <Link to="/" target="_blank" rel="noopener noreferrer">
              <i className="icon-instagram"></i>
            </Link>
          </li>
          <li>
            <Link to="/" target="_blank" rel="noopener noreferrer">
              <i className="icon-x"></i>
            </Link>
          </li>
          <li>
            <Link to="/" target="_blank" rel="noopener noreferrer">
              <i className="icon-linkedin"></i>
            </Link>
          </li>
        </ul>
        <ul className="list-address">
          <li>
            <h3 className="city">Napa Valley</h3>
            <address>
              955 Vintage Ave <br />
              St. Helena, CA 94574
            </address>
            <div className="phones">
              <Link to="tel:">
                <span>P / 707742.7777</span>
              </Link>
              <Link to="tel:">
                <span>F / 415.822.8844</span>
              </Link>
            </div>
          </li>
          <li>
            <h3 className="city">Las Vegas</h3>
            <address>
              7900 W Sunset RD <br />
              Suite 400 <br />
              Las Vegas, NV 89113
            </address>
            <div className="phones">
              <Link to="tel:">
                <span>P / 702.757.7987</span>
              </Link>
            </div>
          </li>
          <li>
            <h3 className="city">San Francisco</h3>
            <address>
              352 Shaw RD <br />
              S. San Francisco, CA 94080
            </address>
            <div className="phones">
              <Link to="tel:">
                <span>P / 415.922.9004</span>
              </Link>
              <Link to="tel:">
                <span>F / 415.822.8844</span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactForm;
