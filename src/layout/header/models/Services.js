
import DelayedLink from "../../../common/DelayedLink";
import {serviceModel} from "../../../common/constats/serviceData";
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
                  {serviceModel.map((data) => {
                    return   <li key={data.id}>
                    <DelayedLink
                       to={`/services-post/${data.id}`}
                      className="service-link"
                      attributes={{"data-menu-close":""}}
                    >
                      <div className="container-img bg-blue">
                        <img
                          src={data.image}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                      <h2 className="service-title split-words">
                        {data.title}
                      </h2>
                      <span className="number">{data.id}</span>
                    </DelayedLink>
                  </li>
                  })}
                 
                </ul>
              </div>
  );
};

export default Services;
