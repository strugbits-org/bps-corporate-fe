import React from 'react'

const HeroSection = () => {
  return (
    <section className="home-intro" data-aos="d:loop">
    <div className="container-img">
      <img
        src="images/lib/06_desktop.jpg"
        data-preload
        className="media"
        alt=""
        data-parallax-top
        data-translate-y="50%"
      />
    </div>
    <p className="fs--14 font-2 blue-1">
      © Blueprint studios. All rights reserved.
    </p>
  </section>
  
  )
}

export default HeroSection