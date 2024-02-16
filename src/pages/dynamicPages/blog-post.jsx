import React from "react";
import RecentPosts from "../../components/blogDetailPageSections/RecentPosts";
import PostDetails from "../../components/blogDetailPageSections/PostDetails";

const BlogPost = () => {
  return (
    <>
      {/*  Post details Section start */}
      <PostDetails />
      {/*  Post details Section end */}

      {/* Recent Post Section start */}
      <RecentPosts />
      {/* Recent Post Section end */}
    </>
  );
};

export default BlogPost;
