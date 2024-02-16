import MarketTopSection from "../../components/marketDetialPageSections/MarketTopSection";
import HowWeDoSection from "../../components/marketDetialPageSections/HowWeDoSection";
import ExplorePortfolio from "../../components/marketDetialPageSections/ExplorePortfolio";
import PeopleReviewSlider from "../../components/commonComponents/PeopleReviewSlider";
import MarketSection from "../../components/commonComponents/MarketSection";
import StudioSection from "../../components/commonComponents/StudioSection";
import SocialSection from "../../components/commonComponents/SocialSection";
import DreamBigSection from "../../components/homePageSections/DreamBigSection";
const MarketPost = () => {
  return (
    <>
      <MarketTopSection />
      <HowWeDoSection />
      <ExplorePortfolio />
      <PeopleReviewSlider/>
      <MarketSection/>
      <StudioSection/>
      <DreamBigSection/>
      <SocialSection/>
    </>
  );
};

export default MarketPost;
