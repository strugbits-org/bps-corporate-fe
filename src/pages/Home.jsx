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
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchGetTouchSection, fetchHomeTopData, fetchRentalStoreSection, fetchRentalStoreSubtitle } from "../redux/reducers/homeData";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomeTopData());
    dispatch(fetchGetTouchSection());
    dispatch(fetchRentalStoreSection());
    dispatch(fetchRentalStoreSubtitle());
  }, [dispatch]);

  return (
    <>
      {/* hero section here */}
      <HeroSection />
      {/* form concept section here */}
      <FormConcept />
      {/* get touch section here */}
      <GetTouchSection />
      {/* studio section here */}
      <StudioSection />
      {/* Some of our project section */}
      <OurProjectSection />
      {/* people revive section here */}
      <PeopleReviewSLider />
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