import React, { useEffect } from "react";
import DelayedLink from "../../common/DelayedLink";
import { useDispatch, useSelector } from "react-redux";
import { fetchFooterData, getSocialLinks } from "../../redux/reducers/footerData";

const ContactDetails = () => {

  const dispatch = useDispatch();
  const contactData = useSelector((state) => state.footer.data.contactData);
  const socialLinks = useSelector((state) => state.footer.socialLinks);

  useEffect(() => {
    dispatch(fetchFooterData());
    dispatch(getSocialLinks());
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
        {socialLinks.map((item, index) => (
          <li key={index}>
            <DelayedLink to={item.link} target="_blank"
              attributes={{
                "rel": "noopener noreferrer"
              }}>
              <i className={item.icon}></i>
            </DelayedLink>
          </li>
        ))}
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
                <DelayedLink to={`tel:${data.data.phone1}`} target={"_blank"}>
                  <span>{data.data.phone1}</span>
                </DelayedLink>
                <DelayedLink to={`tel:${data.data.phone2}`} target={"_blank"}>
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
