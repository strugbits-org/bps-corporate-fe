
const Loading = () => {
  return (
    <div id="loader">
      <div className="column-progress">
        <section className="loading-progressbar"></section>
      </div>
      <div className="container-logo">
        <div className="z-5">
          <img
            src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709040928/utiles/logo/logo-bps-b_wnegyd.svg"
            data-preload
            className="img-b z-3 media"
            alt=""
          />
        </div>
        <div className="z-4">
          <img
            src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709040930/utiles/logo/logo-bps-p_xjhbxm.svg"
            data-preload
            className="img-p z-2 media"
            alt=""
          />
        </div>
        <div className="z-3">
          <img
            src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709040932/utiles/logo/logo-bps-s_amm3nt.svg"
            data-preload
            className="img-s z-1 media"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
