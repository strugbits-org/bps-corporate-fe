import React, { useEffect, useState } from "react";
import SocialSection from "../components/commonComponents/SocialSection";
import { useDispatch, useSelector } from "react-redux";
import { listBlogs } from "../utilis/queryCollections";
import BlogListing from "../components/blogPageSections/BlogListing";
import { fetchStudioSection } from "../redux/reducers/homeData";
import { getMarketCollection } from "../redux/reducers/marketData";

const Blog = () => {

  const dispatch = useDispatch();
  const [blogResponse, setBlogResponse] = useState(null);
  const [blogCollection, setBlogCollection] = useState([]);

  const studios = useSelector((state) => state.home.studioData);
  const markets = useSelector((state) => state.market.marketModel);

  useEffect(() => {
    dispatch(fetchStudioSection());
    dispatch(getMarketCollection());
  }, [dispatch]);
  
  const handleSeeMore = async () => {
    const response = await blogResponse.next();
    setBlogCollection(prev => [...prev, ...response.items.map(item => item.data)]);
    setBlogResponse(response);
    setTimeout(() => {
      document.querySelector(".updateWatchedTrigger").click();
    }, 400);
  }

  const applyFilters = async ({selectedStudios = [], selectedMarkets = []}) => {
    const response = await listBlogs({ pageSize : 8, studios: selectedStudios, markets: selectedMarkets });
    setBlogCollection(response.items.map(item => item.data));
    setBlogResponse(response);
    setTimeout(() => {
      document.querySelector(".updateWatchedTrigger").click();
    }, 400);
  }

  return (
    <>
      <BlogListing data={{ items: blogCollection, studios, markets, totalCount: blogResponse?.totalCount }} applyFilters={applyFilters} seeMore={handleSeeMore} />
      <SocialSection />
    </>
  );
};

export default Blog;
