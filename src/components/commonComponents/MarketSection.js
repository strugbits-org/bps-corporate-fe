import DelayedLink from "../../common/DelayedLink";
import React, { useEffect } from "react";
import getFullImageURL from "../../common/common_functions/imageURL";
import { fetchMarketSection } from "../../redux/reducers/homeData";
import { useDispatch, useSelector } from "react-redux";

const MarketSection = () => {
  let data_delay = 0;

  const dispatch = useDispatch();
  const data = useSelector((state) => state.home.marketData);
  // const loading = useSelector((state) => state.home.marketLoading);
  // const error = useSelector((state) => state.home.error);

  const firstItem = data[0];
  const title = firstItem ? firstItem.data.title : "";

  useEffect(() => {
    dispatch(fetchMarketSection());
  }, [dispatch]);

  return (
    <section className={`section-markets ${data.length === 0 ? "hidden" : ""}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 offset-lg-5">
            <h2
              className="fs--60 fs-phone-40 blue-1 text-center split-chars"
              data-aos="d:loop"
            >
              {title}
            </h2>
          </div>
          <div className="col-12 mt-lg-50 mt-tablet-40 mt-phone-35">
            <ul className="list-markets list-projects font-60 grid-lg-25 grid-tablet-50">
              {data.map((data, index) => {
                data_delay += 50;

                return (
                  <li
                    key={index}
                    className="grid-item list-item"
                    data-aos="d:loop"
                    data-delay-desktop={data_delay.toString()}
                  >
                    <DelayedLink
                      to={`/market-post/${data.data.slug}`}
                      className="market-link project-link"
                      attributes={{
                        "data-cursor-style": "view",
                        "data-menu-close": "",
                      }}
                    >
                      <div
                        className="container-img bg-blue"
                        data-cursor-style="view"
                      >
                        <img
                          src={getFullImageURL(data.data.image)}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                      <div className="container-text">
                        <h3 className="title-project split-words">
                          {data.data.cardname}
                        </h3>
                        <ul className="list-tags">
                          {data.data.marketTags.map((tag, index) => (
                            <li key={index}>
                              <span>{tag}</span>
                            </li>
                          ))}
                          ;
                        </ul>
                      </div>
                    </DelayedLink>
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

export default MarketSection;
