import getFullImageURL from "../../common/common_functions/imageURL";

const serviceDescription = ({data}) => {
  return (
    <section className="services-post-description pt-lg-210 pt-tablet-105 pt-phone-200">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <h2 className="fs--60 text-center split-words" data-aos="d:loop">
              Floral Design Services
            </h2>
          </div>
          <div className="col-12 mt-40">
            <ul
              className="list-services grid-lg-25 grid-md-50"
              data-aos="d:loop"
            >
              {data?.subServices.map((service, index) => {
                return (
                  <li key={index} className="grid-item">
                    <div className="content">
                      <div className="container-img">
                        <img
                          src={getFullImageURL(service.image)}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                      <div className="container-text">
                        <h3 className="service-name split-words">
                          {service.title}
                        </h3>
                        <p className="service-description">{service.description}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default serviceDescription;