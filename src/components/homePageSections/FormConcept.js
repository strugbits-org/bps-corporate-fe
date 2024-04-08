import React from "react";

const FormConcept = ({ items }) => {
  const forConceptData = items.map((item) => ({
    fromConcept1: item.data.text1,
    fromConcept2: item.data.text2
  }));
  return (
    <section className="home-from-concept-to-reality overflow-hidden">
      <div
        className="container-frame-by-frame"
        data-sticky
        data-trigger="parent"
      ></div>
      <div className="container-fluid">
        <div className="row">
          {forConceptData.map((data, id) => {
            return (
              <div key={id} className="col-lg-10 offset-lg-1 column-1">
                <h2
                  className="title"
                  data-sticky
                  data-trigger=".home-from-concept-to-reality"
                  data-start="38% bottom"
                  data-end="60% 100%"
                >
                  <div data-parallax data-translate-y="-35vh">
                    {data.fromConcept1}
                  </div>
                </h2>
                <h2
                  className="title text-right"
                  data-sticky
                  data-trigger=".home-from-concept-to-reality"
                  data-start="70% bottom"
                  data-end="bottom bottom"
                >
                  <div data-translate-y="-20vh" data-parallax>
                    {data.fromConcept2}
                  </div>
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FormConcept;
