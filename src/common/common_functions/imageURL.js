function getFullImageURL(imageSRC) {
    if (imageSRC && (imageSRC.startsWith("wix:image://v1/") || imageSRC.startsWith("wix:vector://v1/"))) {
        const wixImageURL = imageSRC.startsWith("wix:image://v1/") ? "https://static.wixstatic.com/media/" : "https://static.wixstatic.com/shapes/";
        const wixLocalURL = imageSRC.replace('wix:image://v1/', '').replace('wix:vector://v1/', '').split('/')[0];
        return wixImageURL + wixLocalURL;
    } else {
        return imageSRC;
    }
}

export default getFullImageURL;