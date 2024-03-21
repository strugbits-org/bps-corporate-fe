import IntroSection from '../components/aboutPageSections/IntroSection';
import OurDream from '../components/aboutPageSections/OurDream';
import OurFamily from '../components/aboutPageSections/OurFamily';
import SliderBanner from '../components/commonComponents/SliderBanner';
import AboutBottomSection from '../components/aboutPageSections/AboutBottomSection';
import SocialSection from '../components/commonComponents/SocialSection';
import DreamBigSection from '../components/commonComponents/DreamBigSection';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchSliderSection, getAboutSlider } from '../redux/reducers/aboutusData';

const AboutUs = () => {
  const disptach = useDispatch();
  const data = useSelector((state) => state.aboutus.SliderData);
  const sliderData = useSelector((state) => state.aboutus.AboutSlider);
  // const loading = useSelector((state) => state.aboutus.SliderLoading);
  // const error = useSelector((state) => state.aboutus.error);

  useEffect(() => {
   disptach(fetchSliderSection());
  }, [disptach]);

  useEffect(() => {
    disptach(getAboutSlider())
      },[disptach])
console.log(sliderData,"about slider data")
  return (
    <>
      <IntroSection />
      <OurDream />
      <OurFamily />
      <SliderBanner data={data} />
      <AboutBottomSection />
      <DreamBigSection />
      <SocialSection />
    </>
  )
}

export default AboutUs