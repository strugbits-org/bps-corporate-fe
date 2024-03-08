import HeroSection from "../components/homePageSections/HeroSection";
import FormConcept from "../components/homePageSections/FormConcept";
import GetTouchSection from "../components/homePageSections/GetTouchSection";
import StudioSection from "../components/commonComponents/StudioSection";
import OurProjectSection from "../components/homePageSections/OurProjectSection";
import RentalStoreSection from "../components/homePageSections/RentalStoreSection";
import DreamBigSection from "../components/commonComponents/DreamBigSection";
import SocialSection from "../components/commonComponents/SocialSection";
import PeopleReviewSLider from "../components/commonComponents/PeopleReviewSlider";
import MarketSection from "../components/commonComponents/MarketSection";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeTopData } from "../redux/reducers/homeData";
// import handleCollectionLoaded from "../utilis/loadAnimations";

const Home = () => {
  const dispatch = useDispatch();
  const homeTopData = useSelector((state) => state.home.homeTopData);
  // const loading = useSelector((state) => state.home.homeToploading);
  // const error = useSelector((state) => state.home.error);
  useEffect(() => {
    dispatch(fetchHomeTopData());
  }, [dispatch]);

  // Animations Load
  const numberOfCollections = 8;
  const [animationsLoaded, setAnimationsLoaded] = useState(false);
  const [collectionLoaded, setCollectionLoaded] = useState(0);

  const handleCollectionLoaded = useCallback(() => {
    setCollectionLoaded((prevCount) => prevCount + 1);
    if ((collectionLoaded + 1) >= numberOfCollections && !animationsLoaded) {
      setTimeout(() => {
        document.querySelector(".initScript").click();
      }, 200);
      setAnimationsLoaded(true);
      setCollectionLoaded(0);
    }
  }, [collectionLoaded]);
  // Animations Load
  
  useEffect(() => {
    if (homeTopData.length > 0) {
      handleCollectionLoaded();
      setTimeout(() => {
        document.querySelector(".stickyAnimationTrigger").click();
      }, 200);
    }
  }, [homeTopData]);
  
  return (
    <>
      {/* hero section here */}
      <HeroSection items={homeTopData} />
      {/* form concept section here */}
      <FormConcept items={homeTopData}/>
      {/* get touch section here */}
      <GetTouchSection handleCollectionLoaded={handleCollectionLoaded} />
      {/* studio section here */}
      <StudioSection handleCollectionLoaded={handleCollectionLoaded} />
      {/* Some of our project section */}
      <OurProjectSection handleCollectionLoaded={handleCollectionLoaded} />
      {/* people revive section here */}
      <PeopleReviewSLider handleCollectionLoaded={handleCollectionLoaded}/>
      {/* market section here */}
      <MarketSection handleCollectionLoaded={handleCollectionLoaded} />
      {/* rental store section here */}
      <RentalStoreSection handleCollectionLoaded={handleCollectionLoaded} />
      {/* Dream big Section here */}
      <DreamBigSection handleCollectionLoaded={handleCollectionLoaded} />
      {/* social section here */}
      <SocialSection />
    </>
  );
};

export default Home;