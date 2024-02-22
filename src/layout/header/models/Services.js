import { Link } from "react-router-dom";
import { serviceModel } from "../../../common/constats/serviceData";

const Services = () => {
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
        {serviceModel.map((data, index) => {
          return (
            <li key={index}>
              <Link
                to="/services-post"
                className="service-link"
                data-menu-close
              >
                <div className="container-img bg-blue">
                  <img src={data.image} data-preload className="media" alt="" />
                </div>
                <h2 className="service-title split-words">
                  {data.title}
                </h2>
                <span className="number">{data.id}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Services;
