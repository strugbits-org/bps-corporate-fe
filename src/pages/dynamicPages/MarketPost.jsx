import MarketTopSection from "../../components/marketDetialPageSections/MarketTopSection";
import HowWeDoSection from "../../components/marketDetialPageSections/HowWeDoSection";
import ExplorePortfolio from "../../components/marketDetialPageSections/ExplorePortfolio";
import PeopleReviewSlider from "../../components/commonComponents/PeopleReviewSlider";
import MarketSection from "../../components/commonComponents/MarketSection";
import StudioSection from "../../components/commonComponents/StudioSection";
import SocialSection from "../../components/commonComponents/SocialSection";
import DreamBigSection from "../../components/commonComponents/DreamBigSection";

import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMarketTopsections } from "../../redux/reducers/marketData";
import { fetchPortfolio } from "../../redux/reducers/portfolioData";



const MarketPost = () => {
  const location = useLocation(); 
  const params = useParams();

  const dispatch = useDispatch();

  const marketsData = useSelector((state) => state.market.marketTopData);
  const portfolioCollection = useSelector((state) => state.portfolio.portfolioData).data;
  const [filteredPortfolioCollection, setFilteredPortfolioCollection] = useState(portfolioCollection);
  
  // const loading = useSelector((state) => state.portfolio.portfolioLoading);
  
  // const [ portfolioData, setPortfolioData ] = useState(data);
  useEffect(() => {
    dispatch(fetchMarketTopsections(params.slug));
    dispatch(fetchPortfolio());

    setTimeout(() => {
      document.querySelector(".updateWatchedTrigger").click();
      document.querySelector(".triggerSplitWordAnimation").click();
    }, 1500);
  }, [dispatch,location, params.slug]);

  useEffect(() => {
    const filteredProjects = portfolioCollection.filter(item => item.marketCategory.toLowerCase() === params.slug);
    setFilteredPortfolioCollection(filteredProjects);
  }, [portfolioCollection,params.slug]);

  useEffect(() => {
    if (marketsData) {
      handleCollectionLoaded();
    }
  }, [marketsData]);

  // Animations Load
  const numberOfCollections = 5;
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
      <MarketTopSection data={marketsData} />
      <HowWeDoSection data={marketsData} />
      <ExplorePortfolio data={filteredPortfolioCollection} />

      <PeopleReviewSlider handleCollectionLoaded={handleCollectionLoaded}/>
      <MarketSection handleCollectionLoaded={handleCollectionLoaded}/>
      <StudioSection handleCollectionLoaded={handleCollectionLoaded}/>
      <DreamBigSection handleCollectionLoaded={handleCollectionLoaded}/>
      <SocialSection/>
    </>
  );
};

export default MarketPost;
