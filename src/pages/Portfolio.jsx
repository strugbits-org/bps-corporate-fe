import React, { useEffect, useState } from "react";
import PortfolioListing from "../components/ProtfolioPageSections/PortfolioListing";
import SocialSection from "../components/commonComponents/SocialSection";
import MarketSection from "../components/commonComponents/MarketSection";
import { useDispatch, useSelector } from "react-redux";
import { listPortfolios } from "../utilis/queryCollections";
import { fetchStudioSection } from "../redux/reducers/homeData";
import { getMarketCollection } from "../redux/reducers/marketData";
import { updatedWatched } from "../utilis/animtationsTriggers";

const Portfolio = () => {
  const dispatch = useDispatch();
  const [portfolioResponse, setPortfolioResponse] = useState(null);
  const [portfolioCollection, setPortfolioCollection] = useState([]);

  const studios = useSelector((state) => state.home.studioData);
  const markets = useSelector((state) => state.market.marketModel);

  useEffect(() => {
    dispatch(fetchStudioSection());
    dispatch(getMarketCollection());
    applyFilters({});
  }, [dispatch]);
  
  const handleSeeMore = async () => {
    const response = await portfolioResponse.next();
    setPortfolioCollection(prev => [...prev, ...response.items.map(item => item.data)]);
    setPortfolioResponse(response);
    updatedWatched();
  }

  const applyFilters = async ({selectedStudios = [], selectedMarkets = []}) => {
    const response = await listPortfolios({ pageSize : 8, studios: selectedStudios, markets: selectedMarkets });
    setPortfolioCollection(response.items.map(item => item.data));
    setPortfolioResponse(response);
  }

  return (
    <>
      <PortfolioListing data={{ items: portfolioCollection, studios, markets, totalCount: portfolioResponse?.totalCount }} applyFilters={applyFilters} seeMore={handleSeeMore} />
      <MarketSection />
      <SocialSection />
    </>
  );
};

export default Portfolio;
