import React, { useCallback, useState } from "react";
import ExploreWorkSection from "../components/ProtfolioPageSections/ExploreWorkSection";
import SocialSection from "../components/commonComponents/SocialSection";
import MarketSection from "../components/commonComponents/MarketSection";

const Portfolio = () => {
  // Animations Load
  const numberOfCollections = 2;
  const [animationsLoaded, setAnimationsLoaded] = useState(false);
  const [collectionLoaded, setCollectionLoaded] = useState(0);

  const handleCollectionLoaded = useCallback(() => {
    setCollectionLoaded((prevCount) => prevCount + 1);
    if ((collectionLoaded + 1) >= numberOfCollections && !animationsLoaded) {
      setTimeout(() => {
        document.querySelector(".initScript").click();
      }, 400);
      setAnimationsLoaded(true);
      setCollectionLoaded(0);
    }
  }, [collectionLoaded]);
  // Animations Load

  return (
    <>
      <ExploreWorkSection handleCollectionLoaded ={handleCollectionLoaded } />
      <MarketSection handleCollectionLoaded ={handleCollectionLoaded } />
      <SocialSection />
    </>
  );
};

export default Portfolio;
