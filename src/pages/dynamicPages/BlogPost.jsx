import React, { useEffect } from "react";
import RecentPosts from "../../components/blogDetailPageSections/RecentPosts";
import PostDetails from "../../components/blogDetailPageSections/PostDetails";
import SocialSection from "../../components/commonComponents/SocialSection";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom/dist";
import { fetchSingleBlog } from "../../redux/reducers/blogData";

const BlogPost = () => {
  const location = useLocation();
  const params = useParams();
  // const params = decodeURIComponent(param)
  const dispatch = useDispatch();
 
  const singleBlogData = useSelector((state) => state.blog.singleBlogData);
  // const loading = useSelector((state) => state.blog.singleBlogLoading);
  // const error = useSelector((state) => state.services.error);

  // console.log("singleBlogData", singleBlogData);

  useEffect(() => {
    dispatch(fetchSingleBlog(params.slug));
  }, [dispatch, location, params.slug]);

  return (
    <>
      {/*  Post details Section start */}
      <PostDetails data={singleBlogData}/>
      {/*  Post details Section end */}

      {/* Recent Post Section start */}
      <RecentPosts/>
      {/* Recent Post Section end */}
      <SocialSection />
    </>
  );
};

export default BlogPost;
