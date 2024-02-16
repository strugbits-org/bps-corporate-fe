import PortfolioIntoSection from "../../components/portfolioDetailPageSections/PortfolioIntoSection";
import GallerySection from "../../components/portfolioDetailPageSections/GallerySection";
import ExploreProjectsSection from "../../components/portfolioDetailPageSections/ExploreProjectsSection";
import SocialSection from "../../components/commonComponents/SocialSection";

const PortfoliPost = () => {
  return (
    <>
      <PortfolioIntoSection />
      <GallerySection />
      <ExploreProjectsSection />
      <SocialSection/>
    </>
  );
};

export default PortfoliPost;
