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

  // Load animation when all sections are loaded
  const numberOfCollections = 2;
  const collectionLoaded = [];
  const handleCollectionLoaded = () => {
    collectionLoaded.push(true);
    console.log("collectionLoaded",collectionLoaded.length);
    if (collectionLoaded.length === numberOfCollections) {
      setTimeout(() => {
        document.querySelector(".initScript").click();
      }, 200);
    }
  }

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
