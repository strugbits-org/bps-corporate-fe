import ServiceIntro from "../../components/serviceDetailPageSections/ServiceIntro";
import ServiceDescription from "../../components/serviceDetailPageSections/serviceDescription";
import SliderBanner from "../../components/commonComponents/SliderBanner";
import PeopleReviewSlider from "../../components/commonComponents/PeopleReviewSlider";
import StudioSection from "../../components/commonComponents/StudioSection";
import DreamBigSection from "../../components/commonComponents/DreamBigSection";
import SocialSection from "../../components/commonComponents/SocialSection";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchServicesData } from "../../redux/reducers/servicesData";

const ServicePostPage = () => {
  // const [serviceData, setServiceData] = useState(null);
  const location = useLocation();
  const params = useParams();

  const dispatch = useDispatch();
  const servicesData = useSelector((state) => state.services.servicesData);
  // const loading = useSelector((state) => state.services.servicesLoading);
  // const error = useSelector((state) => state.services.error);

  useEffect(() => {
    // setServiceData(null);
    dispatch(fetchServicesData(params.slug));
    setTimeout(() => {
      document.querySelector(".updateWatchedTrigger").click();
      document.querySelector(".triggerSplitWordAnimation").click();
    }, 1500);
  }, [dispatch, location, params.slug]);

  useEffect(() => {
    if (servicesData) {
      handleCollectionLoaded();
    }
  }, [servicesData]);

  // Animations Load
  const numberOfCollections = 5;
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
      <ServiceIntro data={servicesData} />
      <ServiceDescription data={servicesData} />
      {/* commonComponents */}
      <SliderBanner handleCollectionLoaded={handleCollectionLoaded} />
      <PeopleReviewSlider handleCollectionLoaded={handleCollectionLoaded} />
      <StudioSection handleCollectionLoaded={handleCollectionLoaded} />
      <DreamBigSection handleCollectionLoaded={handleCollectionLoaded} />
      <SocialSection />
    </>
  );
};

export default ServicePostPage;
