import React, { useEffect } from "react";
import RecentPosts from "../../components/blogDetailPageSections/RecentPosts";
import PostDetails from "../../components/blogDetailPageSections/PostDetails";
import SocialSection from "../../components/commonComponents/SocialSection";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom/dist";
import { fetchSingleBlog, getBlogSectionDetails } from "../../redux/reducers/blogData";
import { setSeo } from "../../utilis/utilityFunctions";

const BlogPost = () => {
  const location = useLocation();
  const params = useParams();
  // const params = decodeURIComponent(param)
  const dispatch = useDispatch();
  const { seo_data } = useSelector((state) => state.config);
  const data = useSelector((state) => state.blog.singleBlogData);
 
  // const loading = useSelector((state) => state.blog.singleBlogLoading);
  // const error = useSelector((state) => state.services.error);

  useEffect(() => {
    dispatch(fetchSingleBlog(params.slug));
    dispatch(getBlogSectionDetails());
  }, [dispatch, location, params.slug]);

  useEffect(() => {
    if (data && seo_data) {
      const options = {
        ...seo_data,
        subpage: true,
        seo_title: data?.blogRef?.title,
        seo_description: data?.blogRef?.description,
        no_follow_subpage: seo_data?.noFollowTag,
      }
      setSeo(options)
    };
  }, [dispatch, data, seo_data]);

  return (
    <>
      {/*  Post details Section start */}
      <PostDetails/>
      {/*  Post details Section end */}

      {/* Recent Post Section start */}
      <RecentPosts id={params.slug}/>
      {/* Recent Post Section end */}
      <SocialSection />
    </>
  );
};

export default BlogPost;
