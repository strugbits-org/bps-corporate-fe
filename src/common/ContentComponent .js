const ContentComponent = ({ content, title, maxWords }) => {
  content = String(content);

  // Split the text into an array of words
  const words = content.split(" ");

  // Initialize an array to hold paragraphs
  const paragraphs = [];

  // Initialize a variable to hold the current paragraph
  let currentParagraph = "";

  // Iterate over each word
  words.forEach((word, index) => {
    // Add the word to the current paragraph
    currentParagraph += (currentParagraph ? " " : "") + word;

    if ((index + 1) % 60 === 0 || index === words.length - 1) {
      // Push the current paragraph to the paragraphs array
      paragraphs.push(currentParagraph);

      currentParagraph = "";
    }
  });
  const hideButton = words.length < maxWords;
  return (
    <div className="container-text container-read-more">
      <h2 className="title">{title}</h2>
      <div className="wrapper-text">
        <div className="text">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
     
        <button className={`btn-read-more ${hideButton ? "hidden" : ""}`}>
          <div className="btn-text">
            <span className="read-more">Read More</span>
            <span className="to-go-back">To go back</span>
          </div>
          <i className="icon-arrow-down"></i>
        </button>
   
    </div>
  );
};

export default ContentComponent;
