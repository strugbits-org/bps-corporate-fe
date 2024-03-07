import IntroSection from '../components/aboutPageSections/IntroSection';
import OurDream from '../components/aboutPageSections/OurDream';
import OurFamily from '../components/aboutPageSections/OurFamily';
import SliderBanner from '../components/commonComponents/SliderBanner';
import AboutBottomSection from '../components/aboutPageSections/AboutBottomSection';
import SocialSection from '../components/commonComponents/SocialSection';
import { useEffect, useState } from 'react';

const AboutUs = () => {
 
    // Load animation when all sections are loaded
    const [loadedSections, setLoadedSections] = useState([])

    const numberOfSections = 5;
    const handleLoadingFinished = () => {
      setLoadedSections([...loadedSections, true]);
    }
    useEffect(() => {
      console.log("about us loadedSections",loadedSections);
      if (loadedSections.length === numberOfSections) {
        document.querySelector(".initScript").click();
      }
    }, [loadedSections])

  return (
    <>  
    <IntroSection handleLoadingFinished={handleLoadingFinished} />
    <OurDream handleLoadingFinished={handleLoadingFinished} />
    <OurFamily handleLoadingFinished={handleLoadingFinished} />
    <SliderBanner  handleLoadingFinished={handleLoadingFinished} />
    <AboutBottomSection handleLoadingFinished={handleLoadingFinished} />
    <SocialSection />
    </>
  )
}

export default AboutUs