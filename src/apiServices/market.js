import createWixClient from "../redux/wixClient";
import getFullImageURL from "../common/common_functions/imageURL";

const wixClient = createWixClient();

export const getMarketData = async () => {
    try {
        let options = {
            dataCollectionId: "MarketSection",
        };

        const { items: fetchedItems } = await wixClient.items
            .queryDataItems(options)
            .eq("title", "Markets")
            .find();

            console.log("fetchedItems",fetchedItems);

        const marketsArray = fetchedItems.map((item) => {
            item.data.image = getFullImageURL(item.data.image);
            return item.data;
        });
        return marketsArray;
    } catch (error) {
        throw new Error(error.message);
    }
};