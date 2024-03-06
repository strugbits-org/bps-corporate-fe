import DelayedLink from "../../../common/DelayedLink";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServicesModel } from "../../../redux/reducers/servicesData";
const Services = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.services.servicesModelData);
  // const loading = useSelector((state) => state.services.servicesModelLoading);
  // const error = useSelector((state) => state.services.error);

  useEffect(() => {
    dispatch(getServicesModel());
  }, [dispatch]);

  return (
    <div className="wrapper-submenu-services wrapper-submenu">
      <div className="container-title-mobile">
        <h2 className="submenu-title">Services</h2>
        <button className="btn-go-back" data-submenu-close>
          <i className="icon-arrow-left-3"></i>
          <span>Go back</span>
        </button>
      </div>
      <ul className="list-submenu-services list-submenu">
        {data.map((service, index) =>
          index < 5 ? (
            <li key={index}>
              <DelayedLink
                to={`/services-post/${service.slug}`}
                className="service-link"
                attributes={{ "data-menu-close": "" }}
              >
                <div className="container-img bg-blue">
                  <img
                    src={service.image}
                    data-preload
                    className="media"
                    alt=""
                  />
                </div>
                <h2 className="service-title split-words">
                  {service.cardName}
                </h2>
                <span className="number">
                  {index > 10 ? index + 1 : "0" + (index + 1)}
                </span>
              </DelayedLink>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};
export default Services;
