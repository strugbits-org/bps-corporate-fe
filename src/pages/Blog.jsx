import React, { useEffect, useState } from "react";
import SocialSection from "../components/commonComponents/SocialSection";
import { useDispatch, useSelector } from "react-redux";
import { listBlogs } from "../utilis/queryCollections";
import BlogListing from "../components/blogPageSections/BlogListing";
import { handleCollectionLoaded } from "../utilis/pageLoadingAnimation";
import { updatedWatched } from "../utilis/animationsTriggers";
import { getBlogSectionDetails } from "../redux/reducers/blogData";

const Blog = () => {
  const dispatch = useDispatch();
  const [blogResponse, setBlogResponse] = useState(null);
  const [blogCollection, setBlogCollection] = useState([]);

  const studios = useSelector((state) => state.home.studioData);
  const markets = useSelector((state) => state.market.marketModel);
  const { blogSectionDetails } = useSelector((state) => state.blog);
  const pageSize = 8;
  useEffect(() => {
    dispatch(getBlogSectionDetails());
    applyFilters({ disableLoader: true });
  }, [dispatch]);

  const handleSeeMore = async () => {
    const response = await blogResponse.next();
    setBlogCollection((prev) => [
      ...prev,
      ...response._items.map((item) => item.data),
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
    setBlogCollection(response._items.filter(item => item.data.blogRef && item.data.blogRef._id !== undefined).map(item => item.data));
    setBlogResponse(response);
    handleCollectionLoaded();
  };

  return (
    <>
      <BlogListing
        data={{
          items: blogCollection,
          pageSize,
          blogSectionDetails,
          studios: studios.filter(x => x.data.filters),
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
