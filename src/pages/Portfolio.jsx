import React, { useEffect, useState } from "react";
import PortfolioListing from "../components/ProtfolioPageSections/PortfolioListing";
import SocialSection from "../components/commonComponents/SocialSection";
import MarketSection from "../components/commonComponents/MarketSection";
import { useDispatch, useSelector } from "react-redux";
import { listPortfolios } from "../utilis/queryCollections";
import { updatedWatched } from "../utilis/animationsTriggers";
import { getPortfolioSectionDetails } from "../redux/reducers/portfolioData";
import { handleCollectionLoaded } from "../utilis/pageLoadingAnimation";

const Portfolio = () => {
  const dispatch = useDispatch();
  const [portfolioResponse, setPortfolioResponse] = useState(null);
  const [portfolioCollection, setPortfolioCollection] = useState([]);

  const studios = useSelector((state) => state.home.studioData);
  const markets = useSelector((state) => state.market.marketModel);
  const { portfolioSectionDetails } = useSelector((state) => state.portfolio);

  const pageSize = 8;
  useEffect(() => {
    dispatch(getPortfolioSectionDetails());
    applyFilters({ disableLoader: true });
  }, [dispatch]);

  const handleSeeMore = async () => {
    const response = await portfolioResponse.next();
    setPortfolioCollection(prev => [...prev, ...response._items.map(item => item.data)]);
    setPortfolioResponse(response);
    updatedWatched();
  }

  const applyFilters = async ({ selectedStudios = [], selectedMarkets = [], disableLoader = false }) => {
    const response = await listPortfolios({ pageSize, studios: selectedStudios, markets: selectedMarkets, disableLoader });
    setPortfolioCollection(response._items.filter(item => item.data.portfolioRef._id !== undefined).map(item => item.data));
    setPortfolioResponse(response);
    handleCollectionLoaded();
  }

  return (
    <>
      <PortfolioListing data={
        {
          items: portfolioCollection,
          pageSize,
          studios: studios.filter(x => x.filters),
          markets,
          portfolioSectionDetails,
          totalCount: portfolioResponse?.totalCount
        }
      } applyFilters={applyFilters} seeMore={handleSeeMore} />
      <MarketSection />
      <SocialSection />
    </>
  );
};

export default Portfolio;
