import React from 'react';

function getFullImageURL(imageSRC) {
    if (imageSRC.startsWith("wix:image://v1/")) {
        const wixImageURL = "https://static.wixstatic.com/media/";
        const wixLocalURL = imageSRC.replace('wix:image://v1/', '').split('/')[0];
        return wixImageURL + wixLocalURL;
    } else {
        return imageSRC;
    }
}

const HeroSection = ({ items }) => {
    const imageData = items.map(item => ({
        topImage: getFullImageURL(item.data.topimage),
        heroSectionTitle: item.data.heroSectionTitle
    }));

    return (
        <section className="home-intro" data-aos="d:loop">
            {imageData.map((data, index) => (
                <div key={index} className="container-img">
                    <img
                        src={data.topImage}
                        data-preload
                        className="media"
                        alt=""
                        data-parallax-top
                        data-translate-y="50%"
                    />
                    <p className="fs--14 font-2 blue-1">
                        {data.heroSectionTitle}
                    </p>
                </div>
            ))}
        </section>
    );
};

export default HeroSection;
