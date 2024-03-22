import React, { useEffect, useState } from "react";
import SocialSection from "../components/commonComponents/SocialSection";
import { useDispatch, useSelector } from "react-redux";
import { listBlogs } from "../utilis/queryCollections";
import BlogListing from "../components/blogPageSections/BlogListing";
import { fetchStudioSection } from "../redux/reducers/homeData";
import { getMarketCollection } from "../redux/reducers/marketData";
import { handleCollectionLoaded } from "../utilis/loadAnimations";
import { updatedWatched } from "../utilis/animationsTriggers";

const Blog = () => {
  const pageSize = 8;
  const dispatch = useDispatch();
  const [blogResponse, setBlogResponse] = useState(null);
  const [blogCollection, setBlogCollection] = useState([]);

  const studios = useSelector((state) => state.home.studioData);
  const markets = useSelector((state) => state.market.marketModel);

  useEffect(() => {
    dispatch(fetchStudioSection());
    dispatch(getMarketCollection());
    applyFilters({});
  }, [dispatch]);

  const handleSeeMore = async () => {
    const response = await blogResponse.next();
    setBlogCollection((prev) => [
      ...prev,
      ...response.items.map((item) => item.data),
    ]);
    setBlogResponse(response);
    updatedWatched();
  };

  const applyFilters = async ({
    selectedStudios = [],
    selectedMarkets = [],
  }) => {
    const response = await listBlogs({
      pageSize,
      studios: selectedStudios,
      markets: selectedMarkets,
    });
    setBlogCollection(response.items.map((item) => item.data));
    setBlogResponse(response);
    handleCollectionLoaded();
  };

  return (
    <>
      <BlogListing
        data={{
          items: blogCollection,
          pageSize,
          studios,
          markets,
          totalCount: blogResponse?.totalCount,
        }}
        applyFilters={applyFilters}
        seeMore={handleSeeMore}
      />
      <SocialSection />
    </>
  );
};

export default Blog;
