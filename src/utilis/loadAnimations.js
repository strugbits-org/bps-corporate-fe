import { initAnimations, pageLoadFinished, updatedWatched } from "./animationsTriggers";

let collectionLoaded = 0;

export const handleCollectionLoaded = () => {
    collectionLoaded++;
    // console.log("collectionLoaded", collectionLoaded);
    const page = window.location.pathname.trim() === "/" ? "home" : window.location.pathname.substring(1);
    const cleanPage = page.split("/")[0].trim();
    
    const collectionsCount = {
        'home': 9,
        'about': 7,
        'portfolio': 3,
        'blog': 3,
        'market-post': 7,
        'services-post': 5,
        'portfolio-post': 3,
        'blog-post': 3,
        'contact': 1,
    }[cleanPage] || 0;

    const markPageLoaded = ()=>{
        collectionLoaded = 0;
        document.body.classList.add(cleanPage+"-loaded");
        initAnimations();
        updatedWatched();
        if (document.body.classList.contains("first-load-done")) {
            pageLoadFinished();
        } else{
            document.body.classList.add("first-load-done");
        }
    }
    const urlParams = new URLSearchParams(window.location.search);
    const noreload = urlParams.get('noreload');
    if (collectionLoaded >= collectionsCount) {
        markPageLoaded();
    } else if (cleanPage === "services-post" && document.body.classList.contains(cleanPage + "-loaded") && noreload && collectionLoaded >= 1) {
        markPageLoaded();
    } else if (cleanPage === "market-post" && document.body.classList.contains(cleanPage + "-loaded") && noreload && collectionLoaded >= 2) {
        markPageLoaded();
    }
};
