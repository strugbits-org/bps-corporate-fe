import React, { useEffect } from "react";
import { fetchCardsSection } from "../../redux/reducers/aboutusData";
import { useDispatch, useSelector } from "react-redux";

const AboutCardsSection = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.aboutus.aboutCards);

  useEffect(() => {
    dispatch(fetchCardsSection());
  }, [dispatch]);

  const properties = [
    {
      translateY: "-2.5rem",
      rotateTo: "-10deg",
      translateYfrom: "30vh",
      dataEnd: "center center",
      dataTrigger: "parent",
    },
    {
      translateY: "5rem",
    },

    {
      translateY: "-15rem",
      rotateFrom: "30deg",
      translateYfrom: "20vh",
      dataEnd: "center center",
      dataTrigger: "parent",
    },
    {
      translateY: "10rem",
      translateX: "-5rem",
      rotateTo: "10deg",
      rotateFrom: "30deg",
      dataEnd: "center center",
    },
  ];

  return (
    <section className="about-our-boards">
    <div className="container-fluid">
        <div className="row">
        <div className="col-lg-8 offset-lg-2">
            <ul className="list-boards">
            {data.map((item, index) => {
                const {
                translateY,
                rotateTo,
                translateYfrom,
                dataEnd,
                dataTrigger,
                translateX,
                rotateFrom,
                } = properties[index] || {};

                return (
                <li
                    key={index}
                    data-parallax
                    data-translate-y={translateY || ""}
                    data-rotate-to={rotateTo || ""}
                    data-translate-y-from={translateYfrom || ""}
                    data-end={dataEnd || ""}
                    data-trigger={dataTrigger || ""}
                    data-translate-x={translateX || ""}
                    data-rotate-from={rotateFrom || ""}
                >
                    <div className="content">
                    <h2 className="title">{item.title}</h2>
                    <p className="text">{item.description}</p>
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

export default AboutCardsSection;