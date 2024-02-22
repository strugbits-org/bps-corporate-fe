import React from "react";
import img6 from "../../utilis/images/lib/06_desktop.jpg"
import DelayedLink from "../../common/DelayedLink";

const IntroSection = () => {
  return (
    <>
      <section className="about-intro">
        <div data-sticky data-trigger="parent" className="z-3">
          <div
            className="container-img"
            data-parallax-top
            data-scale-from="1"
            data-end="bottom bottom"
            data-trigger=".about-intro"
            data-scale="0.4402"
            data-translate-y="5vh"
          >
            <img
              src={img6}
              data-preload
              className="media"
              data-parallax-top
              data-scale-from="1.3"
              data-end="95% bottom"
              data-trigger=".about-intro"
              alt=""
            />
          </div>
        </div>

        <div className="wrapper-content z-2 content-1">
          <h2
            className="title-we-are"
            data-parallax
            data-trigger=".about-intro"
            data-start="60% center"
            data-translate-y="20vh"
          >
            We are
          </h2>
        </div>
        <div className="wrapper-content z-4 content-2">
          <h2
            className="title-blue-print"
            data-parallax
            data-trigger=".about-intro"
            data-start="60% center"
            data-translate-y="20vh"
          >
            Blueprint Studios
          </h2>
        </div>

        <div className="wrapper-content z-4 content-3">
          <DelayedLink
            to="/"
            className="btn-border-blue"
            attributes={{
              "data-cursor-style": "off",
              "data-parallax": "",
              "data-trigger": ".about-intro",
              "data-translate-y-from": "20vh",
              "data-translate-y": "5vh",
              "data-end": "95% center",
              "data-start": "60% center",
            }}
          >
            <span>Watch the video</span>
            <i className="icon-arrow-right-2"></i>
          </DelayedLink>
        </div>
      </section>
      <section className="about-events pt-30">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <div className="wrapper-text text-center">
                <h3
                  className="fs--25"
                  data-parallax
                  data-translate-y-from="20vh"
                  data-end="center center"
                  data-trigger="parent"
                >
                  Events are crucial for enhancing brand awareness, offering
                  exclusive chances to showcase ideas, products, and services
                  intimately.
                </h3>
                <div
                  className="container-text font-2 fs--16 lh-1375 mt-15"
                  data-parallax
                  data-translate-y-from="30vh"
                  data-end="center center"
                  data-trigger="parent"
                >
                  <p>
                    We specialize in optimizing these engagements by
                    collaborating with you to craft an experience that elevates
                    your brand, conveys messages effectively, and captivates
                    attendees.
                  </p>
                  <p className="mt-20">
                    Our skilled team of strategists, designers, and engineers
                    collaborates seamlessly to orchestrate end-to-end events.
                    From planning and design to execution, we’re dedicated to
                    ensuring your event is a resounding success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-our-boards">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <ul className="list-boards">
                    <li
                      data-parallax
                      data-translate-y="-2.5rem"
                      data-rotate-to="-10deg"
                      data-translate-y-from="30vh"
                      data-end="center center"
                      data-trigger="parent"
                    >
                      <div className="content">
                        <h2 className="title">Our Commitment</h2>
                        <p className="text">
                          We are a trusted partner to the world's biggest brands
                          because we never stop trying to out-do ourselves. For
                          nearly 20 years we've been perfecting the art of event
                          design with our industry-leading event strategies,
                          cutting-edge technology, and trend-forward designs. We
                          reject the “business as usual” approach and work
                          tirelessly to ensure your event is executed to the
                          highest possible standards. From start to finish, this
                          is our commitment to you.
                        </p>
                      </div>
                    </li>
                    <li data-parallax data-translate-y="5rem">
                      <div className="content">
                        <h2 className="title">Our Culture</h2>
                        <p className="text">
                          With our company roots established in San Francisco,
                          the multi-cultural spirit of this city is deeply
                          engrained in our DNA. We believe in a diversity of
                          thought and a rich variety of voices. It's what makes
                          us stronger, more creative, and ultimately more
                          successful; inspiring exciting, innovative solutions.
                          We realize, with our team and our work, we have the
                          ability to deliver an experience for a globalist
                          world; one that resonates with a wider audience of
                          people.
                        </p>
                      </div>
                    </li>
                    <li
                      data-parallax
                      data-translate-y="-15rem"
                      data-rotate-from="30deg"
                      data-translate-y-from="20vh"
                      data-end="center center"
                      data-trigger="parent"
                    >
                      <div className="content">
                        <h2 className="title">Our Vision</h2>
                        <p className="text">
                          We believe in the un-status quo when it comes to event
                          design. Connecting people in a meaningful way, through
                          innovative and strategic event design that engages
                          guests in a multidimensional experience, is at the
                          very core of what we do and why we do it.
                        </p>
                      </div>
                    </li>
                    <li
                      data-parallax
                      data-translate-y="10rem"
                      data-translate-x="-5rem"
                      data-rotate-to="10deg"
                      data-rotate-from="30deg"
                      data-end="center center"
                    >
                      <div className="content">
                        <h2 className="title">Our People</h2>
                        <p className="text">
                          We are comprised of dedicated creatives, strategic
                          thinkers, visionaries, producers, fabricators, and
                          engineers — all here to deliver a one-of-a-kind event
                          experience. As your strategic partner, we work with
                          you every step of the way to ensure your vision and
                          brand is on point.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
    </>
  );
};

export default IntroSection;
