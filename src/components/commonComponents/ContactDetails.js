import React from "react";
import DelayedLink from "../../common/DelayedLink";

const ContactDetails = () => {
  return (
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
              rel: "noopener noreferrer",
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
              rel: "noopener noreferrer",
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
              rel: "noopener noreferrer",
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
              rel: "noopener noreferrer",
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
  );
};

export default ContactDetails;
