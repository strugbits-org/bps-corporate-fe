let collectionLoaded = 0;

export const handleCollectionLoaded = () => {
    collectionLoaded++;
    // console.log(collectionLoaded);

    const page = window.location.pathname.trim() === "/" ? "home" : window.location.pathname.substring(1);
    const cleanPage = page.split("/")[0].trim();

    const collectionsCount = {
        'home': 8,
        'about': 4,
        'portfolio-post': 2,
        'market-post': 5,
        'blog-post': 0,
        'services-post': 5,
        'contact': 1,
        'portfolio': 2,
    }[cleanPage] || 0;

    if (collectionLoaded >= collectionsCount) {
        collectionLoaded = 0;
        document.querySelector(".initScript").click();
        // console.log("Animations loaded on page", cleanPage);
    }
};
