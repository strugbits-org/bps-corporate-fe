import React from 'react'
import img1 from "../../utilis/images/dream-big.jpg"
import img2 from "../../utilis/images/dream-big-mobile.jpg"

const DreamBigSection = () => {
  return (
    <section className="section-dream-big">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 offset-lg-4 column-1">
          <div className="container-img no-phone">
            <img
              src={img1}
              data-preload
              className="media"
              alt=""
            />
          </div>
          <div className="container-img no-desktop no-tablet">
            <img
              src={img2}
              data-preload
              className="media"
              alt=""
            />
          </div>
          <div
            data-parallax
            data-trigger=".section-dream-big"
            data-translate-y-from="30vh"
            data-end="center center"
            className="content"
          >
            <btn-modal-open
              group="modal-contact"
              class="btn-blue"
              data-cursor-style="off"
            >
              <span>Let's Craft Magic Together</span>
              <i className="icon-arrow-right-2"></i>
            </btn-modal-open>
            <p
              className="fs--20 flex-center fs-phone-16 fw-500 font-2 blue-1 text-center pos-relative z-5 mt-30 text"
              data-parallax
              data-trigger=".section-dream-big"
              data-translate-y-from="30vh"
              data-end="center center"
           
            >
              Click the button to start the journey. <br />
              Contact us and let's turn your ideas into extraordinary
              experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default DreamBigSection