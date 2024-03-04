import IntroSection from '../components/aboutPageSections/IntroSection';
import OurDream from '../components/aboutPageSections/OurDream';
import OurFamily from '../components/aboutPageSections/OurFamily';
import SliderBanner from '../components/commonComponents/SliderBanner';
import AboutBottomSection from '../components/aboutPageSections/AboutBottomSection';
import SocialSection from '../components/commonComponents/SocialSection';
import { OAuthStrategy, createClient } from "@wix/sdk";
import React, { useEffect, useState } from "react";
import { collections, items } from "@wix/data";

const AboutUs = () => {
  const [dataItems, setDataItems] = useState([]);

  useEffect(() => {
    async function fetchDataItems() {
      const wixClient = createClient({
        modules: { collections, items },
        auth: OAuthStrategy({
          clientId: "04038da0-732b-471d-babe-4e90ad785740",
        }),
      });

      let options = {
        dataCollectionId: "AboutUsSlider",
      };

      const { items: fetchedItems } = await wixClient.items
        .queryDataItems(options)
        .eq("title", "AboutUsSlider")
        .find();

      setDataItems(fetchedItems);
      //trigger animation on data load
      setTimeout(() => {
        document.querySelector(".updateWatchedTrigger").click();
        document.querySelector(".triggerSplitWordAnimation").click();
       
      }, 1000);
    }

    fetchDataItems();
  }, []);

  return (
    <>  
    <IntroSection/>
    <OurDream/>
    <OurFamily/>
    <SliderBanner />
    <AboutBottomSection dataItems={dataItems}/>
    <SocialSection/>
    </>
  )
}

export default AboutUs