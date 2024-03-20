import { initAnimations, updatedWatched } from "./animtationsTriggers";

let collectionLoaded = 0;

export const handleCollectionLoaded = () => {
    collectionLoaded++;
    const page = window.location.pathname.trim() === "/" ? "home" : window.location.pathname.substring(1);
    const cleanPage = page.split("/")[0].trim();
    
    const collectionsCount = {
        'home': 8,
        'about': 6,
        'portfolio': 3,
        'blog': 3,
        'market-post': 5,
        'services-post': 5,
        'portfolio-post': 2,
        'blog-post': 0,
        'contact': 1,
    }[cleanPage] || 0;

    if (collectionLoaded >= collectionsCount) {
        collectionLoaded = 0;
        document.body.classList.add(cleanPage+"-loaded");
        initAnimations();
        updatedWatched();
    } else if (cleanPage === "services-post" && document.body.classList.contains(cleanPage + "-loaded")) {
        initAnimations();
    } else if (cleanPage === "market-post" && document.body.classList.contains(cleanPage + "-loaded")) {
        initAnimations();
    }
};
