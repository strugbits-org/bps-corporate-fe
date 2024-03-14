import React, { useEffect, useState } from "react";
import PortfolioListing from "../components/ProtfolioPageSections/PortfolioListing";
import SocialSection from "../components/commonComponents/SocialSection";
import MarketSection from "../components/commonComponents/MarketSection";
import { useDispatch } from "react-redux";
import { listPortfolios } from "../utilis/queryCollections";

const Portfolio = () => {
  const dispatch = useDispatch();
  const [portfolioResponse, setPortfolioResponse] = useState(null);
  const [portfolioCollection, setPortfolioCollection] = useState([]);

  useEffect(() => {
    fetchCollection();
  }, [dispatch]);

  useEffect(() => {
    if (portfolioResponse && portfolioResponse.totalCount !== 0) {
      const newItems = portfolioResponse.items.map((item)=>item.data);
      setPortfolioCollection(portfolios => [...portfolios,...newItems]);
    }
  }, [portfolioResponse]);
  
  const fetchCollection = async ()=>{
    const response = await listPortfolios({pageSize : 50});
    setPortfolioResponse(response);
    document.querySelector(".updateWatchedTrigger").click();
  }

  const handleSeeMore = async ()=>{
    const response = await portfolioResponse.next();
    setPortfolioResponse(response);
  }

  return (
    <>
      <PortfolioListing totalCount={portfolioResponse?.totalCount} seeMore={handleSeeMore} data={portfolioCollection} />
      <MarketSection />
      <SocialSection />
    </>
  );
};

export default Portfolio;
