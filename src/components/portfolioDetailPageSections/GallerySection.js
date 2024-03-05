import React from "react";
import ProductCartSlider from "../commonComponents/ProductCartSlider";
import {gallery} from "../../common/constats/portfolioData";
const GallerySection = ({data}) => {
  return (
    <section className="portfolio-post-photo-gallery pt-lg-165 pt-tablet-105 pt-phone-145">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <h2
              className="fs--60 text-center mb-md-40 mb-phone-30 split-words"
              data-aos="d:loop"
            >
              {gallery.title}
            </h2>

            <div className="wrapper-gallery">
              <div className="module-photo-gallery-img-50 module-gallery">
                <div className="module-column" data-aos="d:loop">
                  <div className="container-img bg-blue">
                    <div className="wrapper-img">
                      <img
                        src={gallery.img1}
                        data-preload
                        className="media"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="module-column" data-aos="d:loop">
                  <div className="container-img bg-blue">
                    <div className="wrapper-img">
                      <img
                        src={gallery.img2}
                        data-preload
                        className="media"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="module-photo-gallery-img-100 module-gallery">
                <div className="module-column" data-aos="d:loop">
                  <div className="container-img bg-blue">
                    <div className="wrapper-img">
                      <img
                        src={gallery.img3}
                        data-preload
                        className="media"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-10 offset-lg-1 column-2">
            <div className="container-slider-produtcts">
              <h2 className="slider-title split-words" data-aos="d:loop">
                Products featured in this blog entry:
              </h2>

              <ProductCartSlider/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;