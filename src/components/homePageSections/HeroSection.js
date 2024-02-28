import img6 from "../../utilis/images/lib/06_desktop.jpg";

const HeroSection = ({items}) => {
  const img = items.map(item => item.data.topimage)
  console.log(img,"data here");
  return (
    <section className="home-intro" data-aos="d:loop">
      <div className="container-img">
        <img
          src={img6}
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
  );
};

export default HeroSection;
