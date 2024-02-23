import {dreambig} from "../../common/constats";

const DreamBigSection = () => {
  return (
    <section className="section-dream-big">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 offset-lg-4 column-1">
          <div className="container-img no-phone">
            <img
              src={dreambig.img1}
              data-preload
              className="media"
              alt=""
            />
          </div>
          <div className="container-img no-desktop no-tablet">
            <img
              src={dreambig.img2}
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
              <span>{dreambig.btntext}</span>
              <i className="icon-arrow-right-2"></i>
            </btn-modal-open>
            <p
              className="fs--20 flex-center fs-phone-16 fw-500 font-2 blue-1 text-center pos-relative z-5 mt-30 text"
              data-parallax
              data-trigger=".section-dream-big"
              data-translate-y-from="30vh"
              data-end="center center"
           
            >
              {dreambig.p1} <br />
              {dreambig.p2}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default DreamBigSection