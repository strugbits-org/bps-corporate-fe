import React from "react";
import ExploreWorkSection from "../components/ProtfolioPageSections/ExploreWorkSection";
import SocialSection from "../components/commonComponents/SocialSection";
import MarketSection from "../components/commonComponents/MarketSection";

const Portfolio = () => {
  // Load animation when all sections are loaded
  const numberOfCollections = 2;
  const collectionLoaded = [];
  const handleCollectionLoaded = () => {
    collectionLoaded.push(true);
    if (collectionLoaded.length === numberOfCollections) {
      setTimeout(() => {
        document.querySelector(".initScript").click();
      }, 200);
    }
  }

  return (
    <>
      <ExploreWorkSection handleCollectionLoaded ={handleCollectionLoaded } />
      <MarketSection handleCollectionLoaded ={handleCollectionLoaded } />
      <SocialSection />
    </>
  );
};

export default Portfolio;
