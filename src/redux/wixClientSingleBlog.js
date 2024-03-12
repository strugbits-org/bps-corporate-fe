import { OAuthStrategy, createClient } from "@wix/sdk";
import { posts, tags } from "@wix/blog";

const SingleBlogWixClient = await createClient({
    modules: { posts, tags },
    auth: OAuthStrategy({
      clientId: "04038da0-732b-471d-babe-4e90ad785740",
    }),
  });

export default SingleBlogWixClient;