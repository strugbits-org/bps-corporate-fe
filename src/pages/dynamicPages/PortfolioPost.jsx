import PortfolioIntoSection from "../../components/portfolioDetailPageSections/PortfolioIntoSection";
import GallerySection from "../../components/portfolioDetailPageSections/GallerySection";
import ExploreProjectsSection from "../../components/portfolioDetailPageSections/ExploreProjectsSection";
import SocialSection from "../../components/commonComponents/SocialSection";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSinglePortfolio, getPortfolioSectionDetails } from "../../redux/reducers/portfolioData";
import { useEffect } from "react";
import { setSeo } from "../../utilis/utilityFunctions";

const PortfoliPost = () => {
  const location = useLocation();
  const params = useParams();

  const dispatch = useDispatch();
  const { seo_data } = useSelector((state) => state.config);
  const data = useSelector((state) => state.portfolio.singlePortfolioData);

  // const loading = useSelector((state) => state.portfolio.portfolioLoading);
  // const error = useSelector((state) => state.services.error);

  useEffect(() => {
    dispatch(fetchSinglePortfolio(params.slug));
    dispatch(getPortfolioSectionDetails());
  }, [dispatch, location, params.slug]);

  useEffect(() => {
    if (data && seo_data) {
      const options = {
        ...seo_data,
        subpage: true,
        seo_title: data?.seoDesc?.title || data?.portfolioRef?.title,
        seo_description: data?.seoDesc?.description,
        no_follow_subpage: seo_data?.noFollowTag,
      }
      setSeo(options)
    };
  }, [dispatch, data, seo_data]);

  return (
    <>
      <PortfolioIntoSection />
      <GallerySection />
      <ExploreProjectsSection id={params.slug} />
      <SocialSection />
    </>
  );
};

export default PortfoliPost;
