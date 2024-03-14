import React from "react";
import RecentPosts from "../../components/blogDetailPageSections/RecentPosts";
// import PostDetails from "../../components/blogDetailPageSections/PostDetails";
import SocialSection from "../../components/commonComponents/SocialSection";

const BlogPost = () => {
  return (
    <>
      {/*  Post details Section start */}
      {/* <PostDetails /> */}
      {/*  Post details Section end */}
      {/* Recent Post Section start */}
      <RecentPosts />
      {/* Recent Post Section end */}
      <SocialSection/>
    </>
  );
};

export default BlogPost;
