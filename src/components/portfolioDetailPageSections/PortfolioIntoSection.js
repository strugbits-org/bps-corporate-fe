import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioIntoSection = () => {
  return (
    <section className="portfolio-post-intro pb-lg-250">
    <div className="wrapper-banner-img" data-aos>
      <div className="container-img banner-img">
        <img
          src="images/lib/06_desktop.jpg"
          data-preload
          className="media"
          alt=""
          data-parallax-top
          data-translate-y="50%"
        />
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
                <span>Corporate</span>
              </div>
              <div className="column-1 column-portfolio">
                <h1 className="fs--80 fs-mobile-60 title-project">
                  Netflix Is a Joke: The Festival
                </h1>
                <div className="wrapper-tags-small mt-lg-25 mt-tablet-20 mt-mobile-30 mb-lg-75 mb-tablet-40 mb-phone-35">
                  <ul className="list-tags-small">
                    <li className="tag-small">
                      <span>Rental</span>
                    </li>
                    <li className="tag-small">
                      <span>Wedding</span>
                    </li>
                    <li className="tag-small">
                      <span>Floral Design</span>
                    </li>
                    <li className="tag-small">
                      <span>Printing</span>
                    </li>
                    <li className="tag-small">
                      <span>Design</span>
                    </li>
                  </ul>
                </div>

                <div className="container-text">
                  <h2 className="title">Components</h2>
                  <div className="wrapper-text">
                    <div className="text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Ut ultrices ipsum purus, at aliquam mauris
                        interdum nec.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="container-text">
                  <h2 className="title">The challenge</h2>
                  <div className="wrapper-text">
                    <div className="text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Ut ultrices ipsum purus, at aliquam mauris
                        interdum nec. Maecenas in pellentesque sapien, ut
                        sodales augue. Sed magna lacus, scelerisque quis dui
                        eu, tempus auctor nunc.
                      </p>
                      <p>
                        In pulvinar sapien id mi mattis pulvinar. Vivamus
                        lobortis nibh in blandit pulvinar. Morbi sagittis
                        justo vitae risus tristique condimentum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column-2 column-portfolio">
                <h3 className="fs--25 fs-phone-25 lh-140 mb-lg-20 mb-tablet-30 mb-mobile-10">
                  Events are crucial for enhancing brand awareness, offering
                  exclusive chances to showcase ideas, products, and
                  services intimately.
                </h3>

                <div className="container-text">
                  <h2 className="title">Highlight</h2>
                  <div className="wrapper-text">
                    <div className="text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Ut ultrices ipsum purus, at aliquam mauris
                        interdum nec. Maecenas in pellentesque sapien, ut
                        sodales augue.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="container-text container-read-more">
                  <h2 className="title">The solution</h2>
                  <div className="wrapper-text">
                    <div className="text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Ut ultrices ipsum purus, at aliquam mauris
                        interdum nec. Maecenas in pellentesque sapien, ut
                        sodales augue. Sed magna lacus, scelerisque quis dui
                        eu, tempus auctor nunc. In pulvinar sapien id mi
                        mattis pulvinar. Vivamus lobortis nibh in blandit
                        pulvinar. Morbi sagittis justo vitae risus tristique
                        condimentum. Pellentesque elementum convallis dui,
                        sed aliquet odio rhoncus sed. Cras bibendum orci a
                        turpis vulputate dictum. Suspendisse egestas enim
                        lacus, eget volutpat tellus vestibulum at.
                      </p>
                      <p>
                        Maecenas in pellentesque sapien, ut sodales augue.
                        Sed magna lacus, scelerisque quis dui eu, tempus
                        auctor nunc. In pulvinar sapien id mi mattis
                        pulvinar. Vivamus lobortis nibh in blandit pulvinar.
                        Morbi sagittis justo vitae risus tristique
                        condimentum. Pellentesque elementum convallis dui,
                        sed aliquet odio rhoncus sed. Cras bibendum orci a
                        turpis vulputate dictum. Suspendisse egestas enim
                        lacus, eget volutpat tellus vestibulum at.
                      </p>
                    </div>
                  </div>
                  <button className="btn-read-more">
                    <div className="btn-text">
                      <span className="read-more">Read More</span>
                      <span className="to-go-back">To go back</span>
                    </div>
                    <i className="icon-arrow-down"></i>
                  </button>
                </div>
              </div>

              <div className="column-3 column-portfolio no-mobile">
                <h4 className="fs--16">Share</h4>
                <ul className="list-share">
                  <li>
                    <Link
                      to="/"
                      data-cursor-style="off"
                      onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=portfolio-post','compartilhar', 'toolbar=0, status=0, width=650, height=450');"
                    >
                      <span>Facebook</span>
                      <i className="icon-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      data-cursor-style="off"
                      onclick="window.open('https://twitter.com/intent/tweet?text=Portfolio Post portfolio-post','compartilhar', 'toolbar=0, status=0, width=650, height=450');"
                    >
                      <span>X (Twitter)</span>
                      <i className="icon-x"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="mailto:?subject=Portfolio Post&body=portfolio-post"
                      data-cursor-style="off"
                    >
                      <span>email</span>
                      <i className="icon-mail"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="copy-link">
                      <span>Copy e-mail</span>
                      <i className="icon-link"></i>
                    </Link>
                    <input
                      type="text"
                      className="copy-link-url"
                      value="portfolio-post"
                      style={{ position: "absolute", opacity: 0 }}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default PortfolioIntoSection