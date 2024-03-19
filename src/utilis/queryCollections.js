import createWixClient from "../redux/wixClient";
import { endLoading, startLoading } from "./loadingUtils";

const wixClient = createWixClient();

export const listPortfolios = async ({ pageSize = 10, searchTerm = "", studios = [], markets = [] }) => {
    try {
        startLoading();
        let options = {
            dataCollectionId: "PortfolioCollection",
            includeReferencedItems: ["portfolioRef", "locationFilteredVariant", "storeProducts", "studios", "markets", "gallery", "media"],
            returnTotalCount: true,
        };

        let query = wixClient.items.queryDataItems(options);

        if (studios.length > 0 && markets.length > 0) {
            query = query.hasSome('studios', studios).or(query.hasSome('markets', markets));
        } else if (studios.length > 0) {
            query = query.hasSome('studios', studios);
        } else if (markets.length > 0) {
            query = query.hasSome('markets', markets);
        }

        const response = await query.contains('titleAndDescription', searchTerm)
            .limit(pageSize)
            .find();
            
        endLoading();
        return response;
    } catch (error) {
        endLoading();
        throw new Error(error.message);
    }
}

export const listBlogs = async ({ pageSize = 10, searchTerm = "", studios = [], markets = [] }) => {
    try {
        startLoading();
        let options = {
            dataCollectionId: "BlogProductData",
            includeReferencedItems: ["blogRef", "locationFilteredVariant", "storeProducts", "studios", "markets", "author"],
            returnTotalCount: true,
        };

        let query = wixClient.items.queryDataItems(options);

        if (studios.length > 0 && markets.length > 0) {
            query = query.hasSome('studios', studios).or(query.hasSome('markets', markets));
        } else if (studios.length > 0) {
            query = query.hasSome('studios', studios);
        } else if (markets.length > 0) {
            query = query.hasSome('markets', markets);
        }

        const response = await query.contains('titleAndDescription', searchTerm)
            .limit(pageSize)
            .find();
            
        endLoading();
        return response;
    } catch (error) {
        endLoading();
        throw new Error(error.message);
    }
}