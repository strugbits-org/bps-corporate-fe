import React, { useEffect, useState } from "react";
import PortfolioListing from "../components/ProtfolioPageSections/PortfolioListing";
import SocialSection from "../components/commonComponents/SocialSection";
import MarketSection from "../components/commonComponents/MarketSection";
import { useDispatch, useSelector } from "react-redux";
import { listPortfolios } from "../utilis/queryCollections";
import { fetchStudioSection } from "../redux/reducers/homeData";
import { getMarketCollection } from "../redux/reducers/marketData";
import { updatedWatched } from "../utilis/animationsTriggers";
import { getPortfolioSectionDetails } from "../redux/reducers/portfolioData";

const Portfolio = () => {
  const dispatch = useDispatch();
  const [portfolioResponse, setPortfolioResponse] = useState(null);
  const [portfolioCollection, setPortfolioCollection] = useState([]);

  const studios = useSelector((state) => state.home.studioData);
  const markets = useSelector((state) => state.market.marketModel);
  const { portfolioSectionDetails } = useSelector((state) => state.portfolio);

  const pageSize = 8;
  useEffect(() => {
    dispatch(fetchStudioSection());
    dispatch(getMarketCollection());
    dispatch(getPortfolioSectionDetails());
    applyFilters({disableLoader : true});
  }, [dispatch]);
  
  const handleSeeMore = async () => {
    const response = await portfolioResponse.next();
    setPortfolioCollection(prev => [...prev, ...response.items.map(item => item.data)]);
    setPortfolioResponse(response);
    updatedWatched();
  }

  const applyFilters = async ({selectedStudios = [], selectedMarkets = [], disableLoader = false}) => {
    const response = await listPortfolios({ pageSize, studios: selectedStudios, markets: selectedMarkets, disableLoader });
    setPortfolioCollection(response.items.filter(item => item.data.portfolioRef._id !== undefined).map(item => item.data));
    setPortfolioResponse(response);
  }

  return (
    <>
      <PortfolioListing data={{ items: portfolioCollection, pageSize, studios, markets,portfolioSectionDetails, totalCount: portfolioResponse?.totalCount }} applyFilters={applyFilters} seeMore={handleSeeMore} />
      <MarketSection />
      <SocialSection />
    </>
  );
};

export default Portfolio;
