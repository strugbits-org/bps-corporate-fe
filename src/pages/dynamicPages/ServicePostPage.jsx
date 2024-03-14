import ServiceIntro from "../../components/serviceDetailPageSections/ServiceIntro";
import ServiceDescription from "../../components/serviceDetailPageSections/serviceDescription";
import SliderBanner from "../../components/commonComponents/SliderBanner";
import PeopleReviewSlider from "../../components/commonComponents/PeopleReviewSlider";
import StudioSection from "../../components/commonComponents/StudioSection";
import DreamBigSection from "../../components/commonComponents/DreamBigSection";
import SocialSection from "../../components/commonComponents/SocialSection";
import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchServicesData } from "../../redux/reducers/servicesData";

const ServicePostPage = () => {

  const location = useLocation();
  const params = useParams();

  const dispatch = useDispatch();
  const servicesData = useSelector((state) => state.services.servicesData);
  // const loading = useSelector((state) => state.services.servicesLoading);
  // const error = useSelector((state) => state.services.error);

  useEffect(() => {
    dispatch(fetchServicesData(params.slug));
  }, [dispatch, location, params.slug]);
  

  return (
    <>
      <ServiceIntro data={servicesData} />
      <ServiceDescription data={servicesData} />
      {/* commonComponents */}
      <SliderBanner />
      <PeopleReviewSlider />
      <StudioSection />
      <DreamBigSection />
      <SocialSection />
    </>
  );
};

export default ServicePostPage;
