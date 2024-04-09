import React from "react";
import ProductCartSlider from "../commonComponents/ProductCartSlider";
import getFullImageURL from "../../common/common_functions/imageURL";
import { useState } from "react";
import { useEffect } from "react";
const GallerySection = ({ data }) => {

  const [gallery, setGallery] = useState([]);

  function convertGallery(images) {
    let desiredArray = [];

    for (let i = 0; i < images.length; i += 3) {
      let obj1 = { multipleImages: [images[i], images[i + 1]] };
      let obj2 = { fullImage: images[i + 2] };

      desiredArray.push(obj1, obj2);
    }

    return desiredArray;
  }

  useEffect(() => {
    if (data && data.galleryImages && data.galleryImages.length !== 0) {
      let formattedArray = convertGallery(data.galleryImages);
      setGallery(formattedArray);
    }
  }, [data])

  useEffect(() => {
    console.log("data.galleryImages", gallery);
  }, [gallery])
  

  return (
    <section className="portfolio-post-photo-gallery pt-lg-165 pt-tablet-105 pt-phone-145">
      <div className="container-fluid">
        <div className="row">
          { gallery.length !== 0 && (
          <div className="col-lg-10 offset-lg-1">
            <h2
              className="fs--60 text-center mb-md-40 mb-phone-30 split-words"
              data-aos="d:loop"
            >
              Photo gallery
            </h2>

            <div className="wrapper-gallery">
              {
                gallery.map((item, index) =>
                item.fullImage ? (
                    <div key={index} className="module-photo-gallery-img-100 module-gallery">
                      <div className="module-column" data-aos="d:loop">
                        <div className="container-img bg-blue">
                          <div className="wrapper-img">
                            <img
                              src={getFullImageURL(item.fullImage, true)}
                              data-preload
                              className="media"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : item.multipleImages && item.multipleImages.length !== 0 && (
                    <div key={index} className="module-photo-gallery-img-50 module-gallery">
                      {
                        item.multipleImages.map((imageUrl,_index) => {
                          return imageUrl && <div key={_index} className="module-column" data-aos="d:loop">
                            <div className="container-img bg-blue">
                              <div className="wrapper-img">
                                <img
                                  src={getFullImageURL(imageUrl,true)}
                                  data-preload
                                  className="media"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        })
                      }

                      {/* <div className="module-column" data-aos="d:loop">
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
                      </div> */}
                    </div>
                  )
                )
              }
              {/* <div className="module-photo-gallery-img-50 module-gallery">
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
              </div> */}

            </div>
          </div>
          )}
          <div className={`col-lg-10 offset-lg-1 column-2 ${data?.storeProducts.length === 0 ? "hidden" : ""}`} >
            <div className="container-slider-produtcts">
              <h2 className="slider-title split-words" data-aos="d:loop">
                Products featured in this project entry:
              </h2>

              <ProductCartSlider data={data} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;