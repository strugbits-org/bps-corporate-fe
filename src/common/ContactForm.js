import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import contactusSchema from "../common/schema/contactusSchema";
import { useDispatch, useSelector } from "react-redux";
import { postFormData } from "../redux/reducers/contactus";
import { Contact } from "./constats/contactusData";

const ContactForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contact.loading);
  const error = useSelector((state) => state.contact.error);

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
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
                disabled={loading}
                {...register("firstName")}
              />
              {formErrors.firstName && (
                <span className="error">{formErrors.firstName.message}</span>
              )}
            </div>
            <div className="container-input col-md-6">
              <label htmlFor="contact-last-name">Last name</label>
              <input
                id="contact-last-name"
                name="lastName"
                type="text"
                required
                {...register("lastName")}
                disabled={loading}
              />
              {formErrors.lastName && (
                <span className="error">{formErrors.lastName.message}</span>
              )}
            </div>
            <div className="container-input col-12">
              <label htmlFor="contact-email">E-mail</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                {...register("email")}
                disabled={loading}
              />
              {formErrors.email && (
                <span className="error">{formErrors.email.message}</span>
              )}
            </div>
            <div className="container-textarea col-12">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                {...register("message")}
                disabled={loading}
              ></textarea>
              {formErrors.message && (
                <span className="error">{formErrors.message.message}</span>
              )}
            </div>
            <div className="container-submit col-12">
              <button type="submit" className="bt-submit btn-medium">
                <span className="submit-text">
                  {/* {loading ? "Submitting..." : "Send"} */}
                  Send
                </span>
              </button>
            </div>
          </form>
          {/* Error message */}
          {error && <span className="error">{error}</span>}
          {/* <h3 data-aos="fadeIn" data-form-error>
            Error, Try again!
          </h3>
          <h3 data-aos="fadeIn" data-form-success>
            Success!
          </h3> */}
        </div>
      </div>
      <div className="column-2">
        <div className="container-info">
          <div className="container-tel">
            <Link to="tel:">
              <span>{Contact.phone1}</span>
            </Link>
            <Link href="tel:">
              <span>{Contact.phone2}</span>
            </Link>
          </div>
          <Link to="mailto:info@blueprintstudios.com">
            <span>{Contact.email}</span>
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
          {Contact.address.map((data, index) => {
            return (
              <li key={index}>
                <h3 className="city">{data.city}</h3>
                <address>
                 {data.address1}<br />
                  {data.address2} <br/>
                  {data.address3}
                </address>
                <div className="phones">
                  <Link to="tel:">
                    <span>{data.contact.phone1}</span>
                  </Link>
                  <Link to="tel:">
                    <span>{data.contact.phone2}</span>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ContactForm;
