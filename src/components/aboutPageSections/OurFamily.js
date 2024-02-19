import React from "react";
import img1 from "../../utilis/images/about/illumeet.png"
import img2 from "../../utilis/images/about/family01.jpg"
import img3 from "../../utilis/images/about/hensley.png"
import img4 from "../../utilis/images/about/family02.jpg"
import img5 from "../../utilis/images/about/vident.png"
import img6 from "../../utilis/images/about/family03.jpg"
import { Link } from "react-router-dom";
const OurFamily = () => {
  return (
    <section className="about-meet-the-rest-of-the-family pt-lg-245 pt-mobile-205">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-phone-8 offset-lg-3 mx-phone-auto">
            <h2
              className="fs--80 blue-1 text-center split-words"
              data-aos="d:loop"
            >
              Meet the rest of the family
            </h2>
          </div>
          <div className="col-lg-12 mt-lg-80 mt-mobile-40">
            <ul className="list-family">
              <li className="list-item item-01">
                <div className="content">
                  <div className="container-img logo-img">
                    <img
                      src={img1}
                      data-preload
                      className="media"
                      data-aos="scaleOut
                                .8s ease-out-cubic .2s, d:loop"
                                alt=""
                    />
                  </div>
                  <div
                    className="container-img bg-img"
                    data-aos="scaleOut .8s ease-out-cubic 0s, d:loop"
                  >
                    <img
                      src={img2}
                      data-preload
                      className="media"
                      data-parallax
                      data-scale-from="1.2"
                      alt=""
                    />
                  </div>
                  <div className="container-text">
                    <p>
                      Cloud based tech for digital events that are functional,
                      immersive and user friendly. Illumeet is the first event
                      ecosystem that approaches virtual experiences from space
                      planning and attendee journey.
                    </p>
                    <p>
                      We understand the importance of the user experience from
                      the event's perspective and create a custom road-map
                      ideating wire-frames that are as compelling as they are
                      functional, immersive, and engage key audiences.
                    </p>
                    <p>
                      Whether your event is a social gathering, a non-profit
                      gala, a conference or trade show experience, learn how our
                      platforms become the virtual venue to produce and host a
                      flawless virtual or hybrid engagements.
                    </p>
                  </div>
                  <div className="container-btn">
                    <Link
                      to="/"
                      className="btn-border-white"
                      data-cursor-style="off"
                    >
                      <span>Learn More</span>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="list-item item-02">
                <div className="content">
                  <div className="container-img logo-img">
                    <img
                      src={img3}
                      data-preload
                      className="media"
                      data-aos="scaleOut
                                .8s ease-out-cubic .3s, d:loop"
                                alt=""
                    />
                  </div>
                  <div
                    className="container-img bg-img"
                    data-aos="scaleOut .8s ease-out-cubic .1s, d:loop"
                  >
                    <img
                      src={img4}
                      data-preload
                      className="media"
                      data-parallax
                      data-scale-from="1.2"
                      alt=""
                    />
                  </div>
                  <div className="container-text">
                    <p>
                      Cloud based tech for digital events that are functional,
                      immersive and user friendly. Illumeet is the first event
                      ecosystem that approaches virtual experiences from space
                      planning and attendee journey.
                    </p>
                    <p>
                      We understand the importance of the user experience from
                      the event's perspective and create a custom road-map
                      ideating wire-frames that are as compelling as they are
                      functional, immersive, and engage key audiences.
                    </p>
                    <p>
                      Whether your event is a social gathering, a non-profit
                      gala, a conference or trade show experience, learn how our
                      platforms become the virtual venue to produce and host a
                      flawless virtual or hybrid engagements.
                    </p>
                  </div>
                  <div className="container-btn">
                    <Link
                      to="/"
                      className="btn-border-white"
                      data-cursor-style="off"
                    >
                      <span>Learn More</span>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="list-item item-03">
                <div className="content">
                  <div className="container-img logo-img">
                    <img
                      src={img5}
                      data-preload
                      className="media"
                      data-aos="scaleOut
                                .8s ease-out-cubic .4s, d:loop"
                                alt=""
                    />
                  </div>
                  <div
                    className="container-img bg-img"
                    data-aos="scaleOut .8s ease-out-cubic .2s, d:loop"
                    alt=""
                  >
                    <img
                      src={img6}
                      data-preload
                      className="media"
                      data-parallax
                      data-scale-from="1.2"
                      alt=""
                    />
                  </div>
                  <div className="container-text">
                    <p>
                      Vident Exhibits is our in-house exhibit studio.
                      Specializing in the design and production of corporate
                      exhibit environments.
                    </p>
                    <p>
                      Vident combines cutting-edge technology, ingenuity, and
                      craftsmanship to manufacture creative, quality trade show
                      displays, exhibits and empowering activations that enable
                      exhibitors to engage their customers in the most
                      innovative ways.
                    </p>
                  </div>
                  <div className="container-btn">
                    <Link
                      to="/"
                      className="btn-border-white"
                      data-cursor-style="off"
                    >
                      <span>Learn More</span>
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFamily;
