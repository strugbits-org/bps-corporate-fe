import React, { useEffect, useState } from "react";
import getFullImageURL from "../../common/common_functions/imageURL";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudioSection } from "../../redux/reducers/homeData";
import { handleCollectionLoaded } from "../../utilis/loadAnimations";

const StudioSection = () => {
  const dispatch = useDispatch();
  const studioData = useSelector((state) => state.home.studioData);
  // const loading = useSelector((state) => state.home.studioLoading);
  // const error = useSelector((state) => state.home.error);

    useEffect(() => {
    dispatch(fetchStudioSection());
  }, [dispatch]);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const firstItem = studioData[0]; // Assuming you want values from the first item
  const title = firstItem ? firstItem.data.title : "";
  const desc = firstItem ? firstItem.data.description : "";

  useEffect(() => {
    if (studioData.length > 0 && handleCollectionLoaded) {
      handleCollectionLoaded();
    }
  }, [studioData]);

  return (
    <section className="section-studios">
      <div className="container-fluid">
        <div className="row row-1">
          <div className="col-lg-2 col-md-6">
            { title && 
            <h2
              className="fs--90 fs-tablet-40 blue-1 split-chars"
              data-aos="d:loop"
            >
              {title}
            </h2>
            }
          </div>
          <div className="col-lg-5 col-md-6 offset-lg-5 column-2">
            <p
              className="fs--40 fs-mobile-18 text"
              data-aos="fadeIn .6s ease-in-out .4s, d:loop"
            >
              {desc}
            </p>
          </div>
        </div>

        <div className="row mt-lg-95 mt-tablet-45 mt-phone-40">
          <div className="col-lg-12">
            <ul className="accordion-list-studios" data-aos="d:loop">
              {studioData.map((data, index) => {
              
                return (
                  <li key={index} 
                  className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => handleClick(index)}>
                    <div className="accordion-header">
                      <h3
                        className="accordion-title split-words"
                        data-aos="d:loop"
                      >
                        {data.data.cardName}
                      </h3>
                    </div>
                    <div className="accordion-content">
                      <div className="container-img bg-blue">
                        <img
                          src={getFullImageURL(data.data.image)}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                      <p className="accordion-text">
                        {data.data.cardDescription}
                      </p>
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

export default StudioSection;

