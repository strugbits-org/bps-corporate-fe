import Footer from "./layout/footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "./layout/header/Navbar";
import Loading from "./common/Loading";
// import Chat from "./common/Chat";
import Cookies from "./common/Cookies";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAppConfig } from "./redux/reducers/appConfig";
import { fetchDreamBigSection, fetchHomeSectionDetails, fetchPeopleReviewSlider, fetchStudioSection } from "./redux/reducers/homeData";
import { getMarketCollection } from "./redux/reducers/marketData";
import { fetchContactUs } from "./redux/reducers/contatusData";
import { fetchFooterData, getSocialLinks } from "./redux/reducers/footerData";
import { getSocialSectionBlogs } from "./redux/reducers/blogData";

function App() {
  const dispatch = useDispatch();

  const location = useLocation();
  const pathname = location.pathname.trim() === "/" ? "home" : location.pathname.substring(1); // Remove leading slash
  const cleanPath = pathname.split("/")[0].trim();

  const config = useSelector((state) => state.config.config);

  useEffect(() => {
    dispatch(loadAppConfig());
    dispatch(fetchHomeSectionDetails());
    dispatch(fetchStudioSection());
    dispatch(getMarketCollection());
    dispatch(fetchPeopleReviewSlider());
    dispatch(fetchDreamBigSection());
    dispatch(fetchContactUs());
    dispatch(fetchFooterData());
    dispatch(getSocialLinks());
    dispatch(getSocialSectionBlogs());
  }, [dispatch]);

  return (
    <div>

      {/* helpers */}
      <span className="updateWatchedTrigger d-none"></span>
      <span className="triggerSplitWordAnimation d-none"></span>
      <Loading />
      <Cookies />
      <Navbar />
      <Helmet>
        <title>BluePrint Studios</title>
        <meta
          name="description"
          content="Events are crucial for enhancing brand awareness, offering exclusive
           chances to showcase ideas, products, and services intimately."
        />

        {config?.noFollow && <meta name="robots" content="noindex,nofollow" />}

        <meta name="format-detection" content="telephone=no" />
        <meta property="og:title" content="Blueprint" />
        <meta name="description" content="" />
        <meta property="og:description" content="" />
        <meta name="keywords" content="" />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta name="creator" content="Petrikór + Programatório" />
        <meta name="author" content="Blueprint" />
        <meta property="og:site_name" content="Blueprint" />
        <meta property="og:locale" content="en" />
        <link rel="canonical" href="" />
        <link rel="icon" type="image/png" href={process.env.PUBLIC_URL + "favicon.png"} />

        <script type="module" src={process.env.PUBLIC_URL + "/js/app2.js"}></script>
        <script type="module" src={process.env.PUBLIC_URL + "/js/search.js"}></script>
        <script type="module" src={process.env.PUBLIC_URL + "/js/forms.js"}></script>
        <script type="module" src={process.env.PUBLIC_URL + "/js/chat.js"}></script>
        {/* <script type="module" src={process.env.PUBLIC_URL + "/js/loader.js"}></script> */}
        <link rel="stylesheet" href={process.env.PUBLIC_URL + "/js/utils.css"} />
        <link rel="stylesheet" href={process.env.PUBLIC_URL + "/js/app.css"} />
      </Helmet>

      <div id="main-transition">
        <div id={`pg-${cleanPath}`} className="wrapper" data-scroll-container>
          <main>
            <Outlet />
            <Footer />
          </main>
        </div>
      </div>

      {/* <Chat /> */}
    </div>
  );
}

export default App;
