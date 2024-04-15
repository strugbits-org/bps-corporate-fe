import { useSelector } from "react-redux";
import getFullImageURL from "../../common/common_functions/imageURL";
import parse from 'html-react-parser';

const HowWeDoSection = ({ data }) => {
  const { marketSectionDetails } = useSelector((state) => state.market);

  function convertToHTML(description) {
    if (typeof description === 'string') return description;

    let finalText = "";
    description.nodes.forEach((description) => {
      if (description.type === "PARAGRAPH") {
        if (description.nodes.length > 0) {
          description.nodes.forEach((node) => {
            if (node.type === "TEXT") {
              if (
                node.textData.decorations &&
                node.textData.decorations.findIndex(
                  (item) => item.type === "LINK"
                ) !== -1
              ) {
                let link = node.textData.decorations.find(
                  (item) => item.type === "LINK"
                ).linkData.link.url;
                finalText += `<a href="${link}">${node.textData.text}</a>`;
              } else {
                finalText += `<span>${node.textData.text}</span>`;
              }
            }
          });
        }else{
          finalText += `<br>`;
        }
      }
    });
    return finalText;
  }
  return (
    <section className="market-post-how-we-do-it pt-lg-270 pt-tablet-100 pt-phone-150">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 column-1">
            <h2 className="fs--60 text-center split-chars" data-aos="d:loop">
              {marketSectionDetails?.cardsSectionTitle}
            </h2>
            <ul className="list-how-we-do-it mt-lg-50 mt-mobile-40">
              {data?.howWeDoItSections.map((item, index) => {
                return (
                  <li key={index}>
                    <div className="list-column-img">
                      <div className="container-img" data-aos="d:loop">
                        <img
                          src={getFullImageURL(item.image)}
                          data-preload
                          className="media"
                          alt=""
                          data-parallax
                          data-scale-from="1.2"
                        />
                      </div>
                    </div>
                    <div className="list-column-text">
                      <h3
                        className="column-title split-words"
                        data-aos="d:loop"
                      >
                        {item.title}
                      </h3>
                      <p
                        className="column-paragraph"
                        data-aos="fadeInUp .6s ease-out-cubic .3s, d:loop"
                      >
                        {parse(convertToHTML(item.description))}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDoSection;