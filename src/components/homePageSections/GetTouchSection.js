import React from "react";
import { Link } from "react-router-dom";
import {datagettouch} from "../../common/constats/constats";
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
                {datagettouch.p1}
              </p>
              <p>{datagettouch.p2}</p>
              <p>
                {datagettouch.p3}
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
              <span>{datagettouch.btntext} </span>
              <i className="icon-arrow-right-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetTouchSection;
