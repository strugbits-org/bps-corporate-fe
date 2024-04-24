import ServiceIntro from "../../components/serviceDetailPageSections/ServiceIntro";
import SliderBanner from "../../components/commonComponents/SliderBanner";
import PeopleReviewSlider from "../../components/commonComponents/PeopleReviewSlider";
import StudioSection from "../../components/commonComponents/StudioSection";
import DreamBigSection from "../../components/commonComponents/DreamBigSection";
import SocialSection from "../../components/commonComponents/SocialSection";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchServicesData,
  getServicesSectionDetails,
  getServicesSlider,
} from "../../redux/reducers/servicesData";
import { SubSectionServices } from "../../components/serviceDetailPageSections/SubSectionServices";
import { setSeo } from "../../utilis/utilityFunctions";
// import { fetchHomeSectionDetails } from "../../redux/reducers/homeData";

const ServicePostPage = () => {
  const service = true;
  const params = useParams();

  const dispatch = useDispatch();
  const { servicesData, servicesSlider, servicesSectionDetails } = useSelector((state) => state.services);
  const { seo_data } = useSelector((state) => state.config);

  // const loading = useSelector((state) => state.services.servicesLoading);
  // const error = useSelector((state) => state.services.error);

  useEffect(() => {
    dispatch(fetchServicesData(params.slug));
    dispatch(getServicesSectionDetails());
    // dispatch(fetchHomeSectionDetails());
  }, [dispatch, params.slug]);

  useEffect(() => {
    if (servicesData?._id !== undefined) dispatch(getServicesSlider(servicesData?._id));
  }, [dispatch, servicesData]);

  useEffect(() => {
    if (servicesData?._id !== undefined && seo_data) {
      const options = {
        ...seo_data,
        subpage: true,
        seo_title: servicesData?.cardName,
        seo_description: servicesData?.cardDescription,
        no_follow_subpage: seo_data?.noFollowTag,
      }
      setSeo(options)
    };
  }, [dispatch, servicesData, seo_data]);

  return (
    <>
      <ServiceIntro />
      <SubSectionServices />

      {/* commonComponents */}
      <SliderBanner data={servicesSlider} type={service} sectionDetails={servicesSectionDetails} />
      <PeopleReviewSlider />
      <StudioSection />
      <DreamBigSection />
      <SocialSection />
    </>
  );
};

export default ServicePostPage;
