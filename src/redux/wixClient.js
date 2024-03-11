import { OAuthStrategy, createClient } from "@wix/sdk";
import { collections, items } from "@wix/data";

let wixClient = null;

const createWixClient = () => {
    // console.log(wixClient,"get wix client call")
  if (!wixClient) {
    // console.log(wixClient,"auth call")
    wixClient = createClient({
      modules: { collections, items },
      auth: OAuthStrategy({ clientId: "04038da0-732b-471d-babe-4e90ad785740" }),
    });
  }
  return wixClient;
};

export default createWixClient;
