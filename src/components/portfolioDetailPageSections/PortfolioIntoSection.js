import ContentComponent from "../../common/ContentComponent ";
import { getFullImagePost } from "../../common/common_functions/imageURL";

import SocialVerticalBar from "../blogDetailPageSections/SocialVerticalBar";

const PortfolioIntoSection = ({ data }) => {
  const maxWords = 60;
  const coverImage = getFullImagePost(
    data?.portfolioRef?.coverImage?.imageInfo
  );
  const categories = data?.markets?.map((item) => item.cardname);
  const title = data?.portfolioRef?.title;
  const description = data?.portfolioRef?.description;
  const marketTags = data?.markets[0]?.marketTags;

  const componentObject = data?.portfolioRef?.details?.find(
    (item) => item.label === "COMPONENTS"
  );
  const highlightObject = data?.portfolioRef?.details?.find(
    (item) => item.label === "HIGHLIGHT"
  );

  const challengeObject = data?.portfolioRef?.details?.find(
    (item) => item.label === "THE CHALLENGE"
  );
  const solutionObject = data?.portfolioRef?.details?.find(
    (item) => item.label === "THE SOLUTION"
  );

  return (
    <section className="portfolio-post-intro pb-lg-250">
      <div className="wrapper-banner-img" data-aos>
        <div className="container-img banner-img">
          {coverImage && (
            <img
              src={coverImage}
              data-preload
              className="media"
              alt=""
              data-parallax-top
              data-translate-y="50%"
            />
          )}
        </div>
      </div>
      <div className="container-fluid pos-relative z-5">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div
              className="wrapper-portfolio"
              data-aos="trigger: .portfolio-post-intro"
            >
              <div className="row-portfolio">
                <div className="market-tag">
                  {categories && <span>{categories[0]}</span>}
                </div>
                <div className="column-1 column-portfolio">
                  <h1 className="fs--80 fs-mobile-60 title-project">{title}</h1>
                  <div className="wrapper-tags-small mt-lg-25 mt-tablet-20 mt-mobile-30 mb-lg-75 mb-tablet-40 mb-phone-35">
                    <ul className="list-tags-small">
                      {marketTags?.map((tag, index) => {
                        return (
                          <li key={index} className="tag-small">
                            <span>{tag}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {componentObject?.text &&
                    <ContentComponent content={componentObject?.text} title={componentObject?.label} maxWords={maxWords}
                    />
                  }


                  {challengeObject?.text && (
                    <ContentComponent
                      content={challengeObject?.text}
                      title={challengeObject?.label}
                      maxWords={maxWords}
                    />
                  )}

                </div>

                <div className="column-2 column-portfolio">
                  <h3 className="fs--25 fs-phone-25 lh-140 mb-lg-20 mb-tablet-30 mb-mobile-10">
                    {description}
                  </h3>

                  {highlightObject?.text && (
                    <ContentComponent
                      content={highlightObject?.text}
                      title={highlightObject?.label}
                      maxWords={maxWords}
                    />
                  )}

                  {solutionObject?.text && (
                    <ContentComponent
                      content={solutionObject?.text}
                      title={solutionObject?.label}
                      maxWords={maxWords}
                    />
                  )}
                </div>

                <div className="column-3 column-portfolio no-mobile">
                  <h4 className="fs--16">Share</h4>
                  <SocialVerticalBar title={title} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioIntoSection;
