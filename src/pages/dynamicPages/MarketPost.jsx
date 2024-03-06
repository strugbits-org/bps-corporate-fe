import MarketTopSection from "../../components/marketDetialPageSections/MarketTopSection";
import HowWeDoSection from "../../components/marketDetialPageSections/HowWeDoSection";
import ExplorePortfolio from "../../components/marketDetialPageSections/ExplorePortfolio";
import PeopleReviewSlider from "../../components/commonComponents/PeopleReviewSlider";
import MarketSection from "../../components/commonComponents/MarketSection";
import StudioSection from "../../components/commonComponents/StudioSection";
import SocialSection from "../../components/commonComponents/SocialSection";
import DreamBigSection from "../../components/commonComponents/DreamBigSection";

import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMarketTopsections } from "../../redux/reducers/marketData";


const MarketPost = () => {
  const location = useLocation(); 
  const params = useParams();

  const dispatch = useDispatch();

  const marketsData = useSelector((state) => state.market.marketTopData);
  // const loading = useSelector((state) => state.portfolio.portfolioLoading);
  
  // const [ portfolioData, setPortfolioData ] = useState(data);
  useEffect(() => {
    dispatch(fetchMarketTopsections(params.slug));
    // setPortfolioData(null);
    setTimeout(() => {
      document.querySelector(".updateWatchedTrigger").click();
      document.querySelector(".triggerSplitWordAnimation").click();
    }, 1500);
  }, [dispatch,location, params.slug]);

  return (
    <>
      <MarketTopSection data={marketsData} />
      <HowWeDoSection data={marketsData} />
      <ExplorePortfolio data={marketsData} />

      <PeopleReviewSlider/>
      <MarketSection/>
      <StudioSection/>
      <DreamBigSection/>
      <SocialSection/>
    </>
  );
};

export default MarketPost;
