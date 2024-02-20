import React, { useState } from "react";
import * as Yup from "yup";
import { newsletter } from "../common/constats";
const Newsletter = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      // If validation passes, handle form submission here
      console.log("Form submitted with values:", formData);
    } catch (error) {
      const newErrors = {};
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    }
  };
  return (
    <div className="container-newsletter" data-form-container>
      <div className="container-text">
        <h3 className="fs-25 white-1">{newsletter.title}</h3>
        <p className="fs--16 fs-phone-15 font-2 white-1 mt-5">
          {newsletter.desc}
        </p>
      </div>

      <div className="container-newsletter mt-mobile-25">
        <form className="form-newsletter" onSubmit={handleSubmit}>
          <input type="hidden" name="assunto" value="[newsletter]" />
          <div className="container-input">
            {formData === "" && <label htmlFor="newsletter-email">Enter your email</label>}
            
            <input
              id="newsletter-email"
              name="email"
              type="email"
              onChange={handleChange}
              value={formData.email}
              required
            />
            {errors.email && (
              <div className="error-message">{errors.email}</div>
            )}
          </div>
          <div className="container-submit">
            <button type="submit" className="bt-submit">
              <span className="submit-text">Send</span>
            </button>
          </div>
        </form>
        <h3
          className="feedback-newsletter white-1"
          data-aos="fadeIn"
          data-form-success
        >
          Success!
        </h3>
        <h3
          className="feedback-newsletter white-1"
          data-aos="fadeIn"
          data-form-error
        >
          Error, Try again!
        </h3>
      </div>
    </div>
  );
};

export default Newsletter;
