import { OAuthStrategy, createClient } from "@wix/sdk";
import { posts, tags } from "@wix/blog";

const SingleBlogWixClient = await createClient({
    modules: { posts, tags },
    auth: OAuthStrategy({
      clientId: process.env.REACT_APP_WIX_CLIENT_ID,
    }),
  });

export default SingleBlogWixClient;