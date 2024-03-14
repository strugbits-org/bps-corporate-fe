import IntroSection from '../components/aboutPageSections/IntroSection';
import OurDream from '../components/aboutPageSections/OurDream';
import OurFamily from '../components/aboutPageSections/OurFamily';
import SliderBanner from '../components/commonComponents/SliderBanner';
import AboutBottomSection from '../components/aboutPageSections/AboutBottomSection';
import SocialSection from '../components/commonComponents/SocialSection';
import DreamBigSection from '../components/commonComponents/DreamBigSection';

const AboutUs = () => {

  return (
    <>
      <IntroSection />
      <OurDream />
      <OurFamily />
      <SliderBanner />
      <AboutBottomSection />
      <DreamBigSection />
      <SocialSection />
    </>
  )
}

export default AboutUs