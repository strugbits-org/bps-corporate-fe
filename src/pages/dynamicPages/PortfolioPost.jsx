import PortfolioIntoSection from "../../components/portfolioDetailPageSections/PortfolioIntoSection";
import GallerySection from "../../components/portfolioDetailPageSections/GallerySection";
import ExploreProjectsSection from "../../components/portfolioDetailPageSections/ExploreProjectsSection";
import SocialSection from "../../components/commonComponents/SocialSection";

import { OAuthStrategy, createClient } from "@wix/sdk";
import React, { useEffect, useState } from "react";
import { collections, items } from "@wix/data";
import getFullImageURL from "../../common/common_functions/imageURL";
import { useLocation, useParams } from "react-router-dom";

const PortfoliPost = () => {

  const location = useLocation(); 
  const [ portfolioData, setPortfolioData ] = useState(null);
  const params = useParams();
  useEffect(() => {
    setPortfolioData(null);
    async function getMarketCollection() {
      const wixClient = createClient({
        modules: { collections, items },
        auth: OAuthStrategy({
          clientId: "04038da0-732b-471d-babe-4e90ad785740",
        }),
      });

      let options = {
        dataCollectionId: "portfolioItems",
        includeReferencedItems: ["marketCategory","studioTags"]
      };

      const { items: fetchedItems } = await wixClient.items
        .queryDataItems(options)
        .eq("slug", params.slug)
        .find();

      const portfolioArray = fetchedItems.map((item) => {
        item.data.marketCategory = item.data.marketCategory.cardname;      
        item.data.studioTags = item.data.studioTags.map((tag)=>tag.cardName);
        item.data.image = getFullImageURL(item.data.image);
        return item.data;
      });
      setPortfolioData(portfolioArray[0]);
    }
    getMarketCollection();
    setTimeout(() => {
      document.querySelector(".updateWatchedTrigger").click();
      document.querySelector(".triggerSplitWordAnimation").click();
    }, 1500);
  }, [location,params.slug]);


  return (
    <>
      <PortfolioIntoSection data={portfolioData} />
      <GallerySection data={portfolioData} />
      <ExploreProjectsSection />
      <SocialSection/>
    </>
  );
};

export default PortfoliPost;
