import React, { useEffect } from "react";
import DelayedLink from "../../common/DelayedLink";
import { useDispatch, useSelector } from "react-redux";
import { fetchFooterData } from "../../redux/reducers/footerData";

const ContactDetails = () => {

  const dispatch = useDispatch();
  const contactData = useSelector((state) => state.footer.data.contactData);

  useEffect(() => {
    dispatch(fetchFooterData());
  }, [dispatch]);

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
            to="https://www.facebook.com/blueprintstudiosevents/"
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
            to="https://www.instagram.com/blueprintstudiosevents/?hl=en"
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
            to="https://twitter.com/bpseventdesign?lang=en"
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
            to="https://www.linkedin.com/company/blueprint-studios/"
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
        {contactData.map((data, index) => {

          return (

            <li key={index}>
              <h3 className="city">{data.data.city}</h3>
              <address>
                {data.data.address1} <br />
                {data.data.address2} <br />
                {data.data.address3}
              </address>
              <div className="phones">
                <DelayedLink to={`tel:${data.data.phone1}`}>
                  <span>{data.data.phone1}</span>
                </DelayedLink>
                <DelayedLink to={`tel:${data.data.phone2}`}>
                  <span>{data.data.phone2}</span>
                </DelayedLink>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactDetails;
