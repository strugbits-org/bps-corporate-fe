import MarketTopSection from "../../components/marketDetialPageSections/MarketTopSection";
import HowWeDoSection from "../../components/marketDetialPageSections/HowWeDoSection";
import ExplorePortfolio from "../../components/marketDetialPageSections/ExplorePortfolio";
import PeopleReviewSlider from "../../components/commonComponents/PeopleReviewSlider";
import MarketSection from "../../components/commonComponents/MarketSection";
import StudioSection from "../../components/commonComponents/StudioSection";
import SocialSection from "../../components/commonComponents/SocialSection";
import DreamBigSection from "../../components/commonComponents/DreamBigSection";

import { OAuthStrategy, createClient } from "@wix/sdk";
import React, { useEffect, useState } from "react";
import { collections, items } from "@wix/data";
import getFullImageURL from "../../common/common_functions/imageURL";
import { useLocation, useParams } from "react-router-dom";


const MarketPost = () => {
  const location = useLocation(); 
  const [marketsData, setMarketsData] = useState(null);
  const params = useParams();
  
  useEffect(() => {
    setMarketsData(null);
    async function getMarketCollection() {
      const wixClient = createClient({
        modules: { collections, items },
        auth: OAuthStrategy({
          clientId: "04038da0-732b-471d-babe-4e90ad785740",
        }),
      });

      let options = {
        dataCollectionId: "MarketSection",
        includeReferencedItems: ["howWeDoItSections"]
      };

      const { items: fetchedItems } = await wixClient.items
        .queryDataItems(options)
        .eq("slug", params.slug)
        .find();

      const marketsArray = fetchedItems.map((service) => {
        service.data.image = getFullImageURL(service.data.image);
        return service.data;
      });
      setMarketsData(marketsArray[0]);
    }
    getMarketCollection();
    setTimeout(() => {
      document.querySelector(".updateWatchedTrigger").click();
      document.querySelector(".triggerSplitWordAnimation").click();
    }, 1500);
  }, [location,params.slug]);

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
