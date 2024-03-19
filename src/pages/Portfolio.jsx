import React, { useEffect, useState } from "react";
import PortfolioListing from "../components/ProtfolioPageSections/PortfolioListing";
import SocialSection from "../components/commonComponents/SocialSection";
import MarketSection from "../components/commonComponents/MarketSection";
import { useDispatch, useSelector } from "react-redux";
import { listPortfolios } from "../utilis/queryCollections";
import { handleCollectionLoaded } from "../utilis/loadAnimations";
import { fetchStudioSection } from "../redux/reducers/homeData";
import { getMarketCollection } from "../redux/reducers/marketData";

const Portfolio = () => {
  const dispatch = useDispatch();
  const [portfolioResponse, setPortfolioResponse] = useState(null);
  const [portfolioCollection, setPortfolioCollection] = useState([]);

  const studios = useSelector((state) => state.home.studioData);
  const markets = useSelector((state) => state.market.marketModel);

  useEffect(() => {
    // fetchCollection();
    dispatch(fetchStudioSection());
    dispatch(getMarketCollection());
  }, [dispatch]);
  
  // const fetchCollection = async () => {
  //   const response = await listPortfolios({pageSize : 8});
  //   setPortfolioCollection(response.items.map((item)=>item.data));
  //   setPortfolioResponse(response);

  //   handleCollectionLoaded();
  //   // document.querySelector(".updateWatchedTrigger").click();
  // }

  const handleSeeMore = async () => {
    const response = await portfolioResponse.next();
    setPortfolioResponse(response);
    setTimeout(() => {
      document.querySelector(".updateWatchedTrigger").click();
    }, 400);
  }

  const applyFilters = async ({selectedStudios = [], selectedMarkets = []}) => {
    console.log("hello hello");
    const response = await listPortfolios({ pageSize : 8, studios: selectedStudios, markets: selectedMarkets });
    console.log("response",response);
    setPortfolioCollection(response.items.map((item)=>item.data));
    setPortfolioResponse(response);
    setTimeout(() => {
      document.querySelector(".updateWatchedTrigger").click();
    }, 400);
  }

  return (
    <>
      <PortfolioListing data={{items: portfolioCollection, studios, markets, totalCount: portfolioResponse?.totalCount}} applyFilters={applyFilters} seeMore={handleSeeMore} />
      <MarketSection />
      <SocialSection />
    </>
  );
};

export default Portfolio;
