import { fetchCollection } from "../redux/fetchCollection";
import { endLoading, startLoading } from "./animationsTriggers";

export const listPortfolios = async ({ pageSize = 10, searchTerm = "", studios = [], markets = [], disableLoader = false, excludeItem = null }) => {
    try {
        startLoading(disableLoader);
        const data = {
            "dataCollectionId": "PortfolioCollection",
            "includeReferencedItems": ["portfolioRef", "locationFilteredVariant", "storeProducts", "studios", "markets", "gallery", "media"],
            "returnTotalCount": true,
            "find": {},
            "contains": ['titleAndDescription', searchTerm],
            "eq": null,
            "limit": pageSize,
            "type": "portfolio",
            "studios": studios,
            "markets": markets,
            "excludeItem": excludeItem,
        }
        const response = await fetchCollection(data);
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
        const data = {
            "dataCollectionId": "BlogProductData",
            "includeReferencedItems": ["blogRef", "locationFilteredVariant", "storeProducts", "studios", "markets", "author"],
            "returnTotalCount": true,
            "find": {},
            "contains": ['titleAndDescription', searchTerm],
            "eq": null,
            "limit": pageSize,
            "type": "blog",
            "studios": studios,
            "markets": markets,
            "excludeItem": excludeItem,
        }
        const response = await fetchCollection(data);
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
        const data = {
            "dataCollectionId": "locationFilteredVariant",
            "includeReferencedItems": ["product"],
            "returnTotalCount": true,
            "find": {},
            "contains": ['search', searchTerm],
            "eq": null,
            "limit": pageSize
        }
        const response = await fetchCollection(data);
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
        const data = {
            "dataCollectionId": "TextCollectionPages",
            "includeReferencedItems": null,
            "returnTotalCount": true,
            "find": {},
            "contains": ['content', searchTerm],
            "eq": ["showInSearch", true],
            "limit": pageSize
        }
        const response = await fetchCollection(data);
        endLoading(disableLoader);
        return response._items.map((x) => x.data);
    } catch (error) {
        endLoading(disableLoader);
        throw new Error(error.message);
    }
}