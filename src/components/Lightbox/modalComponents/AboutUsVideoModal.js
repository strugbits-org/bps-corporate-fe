import React from "react";
import { ModalWrapper } from "../ModalWrapper";
import { useSelector } from "react-redux";
import getFullVideoURL from '../../../common/common_functions/videoURL';

const AboutUsVideoModal = () => {
  const data = useSelector((state) => state.aboutus.IntroData);
  return (
    <ModalWrapper name={"modal-about-video"} no_wrapper={true}>
      <div className="container-img video-wrapper" data-aos="d:loop">
        {data && data.lightboxVideo ? (
          <video
            data-src={getFullVideoURL(data.lightboxVideo)}
            src={getFullVideoURL(data.lightboxVideo)}
            data-preload
            className="player-video media"
            autoPlay
            loop
            playsInline
          ></video>
        ) : (
          <h6
            className="fs--40 text-center split-words not_found_text"
            data-aos="d:loop"
          >
            No video found
          </h6>
        )}

      </div>
    </ModalWrapper>
  );
};

export default AboutUsVideoModal;
