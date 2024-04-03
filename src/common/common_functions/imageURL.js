function getFullImageURL(imageSRC, optimized = false) {
    if (imageSRC && (imageSRC.startsWith("wix:image://v1/") || imageSRC.startsWith("wix:vector://v1/"))) {
        const wixImageURL = imageSRC.startsWith("wix:image://v1/") ? "https://static.wixstatic.com/media/" : "https://static.wixstatic.com/shapes/";
        const wixLocalURL = imageSRC.replace('wix:image://v1/', '').replace('wix:vector://v1/', '').split('/')[0];
        // Remove '#' symbol
        const trimmedURL = wixLocalURL.replace('#', '');
        return wixImageURL + trimmedURL + (optimized ? "/v1/fit/w_1000,h_1000,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/compress.webp" : "");
    } else {
        return imageSRC;
    }
}

export function getFullImagePost(wix_url, optimized = false) {
    if (wix_url) {
        const src = wix_url.split('#')[0];
        if (src && (src.startsWith("wix:image://v1/") || src.startsWith("wix:vector://v1/"))) {
            const wixImageURL = src.startsWith("wix:image://v1/") ? "https://static.wixstatic.com/media/" : "https://static.wixstatic.com/shapes/";
            const wixLocalURL = src.replace('wix:image://v1/', '').replace('wix:vector://v1/', '').split('/')[1];
            return wixImageURL + wixLocalURL + (optimized ? "/v1/fit/w_1000,h_1000,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/compress.webp" : "");
        } else {
            return src;
        }
    }
}

export default getFullImageURL;