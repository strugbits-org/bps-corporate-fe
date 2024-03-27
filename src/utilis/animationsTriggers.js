export const initAnimations = () => {
    setTimeout(() => {
        document.querySelector(".initScript").click();
    }, 200);
};

export const updatedWatched = () => {
    setTimeout(() => {
        document.querySelector(".updateWatchedTrigger").click();
    }, 200);
};

export const pageLoadStart = () => {
    document.body.classList.add("page-leave-active");
};

export const pageLoadFinished = () => {
    const body = document.body;
    if (body.classList.contains('menu-active')) body.classList.remove('menu-active');
    window.scrollTo({ top: 0 });
    body.classList.add("page-enter-active");
    body.classList.remove("page-leave-active");
    setTimeout(() => {
        body.classList.remove("page-enter-active");
    }, 900);
};

export const startLoading = (disableLoader) => {
    if (disableLoader) return;

    const isDataLoaded = document.body.getAttribute("data-load") === "first-done";
    if (isDataLoaded) pageLoadStart();
};

export const endLoading = (disableLoader) => {
    if (disableLoader) return;

    const isDataLoaded = document.body.getAttribute("data-load") === "first-done";
    if (isDataLoaded) {
        pageLoadFinished();
        updatedWatched();
    }
};