import PortfolioIntoSection from "../../components/portfolioDetailPageSections/PortfolioIntoSection";
import GallerySection from "../../components/portfolioDetailPageSections/GallerySection";
import ExploreProjectsSection from "../../components/portfolioDetailPageSections/ExploreProjectsSection";
import SocialSection from "../../components/commonComponents/SocialSection";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSinglePortfolio } from "../../redux/reducers/portfolioData";
import { useEffect, useState } from "react";

const PortfoliPost = () => {
  const [loadedSections, setLoadedSections] = useState([])
  const location = useLocation();
  const params = useParams();

  const dispatch = useDispatch();
  const portfolioData = useSelector((state) => state.portfolio.singlePortfolioData);
  // const loading = useSelector((state) => state.portfolio.portfolioLoading);
  // const error = useSelector((state) => state.services.error);

  useEffect(() => {
    dispatch(fetchSinglePortfolio(params.slug));
  }, [dispatch, location, params.slug]);
  
  useEffect(() => {
    if (portfolioData) {
      setLoadedSections([...loadedSections, true]);
    }
  }, [portfolioData]);


  // Load animation when all sections are loaded

  const numberOfSections = 2;
  const handleLoadingFinished = () => {
    setLoadedSections([...loadedSections, true]);
  }
  useEffect(() => {
    console.log("portfolio loadedSections",loadedSections);
    if (loadedSections.length === numberOfSections) {
      document.querySelector(".initScript").click();
    }
  }, [loadedSections])

  return (
    <>
      <PortfolioIntoSection data={portfolioData} />
      <GallerySection data={portfolioData} />
      <ExploreProjectsSection handleLoadingFinished={handleLoadingFinished} data={portfolioData} />
      <SocialSection />
    </>
  );
};

export default PortfoliPost;
