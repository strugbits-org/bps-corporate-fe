import React, { useEffect } from "react";
import ExploreWorkSection from "../components/ProtfolioPageSections/ExploreWorkSection";
import SocialSection from "../components/commonComponents/SocialSection";
import MarketSection from "../components/commonComponents/MarketSection";
import { useDispatch, useSelector } from "react-redux";
import { fetchPortfolio } from "../redux/reducers/portfolioData";

const Portfolio = () => {

  const dispatch = useDispatch();
  const portfolioCollection = useSelector((state) => state.portfolio.portfolioData);
  
  useEffect(() => {
    dispatch(fetchPortfolio());
  }, [dispatch]);

  useEffect(() => {
    console.log("portfolioCollection",portfolioCollection);
  }, [portfolioCollection]);
  
  return (
    <>
      {/* <ExploreWorkSection /> */}
      <MarketSection />
      <SocialSection />
    </>
  );
};

export default Portfolio;
