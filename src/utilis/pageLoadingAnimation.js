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
        'home': 5,
        'about': 6,
        'portfolio': 2,
        'blog': 2,
        'market-post': 3,
        'services-post': 3,
        'portfolio-post': 3,
        'blog-post': 3,
        'contact': 2,
    }[cleanPage] || 0;
    
    const progressPercent = Math.ceil(collectionLoaded / collectionsCount * 100);
    console.log("progressPercent", progressPercent);
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
            window.scrollTo({ top: 0 });
            document.body.dataset.load = "first-leaving";
            setTimeout(() => {
                document.body.dataset.load = "first-done";
            }, 1200);
            document.body.classList.add("first-load-done");
        }
    }

    if (collectionLoaded >= collectionsCount) {
        markPageLoaded();
    }
};