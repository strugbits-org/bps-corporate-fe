import PortfolioIntoSection from "../../components/portfolioDetailPageSections/PortfolioIntoSection";
import GallerySection from "../../components/portfolioDetailPageSections/GallerySection";
import ExploreProjectsSection from "../../components/portfolioDetailPageSections/ExploreProjectsSection";
import SocialSection from "../../components/commonComponents/SocialSection";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSinglePortfolio } from "../../redux/reducers/portfolioData";
import { useEffect } from "react";

const PortfoliPost = () => {
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
      handleCollectionLoaded();
    }
  }, [portfolioData]);


  // Load animation when all sections are loaded
  const numberOfCollections = 2;
  const collectionLoaded = [];
  const handleCollectionLoaded = () => {
    collectionLoaded.push(true);
    if (collectionLoaded.length === numberOfCollections) {
      setTimeout(() => {
        document.querySelector(".initScript").click();
      }, 200);
    }
  }

  return (
    <>
      <PortfolioIntoSection data={portfolioData} />
      <GallerySection data={portfolioData} />
      <ExploreProjectsSection handleCollectionLoaded={handleCollectionLoaded} data={portfolioData} />
      <SocialSection />
    </>
  );
};

export default PortfoliPost;
