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
import {
  fetchServicesData,
  getServicesSlider,
} from "../../redux/reducers/servicesData";

const ServicePostPage = () => {
  const service = true;
  const location = useLocation();
  const params = useParams();

  const dispatch = useDispatch();
  const servicesData = useSelector((state) => state.services.servicesData);
  const servicesSlider = useSelector((state) => state.services.servicesSlider);
  // const loading = useSelector((state) => state.services.servicesLoading);
  // const error = useSelector((state) => state.services.error);

  useEffect(() => {
    if (servicesData?._id === undefined) {
      dispatch(fetchServicesData(params.slug));
    } else{
      dispatch(getServicesSlider(servicesData?._id));
    }
  }, [dispatch, location, params.slug, servicesData?._id]);

  return (
    <>
      <ServiceIntro data={servicesData} />
      {servicesData?.subServices.length !== 0 && (
        <ServiceDescription data={servicesData} />
      )}

      {/* commonComponents */}
      <SliderBanner  data={servicesSlider} type={service}/>
      <PeopleReviewSlider />
      <StudioSection />
      <DreamBigSection />
      <SocialSection />
    </>
  );
};

export default ServicePostPage;
