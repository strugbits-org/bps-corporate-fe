import IntroSection from '../components/aboutPageSections/IntroSection';
import OurDream from '../components/aboutPageSections/OurDream';
import OurFamily from '../components/aboutPageSections/OurFamily';
import SliderBanner from '../components/commonComponents/SliderBanner';
import AboutBottomSection from '../components/aboutPageSections/AboutBottomSection';
import SocialSection from '../components/commonComponents/SocialSection';
import DreamBigSection from '../components/commonComponents/DreamBigSection';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAboutSectionDetails, getAboutSlider } from '../redux/reducers/aboutusData';
import AboutCardsSection from '../components/aboutPageSections/AboutCardsSection';

const AboutUs = () => {
  const dispatch = useDispatch();
  const { AboutSlider } = useSelector((state) => state.aboutus);
  const { sectionDetails } = useSelector((state) => state.aboutus);
  // const loading = useSelector((state) => state.aboutus.SliderLoading);
  // const error = useSelector((state) => state.aboutus.error);
  useEffect(() => {
    dispatch(getAboutSlider());
    dispatch(getAboutSectionDetails());
  }, [dispatch]);

  return (
    <>
      <IntroSection />
      <AboutCardsSection/>
      <OurDream />
      <OurFamily />
      <SliderBanner data={AboutSlider} type={false} sectionDetails={sectionDetails} />
      <AboutBottomSection />
      <DreamBigSection />
      <SocialSection />
    </>
  )
}

export default AboutUs