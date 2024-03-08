import IntroSection from '../components/aboutPageSections/IntroSection';
import OurDream from '../components/aboutPageSections/OurDream';
import OurFamily from '../components/aboutPageSections/OurFamily';
import SliderBanner from '../components/commonComponents/SliderBanner';
import AboutBottomSection from '../components/aboutPageSections/AboutBottomSection';
import SocialSection from '../components/commonComponents/SocialSection';
import { useCallback, useState } from 'react';

const AboutUs = () => {

  // Animations Load
  const numberOfCollections = 4;
  const [animationsLoaded, setAnimationsLoaded] = useState(false);
  const [collectionLoaded, setCollectionLoaded] = useState(0);

  const handleCollectionLoaded = useCallback(() => {
    setCollectionLoaded((prevCount) => prevCount + 1);
    if ((collectionLoaded + 1) >= numberOfCollections && !animationsLoaded) {
      setAnimationsLoaded(true);
      setCollectionLoaded(0);
      setTimeout(() => {
        document.querySelector(".initScript").click();
      }, 400);
    }
  }, [collectionLoaded]);
  // Animations Load

  return (
    <>
      <IntroSection handleCollectionLoaded={handleCollectionLoaded} />
      <OurDream handleCollectionLoaded={handleCollectionLoaded} />
      <OurFamily handleCollectionLoaded={handleCollectionLoaded} />
      <SliderBanner handleCollectionLoaded={handleCollectionLoaded} />
      <AboutBottomSection handleCollectionLoaded={handleCollectionLoaded} />
      <SocialSection />
    </>
  )
}

export default AboutUs