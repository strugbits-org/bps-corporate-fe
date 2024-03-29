import React, { useEffect, useState } from "react";
import SocialSection from "../components/commonComponents/SocialSection";
import { useDispatch, useSelector } from "react-redux";
import { listBlogs } from "../utilis/queryCollections";
import BlogListing from "../components/blogPageSections/BlogListing";
import { fetchStudioSection } from "../redux/reducers/homeData";
import { getMarketCollection } from "../redux/reducers/marketData";
import { handleCollectionLoaded } from "../utilis/pageLoadingAnimation";
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
    applyFilters({ disableLoader: true });
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
    disableLoader = false
  }) => {
    const response = await listBlogs({
      pageSize,
      studios: selectedStudios,
      markets: selectedMarkets,
      disableLoader
    });
    setBlogCollection(response.items.filter(item => item.data.blogRef._id !== undefined).map(item => item.data));
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
          totalCount: blogCollection.length,
        }}
        applyFilters={applyFilters}
        seeMore={handleSeeMore}
      />
      <SocialSection />
    </>
  );
};

export default Blog;
