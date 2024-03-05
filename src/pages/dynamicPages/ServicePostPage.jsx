import ServiceIntro from "../../components/serviceDetailPageSections/ServiceIntro";
import ServiceDescription from "../../components/serviceDetailPageSections/serviceDescription";
import SliderBanner from "../../components/commonComponents/SliderBanner";
import PeopleReviewSlider from "../../components/commonComponents/PeopleReviewSlider";
import StudioSection from "../../components/commonComponents/StudioSection";
import DreamBigSection from "../../components/commonComponents/DreamBigSection";
import SocialSection from "../../components/commonComponents/SocialSection";

import { OAuthStrategy, createClient } from "@wix/sdk";
import React, { useEffect, useState } from "react";
import { collections, items } from "@wix/data";
import getFullImageURL from "../../common/common_functions/imageURL";
import { useLocation, useParams } from "react-router-dom";


const ServicePostPage = () => {
  const location = useLocation(); 
  const [serviceData, setServiceData] = useState(null);
  
  const params = useParams();
  useEffect(() => {
    setServiceData(null);
    async function getServiceCollection() {
      const wixClient = createClient({
        modules: { collections, items },
        auth: OAuthStrategy({
          clientId: "04038da0-732b-471d-babe-4e90ad785740",
        }),
      });

      let options = {
        dataCollectionId: "StudiosSection",
        includeReferencedItems: ["subServices"]
      };

      const { items: fetchedItems } = await wixClient.items
        .queryDataItems(options)
        .eq("slug", params.slug)
        .find();

      const servicesArray = fetchedItems.map((service) => {
        service.data.modalImage = getFullImageURL(service.data.modalImage);
        service.data.image = getFullImageURL(service.data.image);
        return service.data;
      });
      setServiceData(servicesArray[0]);
    }
    getServiceCollection();
    setTimeout(() => {
      document.querySelector(".updateWatchedTrigger").click();
      document.querySelector(".triggerSplitWordAnimation").click();
    }, 1500);
  }, [location]);

  return (
    <>
      <ServiceIntro data={serviceData} />
      <ServiceDescription data={serviceData} />

      {/* commonComponents */}
      <SliderBanner />
      <PeopleReviewSlider />
      <StudioSection />
      <DreamBigSection />
      <SocialSection />
    </>
  )
};

export default ServicePostPage;
