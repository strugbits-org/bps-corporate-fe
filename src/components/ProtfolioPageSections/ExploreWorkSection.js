import React, { useEffect, useState } from "react";
import DelayedLink from "../../common/DelayedLink";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { collections, items } from "@wix/data";
import getFullImageURL from "../../common/common_functions/imageURL";

const ExploreWorkSection = () => {
  const [portfolioCollection, setPortfolioCollection] = useState([]);
  const [marketCategories, setMarketCategories] = useState([]);
  const [studioTags, setStudioTags] = useState([]);
  const [selectedStudio, setSelectedStudio] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [filteredPortfolioCollection, setFilteredPortfolioCollection] = useState(portfolioCollection);

  useEffect(()=>{
    setFilteredPortfolioCollection(portfolioCollection);
  },[portfolioCollection]);

  // Fetches the portfolio
  async function getPortfolioCollection() {
    const wixClient = createClient({
      modules: { collections, items },
      auth: OAuthStrategy({
        clientId: "04038da0-732b-471d-babe-4e90ad785740",
      }),
    });

    let options = {
      dataCollectionId: "portfolioItems",
      includeReferencedItems: ["marketCategory","studioTags"]
    };

    
    const { items: fetchedItems } = await wixClient.items
      .queryDataItems(options)
      .find();

      var marketCategoriesArray = [];
      var studioTagsArray = [];
      const portfolioArray = fetchedItems.map((item)=> {
        item.data.marketCategory = item.data.marketCategory.cardname;
        marketCategoriesArray.push(item.data.marketCategory);
        
        item.data.studioTags = item.data.studioTags.map((tag)=>{
          studioTagsArray.push(tag.cardName);
          return tag.cardName
        });
        item.data.image = getFullImageURL(item.data.image);
        return item.data;
      });
      setPortfolioCollection(portfolioArray);

      const uniqueMarketCategories = [...new Map(marketCategoriesArray.map(item => [item, item])).values()];
      setMarketCategories(uniqueMarketCategories);
      
      const uniqueStudioTags = [...new Map(studioTagsArray.map(item => [item, item])).values()];
      setStudioTags(uniqueStudioTags);


      setTimeout(() => {
        document.querySelector(".updateWatchedTrigger").click();
      }, 200);
  }

  useEffect(() => {
    getPortfolioCollection();
  }, []);


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
    if (selectedCategory.includes(category)) {
      setSelectedCategory(
        selectedCategory.filter((el) => el !== category)
      );
    } else {
      setSelectedCategory([...selectedCategory, category]);
    }
  };

  useEffect(() => {
    const filteredProjects = portfolioCollection.filter(item => {
      return (
        (selectedCategory.length === 0 || selectedCategory.includes(item.marketCategory)) &&
        (selectedStudio.length === 0 || selectedStudio.some(r=> item.studioTags.includes(r)))
      );
    });
    setFilteredPortfolioCollection(filteredProjects);
  
    setTimeout(() => {
      document.querySelector(".updateWatchedTrigger").click();
    }, 400);
  }, [selectedStudio, selectedCategory, portfolioCollection]);

  return (
    filteredPortfolioCollection && 
    <section className="portfolio-intro pt-lg-145 pt-mobile-105">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mb-lg-60 mb-tablet-40 mb-phone-35">
            <h1 className="fs--60 text-center split-words" data-aos="d:loop">
              Explore our work
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
                              onClick={() => {setFilteredPortfolioCollection(portfolioCollection); setSelectedStudio([])}}
                              className={`portfolio-btn-tag ${
                                selectedStudio.length === 0 ? "active" : ""
                              }`}>
                            <span>All Studios</span>
                          </button>
                        </li>
                        {studioTags.map((tag, index) => (
                          <li key={index}>
                            <button
                             onClick={()=>{handleStudioFilter(tag)}}
                              className={`portfolio-btn-tag ${
                                selectedStudio.includes(tag)
                                  ? "active"
                                  : ""
                              }`}
                             key={`studio-${index}`}>
                              {tag}
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
                              onClick={() => {setFilteredPortfolioCollection(portfolioCollection); setSelectedCategory([])}}
                              className={`portfolio-btn-tag ${
                                selectedCategory.length === 0 ? "active" : ""
                              }`}
                              >
                            <span>All Markets</span>
                          </button>
                        </li>
                        {marketCategories.map((category, index) => (
                          <li key={index}>
                            <button
                             onClick={()=>{handleMarketFilter(category)}}
                              className={`portfolio-btn-tag ${
                                selectedCategory.includes(category)
                                  ? "active"
                                  : ""
                              }`}
                              key={`category-${index}`}
                            >
                              {category}
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
          {
            filteredPortfolioCollection.length === 0 && (
              "No Data"
            )
          }
        <div className="row row-2">
          <div className="col-lg-12 column-1">
            <ul className="list-portfolio grid-lg-25 grid-tablet-50">
              {filteredPortfolioCollection.map((data) => {
                return (
                  <li key={data._id} className="grid-item">
                    <DelayedLink
                      to={`/portfolio-post/${data.slug}`}
                      className="link-portfolio link-portfolio-animation"
                      attributes={{
                        "data-aos": "d:loop",
                      }}
                    >
                      <div
                        className="container-img bg-blue"
                        data-cursor-style="view"
                      >
                        <div className="wrapper-img">
                          <img
                            src={data.image}
                            data-preload
                            className="media"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="container-text">
                        <ul className="list-tags-small">
                          <li className={"tag-small active"} >
                            <span>{data.marketCategory}</span>
                          </li>
                          {data.studioTags.map((tag, index) => (
                            <React.Fragment key={index}>
                              {index < 2 && (
                                <li className={"tag-small"}>
                                  <span>{tag}</span>
                                </li>
                              )}
                            </React.Fragment>
                          ))}
                          {data.studioTags.length > 2 ? (
                              <li className="tag-small">
                                <span>+{data.studioTags.length - 2} studios</span>
                              </li>
                            ) : null}
                        </ul>
                        <h2 className="title-portfolio">{data.title}</h2>
                      </div>
                    </DelayedLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            className="col-lg-2 offset-lg-5 flex-center mt-lg-60 mt-mobile-40"
            data-aos="fadeIn .8s ease-in-out .2s, d:loop"
          >
            <button className="btn-border-blue" data-cursor-style="off">
              <span>See more</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreWorkSection;
