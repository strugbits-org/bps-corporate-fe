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

  // const [ portfolioData, setPortfolioData ] = useState(data);
  useEffect(() => {
    dispatch(fetchSinglePortfolio(params.slug));
    // setPortfolioData(null);
    setTimeout(() => {
      document.querySelector(".updateWatchedTrigger").click();
      document.querySelector(".triggerSplitWordAnimation").click();
    }, 1500);
  }, [dispatch, location, params.slug]);

  return (
    <>
      <PortfolioIntoSection data={portfolioData} />
      <GallerySection data={portfolioData} />
      <ExploreProjectsSection data={portfolioData} />
      <SocialSection />
    </>
  );
};

export default PortfoliPost;
