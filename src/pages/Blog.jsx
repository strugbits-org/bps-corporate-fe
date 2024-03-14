import React, { useEffect, useState } from "react";
import SocialSection from "../components/commonComponents/SocialSection";
import { useDispatch } from "react-redux";
import { listBlogs } from "../utilis/queryCollections";
import BlogListing from "../components/blogPageSections/BlogListing";

const Blog = () => {
  const dispatch = useDispatch();
  const [blogResponse, setBlogResponse] = useState(null);
  const [blogCollection, setBlogCollection] = useState([]);

  useEffect(() => {
    fetchCollection();
  }, [dispatch]);

  useEffect(() => {
    if (blogResponse && blogResponse.totalCount !== 0) {
      const newItems = blogResponse.items.map((item)=>item.data);
      setBlogCollection(blogs => [...blogs,...newItems]);
    }
  }, [blogResponse]);
  
  const fetchCollection = async ()=>{
    const response = await listBlogs({pageSize : 50});
    setBlogResponse(response);
    document.querySelector(".updateWatchedTrigger").click();
  }

  const handleSeeAllBlogs = async ()=>{
    const response = await blogResponse.next();
    setBlogResponse(response);
  }

  return (
    <>
      <BlogListing totalCount={blogResponse?.totalCount} seeAllBlogs={handleSeeAllBlogs} data={blogCollection} />
      <SocialSection />
    </>
  );
};

export default Blog;
