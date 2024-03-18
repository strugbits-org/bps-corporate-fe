import React, { useEffect, useState } from "react";
import SocialSection from "../components/commonComponents/SocialSection";
import { useDispatch } from "react-redux";
import { listBlogs } from "../utilis/queryCollections";
import BlogListing from "../components/blogPageSections/BlogListing";
import { handleCollectionLoaded } from "../utilis/loadAnimations";

const Blog = () => {
  const dispatch = useDispatch();
  const [blogResponse, setBlogResponse] = useState(null);
  const [blogCollection, setBlogCollection] = useState([]);

  useEffect(() => {
    fetchCollection();
  }, [dispatch]);

  useEffect(() => {
    if (blogResponse && blogResponse.totalCount !== 0) {
      const items = blogResponse.items.map((item) => item.data);
      setBlogCollection(items);
    }
  }, [blogResponse]);
  
  const fetchCollection = async (totalCount = false)=>{
    const response = await listBlogs({pageSize : totalCount ? totalCount : 8});
    document.querySelector(".updateWatchedTrigger").click();
    setBlogResponse(response);
    if (!totalCount) {
      handleCollectionLoaded();
    }
  }

  const handleSeeAllBlogs = async ()=>{
    fetchCollection(blogResponse.totalCount);
  }

  return (
    <>
      <BlogListing totalCount={blogResponse?.totalCount} seeAllBlogs={handleSeeAllBlogs} data={blogCollection} />
      <SocialSection />
    </>
  );
};

export default Blog;
