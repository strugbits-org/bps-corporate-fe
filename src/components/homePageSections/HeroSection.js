import {HeroData} from "../../common/constats/constats";

const HeroSection = () => {
  return (
    <section className="home-intro" data-aos="d:loop">
    <div className="container-img">
      <img
        src={HeroData.image}
        data-preload
        className="media"
        alt=""
        data-parallax-top
        data-translate-y="50%"
      />
    </div>
    <p className="fs--14 font-2 blue-1">
     {HeroData.desc}
    </p>
  </section>
  
  )
}

export default HeroSection