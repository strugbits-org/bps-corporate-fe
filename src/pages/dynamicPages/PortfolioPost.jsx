import PortfolioIntoSection from "../../components/portfolioDetailPageSections/PortfolioIntoSection";
import GallerySection from "../../components/portfolioDetailPageSections/GallerySection";
import ExploreProjectsSection from "../../components/portfolioDetailPageSections/ExploreProjectsSection";
import SocialSection from "../../components/commonComponents/SocialSection";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSinglePortfolio, getPortfolioSectionDetails } from "../../redux/reducers/portfolioData";
import { useEffect } from "react";

const PortfoliPost = () => {
  const location = useLocation();
  const params = useParams();

  const dispatch = useDispatch();
  const portfolioData = useSelector((state) => state.portfolio.singlePortfolioData);
  const { portfolioSectionDetails } = useSelector((state) => state.portfolio);
  // const loading = useSelector((state) => state.portfolio.portfolioLoading);
  // const error = useSelector((state) => state.services.error);

  useEffect(() => {
    dispatch(fetchSinglePortfolio(params.slug));
    dispatch(getPortfolioSectionDetails());
  }, [dispatch, location, params.slug]);

  return (
    <>
      <PortfolioIntoSection data={portfolioData} />
      <GallerySection title={portfolioSectionDetails?.gallerySectionTitle} productsTitle={portfolioSectionDetails?.productsSectionTitle} data={portfolioData} />
      <ExploreProjectsSection title={portfolioSectionDetails?.otherProjectsTitle} id={params.slug} />
      <SocialSection />
    </>
  );
};

export default PortfoliPost;
