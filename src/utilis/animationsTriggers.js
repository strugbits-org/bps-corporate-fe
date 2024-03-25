export const initAnimations = () => {
    setTimeout(() => {
        document.querySelector(".initScript").click();
    }, 200);
}

export const updatedWatched = () => {
    setTimeout(() => {
        document.querySelector(".updateWatchedTrigger").click();
    }, 200);
}

export const pageLoadStart = () => {
    document.body.classList.add("page-leave-active");
}

export const pageLoadFinished = () => {
    if (document.body.classList.contains('menu-active')) document.body.classList.remove('menu-active');
    window.scrollTo({ top: 0 });
    document.body.classList.add("page-enter-active");
    document.body.classList.remove("page-leave-active");
    setTimeout(() => {
        document.body.classList.remove("page-enter-active");
    }, 900);
}