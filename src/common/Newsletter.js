import * as Yup from "yup";
import { newsletter } from "../common/constats/constats";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { postNewsletter } from "../redux/reducers/contactus";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
const Newsletter = () => {
  const dispatch = useDispatch();

  const [isLabelHidden, setIsLabelHidden] = useState(false);
  const { loading, success, error } = useSelector((state) => state.contact);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleInputFocus = () => {
    setIsLabelHidden(true);
  };

  const handleInputBlur = () => {
    setIsLabelHidden(false);
  };

  const validationSchema = Yup.object().shape({
    email_ac30: Yup.string()
      .email("Invalid email address")
      .required("Required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors: formErrors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => {
    dispatch(postNewsletter(data));
  };
  useEffect(() => {
    if (success) {
      setShowSuccess(true);

      const timeoutId = setTimeout(() => {
        setShowSuccess(false);
        reset();
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
    if (error) {
      setShowError(true);

      const timeoutId = setTimeout(() => {
        setShowError(false);
        reset();
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [success, error, reset]);
  return (
    <div className="container-newsletter" data-form-container>
      <div className="container-text">
        <h3 className="fs-25 white-1">{newsletter.title}</h3>
        <p className="fs--16 fs-phone-15 font-2 white-1 mt-5">
          {newsletter.desc}
        </p>
      </div>

      <div className="container-newsletter mt-mobile-25">
        <form className="form-newsletter" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" name="assunto" value="[newsletter]" />
          <div className="container-input">
            <label
              htmlFor="newsletter-email"
              className={isLabelHidden ? "hidden" : ""}
            >
              Enter your email
            </label>

            <input
              id="email_ac30"
              name="email_ac30"
              type="email"
              {...register("email_ac30")}
              required
              disabled={loading}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />

            {formErrors.email_ac30 && (
              <span className="error">{formErrors.email_bd82.message}</span>
            )}
          </div>
          <div className="container-submit">
            <button type="submit" className="bt-submit">
              <span className="submit-text">
                {loading ? "sending.." : "Send"}
              </span>
            </button>
          </div>
        </form>

        {showSuccess && (
          <h3 className="feedback-newsletter white-1">Success!</h3>
        )}

        {showError && (
          <h3 className="feedback-newsletter white-1">Error, Try again!</h3>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
