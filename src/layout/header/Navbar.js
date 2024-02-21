import Services from "./models/Services";
import Market from "./models/Market";
import { Link } from "react-router-dom";
import ContactForm from "./models/ContactForm";
import Search from "./models/Search";

const Navbar = () => {
  return (
    <>
      <div className="cursor-wrapper" id="wrapper-cursor">
        <div>
          <span className="view text-wrapper">
            <span>view</span>
          </span>
        </div>
      </div>


      <header id="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 column-header">
              <div className="wrapper-header-mobile no-desktop">
                <Link
                  to="/"
                  className="logo"
                  data-pjax
                  aria-label="Blueprint"
                  data-menu-close
                >
                  <span>Blueprint</span>
                  <i className="icon-logo"></i>
                </Link>

                  <button id="bt-menu" aria-label="Menu" data-search-remove>
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 55 38.5"
                      style={{ enableBackground: "new 0 0 55 38.5" }}
                      xmlSpace="preserve"
                    >
                      <style>{`.st0 { fill: #0f41fa; }`}</style>
                      <g id="bt-menu-bars">
                        <rect
                          id="bottombar"
                          y="32.5"
                          className="st0"
                          width="55"
                          height="6"
                        />
                        <rect
                          id="middlebar"
                          y="16.4"
                          className="st0"
                          width="55"
                          height="6"
                        />
                        <rect
                          id="topbar"
                          className="st0"
                          width="55"
                          height="6"
                        />
                      </g>
                    </svg>
                  </button>
              </div>

              {/*  navbar start */}
              <nav className="menu" data-cursor-style="default">
                <div className="menu--wrapper">
                  <ul className="menu--list fs--header">
                    <li className="no-desktop">
                      <Link to="/" className="header-link" data-menu-close>
                        <span data-letter="Home">Home</span>
                      </Link>
                    </li>
                    <li>
                      <button
                        className="header-link btn-submenu"
                        data-set-submenu="services"
                      >
                        <span data-letter="Services">Services</span>
                        <i className="icon-arrow-down"></i>
                      </button>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="header-link"
                        data-menu-close
                        data-pg-active="pg-rental-store"
                      >
                        <span data-letter="Rental Store">Rental Store</span>
                      </Link>
                    </li>
                    <li>
                      <button
                        className="header-link btn-submenu"
                        data-set-submenu="market"
                      >
                        <span data-letter="Market">Market</span>
                        <i className="icon-arrow-down"></i>
                      </button>
                    </li>
                    <li>
                      <Link
                        to="/portfolio"
                        className="header-link"
                        data-menu-close
                        data-pg-active="pg-portfolio"
                      >
                        <span data-letter="Portfolio">Portfolio</span>
                      </Link>
                    </li>

                    <li className="no-mobile">
                      <Link
                        to="/"
                        className="logo"
                        data-pjax
                        aria-label="Blueprint"
                        data-menu-close
                      >
                        <span>Blueprint</span>
                        <i className="icon-logo"></i>
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/about"
                        className="header-link"
                        data-menu-close
                        data-pg-active="pg-about"
                      >
                        <span data-letter="About">About</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        className="header-link"
                        data-menu-close
                        data-pg-active="pg-blog"
                      >
                        <span data-letter="Blog">Blog</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className="header-link"
                        data-menu-close
                        data-pg-active="pg-contact"
                      >
                        <span data-letter="Contact">Contact</span>
                      </Link>
                    </li>
                    <li>
                      <button
                        className="header-link link-search no-mobile"
                        data-set-submenu="search"
                        data-search-remove
                      >
                        <i className="icon-search"></i>
                        <span data-letter="Search">Search</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </nav>
              {/* navbar end */}

              {/* services model component start */}
              <div
                className="submenu-services submenu"
                data-get-submenu="services"
              >
                <Services />
              </div>
              {/* services model component end */}

              {/* market model component start */}
              <div className="submenu-market submenu" data-get-submenu="market">
                <Market />
              </div>
              {/* market model component end */}

              {/* search model component start */}
              <section className="menu-search" data-get-submenu="search">
                <Search />
               
              </section>
              {/* search model component end */}

              {/* contactform model component start */}
              <modal-group name="modal-contact" data-cursor-style="default">
                <modal-container>
                  <modal-item>
                    <ContactForm />
                  </modal-item>
                </modal-container>
              </modal-group>
              {/* contactform model component end */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
