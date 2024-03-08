import PortfolioIntoSection from "../../components/portfolioDetailPageSections/PortfolioIntoSection";
import GallerySection from "../../components/portfolioDetailPageSections/GallerySection";
import ExploreProjectsSection from "../../components/portfolioDetailPageSections/ExploreProjectsSection";
import SocialSection from "../../components/commonComponents/SocialSection";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSinglePortfolio } from "../../redux/reducers/portfolioData";
import { useCallback, useEffect, useState } from "react";

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


  // Animations Load
  const numberOfCollections = 2;
  const [animationsLoaded, setAnimationsLoaded] = useState(false);
  const [collectionLoaded, setCollectionLoaded] = useState(0);

  const handleCollectionLoaded = useCallback(() => {
    setCollectionLoaded((prevCount) => prevCount + 1);
    if ((collectionLoaded + 1) >= numberOfCollections && !animationsLoaded) {
      setTimeout(() => {
        document.querySelector(".initScript").click();
      }, 400);
      setAnimationsLoaded(true);
      setCollectionLoaded(0);
    }
  }, [collectionLoaded]);
  // Animations Load

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
