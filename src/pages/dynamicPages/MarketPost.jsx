import MarketTopSection from "../../components/marketDetialPageSections/MarketTopSection";
import HowWeDoSection from "../../components/marketDetialPageSections/HowWeDoSection";
import ExplorePortfolio from "../../components/marketDetialPageSections/ExplorePortfolio";
import PeopleReviewSlider from "../../components/commonComponents/PeopleReviewSlider";
import MarketSection from "../../components/commonComponents/MarketSection";
import StudioSection from "../../components/commonComponents/StudioSection";
import SocialSection from "../../components/commonComponents/SocialSection";
import DreamBigSection from "../../components/commonComponents/DreamBigSection";

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchMarketTopsections, getMarketsPostSectionDetails } from "../../redux/reducers/marketData";
import { fetchPortfolio } from "../../redux/reducers/portfolioData";



const MarketPost = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMarketsPostSectionDetails());
    dispatch(fetchMarketTopsections(params.slug));
    dispatch(fetchPortfolio({ pageSize: 4 }));
  }, [dispatch, params.slug]);

  return (
    <>
      <MarketTopSection />
      <HowWeDoSection />
      <ExplorePortfolio slug={params?.slug} />

      <PeopleReviewSlider />
      <MarketSection />
      <StudioSection />
      <DreamBigSection />
      <SocialSection />
    </>
  );
};

export default MarketPost;
