import createWixClient from "../redux/wixClient";

const wixClient = createWixClient();

export const listPortfolios = async ({ pageSize = 10, searchTerm = "" }) => {
    try {
        let options = {
            dataCollectionId: "PortfolioCollection",
            includeReferencedItems: ["portfolioRef", "locationFilteredVariant", "storeProducts", "studios", "markets", "gallery", "media"],
            returnTotalCount: true,
        };

        const response = await wixClient.items.queryDataItems(options)
                    .contains('titleAndDescription', searchTerm)
                    .limit(pageSize)
                    .find();

        return response;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const listBlogs = async ({ pageSize = 10, searchTerm = "" }) => {
    try {
        let options = {
            dataCollectionId: "BlogProductData",
            includeReferencedItems: ["blogRef", "locationFilteredVariant", "storeProducts", "studios", "markets", "author"],
            returnTotalCount: true,
        };

        const response = await wixClient.items.queryDataItems(options)
                    .contains('titleAndDescription', searchTerm)
                    .limit(pageSize)
                    .find();

        return response;
    } catch (error) {
        throw new Error(error.message);
    }
}