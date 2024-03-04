function getFullImageURL(imageSRC) {
    if (imageSRC && imageSRC.startsWith("wix:image://v1/")) {
        const wixImageURL = "https://static.wixstatic.com/media/";
        const wixLocalURL = imageSRC.replace('wix:image://v1/', '').split('/')[0];
        return wixImageURL + wixLocalURL;
    } else {
        return imageSRC;
    }
}

export default getFullImageURL;