import React from 'react'
import {dataStudio, studioCard} from "../../common/constats/constats";

const StudioSection = () => {
  return (
    <section className="section-studios">
              <div className="container-fluid">
                <div className="row row-1">
                  <div className="col-lg-2 col-md-6">
                    <h2
                      className="fs--90 fs-tablet-40 blue-1 split-chars"
                      data-aos="d:loop"
                    >
                      {dataStudio.heading}
                    </h2>
                  </div>
                  <div className="col-lg-5 col-md-6 offset-lg-5 column-2">
                    <p
                      className="fs--40 fs-mobile-18 text"
                      data-aos="fadeIn .6s ease-in-out .4s, d:loop"
                    >
                     {dataStudio.paragraph}
                    </p>
                  </div>
                </div>

                <div className="row mt-lg-95 mt-tablet-45 mt-phone-40">
                  <div className="col-lg-12">
                    <ul className="accordion-list-studios" data-aos="d:loop">
                    {studioCard.map((data, index) => {
                return (
                  <li key={index} className="accordion-item">
                    <div className="accordion-header">
                      <h3
                        className="accordion-title split-words"
                        data-aos="d:loop"
                      >
                        {data.name}
                      </h3>
                    </div>
                    <div className="accordion-content">
                      <div className="container-img bg-blue">
                        <img src={data.img} data-preload className="media" alt="" />
                      </div>
                      <p className="accordion-text">
                       {data.desc}
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
  )
}

export default StudioSection