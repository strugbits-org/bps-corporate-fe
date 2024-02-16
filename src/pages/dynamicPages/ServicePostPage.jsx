import ServiceIntro from "../../components/serviceDetailPageSections/ServiceIntro";
import ServiceDescription from "../../components/serviceDetailPageSections/serviceDescription";
import SliderBanner from "../../components/commonComponents/SliderBanner";
import PeopleReviewSlider from "../../components/commonComponents/PeopleReviewSlider";
import StudioSection from "../../components/commonComponents/StudioSection";
import DreamBigSection from "../../components/commonComponents/DreamBigSection";
import SocialSection from "../../components/commonComponents/SocialSection";

const ServicePostPage = () => {
  return (
    <>
      <ServiceIntro />
      <ServiceDescription />
      <SliderBanner/>
      <PeopleReviewSlider/>
      <StudioSection/>
      <DreamBigSection/>
      <SocialSection/>
    </>
  );
};

export default ServicePostPage;
