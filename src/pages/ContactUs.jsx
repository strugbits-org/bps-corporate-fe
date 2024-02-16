import React from "react";
import { Link } from "react-router-dom";

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
                Tried + True
              </h1>
              <div className="container-text fs--25 lh-140 fs-tablet-18 white-1 mt-15">
                <p data-aos="fadeInUp .8s ease-out-cubic .8s, d:loop">
                  We are a customer-focused, industry leader with a streamlined
                  approach to event design and production. We handle every step
                  of the process in-house from concept logistics,
                  space-planning, and rendering to graphics, printing, custom
                  fabrication, furnishings, and on-site installation.
                </p>
                <p
                  className="mt-lg-35 mt-mobile-15"
                  data-aos="fadeInUp .8s ease-out-cubic .9s, d:loop"
                >
                  With fully operational offices, showrooms and warehouses in
                  San Francisco (our headquarters) and Las Vegas, our reach
                  extends throughout the United States and internationally.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-img bg-img">
          <video
            data-src="images/lib/video.mp4#t=0.01"
            src="images/lib/video.mp4#t=0.01"
            data-preload
            autoplay
            loop
            data-parallax-top
            data-translate-y="30rem"
            class="media"
            muted
            playsinline
          ></video>
        </div>
      </section>
      <section
        className="contact-footer bg-blue-1 pt-lg-85 pt-mobile-55 pb-lg-padding pb-tablet-15 pb-phone-padding-fluid"
        data-cursor-style="off"
        data-aos="d:loop, trigger:.contact-intro"
      >

        <div className="container-fluid">
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
                <form className="form-contact">
                  <input type="hidden" name="assunto" value="[contact]" />
                  <div className="container-input col-md-6">
                    <label htmlFor="contact-first-name">First name</label>
                    <input
                      id="contact-first-name"
                      name="name"
                      type="text"
                      required
                    />
                  </div>
                  <div className="container-input col-md-6">
                    <label htmlFor="contact-last-name">Last name</label>
                    <input
                      id="contact-last-name"
                      name="name"
                      type="text"
                      required
                    />
                  </div>
                  <div className="container-input col-12">
                    <label htmlFor="contact-email">E-mail</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                    />
                  </div>
                  <div className="container-textarea col-12">
                    <label htmlFor="contact-message">Message</label>
                    <textarea id="contact-message" name="message"></textarea>
                  </div>
                  <div className="container-submit col-12">
                    <button type="submit" className="bt-submit btn-medium">
                      <span className="submit-text">Send</span>
                    </button>
                  </div>
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
                  <a href="tel:">
                    <span>SF (415) 922-9004</span>
                  </a>
                  <a href="tel:">
                    <span>LV (702) 757-7987</span>
                  </a>
                </div>
                <a href="mailto:info@blueprintstudios.com">
                  <span>info@blueprintstudios.com</span>
                </a>
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
          <div className="row mt-135 no-mobile">
            <div className="col-lg-6">
              <p className="fs--14 font-2 white-1">
                © Blueprint studios. All rights reserved.
              </p>
            </div>
            <div className="col-lg-6 flex-end">
              <p className="fs--14 font-2 white-1">
                If it's not remarkable, it's invisible is a trademark of
                blueprint studios.
              </p>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default ContactUs;
