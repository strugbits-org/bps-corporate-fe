import { updatedWatched } from "./animationsTriggers";

export const startLoading = (disableLoader) => {
    if (disableLoader) { return };

    const isDataLoaded = document.body.getAttribute("data-load") === "first-done";
    if (isDataLoaded) {
        document.body.classList.add("page-leave-active");
    }
}

export function endLoading(disableLoader) {
    if (disableLoader) { return };

    const isDataLoaded = document.body.getAttribute("data-load") === "first-done";
    if (isDataLoaded) {
        document.body.classList.add("page-enter-active");
        document.body.classList.remove("page-leave-active");
        setTimeout(() => {
            document.body.classList.remove("page-enter-active");
            document.querySelector(".updateWatchedTrigger").click();
        }, 900);
    }
    updatedWatched();
}
