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
import { useDispatch, useSelector } from "react-redux";
import { fetchMarketTopsections, getMarketsPostSectionDetails } from "../../redux/reducers/marketData";
import { fetchPortfolio } from "../../redux/reducers/portfolioData";
import { setSeo } from "../../utilis/utilityFunctions";

const MarketPost = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { seo_data } = useSelector((state) => state.config);
  const data = useSelector((state) => state.market.marketTopData);
  
  useEffect(() => {
    dispatch(getMarketsPostSectionDetails());
    dispatch(fetchMarketTopsections(params.slug));
    dispatch(fetchPortfolio({ pageSize: 4 }));
  }, [dispatch, params.slug]);

  useEffect(() => {
    if (data && seo_data) {
      const options = {
        ...seo_data,
        subpage: true,
        seo_title: data?.cardname,
        seo_description: data?.description,
        no_follow_subpage: seo_data?.noFollowTag,
      }
      setSeo(options)
    };
  }, [dispatch, data, seo_data]);

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
