import { initAnimations, pageLoadFinished, updatedWatched } from "./animationsTriggers";

let collectionLoaded = 0;

export const handleCollectionLoaded = () => {
    collectionLoaded++;
    const page = window.location.pathname.trim() === "/" ? "home" : window.location.pathname.substring(1);
    const cleanPage = page.split("/")[0].trim();
    
    const collectionsCount = {
        'home': 9,
        'about': 7,
        'portfolio': 3,
        'blog': 3,
        'market-post': 7,
        'services-post': 6,
        'portfolio-post': 3,
        'blog-post': 3,
        'contact': 1,
    }[cleanPage] || 0;

    if (collectionLoaded >= collectionsCount) {
        collectionLoaded = 0;
        document.body.classList.add(cleanPage+"-loaded");
        initAnimations();
        updatedWatched();
        if (document.body.classList.contains("first-load-done")) {
            pageLoadFinished();
        } else{
            document.body.classList.add("first-load-done");
        }
        
    } else if (cleanPage === "services-post" && document.body.classList.contains(cleanPage + "-loaded")) {
        initAnimations();
    } else if (cleanPage === "market-post" && document.body.classList.contains(cleanPage + "-loaded")) {
        initAnimations();
    }
};
