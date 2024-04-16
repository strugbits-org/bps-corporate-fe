import createWixClient from "../redux/wixClient";
import { endLoading, startLoading } from "./animationsTriggers";

const wixClient = createWixClient();

export const listPortfolios = async ({ pageSize = 10, searchTerm = "", studios = [], markets = [], disableLoader = false, excludeItem = null }) => {
    try {
        startLoading(disableLoader);
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

        const response = await query.contains('titleAndDescription', searchTerm).ne("slug", excludeItem)
            .limit(pageSize)
            .find();

        endLoading(disableLoader);
        return response;
    } catch (error) {
        endLoading(disableLoader);
        throw new Error(error.message);
    }
}

export const listBlogs = async ({ pageSize = 10, searchTerm = "", studios = [], markets = [], disableLoader = false, excludeItem = null }) => {
    try {
        startLoading(disableLoader);
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
        const response = await query.contains('titleAndDescription', searchTerm).ne("slug", excludeItem).descending("publishDate")
            .limit(pageSize)
            .find();

        endLoading(disableLoader);
        return response;
    } catch (error) {
        endLoading(disableLoader);
        throw new Error(error.message);
    }
}

export const listProducts = async ({ pageSize = 10, searchTerm = "", disableLoader = false }) => {
    try {
        startLoading(disableLoader);
        let options = {
            dataCollectionId: "locationFilteredVariant",
            includeReferencedItems: ["product"],
            returnTotalCount: true,
        };

        let query = wixClient.items.queryDataItems(options);
        const response = await query.contains('search', searchTerm)
            .limit(pageSize)
            .find();

        endLoading(disableLoader);
        return response;
    } catch (error) {
        endLoading(disableLoader);
        throw new Error(error.message);
    }
}

export const searchAllPages = async ({ pageSize = 10, searchTerm = "", disableLoader = false }) => {
    try {
        startLoading(disableLoader);
        let options = {
            dataCollectionId: "TextCollectionPages",
            returnTotalCount: true,
        };

        let query = wixClient.items.queryDataItems(options);
        const response = await query.contains('content', searchTerm)
            .eq("showInSearch", true)
            .limit(pageSize)
            .find();

        endLoading(disableLoader);
        return response;
    } catch (error) {
        endLoading(disableLoader);
        throw new Error(error.message);
    }
}