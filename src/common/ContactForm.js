import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import contactusSchema from "../common/schema/contactusSchema";
import { useDispatch, useSelector } from "react-redux";
import { postFormData } from "../redux/reducers/contactus";

const ContactForm = () => {
  const dispatch = useDispatch();
  const success = useSelector((state) => state.contact.formData);
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
    dispatch(postFormData(data));
  };

  return (
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
              id="first_name_584c"
              name="first_name_584c"
              type="text"
              required
              disabled={loading}
              {...register("first_name_584c")}
            />
            {formErrors.firstName && (
              <span className="error">{formErrors.firstName.message}</span>
            )}
          </div>
          <div className="container-input col-md-6">
            <label htmlFor="contact-last-name">Last name</label>
            <input
              id="last_name_51ee"
              name="last_name_51ee"
              type="text"
              required
              {...register("last_name_51ee")}
              disabled={loading}
            />
            {formErrors.lastName && (
              <span className="error">{formErrors.lastName.message}</span>
            )}
          </div>
          <div className="container-input col-12">
            <label htmlFor="contact-email">E-mail</label>
            <input
              id="email_bd82"
              name="email_bd82"
              type="email"
              required
              {...register("email_bd82")}
              disabled={loading}
            />
            {formErrors.email && (
              <span className="error">{formErrors.email.message}</span>
            )}
          </div>
          <div className="container-textarea col-12">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="long_answer_afda"
              name="long_answer_afda"
              {...register("long_answer_afda")}
              disabled={loading}
            ></textarea>
            {formErrors.message && (
              <span className="error">{formErrors.message.message}</span>
            )}
          </div>
          <div className="container-submit col-12">
            <button type="submit" className="bt-submit btn-medium">
              <span className="submit-text">
                {loading ? "Submitting..." : "Send"}
              </span>
            </button>
          </div>
        </form>
        {/* Error message */}
        {error && (
          <h3 data-aos="fadeIn" data-form-error>
            Error, Try again!
          </h3>
        )}
        {success && (
          <h3 data-aos="fadeIn" data-form-success>
            Success!
          </h3>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
