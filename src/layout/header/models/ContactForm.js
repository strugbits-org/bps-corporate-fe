import React from 'react'
import DelayedLink from '../../../common/DelayedLink'

const ContactForm = () => {
  return (
    <section className="section-modal-contact">

    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-10 offset-lg-1 column-contact">
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
                  <input
                    type="hidden"
                    name="assunto"
                    value="[contact]"
                  />
                  <div className="container-input col-md-6">
                    <label htmlFor="contact-first-name">
                      First name
                    </label>
                    <input
                      id="contact-first-name"
                      name="name"
                      type="text"
                      required
                    />
                  </div>
                  <div className="container-input col-md-6">
                    <label htmlFor="contact-last-name">
                      Last name
                    </label>
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
                    <label htmlFor="contact-message">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                    ></textarea>
                  </div>
                  <div className="container-submit col-12">
                    <button
                      type="submit"
                      className="bt-submit btn-medium"
                    >
                      <span className="submit-text">
                        Send
                      </span>
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
                  <DelayedLink to="tel:">
                    <span>SF (415) 922-9004</span>
                  </DelayedLink>
                  <DelayedLink to="tel:">
                    <span>LV (702) 757-7987</span>
                  </DelayedLink>
                </div>
                <DelayedLink to="mailto:info@blueprintstudios.com">
                  <span>info@blueprintstudios.com</span>
                </DelayedLink>
              </div>
              <ul className="list-social-media">
                <li>
                  <DelayedLink
                    to="/"
                    target="_blank"
                    attributes={{
                      "rel":"noopener noreferrer"
                    }}
                  >
                    <i className="icon-facebook"></i>
                  </DelayedLink>
                </li>
                <li>
                  <DelayedLink
                    to="/"
                    target="_blank"
                    attributes={{
                      "rel":"noopener noreferrer"
                    }}
                  >
                    <i className="icon-instagram"></i>
                  </DelayedLink>
                </li>
                <li>
                  <DelayedLink
                    to="/"
                    target="_blank"
                    attributes={{
                      "rel":"noopener noreferrer"
                    }}
                  >
                    <i className="icon-x"></i>
                  </DelayedLink>
                </li>
                <li>
                  <DelayedLink
                    to="/"
                    target="_blank"
                    attributes={{
                      "rel":"noopener noreferrer"
                    }}
                  >
                    <i className="icon-linkedin"></i>
                  </DelayedLink>
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
                    <DelayedLink to="tel:">
                      <span>P / 707742.7777</span>
                    </DelayedLink>
                    <DelayedLink to="tel:">
                      <span>F / 415.822.8844</span>
                    </DelayedLink>
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
                    <DelayedLink to="tel:">
                      <span>P / 702.757.7987</span>
                    </DelayedLink>
                  </div>
                </li>
                <li>
                  <h3 className="city">San Francisco</h3>
                  <address>
                    352 Shaw RD <br />
                    S. San Francisco, CA 94080
                  </address>
                  <div className="phones">
                    <DelayedLink to="tel:">
                      <span>P / 415.922.9004</span>
                    </DelayedLink>
                    <DelayedLink to="tel:">
                      <span>F / 415.822.8844</span>
                    </DelayedLink>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <btn-modal-close data-cursor-style="default">
            <i className="icon-close"></i>
            <i className="icon-arrow-left"></i>
            <span className="text-go-back no-desktop">
              Go back
            </span>
            <span className="text-hide">close</span>
          </btn-modal-close>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ContactForm