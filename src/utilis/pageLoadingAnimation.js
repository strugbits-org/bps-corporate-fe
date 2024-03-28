import { initAnimations, pageLoadFinished, updatedWatched } from "./animationsTriggers";

let collectionLoaded = 0;

export const resetCount = () => {
    collectionLoaded = 0;
}

const changeProgress = (percent) => {
    document.body.style.setProperty("--percentage", percent / 100);
    document.body.style.setProperty("--percentage2", `${percent}%`);
    const elProg = document.querySelector('[data-load-progress]');
    if (elProg) elProg.dataset.loadProgress = percent;
}

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
        'services-post': 5,
        'portfolio-post': 3,
        'blog-post': 3,
        'contact': 1,
    }[cleanPage] || 0;
    
    const progressPercent = Math.ceil(collectionLoaded / collectionsCount * 100);
    changeProgress(progressPercent);

    const markPageLoaded = () => {
        collectionLoaded = 0;
        document.body.classList.add(`${cleanPage}-loaded`);
        initAnimations();
        updatedWatched();
        const isFirstLoadDone = document.body.classList.contains("first-load-done");
        if (isFirstLoadDone) {
            pageLoadFinished();
        } else {
            document.body.dataset.load = "first-leaving";
            setTimeout(() => {
                document.body.dataset.load = "first-done";
            }, 1200);
            document.body.classList.add("first-load-done");
        }
    }

    const urlParams = new URLSearchParams(window.location.search);
    const noreload = urlParams.get('noreload');
    const subpageCollectionCount = cleanPage === "services-post" ? 1 : cleanPage === "market-post" ? 2 : 0;
    const isReloadConditionMet = document.body.classList.contains(`${cleanPage}-loaded`) && noreload && collectionLoaded >= subpageCollectionCount;
    
    
    if (collectionLoaded >= collectionsCount || isReloadConditionMet) {
        markPageLoaded();
    }
};