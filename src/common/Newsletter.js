import * as Yup from "yup";
import { newsletter } from "./constats/constats";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const Newsletter = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data) => {
    console.log("Form submitted with values:", data);
    // Handle form submission here
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
        <form className="form-newsletter" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" name="assunto" value="[newsletter]" />
          <div className="container-input">
            <label htmlFor="newsletter-email">Enter your email</label>
            <input
              id="newsletter-email"
              {...register("email")}
              type="email"
              required
            />
            {errors.email && (
              <div className="error-message">{errors.email.message}</div>
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
