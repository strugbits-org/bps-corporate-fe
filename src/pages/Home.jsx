import HeroSection from "../components/homePageSections/HeroSection";
import FormConcept from "../components/homePageSections/FormConcept";
import GetTouchSection from "../components/homePageSections/GetTouchSection";
import StudioSection from "../components/commonComponents/StudioSection";
import OurProjectSection from "../components/homePageSections/OurProjectSection";
import RentalStoreSection from "../components/homePageSections/RentalStoreSection";
import DreamBigSection from "../components/commonComponents/DreamBigSection";
import SocialSection from "../components/commonComponents/SocialSection";
import PeopleReviewSLider from "../components/commonComponents/PeopleReviewSlider";
import MarketSection from "../components/commonComponents/MarketSection";
import React, { useEffect, useState } from "react";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { collections, items } from '@wix/data';

const Home = () => {
  const [dataItems, setDataItems] = useState([]);

  useEffect(() => {
    async function fetchDataItems() {
      const wixClient = createClient({
        modules: { collections, items },
        auth: OAuthStrategy({ clientId: "04038da0-732b-471d-babe-4e90ad785740" }),
      });

      let options = {
        dataCollectionId: "HomeTopSectionData",
      };

      const { items: fetchedItems } = await wixClient.items
        .queryDataItems(options)
        .eq("title", "TopSection")
        .find();
      
      setDataItems(fetchedItems);
    }

    fetchDataItems();
  }, []);


  return (
    <>
      {/* hero section here */}
      <HeroSection items={dataItems} />
      {/* form concept section here */}
      <FormConcept items={dataItems}/>
      {/* get touch section here */}
      <GetTouchSection />
      {/* studio section here */}
      <StudioSection />
      {/* Some of our project section */}
      <OurProjectSection />
      {/* people revive section here */}
      <PeopleReviewSLider/>
      {/* market section here */}
      <MarketSection />
      {/* rental store section here */}
      <RentalStoreSection />
      {/* Dream big Section here */}
      <DreamBigSection />
      {/* social section here */}
      <SocialSection />
    </>
  );
};

export default Home;
