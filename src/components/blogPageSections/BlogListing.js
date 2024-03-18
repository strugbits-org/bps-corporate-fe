import React, { useEffect, useState } from "react";
import DelayedLink from "../../common/DelayedLink";
import { useDispatch, useSelector } from "react-redux";
import getFullImageURL from "../../common/common_functions/imageURL";
import { fetchStudioSection } from "../../redux/reducers/homeData";
import formatDate from "../../common/common_functions/dateFormat";
import { getMarketCollection } from "../../redux/reducers/marketData";

const BlogListing = ({ data, totalCount, seeAllBlogs }) => {

    const dispatch = useDispatch();
    const studios = useSelector((state) => state.home.studioData);
    const markets = useSelector((state) => state.market.marketModel);

    // const loading = useSelector((state) => state.market.marketModelLoading);
    // const error = useSelector((state) => state.market.error);

    const [selectedStudio, setSelectedStudio] = useState([]);
    const [selectedMarkets, setSelectedMarkets] = useState([]);
    const [filteredBlogCollection, setFilteredBlogCollection] = useState(data);

    useEffect(() => {
        dispatch(fetchStudioSection());
        dispatch(getMarketCollection(true));
    }, [dispatch]);


    useEffect(() => {
        setFilteredBlogCollection(data);
    }, [data]);

    const handleStudioFilter = (tag) => {
        if (selectedStudio.includes(tag)) {
            setSelectedStudio(
                selectedStudio.filter((el) => el !== tag)
            );
        } else {
            setSelectedStudio([...selectedStudio, tag]);
        }
    };
    const handleMarketFilter = (category) => {
        if (selectedMarkets.includes(category)) {
            setSelectedMarkets(
                selectedMarkets.filter((el) => el !== category)
            );
        } else {
            setSelectedMarkets([...selectedMarkets, category]);
        }
    };

    useEffect(() => {
        const filteredBlogs = data.filter(item => {
            const studiosLabels = item.studios.map((item) => item.cardName)
            const marketLabels = item.markets.map((item) => item.cardname)
            return (
                (selectedMarkets.length === 0 || selectedMarkets.some(r => marketLabels.includes(r))) &&
                (selectedStudio.length === 0 || selectedStudio.some(r => studiosLabels.includes(r)))
            );
        });
        setFilteredBlogCollection(filteredBlogs);
        setTimeout(() => {
            document.querySelector(".updateWatchedTrigger").click();
        }, 400);
    }, [selectedStudio, selectedMarkets, data]);

    return (
        <section className="blog-intro pt-lg-145 pt-tablet-115 pt-phone-120 pb-lg-150 pb-tablet-100 pb-phone-155">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h1
                            className="fs--60 text-center mb-lg-45 mb-mobile-40 split-words"
                            data-aos="d:loop"
                        >
                            Read our blog posts
                        </h1>
                        <div
                            className="container-list-tags mt-lg-55 mt-tablet-40 mt-phone-30"
                            data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                        >
                            <div className="portfolio-tags">
                                <button
                                    className="btn-tag-mobile no-desktop"
                                    data-set-tag="portfolio"
                                >
                                    <span>All Studios</span>
                                    <i className="icon-arrow-down"></i>
                                </button>
                                <div className="list-dropdown" data-get-tag="portfolio">
                                    <div className="container-wrapper-list">
                                        <div className="wrapper-list">
                                            <ul className="list-portfolio-tags list-dropdown-tags">
                                                <li>
                                                    <button
                                                        onClick={() => { setFilteredBlogCollection(data); setSelectedStudio([]) }}
                                                        className={`portfolio-btn-tag ${selectedStudio.length === 0 ? "active" : ""
                                                            }`}>
                                                        <span>All Studios</span>
                                                    </button>
                                                </li>
                                                {studios?.map((item, index) => (
                                                    <li key={index}>
                                                        <button
                                                            onClick={() => { handleStudioFilter(item.data.cardName) }}
                                                            className={`portfolio-btn-tag ${selectedStudio.includes(item.data.cardName)
                                                                ? "active"
                                                                : ""
                                                                }`}>
                                                            {item.data.cardName}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="market-tags">
                                <button className="btn-tag-mobile no-desktop" data-set-tag="market">
                                    <span>All Markets</span>
                                    <i className="icon-arrow-down"></i>
                                </button>
                                <div className="list-dropdown" data-get-tag="market">
                                    <div className="container-wrapper-list">
                                        <div className="wrapper-list">
                                            <ul className="list-market-tags list-dropdown-tags">
                                                <li>
                                                    <button
                                                        onClick={() => { setFilteredBlogCollection(data); setSelectedMarkets([]) }}
                                                        className={`portfolio-btn-tag ${selectedMarkets.length === 0 ? "active" : ""
                                                            }`}
                                                    >
                                                        <span>All Markets</span>
                                                    </button>
                                                </li>
                                                {markets?.map((market, index) => (
                                                    <li key={index}>
                                                        <button
                                                            onClick={() => { handleMarketFilter(market.cardname) }}
                                                            className={`portfolio-btn-tag ${selectedMarkets.includes(market.cardname)
                                                                ? "active"
                                                                : ""
                                                                }`}
                                                            key={`category-${index}`}
                                                        >
                                                            {market.cardname}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row row-2 mt-lg-60 mt-tablet-40 mt-phone-35">
                    <div className="col-lg-12 column-1">
                        <ul className="list-blog grid-lg-25 grid-tablet-50">
                            {filteredBlogCollection?.map((item) => {
                                return item.blogRef && item.author && (
                                    <li key={item._id} className="grid-item" data-aos="d:loop">
                                        <DelayedLink
                                            to={`/blog-post/${encodeURIComponent(item._id)}`}
                                            className="link-blog link-blog-animation"
                                            attributes={{
                                                "data-aos": "d:loop",
                                            }}
                                        >
                                            <div className="container-img bg-blue" data-cursor-style="view" >
                                                <div className="wrapper-img">
                                                    {item.blogRef.coverImage && <img
                                                        src={getFullImageURL(item.blogRef.coverImage) + "/v1/fit/w_1000,h_1000,al_c,q_75,usm_0.66_1.00_0.01,enc_auto/compress.webp"}
                                                        data-preload
                                                        className="media"
                                                        alt=""
                                                    />}
                                                </div>
                                            </div>
                                            <div className="container-text">
                                                <div className="container-author-post-info">
                                                    <div className="author">
                                                        <span className="author-name">
                                                            {item.author.nickname}
                                                        </span>
                                                    </div>
                                                    <div className="date">
                                                        <span>{formatDate(item.blogRef.lastPublishedDate.$date)}</span>
                                                    </div>
                                                </div>
                                                <h2 className="title-blog">{item.blogRef.title}</h2>
                                                <p className="text-blog">{item.blogRef.excerpt}</p>
                                            </div>
                                        </DelayedLink>
                                        <ul style={{marginTop:2}} className="list-tags-small">
                                            {item.markets.map((market, index) => (
                                                <li key={index} onClick={() => { handleMarketFilter(market.cardname) }} className={`tag-small ${selectedMarkets.includes(market.cardname)
                                                    ? "active"
                                                    : ""
                                                    }`}  >
                                                    <span>{market.cardname}</span>
                                                </li>
                                            ))}
                                            {item.studios.map((studio, index) => (
                                                <React.Fragment key={index}>
                                                    {index < 2 && (
                                                        <li onClick={() => { handleStudioFilter(studio.cardName) }} className={`tag-small ${selectedStudio.includes(studio.cardName)
                                                            ? "active"
                                                            : ""
                                                            }`} >
                                                            <span>{studio.cardName}</span>a
                                                        </li>
                                                    )}
                                                </React.Fragment>
                                            ))}
                                            {item.studios.length > 2 ? (
                                                <li className="tag-small">
                                                    <span>+{item.studios.length - 2} studios</span>
                                                </li>
                                            ) : null}
                                        </ul>
                                    </li>
                                );
                            })}
                        </ul>
                        {filteredBlogCollection.length === 0 && <h6 style={{ width: "100%" }} className="fs--40 text-center split-words" data-aos="d:loop">No Data found</h6>}
                    </div>
                    {filteredBlogCollection.length > 0 && filteredBlogCollection.length !== totalCount && (
                        <div className="col-lg-2 offset-lg-5 flex-center mt-lg-70 mt-tablet-60 mt-phone-85">
                            <button
                                onClick={seeAllBlogs}
                                className="btn-border-blue"
                                attributes={{
                                    "data-cursor-style": "off",
                                }}
                            >
                                <span>See all</span>
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
};

export default BlogListing;