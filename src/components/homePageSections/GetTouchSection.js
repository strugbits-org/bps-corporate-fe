import React from "react";
import { Link } from "react-router-dom";

const GetTouchSection = () => {
  return (
    <section className="home-solution pt-220 pb-110">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div
              className="container-text fs--40 fs-tablet-40 blue-1 split-words"
              data-aos="d:loop"
            >
              <p>
                From the beautiful simplicity of a single flower arrangement to
                the grandeur of a gala.
              </p>
              <p>From intimate milestone events to corporate conventions.</p>
              <p>
                Blueprint Studios is an all around solution to any occasion.
              </p>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-4 flex-center mt-lg-60 mt-mobile-50">
            <Link
              to={"/portfolio"}
              className="btn-blue btn-medium"
              data-aos="fadeIn - .3s, d:loop"
              data-cursor-style="off"
            >
              <span>Get In Touch </span>
              <i className="icon-arrow-right-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetTouchSection;
