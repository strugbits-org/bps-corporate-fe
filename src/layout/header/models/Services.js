import { Link } from "react-router-dom";


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
                  <li>
                    <Link
                      to="/services-post"
                      className="service-link"
                      data-menu-close
                    >
                      <div className="container-img bg-blue">
                        <img
                          src="images/services/service1.jpg"
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                      <h2 className="service-title split-words">
                        Event Design and Production
                      </h2>
                      <span className="number">01</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services-post"
                      className="service-link"
                      data-menu-close
                    >
                      <div className="container-img bg-blue">
                        <img
                          src="images/services/service2.jpg"
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                      <h2 className="service-title split-words">
                        Creative Services Agency
                      </h2>
                      <span className="number">02</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services-post"
                      className="service-link"
                      data-menu-close
                    >
                      <div className="container-img bg-blue">
                        <img
                          src="images/services/service3.jpg"
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                      <h2 className="service-title split-words">Floral Design</h2>
                      <span className="number">03</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services-post"
                      className="service-link"
                      data-menu-close
                    >
                      <div className="container-img bg-blue">
                        <img
                          src="images/services/service4.jpg"
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                      <h2 className="service-title split-words">
                        Custom Fabrication
                      </h2>
                      <span className="number">04</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      tp="/services-post"
                      className="service-link"
                      data-menu-close
                    >
                      <div className="container-img bg-blue">
                        <img
                          src="images/services/service5.jpg"
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                      <h2 className="service-title split-words">
                        Printing Services
                      </h2>
                      <span className="number">05</span>
                    </Link>
                  </li>
                </ul>
              </div>
  );
};

export default Services;
